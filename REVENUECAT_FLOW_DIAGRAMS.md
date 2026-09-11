# RevenueCat Payment Flow Diagram

## Complete Payment Setup Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                    YOUR APP - PetPlate                              │
│                                                                       │
│  App.tsx                                                            │
│    ↓                                                                │
│  PurchaseProvider (wraps your app)                                 │
│    ↓                                                                │
│  initializePurchases() called on app load                          │
│    ↓                                                                │
│  Purchases.configure({ apiKey: REVENUECAT_API_KEY })             │
│    ↓                                                                │
│  Purchases.getOfferings() - fetches from RevenueCat               │
│    ↓                                                                │
│  setOfferings(offerings) - stores in state                        │
│    ↓                                                                │
│  User navigates to PaywallScreen                                  │
│    ↓                                                                │
│  PaywallScreen displays offerings.availablePackages              │
└─────────────────────────────────────────────────────────────────────┘
                                  ↑
                                  │
                    ┌─────────────┴──────────────┐
                    │                            │
        ┌───────────▼──────────┐     ┌──────────▼────────────┐
        │  RevenueCat SDK      │     │  RevenueCat Backend   │
        │  (NPM Package)       │     │  (Cloud)              │
        │                      │     │                       │
        │  configure()         │     │  - Stores products    │
        │  getOfferings()      │────→│  - Manages offerings  │
        │  purchasePackage()   │     │  - Tracks users       │
        │  restorePurchases()  │     │  - Grants entitle.    │
        └──────────────────────┘     └──────────┬────────────┘
                                                 │
                                                 ↓
                                    ┌────────────────────────┐
                                    │   Google Play Console  │
                                    │   (Android Backend)    │
                                    │                        │
                                    │  - Products:           │
                                    │    • monthly           │
                                    │    • annual            │
                                    │    • lifetime          │
                                    │                        │
                                    │  - Handles billing     │
                                    │  - Processes payments  │
                                    │  - Updates entitle.    │
                                    └────────────────────────┘


```

## User Purchase Flow

```
User Opens App
    ↓
RevenueCat loads offerings from Google Play
    ↓
PaywallScreen shows 3 options:
    • $4.99/month
    • $39.99/year
    • $19.99 lifetime
    ↓
User taps a package
    ↓
Purchases.purchasePackage(selectedPackage) called
    ↓
Google Play Billing Dialog appears
    ↓
User selects payment method & confirms
    ↓
Google Play charges payment (or free on test account)
    ↓
RevenueCat notified of successful purchase
    ↓
RevenueCat grants entitlement "pro" to user
    ↓
Your app calls updateCustomerInformation()
    ↓
Checks if entitlements.active["pro"] exists
    ↓
YES → setIsPro(true) → PaywallScreen closes
NO → Show error alert


```

## Configuration Setup Flow (One-Time)

```
┌──────────────────────────────┐
│  1. Google Play Console      │
│                              │
│  Create in-app products:     │
│  • petplate_pro_monthly      │
│  • petplate_pro_annual       │
│  • petplate_pro_lifetime     │
│                              │
│  Create service account      │
│  Download JSON key           │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│  2. RevenueCat Dashboard     │
│                              │
│  Upload JSON key             │
│  Google Play syncs products  │
│                              │
│  Create Entitlement "pro"    │
│                              │
│  Create Offering with:       │
│  • 3 packages (from G.Play)  │
│  • linked to "pro" entitle.  │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│  3. Get Your API Key         │
│                              │
│  Copy Android SDK API Key:   │
│  goog_XXXXXXXXXXXXXXXX       │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│  4. Update Your App          │
│                              │
│  Add to .env file:           │
│  EXPO_PUBLIC_REVENUECAT_     │
│    ANDROID_KEY=goog_XXX      │
│                              │
│  Rebuild app                 │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│  5. Test in Closed Testing   │
│                              │
│  Create internal release     │
│  Add test account            │
│  Install & verify            │
└──────────────────────────────┘


