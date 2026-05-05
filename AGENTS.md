# AGENTS.md — AI Coding Agent Reference

> This file is the authoritative guide for autonomous AI coding agents (GitHub Copilot, Cursor, Windsurf, etc.) working in this repository. Read it in full before making any changes.

---

## 1. Repository Overview

**App name:** PetPlate / AniFoodie  
**Purpose:** Mobile app that tells pet owners which foods are safe, acceptable, or harmful for 33+ animals across 5 taxonomic groups. Supports 7 languages, ad-supported with an in-app subscription to remove ads.  
**Bundle ID:** `com.cymoh.petplate.app`  
**Owner:** cymoh / Xymoh

---

## 2. Multi-Platform Tech Stack

This project spans several technology domains. Each has its own conventions below.

### 2a. Mobile — React Native / Expo

| Layer | Technology |
|---|---|
| Framework | React Native 0.79 + Expo SDK 53 |
| Language | TypeScript 5.8 (strict) |
| Navigation | React Navigation 7 (native-stack + bottom-tabs) |
| State | React Context API + custom hooks |
| Persistence | AsyncStorage (`@react-native-async-storage/async-storage`) |
| IAP | RevenueCat (`react-native-purchases` + `react-native-purchases-ui`) |
| Ads | Google AdMob (`react-native-google-mobile-ads`) |
| Data | Papaparse CSV bundled in-app |
| Build | EAS Build (`eas.json`) |
| Env | `expo-constants` + `.env.*` files with `EXPO_PUBLIC_` prefix |

### 2b. Web

Use React (with TypeScript), Next.js for routing/SSR where applicable, Tailwind CSS for styling. Match the same color tokens defined in `src/styles/colors.ts` when building companion web UIs. Prefer `fetch` over `axios` unless `axios` is already a project dependency.

### 2c. Backend / Node.js

Use Node.js (LTS) + TypeScript. Structure services as plain functions exported from modules — no classes unless integrating with a library that requires them. Use `express` or `fastify` for HTTP servers. Use `zod` for runtime validation and schema definition. Store secrets in environment variables, never hard-code them.

### 2d. Python / ML

Use Python 3.11+. Follow PEP 8 (enforce with `ruff`). Use `uv` for dependency management. For ML work: prefer `scikit-learn` for traditional ML, `PyTorch` for deep learning, `pandas` + `polars` for data manipulation. Jupyter notebooks are acceptable for exploration; production code must be `.py` modules. Type-annotate all public functions with `mypy`-compatible hints.

---

## 3. Project Structure (Mobile)

```
anifoodie/
├── App.tsx                  # Root component — initialise providers, splash
├── index.ts                 # Expo entry point
├── app.json                 # Expo config (name, bundle IDs, plugins)
├── eas.json                 # EAS Build profiles
├── .env.example             # Template — commit this, NOT .env
├── .env.development         # Dev overrides (gitignored)
├── .env.production          # Prod values  (gitignored)
└── src/
    ├── components/          # Reusable UI components (no screens)
    ├── config/
    │   └── appConfig.ts     # Centralised typed config from env vars
    ├── context/             # React Context providers + hooks
    ├── data/                # CSV data + parsing utilities
    ├── hooks/               # Custom React hooks
    ├── i18n/                # Translation dictionaries (UI, animals, food)
    │   ├── ui/
    │   ├── animals/
    │   └── food/
    ├── navigation/
    │   ├── AppNavigator.tsx # Full navigator tree
    │   └── types.ts         # RootStackParamList, TabParamList
    ├── screens/             # Full-screen route components
    ├── styles/              # Design tokens
    │   ├── colors.ts
    │   ├── spacing.ts
    │   ├── typography.ts
    │   └── shadow.ts
    ├── types/
    │   └── index.ts         # Shared domain types
    └── utils/               # Pure utility functions
```

---

## 4. Architectural Patterns

### 4a. Context + Custom Hook Pattern

Every piece of global state lives in `src/context/`. The pattern is always:

1. Define an interface for the context value.
2. `createContext` with a default (safe no-op) value.
3. Export a `Provider` component (`XxxProvider`) that owns state and effects.
4. Export a `useXxx` hook that calls `useContext` and throws if used outside the provider.
5. Register the provider in `AppNavigator.tsx` (wrapping `NavigationContainer` or `TabNavigator` as appropriate).

```ts
// Pattern example
const XxxContext = createContext<XxxContextType>({ /* defaults */ });
export const useXxx = () => useContext(XxxContext);
export const XxxProvider: React.FC<{ children: ReactNode }> = ({ children }) => { ... };
```

