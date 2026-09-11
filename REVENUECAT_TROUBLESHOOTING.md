# RevenueCat Troubleshooting Decision Tree

## Quick Problem Solver

### ❓ PROBLEM: App shows "No offerings available"

```
Did you update .env with your API key?
│
├─ NO → Add to .env: EXPO_PUBLIC_REVENUECAT_ANDROID_KEY=goog_YOUR_KEY
│       Run: npm run prebuild:clean && npm run android
│       ✅ Problem solved?
│
└─ YES → Is the key in the right format?
         │
         ├─ NO (shows "goog_YOUR_ANDROID_KEY") → Get real key from RevenueCat Dashboard
         │  ✅ Problem solved?
         │
         └─ YES → Did you rebuild after changing .env?
                  │
                  ├─ NO → Run: npm run prebuild:clean && npm run android
                  │       ✅ Problem solved?
                  │
                  └─ YES → Check RevenueCat Dashboard
                           │
                           ├─ Are Google Play products synced?
                           │  Go to: Offerings → See your products?
                           │
                           ├─ YES → Are they linked to entitlement "pro"?
                           │        │
                           │        ├─ NO → Edit packages → Link to "pro" → Publish
                           │        │  ✅ Problem solved?
                           │        │
                           │        └─ YES → Is offering published (not Draft)?
                           │               │
                           │               ├─ NO → Click "Go Live" button
                           │               │  ✅ Problem solved?
                           │               │
                           │               └─ YES → Wait 5 minutes, refresh app
                           │                      ✅ Problem solved?
                           │
                           └─ NO → Check Google Play sync
                                  Go to: Integrations → Google Play
                                  See green checkmark (connected)?
                                  │
                                  ├─ NO → Upload JSON service account key
                                  │       Wait 3 minutes
                                  │       ✅ Problem solved?
                                  │
                                  └─ YES → Click "Sync" button
                                           Wait 3 minutes
                                           ✅ Problem solved?
```

---

### ❓ PROBLEM: PaywallScreen shows loading forever

```
Is your device connected to internet?
│
├─ NO → Connect to WiFi
│       ✅ Problem solved?
│
└─ YES → Check console logs while app loads
         │
         ├─ Error about API key?
         │  │
         │  ├─ YES → See "No offerings available" troubleshooting above
         │  │
         │  └─ NO → Check for network errors
         │          ├─ Network timeout?
         │          │  Try: Kill app → Relaunch app
         │          │  ✅ Problem solved?
         │          │
         │          └─ Other error? → See console for specific error code
         │                         → Search that error on RevenueCat docs
         │
         └─ No errors? → Might be normal loading
                        Let it load for 10 seconds
                        ✅ Problem solved?
```

---

### ❓ PROBLEM: "Purchase error" when tapping a package

```
What error message?
│
├─ "Billing unavailable"
│  │
│  ├─ Are you using a TEST account?
│  │  │
│  │  ├─ YES → Is it added to License test accounts in Google Play?
│  │  │       Settings → License test accounts → Verify your email listed
│  │  │       │
│  │  │       ├─ NO → Add your email to License test accounts
│  │  │       │       ✅ Problem solved?
│  │  │       │
│  │  │       └─ YES → Is it also added to Internal testing testers?
│  │  │              Release → Internal testing → Manage testers → Add email
│  │  │              ✅ Problem solved?
│  │  │
│  │  └─ NO → Use a Google account that's in License test accounts
│  │         ✅ Problem solved?
│  │
│  └─ Check if product is Active
│     Go to: Monetization → In-app products
│     Status shows "Active"?
│     │
│     ├─ NO → Wait 1-2 hours for activation
│     │       ✅ Problem solved?
│     │
│     └─ YES → Try restarting device
│               Kill Play Store app → Restart phone
│               ✅ Problem solved?
│
├─ "Product not found"
│  │
│  └─ Means app doesn't see the product from Google Play
│     │
│     ├─ Did you create it in Google Play?
│     │  Monetization → In-app products → See your product?
│     │  │
│     │  ├─ NO → Create it with ID: petplate_pro_monthly (or other)
│     │  │       ✅ Problem solved?
│     │  │
│     │  └─ YES → Did RevenueCat sync it?
│     │          Dashboard → Offerings → See your product in packages?
│     │          │
│     │          ├─ NO → Go to Integrations → Google Play → Click "Sync"
│     │          │       Wait 3 minutes
│     │          │       ✅ Problem solved?
│     │          │
│     │          └─ YES → Make sure offering is published
│     │                  Not in Draft state
│     │                  ✅ Problem solved?
│     │
│     └─ Make sure package ID matches exactly
│        (No extra spaces or typos)
│
├─ "Purchase pending" or timeout
│  │
│  └─ Usually temporary network issue
│     Solution: Try purchase again after 30 seconds
│     ✅ Problem solved?
│
└─ Other error
   │
   └─ Note the exact error message
      Search it on RevenueCat docs or Google
      Or ask RevenueCat support with the error code
```

---

### ❓ PROBLEM: Purchase succeeded but "No pro access"

