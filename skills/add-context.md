# SKILL: Add a New Global Context + Hook

1. Create `src/context/MyFeatureContext.tsx` following this pattern:
   ```ts
   const MyFeatureContext = createContext<MyFeatureContextType>({ /* safe defaults */ });

   export const useMyFeature = () => {
     const ctx = useContext(MyFeatureContext);
     if (!ctx) throw new Error('useMyFeature must be used within MyFeatureProvider');
     return ctx;
   };

   export const MyFeatureProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
     // state + effects here
     return <MyFeatureContext.Provider value={...}>{children}</MyFeatureContext.Provider>;
   };
   ```
2. Register the provider in `src/navigation/AppNavigator.tsx`, wrapping at the correct level:
   ```tsx
   <PurchaseProvider>
     <AdProvider>
       <FavoritesProvider>
         <MyFeatureProvider>   {/* ← add here */}
           <NavigationContainer>...</NavigationContainer>
         </MyFeatureProvider>
       </FavoritesProvider>
     </AdProvider>
   </PurchaseProvider>
   ```
3. Persist state with AsyncStorage if needed — always wrap calls in `try/catch`
4. Use `useMyFeature()` in any component inside the provider tree
