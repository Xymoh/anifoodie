# SKILL: Add a New Screen

1. Add param type to `src/navigation/types.ts` → `RootStackParamList`
2. Create `src/screens/MyNewScreen.tsx`
   - Use `SafeAreaView` from `react-native-safe-area-context`
   - Type navigation: `NativeStackNavigationProp<RootStackParamList, 'MyNewScreen'>`
   - Put `StyleSheet.create({})` at the bottom of the file
   - Use only tokens from `../styles` (no raw values)
3. Import and register the screen in `src/navigation/AppNavigator.tsx`
   - Stack screen: add to `Stack.Navigator` or the relevant tab's nested stack
   - Modal: add `presentation: 'modal'` to options
   - Dev-only: wrap in `{DevFeatures.SHOW_DEV_MENU && <Stack.Screen ... />}`
4. Navigate with `navigation.navigate('MyNewScreen', { param: value })`