See `src/context/FavoritesContext.tsx` and `src/context/PurchaseContext.tsx` for canonical examples.

### 4b. Screen Components

- Live in `src/screens/`, named `<Name>Screen.tsx`.
- Are registered in `AppNavigator.tsx` (stack or tab).
- Any new screen **must** have its param type added to `RootStackParamList` or `TabParamList` in `src/navigation/types.ts`.
- Use `SafeAreaView` from `react-native-safe-area-context` at the root, not from `react-native`.
- Access navigation with typed `useNavigation<NavigationProp>()`.
- Styles are defined at the bottom of the file using `StyleSheet.create({})`.

### 4c. Reusable Components

- Live in `src/components/`, named `<Name>.tsx` (PascalCase).
- Props interface defined immediately above the component.
- Wrap with `React.memo` for list-rendered items (e.g. `FoodCard`, `AnimalCard`).
- Never fetch data or navigate directly — receive data as props or use context hooks.

### 4d. Custom Hooks

- Live in `src/hooks/`, named `use<Name>.ts` (camelCase, `use` prefix).
- A hook that wraps a context must re-export the same interface as the context.
- A hook that derives computed values should use `useMemo` / `useCallback` to avoid recalculation on every render.

### 4e. Styles (Design Tokens)

Always use tokens from `src/styles/` — never hard-code colours, sizes, or weights.

```ts
import { colors, spacing, typography, shadow } from '../styles';
```

| Token file | What it exports |
|---|---|
| `colors.ts` | `colors` (raw palette) + `semanticColors` (role-based aliases) — default export merges both |
| `spacing.ts` | Base scale (`xs`/`sm`/`md`/`lg`/`xl`) + named component values |
| `typography.ts` | `fontSize`, `fontWeight`, `lineHeight` maps |
| `shadow.ts` | `shadow.small`, `shadow.medium`, `shadow.tab` etc. |

### 4f. i18n / Translations

Translation is split into four layers (each language must be updated):

| Layer | File | Covers |
|---|---|---|
| UI strings | `src/i18n/ui/translations.ts` | Button labels, headers, placeholders |
| Animal names | `src/i18n/animals/animal-translations.ts` | All 33 `AnimalName` values |
| Food items | `src/i18n/food/food-translations.ts` | Food names + safety status labels |
| Category names | `src/i18n/food/category-translations.ts` | Food categories |

Supported languages: `en`, `es`, `fr`, `de`, `it`, `ru`, `pl`.

Use `useTranslations(language)` (returns `{ t }`) for UI strings.  
Use `useDynamicTranslations()` (returns `{ translateAnimal, translateFood, translateCategory, translateStatus, translateType }`) for data-driven strings.  
Use the `<TranslatedText translationKey="..." />` component to avoid passing `t` through props.

### 4g. Environment & Configuration

All runtime config flows through `src/config/appConfig.ts` → `AppConfig`. Env vars must use the `EXPO_PUBLIC_` prefix so Expo exposes them to the JS bundle.

- Add new vars to `.env.example` with a placeholder value.
- Add parsing logic in `appConfig.ts` under the appropriate section.
- Never read `process.env.EXPO_PUBLIC_*` directly outside `appConfig.ts`.

### 4h. Dev Feature Flags

`src/utils/devFeatures.ts` gates all developer-only behaviour behind `AppConfig.devFeatures.enabled`, which is `false` in production builds. Add any new developer bypass here — never gate it with a raw `__DEV__` check scattered through the codebase.

---

## 5. Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| React components / screens | PascalCase | `FoodCard`, `AnimalsScreen` |
| Custom hooks | camelCase with `use` prefix | `useLanguage`, `useDynamicTranslations` |
| Context files | PascalCase `*Context.tsx` | `FavoritesContext.tsx` |
| Provider exports | `*Provider` | `FavoritesProvider` |
| Hook exports (from context) | `use*` | `useFavorites` |
| Utility files | camelCase | `devFeatures.ts`, `adMobConfig.ts` |
| i18n files | kebab-case | `animal-translations.ts` |
| Constants (module-level) | SCREAMING_SNAKE_CASE | `FAVORITE_ANIMALS_KEY`, `ENTITLEMENT_ID` |
| Type / interface names | PascalCase | `FoodItem`, `RootStackParamList` |
| Type union aliases | PascalCase | `AnimalName`, `CompatibilityStatus`, `Language` |
| Style keys inside `StyleSheet.create` | camelCase | `animalItem`, `sectionHeader` |
| Environment variables | `EXPO_PUBLIC_SCREAMING_SNAKE` | `EXPO_PUBLIC_USE_TEST_ADS` |

