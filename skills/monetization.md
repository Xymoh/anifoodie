# SKILL: AdMob & RevenueCat

## AdMob
- Ad unit IDs always via `AppConfig.adMob.getBannerAdUnitId()` — never hard-coded
- Test vs production is picked automatically from env (`EXPO_PUBLIC_USE_TEST_ADS`)
- Always hide ads when `usePurchases().isSubscribed === true`
- New ad format: add IDs to `.env.example` → parse in `appConfig.ts` → add helper in `adMobConfig.ts`

## RevenueCat
- Entitlement ID: `"PetPlate Pro"` (must match dashboard exactly)
- API keys live in `PurchaseContext.tsx` — replace placeholders before release
- Show paywall: `usePurchases().showPaywall()` (always) or `showPaywallIfNeeded()` (only if not subscribed)
- Both return `true` if purchase/restore succeeded

## Dev override (dev builds only)
- Toggle in Settings → Developer Menu, or enter code `anifoodie2026`
- Controlled by `PremiumOverride` in `devFeatures.ts`; completely disabled in production

## Pre-release checklist
- [ ] RevenueCat API keys replaced (no placeholder strings)
- [ ] `EXPO_PUBLIC_USE_TEST_ADS=false` in `.env.production`
- [ ] `EXPO_PUBLIC_ENABLE_DEV_FEATURES=false` in `.env.production`
- [ ] Real AdMob ad unit IDs in `.env.production`
