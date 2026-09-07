import { useEffect, useState } from "react";

import { AppConfig } from "../config/appConfig";

// The native module is loaded lazily so the JS still runs in environments
// without it (for example Expo Go). In dev-client and store builds it is present.
let mobileAds: any = null;
let AdsConsent: any = null;
let MaxAdContentRating: any = null;
let AdsConsentPrivacyOptionsRequirementStatus: any = null;

try {
  const gma = require("react-native-google-mobile-ads");
  mobileAds = gma.default;
  AdsConsent = gma.AdsConsent;
  MaxAdContentRating = gma.MaxAdContentRating;
  AdsConsentPrivacyOptionsRequirementStatus =
    gma.AdsConsentPrivacyOptionsRequirementStatus;
} catch (error) {
  console.log("Google Mobile Ads not available in this environment");
}

export interface AdsState {
  /** SDK start-up finished (successfully or not). */
  initialized: boolean;
  /** Consent state allows ad requests (always true outside GDPR regions). */
  canRequestAds: boolean;
  /** Google requires us to offer a "privacy options" entry point (EEA/UK). */
  privacyOptionsRequired: boolean;
}

let state: AdsState = {
  initialized: false,
  canRequestAds: false,
  privacyOptionsRequired: false,
};
const listeners = new Set<(next: AdsState) => void>();
let initPromise: Promise<AdsState> | null = null;

const setState = (patch: Partial<AdsState>) => {
  state = { ...state, ...patch };
  listeners.forEach((listener) => listener(state));
};

export const getAdsState = (): AdsState => state;

export const subscribeToAdsState = (listener: (next: AdsState) => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const REQUIRED = AdsConsentPrivacyOptionsRequirementStatus?.REQUIRED ?? "REQUIRED";

const toConsentState = (info: any) => ({
  canRequestAds: Boolean(info?.canRequestAds),
  privacyOptionsRequired: info?.privacyOptionsRequirementStatus === REQUIRED,
});

/**
 * Runs Google's User Messaging Platform flow. For users in the EEA/UK this
 * shows the GDPR consent form configured in AdMob → Privacy & messaging.
 * Elsewhere it resolves immediately with canRequestAds = true.
 */
const gatherConsent = async () => {
  if (!AdsConsent) {
    return { canRequestAds: true, privacyOptionsRequired: false };
  }

  try {
    const info = await AdsConsent.gatherConsent();
    return toConsentState(info);
  } catch (error) {
    console.warn("Ad consent gathering failed:", error);
    // Google's guidance: on error, still request ads if an earlier consent allows it.
    try {
      const info = await AdsConsent.getConsentInfo();
      return toConsentState(info);
    } catch {
      return { canRequestAds: false, privacyOptionsRequired: false };
    }
  }
};

/**
 * Initialize the Mobile Ads SDK. Safe to call more than once; the first call wins.
 * Order matters: gather consent → configure → initialize → (banners load).
 */
export const initializeAdMob = (): Promise<AdsState> => {
  if (initPromise) return initPromise;

  initPromise = (async () => {
    if (!mobileAds) {
      console.log("AdMob not available - skipping initialization");
      setState({ initialized: true, canRequestAds: false });
      return state;
    }

    try {
      const consent = await gatherConsent();

      await mobileAds().setRequestConfiguration({
        // Keep ad creatives suitable for a general audience (parental guidance).
        maxAdContentRating: MaxAdContentRating?.PG ?? "PG",
        testDeviceIdentifiers: __DEV__ ? ["EMULATOR"] : [],
      });

      await mobileAds().initialize();

      setState({ initialized: true, ...consent });
      console.log(
        `AdMob initialized (canRequestAds=${consent.canRequestAds}, privacyOptionsRequired=${consent.privacyOptionsRequired})`,
      );
    } catch (error) {
      console.error("Failed to initialize AdMob:", error);
      setState({ initialized: true, canRequestAds: false });
    }

    return state;
  })();

  return initPromise;
};

/**
 * Re-open the consent form so EEA users can change their choice.
 * Only meaningful when `privacyOptionsRequired` is true.
 */
export const showAdPrivacyOptions = async (): Promise<void> => {
  if (!AdsConsent) return;
  try {
    await AdsConsent.showPrivacyOptionsForm();
    const info = await AdsConsent.getConsentInfo();
    setState(toConsentState(info));
  } catch (error) {
    console.warn("Failed to show ad privacy options:", error);
  }
};

/** React hook mirroring the module-level ads state. */
export const useAdsState = (): AdsState => {
  const [current, setCurrent] = useState<AdsState>(state);
  useEffect(() => subscribeToAdsState(setCurrent), []);
  return current;
};

/**
 * Get Banner Ad Unit ID for the current platform.
 * @param useTestAds Optional override. Defaults to the value from the .env file.
 */
export const getBannerAdUnitId = (useTestAds?: boolean): string => {
  return AppConfig.adMob.getBannerAdUnitId(useTestAds);
};