```
Check the logs - what does it say?
│
├─ "ℹ️ User is on free tier" (after purchase)
│  │
│  └─ Entitlement not granted after purchase
│     │
│     ├─ Check: Is entitlement ID correct?
│     │         In code: const ENTITLEMENT_ID = "pro"
│     │         In RevenueCat: Entitlements → Should have "pro"
│     │         │
│     │         ├─ NO → Create entitlement called "pro"
│     │         │       ✅ Problem solved?
│     │         │
│     │         └─ YES → Is it linked to the package user purchased?
│     │                 Go to: Offerings → Edit → Each package should link to "pro"
│     │                 │
│     │                 ├─ NO → Edit package → Set entitlement to "pro" → Publish
│     │                 │       ✅ Problem solved?
│     │                 │
│     │                 └─ YES → Check if package is published
│     │                         Not in Draft?
│     │                         ✅ Problem solved?
│     │
│     └─ Try "Restore Purchases" button
│        Sometimes it takes time to sync
│        ✅ Problem solved?
│
└─ No log message about entitlement
   │
   └─ Check if updateCustomerInformation() was called
      Should see "✅ User has Pro access" or "ℹ️ User is on free tier"
      If neither appears:
      │
      ├─ Check network connection
      ├─ Check RevenueCat SDK is initialized
      ├─ Check no errors in console
      │
      └─ Try restarting app
         ✅ Problem solved?
```

---

### ❓ PROBLEM: "Restore Purchases" button doesn't work

```
What happens?
│
├─ Nothing happens (button is unresponsive)
│  │
│  └─ Check if PaywallScreen is loading
│     If isLoading = true, buttons are disabled
│     Wait for loading to finish
│     ✅ Problem solved?
│
├─ Shows "No Purchases Found" alert
│  │
│  └─ Means you don't have any previous purchases on this account
│     This is normal if you haven't purchased before on this account
│     Try making a purchase, then try restore
│     ✅ Problem solved?
│
├─ Shows error message
│  │
│  └─ Check console for error details
│     Might be network issue:
│     ├─ Check internet connection
│     ├─ Try again after 30 seconds
│     │
│     └─ If persists, check RevenueCat status:
│        https://status.revenuecat.com
│        ✅ Problem solved?
│
└─ Shows "Restore Successful" but no pro access
   │
   └─ Same as "Purchase succeeded but no pro access"
      See that section above
```

---

### ❓ PROBLEM: App crashes when opening Paywall

```
Check crash log - what's the error?
│
├─ "offerings is null" error
│  │
│  └─ RevenueCat hasn't fetched offerings yet
│     Usually happens if you tap paywall too quickly after app launch
│     Solution: Wait 2-3 seconds before tapping paywall
│     Or: PaywallScreen already handles this - check isLoading state
│     ✅ Problem solved?
│
├─ "Cannot read property 'availablePackages'"
│  │
│  └─ offerings or current is null
│     Same as above - offerings not loaded yet
│
├─ "ReferenceError: Purchases is not defined"
│  │
│  └─ RevenueCat SDK not imported properly
│     Check: import Purchases from 'react-native-purchases'
│     at top of PurchaseContext.tsx
│     ✅ Problem solved?
│
└─ Other crash
   │
   └─ Check full error message
      Note the line number
      Look at that line in PaywallScreen.tsx
      Check for null/undefined issues
```

---

### ❓ PROBLEM: Offerings load but prices are wrong

```
What do prices show?
│
├─ $0.00 or no price
│  │
│  └─ Product might not have price set in Google Play
│     Go to: Monetization → In-app products → Edit product
│     Check: Price is set for your country/region
│     │
│     ├─ NO → Set a price
│     │       ✅ Problem solved?
│     │
│     └─ YES → Might take time to propagate
│              Wait 5-10 minutes
│              Refresh app
│              ✅ Problem solved?
│
├─ Generic price (no currency symbol)
│  │
│  └─ Might be display issue
│     Check: product.priceString includes currency?
│     Example: "$4.99" not just "4.99"
│     If not, might be RevenueCat/Google Play formatting
│     This is usually fine - will show correctly to users
│
└─ Price from different region
   │
   └─ Make sure you're testing in the right region
      Check: Device locale/region matches your app's region
      Or: Check if you set prices for multiple regions
          Some products might have regional prices
```

---

### ❓ PROBLEM: App built, but can't test (can't install APK)

```
What's the error?
│
├─ "App not installed" error
│  │
│  └─ APK might be incompatible with device architecture
│     Check: Your device is ARM64 or ARM?
│     Try: Build with: eas build --platform android --profile preview
│     This should auto-detect right architecture
│     ✅ Problem solved?
│
├─ "Permission denied" error
│  │
│  └─ Device won't allow installation
│     Check device Settings:
│     Settings → Security → Unknown sources → Enable
│     ✅ Problem solved?
│
└─ "Insufficient storage" error
   │
   └─ Device doesn't have enough space
      Free up space on device (delete some apps/files)
      ✅ Problem solved?
```

---

## Still Not Working?

If you've gone through the tree and still have issues:

1. **Collect information:**
   - Full error message from console
   - Screenshot of issue
   - What RevenueCat shows (offerings, entitlements, packages)
   - What Google Play shows (products, status)

2. **Check these resources:**
   - RevenueCat Docs: https://docs.revenuecat.com
   - RevenueCat Support: https://www.revenuecat.com/support
   - Google Play Billing: https://developer.android.com/google/play/billing
   - Firebase/Android Docs: https://firebase.google.com

3. **Common mistakes to review:**
   - API key not set or wrong format
   - Didn't rebuild after changing .env
   - Entitlement ID doesn't match between code and RevenueCat
   - Google Play products not linked to offerings
   - Test account not added to License test accounts
   - Using regular Gmail account instead of test account
   - Product status is "Inactive" or "Pending" instead of "Active"

4. **Last resort:**
   - Post on StackOverflow with tag `react-native-purchases`
   - Post on RevenueCat community forum
   - Contact RevenueCat support with full error details
