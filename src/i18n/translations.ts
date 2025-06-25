import { Language } from '../hooks/useLanguage';

export type TranslationKey = 
  // Tab navigation
  | 'animals'
  | 'foods'
  | 'favorites'
  | 'settings'
  
  // Settings screen
  | 'settingsTitle'
  | 'languagePreference'
  | 'english'
  | 'spanish'
  | 'french'
  | 'german'
  | 'italian'
  | 'russian'
  | 'polish'
  | 'darkTheme'
  | 'about'
  | 'version'
  
  // Welcome screen
  | 'welcomeTitle'
  | 'welcomeDescription'
  | 'howItWorks'
  | 'welcomeExplanation'
  | 'searchByAnimal'
  | 'searchByAnimalDescription'
  | 'searchByFood'
  | 'searchByFoodDescription'
  | 'colorKey'
  | 'safeToEat'
  | 'acceptableInSmallQuantities'
  | 'notAllowedUnsafe'
  | 'disclaimer'
  | 'disclaimerText'
  | 'iUnderstand'
  
  // Animals Screen
  | 'allAnimals'
  | 'searchAnimals'
  | 'selectAnAnimal'
  | 'searchByAnimalOrCategory'
  | 'noAnimalsFound'
  | 'mammals'
  | 'birds'
  | 'reptiles'
  | 'amphibians'
  | 'fish'
  
  // Foods Screen
  | 'allFoods'
  | 'searchFoods'
  | 'selectAFood'
  | 'searchFoodsOrTypes'
  | 'noFoodsFound'
  | 'fruits'
  | 'vegetables'
  | 'dairy'
  | 'grains'
  | 'meat'
  | 'nuts'
  
  // Favorites Screen
  | 'noFavorites'
  | 'addFavorites'
  | 'favoriteAnimals'
  | 'favoriteFoods'
  
  // Animal Detail Screen
  | 'backButton'
  | 'allowedFoods'
  | 'acceptableFoods'
  | 'notAllowedFoods'
  | 'noAnimalsInCategory'
  | 'boiled'
  
  // Food Detail Screen
  | 'animalsThatCanEat'
  | 'animalsThatCanEatSmallQuantities'
  | 'animalsThatCannotEat'
  
  // Common
  | 'save'
  | 'cancel'
  | 'search'
  | 'loading';

