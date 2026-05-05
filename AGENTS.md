# AGENTS.md

## Project
React Native / Expo app (PetPlate). TypeScript strict mode. EAS builds. Also uses web (React/Next.js), Node.js, and Python/ML — apply the conventions below across all of them.

## Tech Stack
- **Mobile:** React Native 0.79 + Expo SDK 53, React Navigation 7, AsyncStorage, RevenueCat, AdMob, Papaparse
- **Web:** React + TypeScript, Next.js, Tailwind CSS
- **Backend:** Node.js LTS + TypeScript, Express or Fastify, Zod for validation
- **Python/ML:** Python 3.11+, ruff, uv, scikit-learn / PyTorch, pandas

## Structure (mobile `src/`)
```
components/   reusable UI (no screens, no direct data fetching)
config/       appConfig.ts — single source of truth for env vars
context/      global state (Context + Provider + hook per feature)
data/         CSV data + data-utils.ts (only file that parses CSV)
hooks/        custom hooks (use*.ts)
i18n/         ui/ animals/ food/ — translation dictionaries
navigation/   AppNavigator.tsx + types.ts (RootStackParamList)
screens/      full-screen route components (*Screen.tsx)
styles/       colors.ts spacing.ts typography.ts shadow.ts
types/        shared domain types (index.ts)
utils/        pure utility functions
```

## Naming
| Thing | Convention |
|---|---|
| Components, Screens, Contexts | PascalCase |
| Custom hooks | `use` prefix, camelCase |
| Context files | `*Context.tsx` |
| Provider exports | `*Provider` |
| Hook exports from context | `use*` |
| Utility / hook / config files | camelCase |
| i18n files | kebab-case |
| Module-level constants | SCREAMING_SNAKE_CASE |
| Env vars | `EXPO_PUBLIC_SCREAMING_SNAKE` |

## Coding Rules
- **TypeScript:** strict mode always on; no `any`; use `interface` for objects, `type` for unions
- **Styles:** only use tokens from `src/styles/` — never hard-code hex values, sizes, or weights
- **Imports:** `import { colors, spacing, typography, shadow } from '../styles'` (barrel); relative paths only (no aliases)
- **Import order:** React/RN/Expo → third-party → internal
- **StyleSheet.create** goes at the bottom of every component file
- **SafeAreaView** always from `react-native-safe-area-context`, not `react-native`
- **Lists (FlatList/SectionList):** always provide `keyExtractor`, `getItemLayout`, `removeClippedSubviews`, batch props; wrap callbacks in `useCallback`; wrap derived state in `useMemo`; wrap list item components in `React.memo`
- **Config:** all env vars parsed once in `appConfig.ts`; never read `process.env.EXPO_PUBLIC_*` outside that file
- **Dev flags:** all dev-only behaviour gated via `DevFeatures` in `devFeatures.ts`; never use a raw `__DEV__` check in product code
- **Data:** all CSV access through `src/data/data-utils.ts` only
- **Monetisation:** ads hidden when `usePurchases().isSubscribed === true`; ad unit IDs resolved via `AppConfig.adMob.getBannerAdUnitId()`; RevenueCat entitlement ID is `"PetPlate Pro"`
- **Python:** PEP 8, type-annotate all public functions, production code in `.py` modules (not notebooks)
- **Node.js:** plain exported functions (no classes unless required by library); secrets in env vars only
- **Security:** never commit `.env.*` files; never log sensitive data

## Skills
- [`skills/add-screen.md`](./skills/add-screen.md)
- [`skills/add-translation-key.md`](./skills/add-translation-key.md)
- [`skills/add-context.md`](./skills/add-context.md)
- [`skills/monetization.md`](./skills/monetization.md)
