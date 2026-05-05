# SKILL: Add a New i18n Translation Key

Use this guide whenever you need to expose a new localised string to the UI.

There are **four separate translation layers**. Choose the correct one before editing.

| Layer | File | When to use |
|---|---|---|
| UI strings | `src/i18n/ui/translations.ts` | Buttons, headers, placeholders, messages |
| Animal names | `src/i18n/animals/animal-translations.ts` | Translating an `AnimalName` value |
| Food items | `src/i18n/food/food-translations.ts` | Translating a food name or safety status |
| Categories | `src/i18n/food/category-translations.ts` | Translating a food category label |

---

## Adding a UI String (most common)

### 1. Open `src/i18n/ui/translations.ts`

The file exports a `translations` object keyed by `Language` (`en | es | fr | de | it | ru | pl`).

Add your new key to every language block. English first, then the rest:

```ts
export const translations = {
  en: {
    // existing keys...
    myNewKey: 'My English string',
  },
  es: {
    myNewKey: 'Mi cadena en español',
  },
  fr: {
    myNewKey: 'Ma chaîne en français',
  },
  de: {
    myNewKey: 'Mein deutscher Text',
  },
  it: {
    myNewKey: 'Il mio testo italiano',
  },
  ru: {
    myNewKey: 'Мой русский текст',
  },
  pl: {
    myNewKey: 'Mój polski tekst',
  },
};
```

> If you don't have a translation, use the English value as a fallback — **never leave a key missing** from a language block, as that breaks the `TranslationKey` type.

### 2. The `TranslationKey` type is inferred automatically

`TranslationKey` is derived as `keyof typeof translations['en']`. You do not need to update it manually.

### 3. Use the key in a component

**Option A — `<TranslatedText>` component** (preferred, no prop drilling):

```tsx
import TranslatedText from '../components/TranslatedText';

<TranslatedText translationKey="myNewKey" style={styles.label} />
```

**Option B — `useTranslations` hook** (when you need the string value):

```tsx
import { useTranslations } from '../i18n/index';
import { useLanguage } from '../hooks/useLanguage';

const { language } = useLanguage();
const { t } = useTranslations(language);

<Text>{t('myNewKey')}</Text>
```

---

## Adding a Dynamic Translation (animal / food / category)

Dynamic translations are looked up at runtime from data-driven content.

### Animal name

1. Open `src/i18n/animals/animal-translations.ts`.
2. Add the animal key to every language's dictionary object.
3. Use `useDynamicTranslations().translateAnimal(animalName)` to resolve it in components.

### Food name / status

1. Open `src/i18n/food/food-translations.ts`.
2. Add the food name to every language's dictionary.
3. Use `useDynamicTranslations().translateFood(foodName)` or `.translateStatus(status)`.

### Category name

1. Open `src/i18n/food/category-translations.ts`.
2. Add the category to every language's dictionary.
3. Use `useDynamicTranslations().translateCategory(categoryName)`.

---

## Checklist

- [ ] New key added to **all 7 language** blocks (en, es, fr, de, it, ru, pl)
- [ ] No language block has the key missing (would break `TranslationKey` type)
- [ ] Used via `<TranslatedText>` or `useTranslations()` — not inlined as raw string
- [ ] TypeScript compiles with no errors (key is picked up by the inferred type)
