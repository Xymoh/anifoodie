# SKILL: Add a New Global State Context + Hook

Use this guide whenever a feature needs app-wide state that multiple screens or components must share (e.g. user preferences, data caches, feature toggles).

---

## When to use Context vs local state

| Situation | Use |
|---|---|
| State used in 2+ unrelated components | Context |
| State used only within one screen/component tree | `useState` local to that component |
| Derived/computed values from existing context | `useMemo` inside the consuming component |

---

## Step-by-Step

### 1. Create `src/context/MyFeatureContext.tsx`

```tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 1a. Define the shape of the context value
interface MyFeatureContextType {
  someValue: string;
  isLoading: boolean;
  doSomething: () => Promise<void>;
}

// 1b. Create context with a safe default (no-ops / falsy values)
const MyFeatureContext = createContext<MyFeatureContextType>({
  someValue: '',
  isLoading: false,
  doSomething: async () => {},
});

// 1c. Export the hook — throws if used outside the provider
export const useMyFeature = () => {
  const context = useContext(MyFeatureContext);
  if (context === undefined) {
    throw new Error('useMyFeature must be used within a MyFeatureProvider');
  }
  return context;
};

// 1d. Provider component
export const MyFeatureProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [someValue, setSomeValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Load initial data
  useEffect(() => {
    const initialise = async () => {
      setIsLoading(true);
      try {
        // ... async work (AsyncStorage, network, etc.)
      } catch (error) {
        console.error('MyFeature init error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initialise();
  }, []);

  const doSomething = async () => {
    // ... implementation
  };

  return (
    <MyFeatureContext.Provider value={{ someValue, isLoading, doSomething }}>
      {children}
    </MyFeatureContext.Provider>
  );
};
```

Naming rules:
- File: `MyFeatureContext.tsx` (PascalCase)
- Provider export: `MyFeatureProvider`
- Hook export: `useMyFeature`
- Context object: `MyFeatureContext` (not exported — keep it internal)

### 2. Register the provider in `src/navigation/AppNavigator.tsx`

Providers nest **outside** `NavigationContainer`. Order matters — inner providers can consume outer providers.

```tsx
// In AppNavigator (inside the return of AppNavigator component):
return (
  <PurchaseProvider>
    <AdProvider>
      <FavoritesProvider>
        <MyFeatureProvider>        {/* ← add here */}
          <NavigationContainer>
            {/* ... */}
          </NavigationContainer>
        </MyFeatureProvider>
      </FavoritesProvider>
    </AdProvider>
  </PurchaseProvider>
);
```

Place it at the outermost level it needs to be at. If it only serves one tab, you can wrap just that tab's stack instead.

### 3. Use the hook in any component or screen

```tsx
import { useMyFeature } from '../context/MyFeatureContext';

const MyComponent = () => {
  const { someValue, doSomething } = useMyFeature();
  // ...
};
```

### 4. Persisting state with AsyncStorage

Follow the same pattern as `FavoritesContext.tsx`:

```ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'my_feature_data'; // prefix with feature name to avoid collisions

// Load
const raw = await AsyncStorage.getItem(STORAGE_KEY);
if (raw) setState(JSON.parse(raw));

// Save
await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
```

Always wrap AsyncStorage calls in `try/catch` and log errors via `console.error`.

---

## Checklist

- [ ] Context file created in `src/context/` as `MyFeatureContext.tsx`
- [ ] Interface defined for context value
- [ ] `createContext` has a safe default value (no-ops, not `undefined`, unless you want the throw guard)
- [ ] `useMyFeature` hook exported and throws if context is `undefined`
- [ ] `MyFeatureProvider` wraps children and passes value via `Context.Provider`
- [ ] Provider registered in `AppNavigator.tsx` at the correct nesting level
- [ ] TypeScript compiles with no errors
