# SKILL: Add a New Screen

Use this guide whenever you need to add a new full-screen route to the app.

---

## Decision: Stack Screen vs Tab Screen

- **Tab screen** — top-level destination visible in the bottom tab bar (Animals, Foods, Favorites, Settings). Rarely added.
- **Stack screen** — pushed on top of a tab (e.g. AnimalDetail, FoodDetail) or presented modally (e.g. Paywall). Most new screens are stack screens.

---

## Step-by-Step

### 1. Add the param type to `src/navigation/types.ts`

```ts
export type RootStackParamList = {
  // existing screens...
  MyNewScreen: { someParam: string } | undefined; // undefined if no params
};
```

If the screen belongs to a new tab, add it to `TabParamList` too.

### 2. Create the screen file

Create `src/screens/MyNewScreen.tsx`:

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../navigation/types';
import { colors, spacing, typography } from '../styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'MyNewScreen'>;

const MyNewScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.title}>My New Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold as '700',
    color: colors.textPrimary,
    textAlign: 'center',
    marginVertical: spacing.sectionMargin,
  },
});

export default MyNewScreen;
```

Rules:
- Use `SafeAreaView` from `react-native-safe-area-context`, **not** from `react-native`.
- `StyleSheet.create` goes at the **bottom** of the file.
- Only use tokens from `../styles` — no raw hex values or magic numbers.

### 3. Register the screen in `src/navigation/AppNavigator.tsx`

Import the screen at the top:

```ts
import MyNewScreen from '../screens/MyNewScreen';
```

Add it to the appropriate navigator. For a modal stack screen under the root:

```tsx
<Stack.Screen
  name="MyNewScreen"
  component={MyNewScreen}
  options={{ headerShown: false, presentation: 'modal' }} // omit presentation for push
/>
```

For a screen inside a tab's nested stack (e.g. Animals tab), add it to `AnimalsStackScreen` (and duplicate for other tabs if reachable from all tabs):

```tsx
<AnimalsStack.Screen
  name="MyNewScreen"
  component={MyNewScreen}
  options={{ headerShown: false }}
/>
```

### 4. (Optional) Add a dev-only screen

If the screen should only appear in development, gate it with `DevFeatures`:

```tsx
{DevFeatures.SHOW_DEV_MENU && (
  <Stack.Screen name="MyNewScreen" component={MyNewScreen} options={{ headerShown: false }} />
)}
```

### 5. Navigate to the screen

From any component or screen:

```ts
navigation.navigate('MyNewScreen', { someParam: 'value' });
```

From a component that is not a direct screen child, call `useNavigation<NavigationProp>()`.

---

## Checklist

- [ ] Param type added to `RootStackParamList` (or `TabParamList`) in `navigation/types.ts`
- [ ] Screen file created in `src/screens/` with PascalCase name ending in `Screen.tsx`
- [ ] Screen imported and registered in `AppNavigator.tsx`
- [ ] `SafeAreaView` used (from `react-native-safe-area-context`)
- [ ] All styles use design tokens from `../styles`
- [ ] `StyleSheet.create` is at the bottom of the file
- [ ] TypeScript compiles with no errors
