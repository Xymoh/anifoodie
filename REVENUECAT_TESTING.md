# RevenueCat Integration Testing & Verification

## Verify Your Setup is Working

### Step 1: Check RevenueCat Configuration

Open `src/context/PurchaseContext.tsx` and verify:

```tsx
// Should read from environment variables
const REVENUECAT_API_KEY =
  Platform.select({
    android:
      process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY || "goog_YOUR_ANDROID_KEY",
    ios: process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY || "appl_YOUR_IOS_KEY",
  }) || "goog_YOUR_ANDROID_KEY";

// Entitlement ID
const ENTITLEMENT_ID = "pro"; // ✅ Should be "pro" (lowercase)
```

### Step 2: Check Environment Variables

Your `.env` file should have:

```bash
EXPO_PUBLIC_REVENUECAT_ANDROID_KEY=goog_YOUR_ACTUAL_KEY_HERE
```

**Note**: Don't modify `.env.example` or `.env.production` - those are for reference.

### Step 3: Rebuild and Run

```bash
# Clean rebuild to ensure new environment variables are picked up
npm run prebuild:clean

# Run on Android
npm run android
```

### Step 4: Monitor Console Logs

When the app starts, you should see logs like:

```
✅ RevenueCat SDK configured successfully
✅ Offerings loaded: X package(s)
```

Or if there's an error:

```
❌ Error initializing RevenueCat: [error details]
⚠️ No offerings available
```

### Step 5: Test the Paywall

1. Navigate to the Paywall screen in your app
2. **Expected behavior:**
   - You should see at least one purchase package
   - Price should display from Google Play
   - "Best Value" badge should appear for lifetime package (if applicable)

### Step 6: Test a Purchase

On an internal testing build with a test account:

1. Tap a package
2. Google Play Billing dialog appears
3. Tap "Buy" (test accounts don't charge)
4. Success alert appears
5. Paywall closes or updates

---

## Debugging Checklist

### ❌ "No offerings available" Error

**Debug steps:**

1. **Check the API key:**

   ```bash
   # In your .env file:
   echo $EXPO_PUBLIC_REVENUECAT_ANDROID_KEY

   # Should output: goog_XXXXXXXXXXXXXXXX (not "goog_YOUR_ANDROID_KEY")
   ```

2. **Check RevenueCat Dashboard:**
   - Go to **Project Settings** → **API Keys** → **Android**
   - Copy the full key again
   - Paste into `.env` file
   - Rebuild: `npm run prebuild:clean && npm run android`

3. **Check Google Play Sync:**
   - RevenueCat Dashboard → **Integrations** → **Google Play**
   - Look for green checkmark (connected)
   - If not connected, upload service account JSON again
   - Wait 2-3 minutes for products to sync

4. **Check Offerings:**
   - RevenueCat Dashboard → **Offerings**
   - Is your offering published (not Draft)?
   - Do the packages have products linked?
   - Are they linked to the `pro` entitlement?

### ❌ "Purchase error" or Billing unavailable

**Debug steps:**

1. **On test device:**
   - Sign in with your test Google account
   - Go to Play Store app → your account → Tap your profile icon → Manage your Google Play account
   - Payments and subscriptions → License test accounts → Verify your email is listed

2. **Check test account status:**
   - Google Play Console → Settings → License test accounts
   - Verify your email is there
   - Go to Internal testing → Manage testers
   - Verify your email is added there too

3. **Check product status:**
   - Google Play Console → Monetization setup → In-app products
   - All products should show "Active" status
   - If "Inactive" or "Pending activation", wait a few hours

### ❌ "Entitlement not granted after purchase"

**This means the purchase succeeded but app doesn't recognize premium access.**

**Debug steps:**

1. **Verify entitlement ID matches:**
   - In `PurchaseContext.tsx`: `const ENTITLEMENT_ID = "pro"`
   - In RevenueCat Dashboard → Entitlements: Should have `pro`
   - In RevenueCat Dashboard → Offerings → Packages: Should link to `pro` entitlement

2. **Check customer info:**
   - After purchase, logs should show:

   ```
   ✅ User has Pro access
   ```

   - Or if not granted:

   ```
   ℹ️ User is on free tier
   ```

3. **Restore purchases:**
   - In PaywallScreen, tap "Restore Purchases"
   - This re-checks with Google Play and RevenueCat
   - May take 5-10 seconds

---

## Environment Variable Verification

Make sure you haven't accidentally committed real keys to `.env.example` or `.env.production`:

```bash
# ✅ GOOD - Placeholder values
EXPO_PUBLIC_REVENUECAT_ANDROID_KEY=goog_XXXXXXXXXXXXXXXX

# ❌ BAD - Real values (security risk!)
EXPO_PUBLIC_REVENUECAT_ANDROID_KEY=goog_abcd1234efgh5678ijkl9012mnop

# ❌ BAD - Wrong placeholder
EXPO_PUBLIC_REVENUECAT_ANDROID_KEY=goog_YOUR_ANDROID_KEY
```

**Files to check:**

- `.env.example` - Use placeholders (safe to commit)
- `.env.production` - Use placeholders (safe to commit)
- `.env.development` - Use placeholders (safe to commit)
- `.env` (local) - Use REAL keys (don't commit) ← This is the one with your actual key!

---

## Network/API Status Check

To verify RevenueCat can reach Google Play:

1. **From your device:**
   - Open browser
   - Try https://www.google.com (verify internet works)

2. **Check RevenueCat status:**
   - Go to https://status.revenuecat.com
   - Verify all systems operational

3. **Check Google Play API status:**
   - Go to https://cloud.google.com/status
   - Look for "Google Play" service status

---

## Code Flow Verification

The payment flow should work like this:

```
App Starts
  ↓
initializePurchases() called
  ↓
Purchases.configure({ apiKey: REVENUECAT_API_KEY })
  ↓
Purchases.getOfferings() called
  ↓
Offerings received from RevenueCat (which syncs from Google Play)
  ↓
Offerings displayed in PaywallScreen
  ↓
User taps package
  ↓
Purchases.purchasePackage(pkg) called
  ↓
Google Play Billing displayed
  ↓
Purchase succeeds (test account = free)
  ↓
CustomerInfo updated with entitlements
  ↓
isPro = true, PaywallScreen closes
```

If it stops at any step, check the console logs for which step failed.

---

## Success Indicators

You'll know it's working when you see:

- [ ] App starts without "RevenueCat" errors in console
- [ ] PaywallScreen displays at least one package
- [ ] Package shows price from Google Play
- [ ] Tapping package opens Google Play Billing
- [ ] Test purchase succeeds without payment
- [ ] App recognizes user has pro access
- [ ] "Restore Purchases" button works

---

## Still Having Issues?

Check these resources:

1. **RevenueCat Docs:** https://docs.revenuecat.com/docs/android-quickstart
2. **Google Play Billing:** https://developer.android.com/google/play/billing
3. **Error Messages:** Look in console for specific RevenueCat error codes
4. **RevenueCat Support:** https://www.revenuecat.com/support

The most common issue is **API key mismatch** or **missing Google Play sync** - double-check both!
