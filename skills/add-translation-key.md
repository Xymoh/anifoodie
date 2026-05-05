# SKILL: Add a Translation Key

Choose the right layer:
| Content | File |
|---|---|
| UI strings (buttons, headers, placeholders) | `src/i18n/ui/translations.ts` |
| Animal names | `src/i18n/animals/animal-translations.ts` |
| Food names / safety status | `src/i18n/food/food-translations.ts` |
| Food categories | `src/i18n/food/category-translations.ts` |

## Steps (UI string)
1. Add the key to **all 7 language blocks** (`en es fr de it ru pl`) in `translations.ts`
   - Never leave a key missing from any language — it breaks the inferred `TranslationKey` type
   - Use the English value as a fallback if a translation isn't ready
2. Use in JSX: `<TranslatedText translationKey="myNewKey" style={...} />`
   — or when the string value is needed: `const { t } = useTranslations(language); t('myNewKey')`

## Steps (dynamic content)
1. Add the value to all 7 language blocks in the appropriate file above
2. Resolve at runtime with `useDynamicTranslations()`:
   - `translateAnimal(name)` · `translateFood(name)` · `translateCategory(name)` · `translateStatus(status)`
