# RevenueCat Quick Setup Checklist

Complete these steps to get payments working in Google Play Closed Testing.

## ✅ Quick Checklist

### PART 1: Google Play Console (15 minutes)

- [ ] Go to [play.google.com/console](https://play.google.com/console)
- [ ] Select your app: **com.cymoh.petplate.app**
- [ ] Create in-app products in **Monetization setup** → **Products** → **In-app products**
  - [ ] `petplate_pro_monthly` - $4.99/month subscription
  - [ ] `petplate_pro_annual` - $39.99/year subscription (optional)
  - [ ] `petplate_pro_lifetime` - $19.99 one-time (optional)
- [ ] Go to **Settings** → **License test accounts** and add your Google account
- [ ] Go to **Settings** → **API access** and get the JSON service account key

### PART 2: RevenueCat Dashboard (15 minutes)

- [ ] Go to [dashboard.revenuecat.com](https://dashboard.revenuecat.com)
- [ ] Copy your Android SDK API Key from **Project Settings** → **API Keys**
- [ ] Go to **Integrations** → **Google Play**
- [ ] Upload the JSON service account key from Google Play
- [ ] Create Entitlement in **Project Settings** → **Entitlements**
  - [ ] Identifier: `pro`
  - [ ] Display name: `PetPlate Pro`
- [ ] Create Offering in **Offerings**
  - [ ] Add your Google Play products as packages
  - [ ] Link to the `pro` entitlement

### PART 3: Your App (5 minutes)

- [ ] Update your `.env` file (NOT .env.example):
  ```bash
  EXPO_PUBLIC_REVENUECAT_ANDROID_KEY=goog_YOUR_KEY_HERE
  ```
- [ ] Rebuild your app: `npm run android`
- [ ] Or if using EAS: `eas build --platform android`

### PART 4: Test (10 minutes)

- [ ] Go to **Internal testing** in Google Play Console
- [ ] Create a release and submit your APK/AAB
- [ ] Add your test account to testers
- [ ] Open the internal test link on your device
- [ ] Sign in with your test Google account
- [ ] Go to the Paywall screen in the app
- [ ] You should see purchase options now! ✨

---

## 🔍 If "No offerings available" appears:

1. **Check RevenueCat logs:**
   - Open app with `npm run android -- --dev-client`
   - Look for RevenueCat error messages in the console
2. **Verify API key:**
   - Is it in your `.env` file?
   - Is it the correct Android key?
   - Did you rebuild the app after updating?

3. **Check Google Play sync:**
   - In RevenueCat, go to **Integrations** → **Google Play**
   - Click "Sync" or verify integration status
   - Wait a few minutes for sync

4. **Verify offerings:**
   - In RevenueCat **Offerings**, are your products showing?
   - Are they linked to the `pro` entitlement?
   - Are they published (not in draft)?

---

## 💡 Debug Commands

Test your RevenueCat connection:

```bash
# Rebuild with debug logging
npm run android -- --dev-client

# Check logs for RevenueCat messages
# Look for: "✅ RevenueCat SDK configured successfully"
# Or: "❌ Error initializing RevenueCat:"
```

---

## 📱 Testing Purchase Flow

Once offerings appear:

1. Tap any package in the paywall
2. Google Play Billing will appear
3. Since it's a test account, purchase succeeds without charging
4. App shows success alert
5. Check PaywallScreen - user should see "isPro" is now true

---

## Common Product IDs to Use

Copy-paste these when creating products in Google Play:

```
petplate_pro_monthly
petplate_pro_annual
petplate_pro_lifetime
```

---

Need help? Check the detailed guide: `REVENUECAT_SETUP_GUIDE.md`
