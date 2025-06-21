# AniFoodie App Translation Guide

This document explains how the AniFoodie app's translation system works and how to add or modify translations.

## Translation Architecture

The app uses a custom translation system with the following components:

1. **useLanguage Hook**: Manages the current language preference, stored in AsyncStorage
2. **Translations File**: Contains all static UI strings in multiple languages
3. **TranslatedText Component**: A wrapper for Text that automatically uses the current language
4. **Dynamic Translation Hook**: For translating data-driven content (animal names, food names, etc.)

## Adding UI Translations

To add a new string to the UI that needs translation:

1. Add the key to the `TranslationKey` type in `src/i18n/translations.ts`
2. Add translations for all supported languages in the same file
3. Use the key in your UI component with the `t()` function:

```tsx
const { language } = useLanguage();
const { t } = useTranslations(language);

// In your JSX:
<Text>{t('yourNewKey')}</Text>
```

Or use the TranslatedText component:

```tsx
<TranslatedText translationKey="yourNewKey" />
```

## Adding a New Language

To add a new supported language:

1. Add the language code to the `Language` type in `src/hooks/useLanguage.ts`
2. Add a new entry in the `translations` object in `src/i18n/translations.ts` for all keys
3. Add translations for dynamic content in `src/hooks/useDynamicTranslations.ts`

## Managing Dynamic Content Translations

For content that comes from data sources rather than UI components:

1. Add entries to the appropriate translation mapping in `src/hooks/useDynamicTranslations.ts`
2. Use the dynamic translation functions in your components:

```tsx
const { translateAnimal, translateFood, translateCategory } = useDynamicTranslations();

// In your JSX:
<Text>{translateAnimal('Dog')}</Text>
```

## Implemented Translations

The app currently has full translation support for:

1. **Tab Navigation Labels**: The labels for the main tab navigation
2. **Welcome Screen**: All content on the initial app welcome screen
3. **Animals Screen**: All UI elements on the main animals list screen
4. **Foods Screen**: All UI elements on the main foods list screen
5. **Settings Screen**: Language selection and other settings options
6. **Favorites Screen**: Labels and empty state messages
7. **Detail Screens**: Animal detail and food detail screens are fully translatable
8. **Dynamic Content**: Animal names, food names, and categories are translated via the dynamic translation system

## Translation Tools

The app includes a translation management script with utilities for:

- Checking for missing translations
- Finding untranslated hardcoded strings
- Creating templates for new languages

You can use these tools during development to ensure translation coverage.

## Best Practices

1. **Never Hardcode Strings**: Always use the translation system for user-facing text
2. **Use Placeholders**: For dynamic values, use placeholders in translations
3. **Test All Languages**: When making UI changes, check how they look in all supported languages
4. **Document Contexts**: Add comments to explain the context of translation keys when needed
5. **Consider Text Length**: Some translations may be longer than English text, so ensure your UI can handle varying text lengths

For more complex formatting needs, consider using a dedicated i18n library like i18next or react-i18next.
