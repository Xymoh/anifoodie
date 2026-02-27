# AniFoodie - Animal Food Compatibility App

AniFoodie is a mobile application built with Expo and React Native that helps users determine what types of food animals can eat. This app is designed for pet owners, animal caretakers, and anyone who wants to ensure they're feeding their pets safely.

## Features

- **Search by Animal**: Select an animal to see what foods they can eat, should eat in moderation, or should avoid completely.
- **Search by Food**: Select a food item to discover which animals can safely consume it and which should avoid it.
- **Favorites**: Save your most frequently checked animals and foods for quick access.
- **Comprehensive Database**: Built on a detailed CSV dataset with compatibility information for various animals and foods.
- **User-Friendly Interface**: Intuitive navigation and visual indicators for food compatibility status.
- **Multilingual Support**: Available in 7+ languages with language preferences saved between sessions.
- **Premium Support**: Optional premium subscription to support development (via RevenueCat)
- **Ad-Supported**: Free version supported by AdMob ads

## Compatibility Status Indicators

- 🟢 **Allowed**: Safe for the animal to consume
- 🟠 **Acceptable in Small Quantities**: Can be given occasionally or in limited amounts
- 🔴 **Not Allowed**: Unsafe for the animal to consume

## Environment Configuration

AniFoodie uses environment variables for configuration. **Your `.env` file is gitignored** for security.

### Setup Environment Variables

1. **Copy the example file**:

   ```bash
   cp .env.example .env
   ```

2. **Add your AdMob IDs** in `.env`:

   ```bash
   # Replace XXXXXXXX with your actual AdMob IDs from https://apps.admob.com/
   EXPO_PUBLIC_ADMOB_ANDROID_APP_ID=ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX
   EXPO_PUBLIC_ADMOB_IOS_APP_ID=ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX
   EXPO_PUBLIC_ADMOB_ANDROID_BANNER_ID=ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX
   EXPO_PUBLIC_ADMOB_IOS_BANNER_ID=ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX
   ```

3. **Environment files**:
   - `.env.example` - Template (committed to git)
   - `.env.development` - Development defaults (committed to git)
   - `.env.production` - Production defaults (committed to git)
   - `.env` - Your local config (**gitignored** - NOT committed)

### Environment Variables Reference

```bash
# AdMob Configuration
EXPO_PUBLIC_USE_TEST_ADS=true                    # Toggle test/real ads
EXPO_PUBLIC_ADMOB_ANDROID_APP_ID=ca-app-pub-... # Your AdMob Android App ID
EXPO_PUBLIC_ADMOB_IOS_APP_ID=ca-app-pub-...     # Your AdMob iOS App ID
EXPO_PUBLIC_ADMOB_ANDROID_BANNER_ID=ca-app-...  # Production Android Banner ID
EXPO_PUBLIC_ADMOB_IOS_BANNER_ID=ca-app-...      # Production iOS Banner ID

# Developer Features
EXPO_PUBLIC_ENABLE_DEV_FEATURES=true            # Enable developer menu
EXPO_PUBLIC_ENABLE_PREMIUM_OVERRIDE=true        # Allow premium testing
```

**Note**: AdMob test ad unit IDs are Google's official test IDs and are safe to share publicly.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository

```bash
git clone https://github.com/Xymoh/anifoodie.git
cd anifoodie
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npx expo start
# or
npm start
```

4. Run on a device or emulator
   - Scan the QR code with the Expo Go app (Android) or Camera app (iOS)
   - Press 'a' to run on an Android emulator
   - Press 'i' to run on an iOS simulator

## Tech Stack

- React Native
- Expo
- React Navigation
- AsyncStorage for persistent favorites and settings
- TypeScript
- PapaParse for CSV data handling
- Custom i18n system for multilingual support

## Project Structure

- `/src/components`: Reusable UI components
- `/src/screens`: Main application screens
- `/src/navigation`: Navigation configuration
- `/src/data`: Data utilities and CSV dataset
- `/src/hooks`: Custom React hooks
- `/src/types`: TypeScript type definitions
- `/src/i18n`: Translation system and language files

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

The information provided in this app is for general informational purposes only. Always consult with a veterinarian before introducing new foods to your pet's diet.
