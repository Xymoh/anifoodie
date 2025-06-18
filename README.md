# AniFood - Animal Food Compatibility App

AniFood is a mobile application built with Expo and React Native that helps users determine what types of food animals can eat. This app is designed for pet owners, animal caretakers, and anyone who wants to ensure they're feeding their pets safely.

## Features

- **Search by Animal**: Select an animal to see what foods they can eat, should eat in moderation, or should avoid completely.
- **Search by Food**: Select a food item to discover which animals can safely consume it and which should avoid it.
- **Favorites**: Save your most frequently checked animals and foods for quick access.
- **Comprehensive Database**: Built on a detailed CSV dataset with compatibility information for various animals and foods.
- **User-Friendly Interface**: Intuitive navigation and visual indicators for food compatibility status.

## Compatibility Status Indicators

- 🟢 **Allowed**: Safe for the animal to consume
- 🟠 **Acceptable in Small Quantities**: Can be given occasionally or in limited amounts
- 🔴 **Not Allowed**: Unsafe for the animal to consume

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/anifood.git
cd anifood
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
- AsyncStorage for persistent favorites
- TypeScript
- PapaParse for CSV data handling

## Project Structure

- `/src/components`: Reusable UI components
- `/src/screens`: Main application screens
- `/src/navigation`: Navigation configuration
- `/src/data`: Data utilities and CSV dataset
- `/src/hooks`: Custom React hooks
- `/src/types`: TypeScript type definitions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

The information provided in this app is for general informational purposes only. Always consult with a veterinarian before introducing new foods to your pet's diet.