```

## Data Flow (State Management)

```
┌─ PurchaseContext ─────────────────────────────────────────┐
│                                                             │
│  State Variables:                                          │
│  • isLoading: boolean                                      │
│  • offerings: PurchasesOffering | null                     │
│  • isPro: boolean                                          │
│  • isSubscribed: boolean                                   │
│  • customerInfo: CustomerInfo | null                       │
│                                                             │
│  Methods:                                                  │
│  • purchasePackage(pkg) → Promise<boolean>                │
│  • restorePurchases() → Promise<boolean>                  │
│  • showPaywall() → Promise<boolean>                       │
│  • updateCustomerInformation(info) → void                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
         ↑                                      ↓
         │                                      │
    Consumed by:                           Updates from:
    • PaywallScreen                        • Purchases.configure()
    • Any component via                    • Purchases.getOfferings()
      usePurchases() hook                  • Purchases.getCustomerInfo()
    • Navigation logic                     • Purchases.purchasePackage()
    • Ad display logic                     • Purchases.restorePurchases()


```

## Entitlement System

```
Google Play Product
│
├─ petplate_pro_monthly
│  ├─ Price: $4.99
│  └─ Synced to RevenueCat
│
├─ petplate_pro_annual
│  ├─ Price: $39.99
│  └─ Synced to RevenueCat
│
└─ petplate_pro_lifetime
   ├─ Price: $19.99
   └─ Synced to RevenueCat
        ↓
   RevenueCat Product
        ↓
   Offering "default"
   └─ 3 Packages (all above)
      └─ All grant Entitlement "pro"
           ↓
      User Entitlements
      • active["pro"] = true
           ↓
      Your App Logic
      • if (isPro) → show premium features
      • else → show ads


```

## Environment Variable Flow

```
.env (local - your actual keys)
├─ EXPO_PUBLIC_REVENUECAT_ANDROID_KEY=goog_actual_key ✓ COMMIT TO .gitignore
└─ (don't commit this)
     ↓
     ├─ Build Time
     │  └─ Expo bundler reads .env
     │     └─ Replaces process.env.EXPO_PUBLIC_* variables
     │        └─ Embedded in built APK
     ↓
App Runtime
├─ PurchaseContext.tsx
│  └─ const REVENUECAT_API_KEY =
│     process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY
│     └─ "goog_actual_key"
│        └─ Used to configure Purchases SDK
           └─ SDK connects to RevenueCat
              └─ RevenueCat connects to Google Play


.env.example (placeholders - SAFE TO COMMIT)
└─ EXPO_PUBLIC_REVENUECAT_ANDROID_KEY=goog_XXXXXXXXXXXXXXXX

.env.production (placeholders - SAFE TO COMMIT)
└─ EXPO_PUBLIC_REVENUECAT_ANDROID_KEY=goog_XXXXXXXXXXXXXXXX


```

## Error Handling Flow

```
initializePurchases()
├─ Try: Purchases.configure()
│  ├─ Success → log "✅ RevenueCat configured"
│  └─ Error → log "❌ Error initializing" → return
│
├─ Try: Purchases.getOfferings()
│  ├─ Success & packages found → setOfferings()
│  ├─ Success but no packages → log "⚠️ No offerings"
│  └─ Error → log "❌ Error fetching offerings"
│
└─ Finally: setIsLoading(false)

User taps Purchase
├─ Try: Purchases.purchasePackage()
│  ├─ Success → updateCustomerInformation()
│  │  ├─ Check entitlements → setIsPro(true)
│  │  ├─ Show "✅ Purchase successful!"
│  │  └─ Return true
│  ├─ User cancelled → log & return false
│  └─ Other error → log & show alert
│
└─ Return boolean (success/failure)


```

---

## Summary

1. **Setup Phase:** Create products → Link to RevenueCat → Add API key → Rebuild
2. **Load Phase:** App starts → RevenueCat fetches offerings → Display paywall
3. **Purchase Phase:** User taps package → Google Billing → Payment processed → Entitlements granted
4. **Premium Access:** App checks entitlements → Unlocks premium features
