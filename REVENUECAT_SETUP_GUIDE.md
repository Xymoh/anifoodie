# RevenueCat Setup Guide for PetPlate (Android)

This guide walks you through setting up RevenueCat payments for Google Play in-app purchases.

## Architecture Overview

```
Google Play Console
    ↓ (In-app products)
    ↓
RevenueCat Dashboard
    ↓ (SDK API Key + Entitlements)
    ↓
Your App (PurchaseContext.tsx)
    ↓
User Device (Billing)
```

---

## Step 1: Google Play Console Setup

### 1.1 Create In-App Products

1. Go to [Google Play Console](https://play.google.com/console)
2. Select your app: **com.cymoh.petplate.app**
3. Navigate to: **Monetization setup** → **Products** → **In-app products** (or **Subscriptions** if you prefer)

### 1.2 Create Your Products

Create the following products for subscriptions:

#### Product 1: Monthly Subscription

- **Product ID**: `petplate_pro_monthly`
- **Product name**: PetPlate Pro - Monthly
- **Product type**: Subscription
- **Description**: Remove ads, support development
- **Subscription period**: 1 month
- **Default price**: $4.99 (or your preferred price)
- **Free trial**: Optional (e.g., 7 days)
- **Auto-renewal**: Enabled
- **Status**: Active

#### Product 2: Yearly Subscription

- **Product ID**: `petplate_pro_annual`
- **Product name**: PetPlate Pro - Yearly
- **Product type**: Subscription
- **Description**: Remove ads, support development
- **Subscription period**: 1 year
- **Default price**: $39.99 (or your preferred price)
- **Free trial**: Optional
- **Auto-renewal**: Enabled
- **Status**: Active

#### Product 3: Lifetime Purchase (Optional)

- **Product ID**: `petplate_pro_lifetime`
- **Product name**: PetPlate Pro - Lifetime
- **Product type**: In-app product
- **Description**: One-time payment for lifetime access
- **Price**: $19.99 (or your preferred price)
- **Status**: Active

### 1.3 Create Test Testers

1. Go to **Settings** → **Tests accounts**
2. Click **Create license test account**
3. Add your Google account email
4. This account can test purchases without being charged

---

## Step 2: RevenueCat Dashboard Setup

### 2.1 Create a RevenueCat Account

1. Go to [RevenueCat Dashboard](https://dashboard.revenuecat.com)
2. Sign up or log in
3. Create a new organization and app (if not already done)

### 2.2 Get Your SDK API Key

1. In RevenueCat Dashboard: **Project Settings** → **API Keys**
2. Under **SDK API Keys**, find **Android**
3. Copy the key (format: `goog_XXXXXXXXXXXXXXXX`)
4. Add it to your `.env` files:
   ```bash
   EXPO_PUBLIC_REVENUECAT_ANDROID_KEY=goog_XXXXXXXXXXXXXXXX
   ```

### 2.3 Link Google Play Account

1. In RevenueCat Dashboard: **Integrations** → **Google Play**
2. Click **Link App Credentials**
3. You need the Google Play Service Account JSON key:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create/select the project linked to your app
   - Go to **Service Accounts** (in IAM & Admin)
   - Create a new service account or use existing
   - Generate a new **JSON private key**
   - Download the file
4. Upload the JSON file to RevenueCat
5. Select your app package: `com.cymoh.petplate.app`
6. RevenueCat will now sync your Google Play products

### 2.4 Create Entitlements

1. Go to **Project Settings** → **Entitlements**
2. Click **Create Entitlement**
3. Create one entitlement:
   - **Identifier**: `pro`
   - **Display Name**: PetPlate Pro
4. This identifier must match your code: `const ENTITLEMENT_ID = "pro"`

### 2.5 Create Offerings

1. Go to **Offerings** (main menu)
2. Click **Create Offering**
3. Create one offering:
   - **Identifier**: `default` (or any name you prefer)
   - **Display name**: Default Offering
4. Add packages to this offering:
   - For each Google Play product, add a package:
     - Link to the Google Play product ID (e.g., `petplate_pro_monthly`)
     - Set the entitlement to `pro`
     - Package type should auto-detect from Google Play

---

## Step 3: Update Your Local Environment Files

Update your local `.env` file (NOT the .env.example file - that's for reference):

```bash
# .env (local file - DON'T commit this)
EXPO_PUBLIC_REVENUECAT_ANDROID_KEY=goog_YOUR_ACTUAL_KEY_HERE
EXPO_PUBLIC_REVENUECAT_IOS_KEY=appl_YOUR_IOS_KEY_WHEN_READY
EXPO_PUBLIC_ENABLE_DEV_FEATURES=true
EXPO_PUBLIC_ENABLE_PREMIUM_OVERRIDE=true
```

---

## Step 4: Test with Google Play Closed Testing

### 4.1 Create Internal Testing Track

1. Go to [Google Play Console](https://play.google.com/console)
2. Select your app
3. Go to **Release** → **Internal testing**
4. Create a new release with your APK/AAB
5. Make sure **Monetization** is enabled on the app

### 4.2 Add Test Testers

1. In **Internal testing**, add your test account(s) under **Manage testers**
2. Use the same email you registered as a **License test account** in Settings

### 4.3 Test on Device

1. Install from the internal testing link on your test device
2. Sign in with the test account
3. The app should now load offerings from RevenueCat
4. You should see purchase options
5. Attempts to purchase won't charge your payment method (test accounts are free)

---

## Step 5: Troubleshooting

### Issue: "No offerings available"

**Possible causes:**

1. RevenueCat SDK API key is not set or incorrect
2. Google Play products not synced with RevenueCat
3. Offering not configured correctly in RevenueCat
4. Network connectivity issue

**Solution:**

- Check console logs for errors
- Verify SDK API key is correct in both `.env` and RevenueCat Dashboard
- Ensure Google Play integration is linked in RevenueCat
- Check that offerings are published/active in RevenueCat

### Issue: "No offerings available" in Closed Testing

**Possible causes:**

1. Not using the test account to sign in
2. App not building with the correct package ID
3. RevenueCat configuration not updated in build
4. Test product not created in Google Play

**Solution:**

- Verify you're signed in with the test account
- Check app package matches Google Play Console: `com.cymoh.petplate.app`
- Rebuild and reinstall the app
- Verify in-app products are active in Google Play Console

### Issue: Purchase returns error

**Possible causes:**

1. Test account not added to testers
2. License test account not configured properly
3. Product not active in Google Play
4. Network/billing service issue

**Solution:**

- Ensure test account is in License test accounts AND added to Internal testing testers
- Check product status is "Active" in Google Play
- Try restarting the app and device
- Check RevenueCat logs for detailed errors

### Debug Mode

Enable RevenueCat debug logging in development:

The code already has this in `PurchaseContext.tsx`:

```tsx
if (__DEV__) {
  Purchases.setLogLevel(LOG_LEVEL.DEBUG);
}
```

This will print detailed RevenueCat logs to console.

---

## Code Reference

### Your Configuration

**File**: `src/context/PurchaseContext.tsx`

The RevenueCat API key is loaded from environment variables:

```tsx
const REVENUECAT_API_KEY =
  Platform.select({
    android:
      process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY || "goog_YOUR_ANDROID_KEY",
    ios: process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY || "appl_YOUR_IOS_KEY",
  }) || "goog_YOUR_ANDROID_KEY";

const ENTITLEMENT_ID = "pro"; // Must match RevenueCat Entitlements
```

### How It Works

1. App starts → `PurchaseProvider` mounts
2. `initializePurchases()` is called
3. RevenueCat SDK is configured with your API key
4. Offerings are fetched from RevenueCat
5. Paywall screen (`PaywallScreen.tsx`) displays available packages
6. User purchases → `purchasePackage()` handles the transaction
7. RevenueCat validates with Google Play
8. Customer info is updated with entitlement status

---

## Production Checklist

Before releasing to production:

- [ ] RevenueCat production API key configured
- [ ] All in-app products created and active in Google Play
- [ ] Offerings published in RevenueCat Dashboard
- [ ] Test purchase completed successfully
- [ ] Entitlement properly grants access to premium features
- [ ] Error handling messages user-friendly
- [ ] Paywall messaging accurate and compliant
- [ ] Privacy policy updated with billing info
- [ ] Terms of service updated with subscription terms
- [ ] All test accounts removed from testers before release
- [ ] `.env.production` updated with production keys

---

## Useful Links

- [RevenueCat Documentation](https://docs.revenuecat.com)
- [Google Play Console](https://play.google.com/console)
- [RevenueCat Android Quickstart](https://docs.revenuecat.com/docs/android-quickstart)
- [Google Play Billing Documentation](https://developer.android.com/google/play/billing)
