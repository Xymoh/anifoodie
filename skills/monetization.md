# SKILL: Monetisation — AdMob & RevenueCat

Use this guide whenever you work with ads (Google AdMob) or in-app purchases (RevenueCat).

---

## Architecture at a Glance

```
App.tsx
└── initializeAdMob()              ← AdMob SDK init (once on startup)

AppNavigator.tsx
└── <PurchaseProvider>             ← RevenueCat SDK init + subscription state
    └── <AdProvider>               ← Ad state / request tracking
        └── <FavoritesProvider>
            └── <NavigationContainer>
                └── TabNavigator
                    └── {!isSubscribed && <AdMobBanner />}   ← hidden for Pro users
```

---

## AdMob

### How ad unit IDs are resolved

```
.env.development / .env.production
        ↓
src/config/appConfig.ts  (AppConfig.adMob)
        ↓
src/utils/adMobConfig.ts  getBannerAdUnitId()
        ↓
src/components/AdMobBanner.tsx
```

Never hard-code ad unit IDs. Always call `getBannerAdUnitId()` or `AppConfig.adMob.getBannerAdUnitId()`.

### Adding a new ad format (e.g. interstitial)

1. Add the new ad unit IDs to `.env.example`:
   ```
   EXPO_PUBLIC_ADMOB_ANDROID_INTERSTITIAL_ID=ca-app-pub-...
   EXPO_PUBLIC_ADMOB_IOS_INTERSTITIAL_ID=ca-app-pub-...
   EXPO_PUBLIC_ADMOB_TEST_ANDROID_INTERSTITIAL=ca-app-pub-3940256099942544/1033173712
   EXPO_PUBLIC_ADMOB_TEST_IOS_INTERSTITIAL=ca-app-pub-3940256099942544/4411468910
   ```
2. Parse them in `appConfig.ts` following the same pattern as banner IDs.
3. Export a `getInterstitialAdUnitId()` helper from `adMobConfig.ts`.
4. Create `src/components/AdMobInterstitial.tsx` (or a hook `useInterstitialAd.ts`).
5. Guard with `!isSubscribed` from `usePurchases()`.

### Child-directed content settings

AdMob is configured with `tagForChildDirectedTreatment: true` and `tagForUnderAgeOfConsent: true`. Do not remove these — the app targets a broad audience that may include children.

---

## RevenueCat

### Entitlement

The single entitlement is `"PetPlate Pro"` (defined as `ENTITLEMENT_ID` in `PurchaseContext.tsx`). This string must match the RevenueCat dashboard **exactly**.

### Platform API keys

Keys are stored directly in `PurchaseContext.tsx` (not in `.env`) because RevenueCat public keys are not secret — they are embedded in the binary on both platforms. Replace the placeholder strings before first production release:

```ts
const REVENUECAT_API_KEY = Platform.select({
  android: 'goog_YOUR_GOOGLE_PLAY_KEY_HERE',   // RevenueCat Dashboard → API Keys → Public Google Play
  ios:     'appl_YOUR_IOS_KEY_HERE',            // RevenueCat Dashboard → API Keys → Public Apple App Store
}) || 'test_fallback_key';
```

### Checking subscription status

```ts
import { usePurchases } from '../context/PurchaseContext';

const { isSubscribed, isPro } = usePurchases();
```

`isSubscribed` and `isPro` are equivalent — both are `true` when the user has an active `"PetPlate Pro"` entitlement. Use `isSubscribed` for ad-gating; use `isPro` for feature-gating.

### Presenting the paywall

```ts
const { showPaywall, showPaywallIfNeeded } = usePurchases();

// Always show the paywall UI
await showPaywall();

// Show only if the user is not already subscribed
await showPaywallIfNeeded();
```

Both functions return `true` if a purchase or restore was completed.

### Dev premium override (development only)

In development builds, you can bypass RevenueCat to test Pro-only UI:

1. Go to **Settings → Developer Menu → Premium Override**.
2. Toggle premium on/off — persists across restarts.
3. Alternatively, enter the secret code `anifoodie2026` in the developer menu code input.

The override is **completely disabled** in production (`ENABLE_DEV_FEATURES === false`).

### Adding a new gated feature

```tsx
import { usePurchases } from '../context/PurchaseContext';

const MyFeatureScreen = () => {
  const { isSubscribed, showPaywall } = usePurchases();

  if (!isSubscribed) {
    return (
      <TouchableOpacity onPress={showPaywall}>
        <Text>Unlock with Pro</Text>
      </TouchableOpacity>
    );
  }

  return <ActualFeature />;
};
```

---

## Environment file reference

| Variable | Dev value | Prod value |
|---|---|---|
| `EXPO_PUBLIC_USE_TEST_ADS` | `true` | `false` |
| `EXPO_PUBLIC_ENABLE_DEV_FEATURES` | `true` | `false` |
| `EXPO_PUBLIC_ENABLE_PREMIUM_OVERRIDE` | `true` | `false` |
| `EXPO_PUBLIC_ADMOB_ANDROID_APP_ID` | (real ID, in `.env.development`) | same |
| `EXPO_PUBLIC_ADMOB_IOS_APP_ID` | (real ID) | same |
| `EXPO_PUBLIC_ADMOB_ANDROID_BANNER_ID` | (real ID) | same |
| `EXPO_PUBLIC_ADMOB_IOS_BANNER_ID` | (real ID) | same |
| `EXPO_PUBLIC_ADMOB_TEST_ANDROID_BANNER` | Google test ID | (unused in prod) |
| `EXPO_PUBLIC_ADMOB_TEST_IOS_BANNER` | Google test ID | (unused in prod) |

---

## Checklist — Before Release

- [ ] RevenueCat API keys replaced (no placeholder strings in `PurchaseContext.tsx`)
- [ ] `EXPO_PUBLIC_USE_TEST_ADS=false` in `.env.production`
- [ ] `EXPO_PUBLIC_ENABLE_DEV_FEATURES=false` in `.env.production`
- [ ] `EXPO_PUBLIC_ENABLE_PREMIUM_OVERRIDE=false` in `.env.production`
- [ ] Real AdMob ad unit IDs populated in `.env.production`
- [ ] AdMob app IDs match `app.json` plugin config