// Translation dictionaries
const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // Tab navigation
    animals: 'Animals',
    foods: 'Foods',
    favorites: 'Favorites',
    settings: 'Settings',
    
    // Settings screen
    settingsTitle: 'Settings',
    languagePreference: 'Language',
    english: 'English',
    spanish: 'Spanish',
    french: 'French',
    german: 'German',
    italian: 'Italian',
    russian: 'Russian',
    polish: 'Polish',
    darkTheme: 'Dark Theme',
    about: 'About',
    version: 'Version',
    
    // Welcome screen
    welcomeTitle: 'Welcome to AniFoodie',
    welcomeDescription: 'Discover what foods are safe for your pets',
    howItWorks: 'How it works',
    welcomeExplanation: 'AniFood helps you discover which foods are safe for your pets and which are potentially harmful.',
    searchByAnimal: 'Search by Animal',
    searchByAnimalDescription: 'Select an animal to see what foods they can eat, should eat in moderation, or should avoid completely.',
    searchByFood: 'Search by Food',
    searchByFoodDescription: 'Select a food item to discover which animals can safely consume it and which should avoid it.',
    colorKey: 'Color Key',
    safeToEat: 'Safe to eat',
    acceptableInSmallQuantities: 'Acceptable in small quantities',
    notAllowedUnsafe: 'Not allowed - unsafe',
    disclaimer: 'Disclaimer',
    disclaimerText: 'The information provided in this app is for general informational purposes only. Always consult with a veterinarian before introducing new foods to your pet\'s diet.',
    iUnderstand: 'I Understand',
    
    // Animals Screen
    allAnimals: 'All Animals',
    searchAnimals: 'Search animals...',
    selectAnAnimal: 'Select an Animal',
    searchByAnimalOrCategory: 'Search by animal name or category...',
    noAnimalsFound: 'No animals found',
    mammals: 'Mammals',
    birds: 'Birds',
    reptiles: 'Reptiles',
    amphibians: 'Amphibians',
    fish: 'Fish',
    
    // Foods Screen
    allFoods: 'All Foods',
    searchFoods: 'Search foods...',
    selectAFood: 'Select a Food',
    searchFoodsOrTypes: 'Search foods or food types...',
    noFoodsFound: 'No foods found',
    fruits: 'Fruits',
    vegetables: 'Vegetables',
    dairy: 'Dairy',
    grains: 'Grains',
    meat: 'Meat',
    nuts: 'Nuts',
    
    // Favorites Screen
    noFavorites: 'No favorites yet',
    addFavorites: 'Add items to your favorites',
    favoriteAnimals: 'Favorite Animals',
    favoriteFoods: 'Favorite Foods',
    
    // Animal Detail Screen
    backButton: 'Back',
    allowedFoods: 'Allowed Foods',
    acceptableFoods: 'Acceptable in Small Quantities',
    notAllowedFoods: 'Not Allowed',
    noAnimalsInCategory: 'No animals in this category',
    boiled: 'Boiled',
    
    // Food Detail Screen
    animalsThatCanEat: 'Animals that can eat this food',
    animalsThatCanEatSmallQuantities: 'Animals that can eat this food in small quantities',
    animalsThatCannotEat: 'Animals that cannot eat this food',
    
    // Common
    save: 'Save',
    cancel: 'Cancel',
    search: 'Search',
    loading: 'Loading...'
  },
  es: {
    // Tab navigation
    animals: 'Animales',
    foods: 'Alimentos',
    favorites: 'Favoritos',
    settings: 'Ajustes',
    
    // Settings screen
    settingsTitle: 'Ajustes',
    languagePreference: 'Idioma',
    english: 'Inglés',
    spanish: 'Español',
    french: 'Francés',
    german: 'Alemán',
    italian: 'Italiano',
    russian: 'Ruso',
    polish: 'Polaco',
    darkTheme: 'Tema Oscuro',
    about: 'Acerca de',
    version: 'Versión',
    
    // Welcome screen
    welcomeTitle: 'Bienvenido a AniFoodie',
    welcomeDescription: 'Descubre qué alimentos son seguros para tus mascotas',
    howItWorks: 'Cómo funciona',
    welcomeExplanation: 'AniFood te ayuda a descubrir qué alimentos son seguros para tus mascotas y cuáles son potencialmente dañinos.',
    searchByAnimal: 'Buscar por Animal',
    searchByAnimalDescription: 'Selecciona un animal para ver qué alimentos pueden comer, cuáles deberían comer con moderación o cuáles deberían evitar por completo.',
    searchByFood: 'Buscar por Alimento',
    searchByFoodDescription: 'Selecciona un alimento para descubrir qué animales pueden consumirlo de manera segura y cuáles deberían evitarlo.',
    colorKey: 'Código de Colores',
    safeToEat: 'Seguro para comer',
    acceptableInSmallQuantities: 'Aceptable en pequeñas cantidades',
    notAllowedUnsafe: 'No permitido - inseguro',
    disclaimer: 'Aviso Legal',
    disclaimerText: 'La información proporcionada en esta aplicación es solo para fines informativos generales. Siempre consulte con un veterinario antes de introducir nuevos alimentos en la dieta de su mascota.',
    iUnderstand: 'Entiendo',
    
    // Animals Screen
    allAnimals: 'Todos los Animales',
    searchAnimals: 'Buscar animales...',
    selectAnAnimal: 'Seleccionar un Animal',
    searchByAnimalOrCategory: 'Buscar por nombre de animal o categoría...',
    noAnimalsFound: 'No se encontraron animales',
    mammals: 'Mamíferos',
    birds: 'Aves',
    reptiles: 'Reptiles',
    amphibians: 'Anfibios',
    fish: 'Peces',
    
    // Foods Screen
    allFoods: 'Todos los Alimentos',
    searchFoods: 'Buscar alimentos...',
    selectAFood: 'Seleccionar un Alimento',
    searchFoodsOrTypes: 'Buscar alimentos o tipos de alimentos...',
    noFoodsFound: 'No se encontraron alimentos',
    fruits: 'Frutas',
    vegetables: 'Verduras',
    dairy: 'Lácteos',
    grains: 'Granos',
    meat: 'Carne',
    nuts: 'Frutos secos',
    
    // Favorites Screen
    noFavorites: 'Aún no hay favoritos',
    addFavorites: 'Agregar elementos a tus favoritos',
    favoriteAnimals: 'Animales Favoritos',
    favoriteFoods: 'Alimentos Favoritos',
    
    // Animal Detail Screen
    backButton: 'Atrás',
    allowedFoods: 'Alimentos Permitidos',
    acceptableFoods: 'Aceptables en Pequeñas Cantidades',
    notAllowedFoods: 'No Permitidos',
    noAnimalsInCategory: 'No hay animales en esta categoría',
    boiled: 'Hervido',
    
    // Food Detail Screen
    animalsThatCanEat: 'Animales que pueden comer este alimento',
    animalsThatCanEatSmallQuantities: 'Animales que pueden comer este alimento en pequeñas cantidades',
    animalsThatCannotEat: 'Animales que no pueden comer este alimento',
    
    // Common
    save: 'Guardar',
    cancel: 'Cancelar',
    search: 'Buscar',
    loading: 'Cargando...'
  },
  fr: {
    // Tab navigation
    animals: 'Animaux',
    foods: 'Aliments',
    favorites: 'Favoris',
    settings: 'Paramètres',
    
    // Settings screen
    settingsTitle: 'Paramètres',
    languagePreference: 'Langue',
    english: 'Anglais',
    spanish: 'Espagnol',
    french: 'Français',
    german: 'Allemand',
    italian: 'Italien',
    russian: 'Russe',
    polish: 'Polonais',
    darkTheme: 'Thème Sombre',
    about: 'À propos',
    version: 'Version',
    
    // Welcome screen
    welcomeTitle: 'Bienvenue sur AniFoodie',
    welcomeDescription: 'Découvrez quels aliments sont sûrs pour vos animaux',
    howItWorks: 'Comment ça marche',
    welcomeExplanation: 'AniFood vous aide à découvrir quels aliments sont sûrs pour vos animaux et lesquels sont potentiellement nocifs.',
    searchByAnimal: 'Rechercher par Animal',
    searchByAnimalDescription: 'Sélectionnez un animal pour voir quels aliments ils peuvent manger, devraient manger avec modération ou devraient éviter complètement.',
    searchByFood: 'Rechercher par Aliment',
    searchByFoodDescription: 'Sélectionnez un aliment pour découvrir quels animaux peuvent le consommer sans danger et lesquels devraient l\'éviter.',
    colorKey: 'Code Couleur',
    safeToEat: 'Sans danger à manger',
    acceptableInSmallQuantities: 'Acceptable en petites quantités',
    notAllowedUnsafe: 'Non autorisé - dangereux',
    disclaimer: 'Avertissement',
    disclaimerText: 'Les informations fournies dans cette application sont uniquement à titre informatif général. Consultez toujours un vétérinaire avant d\'introduire de nouveaux aliments dans le régime alimentaire de votre animal.',
    iUnderstand: 'Je Comprends',
    
    // Animals Screen
    allAnimals: 'Tous les Animaux',
    searchAnimals: 'Rechercher des animaux...',
    selectAnAnimal: 'Sélectionner un Animal',
    searchByAnimalOrCategory: 'Rechercher par nom d\'animal ou catégorie...',
    noAnimalsFound: 'Aucun animal trouvé',
    mammals: 'Mammifères',
    birds: 'Oiseaux',
    reptiles: 'Reptiles',
    amphibians: 'Amphibiens',
    fish: 'Poissons',
    
    // Foods Screen
    allFoods: 'Tous les Aliments',
    searchFoods: 'Rechercher des aliments...',
    selectAFood: 'Sélectionner un Aliment',
    searchFoodsOrTypes: 'Rechercher des aliments ou types d\'aliments...',
    noFoodsFound: 'Aucun aliment trouvé',
    fruits: 'Fruits',
    vegetables: 'Légumes',
    dairy: 'Produits laitiers',
    grains: 'Céréales',
    meat: 'Viande',
    nuts: 'Noix',
    
    // Favorites Screen
    noFavorites: 'Pas encore de favoris',
    addFavorites: 'Ajouter des éléments à vos favoris',
    favoriteAnimals: 'Animaux Favoris',
    favoriteFoods: 'Aliments Favoris',
    
    // Animal Detail Screen
    backButton: 'Retour',
    allowedFoods: 'Aliments Autorisés',
    acceptableFoods: 'Acceptables en Petites Quantités',
    notAllowedFoods: 'Non Autorisés',
    noAnimalsInCategory: 'Aucun animal dans cette catégorie',
    boiled: 'Bouilli',
    
    // Food Detail Screen
    animalsThatCanEat: 'Animaux qui peuvent manger cet aliment',
    animalsThatCanEatSmallQuantities: 'Animaux qui peuvent manger cet aliment en petites quantités',
    animalsThatCannotEat: 'Animaux qui ne peuvent pas manger cet aliment',
    
    // Common
    save: 'Enregistrer',
    cancel: 'Annuler',
    search: 'Rechercher',
    loading: 'Chargement...'
  },
  de: {
    // Tab navigation
    animals: 'Tiere',
    foods: 'Lebensmittel',
    favorites: 'Favoriten',
    settings: 'Einstellungen',
    
    // Settings screen
    settingsTitle: 'Einstellungen',
    languagePreference: 'Sprache',
    english: 'Englisch',
    spanish: 'Spanisch',
    french: 'Französisch',
    german: 'Deutsch',
    italian: 'Italienisch',
    russian: 'Russisch',
    polish: 'Polnisch',
    darkTheme: 'Dunkles Thema',
    about: 'Über',
    version: 'Version',
    
    // Welcome screen
    welcomeTitle: 'Willkommen bei AniFoodie',
    welcomeDescription: 'Entdecken Sie, welche Lebensmittel für Ihre Haustiere sicher sind',
    howItWorks: 'Wie es funktioniert',
    welcomeExplanation: 'AniFood hilft Ihnen zu entdecken, welche Lebensmittel für Ihre Haustiere sicher sind und welche potenziell schädlich sind.',
    searchByAnimal: 'Nach Tier suchen',
    searchByAnimalDescription: 'Wählen Sie ein Tier aus, um zu sehen, welche Lebensmittel es essen kann, welche es in Maßen essen sollte oder welche es komplett vermeiden sollte.',
    searchByFood: 'Nach Lebensmittel suchen',
    searchByFoodDescription: 'Wählen Sie ein Lebensmittel aus, um zu entdecken, welche Tiere es sicher konsumieren können und welche es vermeiden sollten.',
    colorKey: 'Farbschlüssel',
    safeToEat: 'Sicher zu essen',
    acceptableInSmallQuantities: 'In kleinen Mengen akzeptabel',
    notAllowedUnsafe: 'Nicht erlaubt - unsicher',
    disclaimer: 'Haftungsausschluss',
    disclaimerText: 'Die in dieser App bereitgestellten Informationen dienen nur zu allgemeinen Informationszwecken. Konsultieren Sie immer einen Tierarzt, bevor Sie neue Lebensmittel in die Ernährung Ihres Haustieres einführen.',
    iUnderstand: 'Ich verstehe',
    
    // Animals Screen
    allAnimals: 'Alle Tiere',
    searchAnimals: 'Tiere suchen...',
    selectAnAnimal: 'Ein Tier auswählen',
    searchByAnimalOrCategory: 'Nach Tiername oder Kategorie suchen...',
    noAnimalsFound: 'Keine Tiere gefunden',
    mammals: 'Säugetiere',
    birds: 'Vögel',
    reptiles: 'Reptilien',
    amphibians: 'Amphibien',
    fish: 'Fische',
    
    // Foods Screen
    allFoods: 'Alle Lebensmittel',
    searchFoods: 'Lebensmittel suchen...',
    selectAFood: 'Lebensmittel auswählen',
    searchFoodsOrTypes: 'Lebensmittel oder Lebensmitteltypen suchen...',
    noFoodsFound: 'Keine Lebensmittel gefunden',
    fruits: 'Obst',
    vegetables: 'Gemüse',
    dairy: 'Milchprodukte',
    grains: 'Getreide',
    meat: 'Fleisch',
    nuts: 'Nüsse',
    
    // Favorites Screen
    noFavorites: 'Noch keine Favoriten',
    addFavorites: 'Fügen Sie Elemente zu Ihren Favoriten hinzu',
    favoriteAnimals: 'Lieblingstiere',
    favoriteFoods: 'Lieblingslebensmittel',
    
    // Animal Detail Screen
    backButton: 'Zurück',
    allowedFoods: 'Erlaubte Lebensmittel',
    acceptableFoods: 'In Kleinen Mengen Akzeptabel',
    notAllowedFoods: 'Nicht Erlaubt',
    noAnimalsInCategory: 'Keine Tiere in dieser Kategorie',
    boiled: 'Gekocht',
    
    // Food Detail Screen
    animalsThatCanEat: 'Tiere, die dieses Lebensmittel essen können',
    animalsThatCanEatSmallQuantities: 'Tiere, die dieses Lebensmittel in kleinen Mengen essen können',
    animalsThatCannotEat: 'Tiere, die dieses Lebensmittel nicht essen können',
    
    // Common
    save: 'Speichern',
    cancel: 'Abbrechen',
    search: 'Suchen',
    loading: 'Laden...'
  },
  it: {
    // Tab navigation
    animals: 'Animali',
    foods: 'Cibi',
    favorites: 'Preferiti',
    settings: 'Impostazioni',
    
    // Settings screen
    settingsTitle: 'Impostazioni',
    languagePreference: 'Lingua',
    english: 'Inglese',
    spanish: 'Spagnolo',
    french: 'Francese',
    german: 'Tedesco',
    italian: 'Italiano',
    russian: 'Russo',
    polish: 'Polacco',
    darkTheme: 'Tema Scuro',
    about: 'Informazioni',
    version: 'Versione',
    
    // Welcome screen
    welcomeTitle: 'Benvenuto in AniFoodie',
    welcomeDescription: 'Scopri quali cibi sono sicuri per i tuoi animali domestici',
    howItWorks: 'Come funziona',
    welcomeExplanation: 'AniFood ti aiuta a scoprire quali cibi sono sicuri per i tuoi animali domestici e quali sono potenzialmente dannosi.',
    searchByAnimal: 'Cerca per Animale',
    searchByAnimalDescription: 'Seleziona un animale per vedere quali cibi possono mangiare, quali dovrebbero mangiare con moderazione o quali dovrebbero evitare completamente.',
    searchByFood: 'Cerca per Cibo',
    searchByFoodDescription: 'Seleziona un alimento per scoprire quali animali possono consumarlo in sicurezza e quali dovrebbero evitarlo.',
    colorKey: 'Legenda Colori',
    safeToEat: 'Sicuro da mangiare',
    acceptableInSmallQuantities: 'Accettabile in piccole quantità',
    notAllowedUnsafe: 'Non consentito - non sicuro',
    disclaimer: 'Avvertenza',
    disclaimerText: 'Le informazioni fornite in questa app sono solo a scopo informativo generale. Consultare sempre un veterinario prima di introdurre nuovi alimenti nella dieta del vostro animale domestico.',
    iUnderstand: 'Ho Capito',
    
    // Animals Screen
    allAnimals: 'Tutti gli Animali',
    searchAnimals: 'Cerca animali...',
    selectAnAnimal: 'Seleziona un Animale',
    searchByAnimalOrCategory: 'Cerca per nome o categoria di animale...',
    noAnimalsFound: 'Nessun animale trovato',
    mammals: 'Mammiferi',
    birds: 'Uccelli',
    reptiles: 'Rettili',
    amphibians: 'Anfibi',
    fish: 'Pesci',
    
    // Foods Screen
    allFoods: 'Tutti i Cibi',
    searchFoods: 'Cerca cibi...',
    selectAFood: 'Seleziona un Cibo',
    searchFoodsOrTypes: 'Cerca cibi o tipi di cibo...',
    noFoodsFound: 'Nessun cibo trovato',
    fruits: 'Frutta',
    vegetables: 'Verdura',
    dairy: 'Latticini',
    grains: 'Cereali',
    meat: 'Carne',
    nuts: 'Frutta secca',
    
    // Favorites Screen
    noFavorites: 'Ancora nessun preferito',
    addFavorites: 'Aggiungi elementi ai tuoi preferiti',
    favoriteAnimals: 'Animali Preferiti',
    favoriteFoods: 'Cibi Preferiti',
    
    // Animal Detail Screen
    backButton: 'Indietro',
    allowedFoods: 'Cibi Permessi',
    acceptableFoods: 'Accettabili in Piccole Quantità',
    notAllowedFoods: 'Non Permessi',
    noAnimalsInCategory: 'Nessun animale in questa categoria',
    boiled: 'Bollito',
    
    // Food Detail Screen
    animalsThatCanEat: 'Animali che possono mangiare questo cibo',
    animalsThatCanEatSmallQuantities: 'Animali che possono mangiare questo cibo in piccole quantità',
    animalsThatCannotEat: 'Animali che non possono mangiare questo cibo',
    
    // Common
    save: 'Salva',
    cancel: 'Annulla',
    search: 'Cerca',
    loading: 'Caricamento...'
  },
  ru: {
    // Tab navigation
    animals: 'Животные',
    foods: 'Продукты',
    favorites: 'Избранное',
    settings: 'Настройки',
    
    // Settings screen
    settingsTitle: 'Настройки',
    languagePreference: 'Язык',
    english: 'Английский',
    spanish: 'Испанский',
    french: 'Французский',
    german: 'Немецкий',
    italian: 'Итальянский',
    russian: 'Русский',
    polish: 'Польский',
    darkTheme: 'Тёмная тема',
    about: 'О приложении',
    version: 'Версия',
    
    // Welcome screen
    welcomeTitle: 'Добро пожаловать в AniFoodie',
    welcomeDescription: 'Узнайте, какие продукты безопасны для ваших питомцев',
    howItWorks: 'Как это работает',
    welcomeExplanation: 'AniFood помогает вам узнать, какие продукты безопасны для ваших питомцев, а какие потенциально опасны.',
    searchByAnimal: 'Поиск по животному',
    searchByAnimalDescription: 'Выберите животное, чтобы узнать, какие продукты они могут есть, какие следует есть умеренно или каких следует избегать полностью.',
    searchByFood: 'Поиск по продукту',
    searchByFoodDescription: 'Выберите продукт, чтобы узнать, какие животные могут безопасно его употреблять, а каким следует его избегать.',
    colorKey: 'Обозначение цветов',
    safeToEat: 'Безопасно для употребления',
    acceptableInSmallQuantities: 'Приемлемо в малых количествах',
    notAllowedUnsafe: 'Не разрешено - небезопасно',
    disclaimer: 'Отказ от ответственности',
    disclaimerText: 'Информация, представленная в этом приложении, предназначена только для общих информационных целей. Всегда консультируйтесь с ветеринаром перед введением новых продуктов в рацион вашего питомца.',
    iUnderstand: 'Я понимаю',
    
    // Animals Screen
    allAnimals: 'Все животные',
    searchAnimals: 'Поиск животных...',
    selectAnAnimal: 'Выберите животное',
    searchByAnimalOrCategory: 'Поиск по названию животного или категории...',
    noAnimalsFound: 'Животные не найдены',
    mammals: 'Млекопитающие',
    birds: 'Птицы',
    reptiles: 'Рептилии',
    amphibians: 'Амфибии',
    fish: 'Рыбы',
    
    // Foods Screen
    allFoods: 'Все продукты',
    searchFoods: 'Поиск продуктов...',
    selectAFood: 'Выберите продукт',
    searchFoodsOrTypes: 'Поиск продуктов или типов продуктов...',
    noFoodsFound: 'Продукты не найдены',
    fruits: 'Фрукты',
    vegetables: 'Овощи',
    dairy: 'Молочные продукты',
    grains: 'Зерновые',
    meat: 'Мясо',
    nuts: 'Орехи',
    
    // Favorites Screen
    noFavorites: 'Пока нет избранного',
    addFavorites: 'Добавить элементы в избранное',
    favoriteAnimals: 'Избранные животные',
    favoriteFoods: 'Избранные продукты',
    
    // Animal Detail Screen
    backButton: 'Назад',
    allowedFoods: 'Разрешённые продукты',
    acceptableFoods: 'Приемлемо в малых количествах',
    notAllowedFoods: 'Запрещённые продукты',
    noAnimalsInCategory: 'В этой категории нет животных',
    boiled: 'Варёный',
    
    // Food Detail Screen
    animalsThatCanEat: 'Животные, которые могут есть этот продукт',
    animalsThatCanEatSmallQuantities: 'Животные, которые могут есть этот продукт в малых количествах',
    animalsThatCannotEat: 'Животные, которые не могут есть этот продукт',
    
    // Common
    save: 'Сохранить',
    cancel: 'Отмена',
    search: 'Поиск',
    loading: 'Загрузка...'
  },
  pl: {
    // Tab navigation
    animals: 'Zwierzęta',
    foods: 'Produkty',
    favorites: 'Ulubione',
    settings: 'Ustawienia',
    
    // Settings screen
    settingsTitle: 'Ustawienia',
    languagePreference: 'Język',
    english: 'Angielski',
    spanish: 'Hiszpański',
    french: 'Francuski',
    german: 'Niemiecki',
    italian: 'Włoski',
    russian: 'Rosyjski',
    polish: 'Polski',
    darkTheme: 'Ciemny motyw',
    about: 'O aplikacji',
    version: 'Wersja',
    
    // Welcome screen
    welcomeTitle: 'Witaj w AniFoodie',
    welcomeDescription: 'Odkryj, które produkty są bezpieczne dla Twoich zwierząt',
    howItWorks: 'Jak to działa',
    welcomeExplanation: 'AniFood pomaga Ci odkryć, które produkty są bezpieczne dla Twoich zwierząt, a które potencjalnie szkodliwe.',
    searchByAnimal: 'Szukaj według zwierzęcia',
    searchByAnimalDescription: 'Wybierz zwierzę, aby zobaczyć, jakie produkty może jeść, które powinno jeść z umiarem lub których powinno całkowicie unikać.',
    searchByFood: 'Szukaj według produktu',
    searchByFoodDescription: 'Wybierz produkt, aby odkryć, które zwierzęta mogą go bezpiecznie spożywać, a które powinny go unikać.',
    colorKey: 'Oznaczenia kolorów',
    safeToEat: 'Bezpieczne do jedzenia',
    acceptableInSmallQuantities: 'Akceptowalne w małych ilościach',
    notAllowedUnsafe: 'Niedozwolone - niebezpieczne',
    disclaimer: 'Zastrzeżenie',
    disclaimerText: 'Informacje zawarte w tej aplikacji służą wyłącznie ogólnym celom informacyjnym. Zawsze konsultuj się z weterynarzem przed wprowadzeniem nowych produktów do diety swojego zwierzęcia.',
    iUnderstand: 'Rozumiem',
    
    // Animals Screen
    allAnimals: 'Wszystkie zwierzęta',
    searchAnimals: 'Szukaj zwierząt...',
    selectAnAnimal: 'Wybierz zwierzę',
    searchByAnimalOrCategory: 'Szukaj według nazwy zwierzęcia lub kategorii...',
    noAnimalsFound: 'Nie znaleziono zwierząt',
    mammals: 'Ssaki',
    birds: 'Ptaki',
    reptiles: 'Gady',
    amphibians: 'Płazy',
    fish: 'Ryby',
    
    // Foods Screen
    allFoods: 'Wszystkie produkty',
    searchFoods: 'Szukaj produktów...',
    selectAFood: 'Wybierz produkt',
    searchFoodsOrTypes: 'Szukaj produktów lub rodzajów produktów...',
    noFoodsFound: 'Nie znaleziono produktów',
    fruits: 'Owoce',
    vegetables: 'Warzywa',
    dairy: 'Nabiał',
    grains: 'Zboża',
    meat: 'Mięso',
    nuts: 'Orzechy',
    
    // Favorites Screen
    noFavorites: 'Brak ulubionych',
    addFavorites: 'Dodaj elementy do ulubionych',
    favoriteAnimals: 'Ulubione zwierzęta',
    favoriteFoods: 'Ulubione produkty',
    
    // Animal Detail Screen
    backButton: 'Wstecz',
    allowedFoods: 'Dozwolone produkty',
    acceptableFoods: 'Akceptowalne w małych ilościach',
    notAllowedFoods: 'Niedozwolone',
    noAnimalsInCategory: 'Brak zwierząt w tej kategorii',
    boiled: 'Gotowane',
    
    // Food Detail Screen
    animalsThatCanEat: 'Zwierzęta, które mogą jeść ten produkt',
    animalsThatCanEatSmallQuantities: 'Zwierzęta, które mogą jeść ten produkt w małych ilościach',
    animalsThatCannotEat: 'Zwierzęta, które nie mogą jeść tego produktu',
    
    // Common
    save: 'Zapisz',
    cancel: 'Anuluj',
    search: 'Szukaj',
    loading: 'Ładowanie...'
  }
};

export const getTranslation = (key: TranslationKey, language: Language): string => {
  return translations[language][key] || translations.en[key];
};

export const useTranslations = (language: Language) => {
  return {
    t: (key: TranslationKey) => getTranslation(key, language)
  };
};