---

## 6. TypeScript Rules

- Strict mode is on (`"strict": true` in `tsconfig.json`). Do not disable it.
- All public function parameters and return types must be explicitly typed.
- Avoid `any` — prefer `unknown` with narrowing, or a precise interface.
- Use `type` for union/intersection aliases; use `interface` for object shapes.
- Navigation prop types follow the pattern: `NativeStackNavigationProp<RootStackParamList, 'ScreenName'>`.
- Export types/interfaces from `src/types/index.ts` when they are shared across multiple features. Keep single-use types co-located in the file that uses them.

---

## 7. Monetisation Architecture

The app is free with banner ads. A one-time or subscription purchase (`"PetPlate Pro"` entitlement in RevenueCat) removes ads permanently.

### AdMob
- Initialised once in `App.tsx` via `initializeAdMob()`.
- Banner ad unit IDs are resolved via `AppConfig.adMob.getBannerAdUnitId()` (picks test vs production automatically based on env).
- Ads are hidden when `isSubscribed === true` (checked from `usePurchases()`).
- Ad rendering lives in `AdMobBanner.tsx`; `AdBanner.tsx` is the wrapper used by screens.

### RevenueCat
- SDK configured in `PurchaseContext.tsx`; use platform-specific API keys.
- The entitlement identifier is `"PetPlate Pro"` — must match the RevenueCat dashboard exactly.
- Always check `DevFeatures.ALLOW_PREMIUM_OVERRIDE` and `PremiumOverride.isEnabled()` before making RevenueCat network calls in dev builds.
- Use `showPaywall()` to present RevenueCat's native paywall UI; use `showPaywallIfNeeded()` for conditional presentation.

---

## 8. Data Layer

- Food/animal compatibility data is stored as a bundled CSV file, parsed with Papaparse at runtime.
- All data access goes through `src/data/data-utils.ts` — do not parse the CSV directly in components or screens.
- `getTranslatedFoodItems(language)` returns pre-translated `FoodItem[]` with `translatedItem`, `translatedCategory`, etc. already populated.

---

## 9. Performance Conventions

In list-rendering contexts (SectionList, FlatList):
- Always provide `keyExtractor`, `getItemLayout` (where heights are fixed), `removeClippedSubviews`, and batch-rendering props (`maxToRenderPerBatch`, `initialNumToRender`, `windowSize`).
- Wrap `renderItem` and `renderSectionHeader` callbacks with `React.useCallback`.
- Wrap expensive derived state with `useMemo`.
- Wrap card/row components with `React.memo`.

---

## 10. File & Import Conventions

- Barrel `index.ts` files exist for `src/styles/` and `src/i18n/`; use the barrel import, not the deep path.
- Asset imports use `require('../../assets/...')` (relative path from the file using them).
- No path aliases are configured — use relative imports throughout.
- Group imports: (1) React/RN/Expo, (2) third-party, (3) internal src (context → hooks → styles → components).

---

## 11. Build & Environment Commands

```bash
# Start dev server
npm start

# Run on specific platform
npm run android
npm run ios
npm run web

# EAS builds
npm run build:dev   # Development build
npm run build:prod  # Production build

# Clean prebuild
npm run prebuild:clean
```

Environment files:
- `.env.development` — used for `npm start` and dev EAS builds; dev features enabled, test ads on.
- `.env.production` — used for prod EAS builds; dev features off, real ad unit IDs.

---

## 12. Security Rules

1. Never commit `.env`, `.env.development`, or `.env.production` (all gitignored).
2. RevenueCat API keys go in `PurchaseContext.tsx` behind TODO comments (not env vars) — document clearly that they must be replaced before release.
3. All `DevFeatures` and `PremiumOverride` behaviour must be unreachable in production (`ENABLE_DEV_FEATURES === false`).
4. AdMob App IDs are in `app.json` (public, this is acceptable). Ad unit IDs are in env vars.
5. Never log sensitive user data. `console.log` is acceptable only in development branches and behind `DevFeatures.VERBOSE_LOGGING`.

---

## 13. Skill Files

For complex recurring workflows, see the `/skills/` directory:

| Skill | Description |
|---|---|
| [`skills/add-screen.md`](./skills/add-screen.md) | Add a new screen to the app |
| [`skills/add-translation-key.md`](./skills/add-translation-key.md) | Add a new i18n string across all languages |
| [`skills/add-context.md`](./skills/add-context.md) | Create a new global state context + hook |
| [`skills/monetization.md`](./skills/monetization.md) | Work with AdMob and RevenueCat |
