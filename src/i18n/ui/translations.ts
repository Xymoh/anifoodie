import { Language } from "../../hooks/useLanguage";

export type TranslationKey =
  // Tab navigation
  | "animals"
  | "foods"
  | "favorites"
  | "settings"

  // Settings screen
  | "settingsTitle"
  | "languagePreference"
  | "english"
  | "spanish"
  | "french"
  | "german"
  | "italian"
  | "russian"
  | "polish"
  | "darkTheme"
  | "about"
  | "version"
  | "aboutTheApp"
  | "howToUseApp"

  // Welcome screen
  | "welcomeTitle"
  | "welcomeDescription"
  | "howItWorks"
  | "welcomeExplanation"
  | "searchByAnimal"
  | "searchByAnimalDescription"
  | "searchByFood"
  | "searchByFoodDescription"
  | "colorKey"
  | "safeToEat"
  | "acceptableInSmallQuantities"
  | "smallQty"
  | "notAllowedUnsafe"
  | "boiledIconTitle"
  | "boiledIconDescription"
  | "disclaimer"
  | "disclaimerText"
  | "iUnderstand"

  // Splash screen
  | "appName"
  | "appSubtitle"
  | "appTagline"
  | "poweredBy"

  // Animals Screen
  | "allAnimals"
  | "searchAnimals"
  | "selectAnAnimal"
  | "searchByAnimalOrCategory"
  | "noAnimalsFound"
  | "mammals"
  | "birds"
  | "reptiles"
  | "amphibians"
  | "fish"

  // Foods Screen
  | "allFoods"
  | "searchFoods"
  | "selectAFood"
  | "searchFoodsOrTypes"
  | "noFoodsFound"
  | "fruits"
  | "vegetables"
  | "dairy"
  | "grains"
  | "meat"
  | "nuts"

  // Favorites Screen
  | "noFavorites"
  | "addFavorites"
  | "favoriteAnimals"
  | "favoriteFoods"

  // Animal Detail Screen
  | "backButton"
  | "allowedFoods"
  | "acceptableFoods"
  | "notAllowedFoods"
  | "noAnimalsInCategory"
  | "boiled"

  // Food Detail Screen
  | "animalsThatCanEat"
  | "animalsThatCanEatSmallQuantities"
  | "animalsThatCannotEat"

  // Legal
  | "privacyPolicy"
  | "termsOfService"
  | "legalTitle"
  | "privacyPolicyTitle"
  | "privacyPolicyIntro"
  | "privacyPolicyDataCollection"
  | "privacyPolicyDataCollectionBody"
  | "privacyPolicyAds"
  | "privacyPolicyAdsBody"
  | "privacyPolicyChildren"
  | "privacyPolicyChildrenBody"
  | "privacyPolicyChanges"
  | "privacyPolicyChangesBody"
  | "privacyPolicyContact"
  | "privacyPolicyContactBody"
  | "termsOfServiceTitle"
  | "termsOfServiceIntro"
  | "termsOfServiceUse"
  | "termsOfServiceUseBody"
  | "termsOfServiceDisclaimer"
  | "termsOfServiceDisclaimerBody"
  | "termsOfServiceLiability"
  | "termsOfServiceLiabilityBody"
  | "termsOfServiceChanges"
  | "termsOfServiceChangesBody"
  | "termsOfServiceContact"
  | "termsOfServiceContactBody"
  | "lastUpdated"

  // Common
  | "save"
  | "cancel"
  | "search"
  | "loading";

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    animals: "Animals",
    foods: "Foods",
    favorites: "Favorites",
    settings: "Settings",
    settingsTitle: "Settings",
    languagePreference: "Language",
    english: "English",
    spanish: "Spanish",
    french: "French",
    german: "German",
    italian: "Italian",
    russian: "Russian",
    polish: "Polish",
    darkTheme: "Dark Theme",
    about: "About",
    version: "Version",
    aboutTheApp: "About the App",
    howToUseApp: "How to Use the App",
    welcomeTitle: "Welcome to AniFoodie",
    welcomeDescription: "Discover what foods are safe for your pets",
    howItWorks: "How it works",
    welcomeExplanation:
      "AniFood helps you discover which foods are safe for your pets and which are potentially harmful.",
    searchByAnimal: "Search by Animal",
    searchByAnimalDescription:
      "Select an animal to see what foods they can eat, should eat in moderation, or should avoid completely.",
    searchByFood: "Search by Food",
    searchByFoodDescription:
      "Select a food item to discover which animals can safely consume it and which should avoid it.",
    colorKey: "Color Key",
    safeToEat: "Safe to eat",
    acceptableInSmallQuantities: "Acceptable in small quantities",
    smallQty: "Small qty",
    notAllowedUnsafe: "Not allowed - unsafe",
    boiledIconTitle: "Boiled Icon",
    boiledIconDescription:
      "Some foods are only safe when boiled or cooked. Look for this icon on food items.",
    disclaimer: "Disclaimer",
    disclaimerText:
      "The information provided in this app is for general informational purposes only. Always consult with a veterinarian before introducing new foods to your pet's diet.",
    iUnderstand: "I Understand",
    appName: "PetPlate",
    appSubtitle: "Smart Pet Nutrition Guide",
    appTagline: "Keep your pets safe & healthy",
    poweredBy: "Powered by Pet Lovers",
    allAnimals: "All Animals",
    searchAnimals: "Search animals...",
    selectAnAnimal: "Select an Animal",
    searchByAnimalOrCategory: "Search by animal name or category...",
    noAnimalsFound: "No animals found",
    mammals: "Mammals",
    birds: "Birds",
    reptiles: "Reptiles",
    amphibians: "Amphibians",
    fish: "Fish",
    allFoods: "All Foods",
    searchFoods: "Search foods...",
    selectAFood: "Select a Food",
    searchFoodsOrTypes: "Search foods or food types...",
    noFoodsFound: "No foods found",
    fruits: "Fruits",
    vegetables: "Vegetables",
    dairy: "Dairy",
    grains: "Grains",
    meat: "Meat",
    nuts: "Nuts",
    noFavorites: "No favorites yet",
    addFavorites: "Add items to your favorites",
    favoriteAnimals: "Favorite Animals",
    favoriteFoods: "Favorite Foods",
    backButton: "Back",
    allowedFoods: "Allowed Foods",
    acceptableFoods: "Acceptable in Small Quantities",
    notAllowedFoods: "Not Allowed",
    noAnimalsInCategory: "No animals in this category",
    boiled: "Boiled",
    animalsThatCanEat: "Animals that can eat this food",
    animalsThatCanEatSmallQuantities:
      "Animals that can eat this food in small quantities",
    animalsThatCannotEat: "Animals that cannot eat this food",
    save: "Save",
    cancel: "Cancel",
    search: "Search",
    loading: "Loading...",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    legalTitle: "Legal",
    lastUpdated: "Last updated: February 22, 2026",
    privacyPolicyTitle: "Privacy Policy",
    privacyPolicyIntro:
      'AniFoodie ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our mobile application.',
    privacyPolicyDataCollection: "Information We Collect",
    privacyPolicyDataCollectionBody:
      "AniFoodie does not collect, store, or transmit any personally identifiable information. All your data (favorites, language preferences) is stored locally on your device only and is never sent to our servers.",
    privacyPolicyAds: "Advertising",
    privacyPolicyAdsBody:
      "We use Google AdMob to display advertisements. AdMob may collect certain device information and use cookies to serve personalized ads. You can review Google's Privacy Policy at https://policies.google.com/privacy. If you are in the EU/EEA, ads are served in a privacy-safe manner compliant with GDPR.",
    privacyPolicyChildren: "Children's Privacy",
    privacyPolicyChildrenBody:
      "Our app is not directed to children under the age of 13. We do not knowingly collect personal information from children. Our ad configuration is set to family-safe content.",
    privacyPolicyChanges: "Changes to This Policy",
    privacyPolicyChangesBody:
      'We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date in this policy. Continued use of the app after changes constitutes your acceptance of the new policy.',
    privacyPolicyContact: "Contact Us",
    privacyPolicyContactBody:
      "If you have any questions about this Privacy Policy, please contact us at: anifoodie.app@gmail.com",
    termsOfServiceTitle: "Terms of Service",
    termsOfServiceIntro:
      "By downloading or using AniFoodie, you agree to be bound by these Terms of Service. Please read them carefully.",
    termsOfServiceUse: "Acceptable Use",
    termsOfServiceUseBody:
      "AniFoodie is provided for personal, non-commercial use only. You may not copy, modify, distribute, sell, or lease any part of the app or its content.",
    termsOfServiceDisclaimer: "Medical Disclaimer",
    termsOfServiceDisclaimerBody:
      "The food safety information in AniFoodie is for general informational purposes only and does not constitute veterinary advice. Always consult a qualified veterinarian before making dietary changes for your pet. We are not liable for any harm resulting from reliance on the app's content.",
    termsOfServiceLiability: "Limitation of Liability",
    termsOfServiceLiabilityBody:
      "To the fullest extent permitted by law, AniFoodie and its developers shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the app.",
    termsOfServiceChanges: "Changes to Terms",
    termsOfServiceChangesBody:
      "We reserve the right to modify these Terms at any time. Your continued use of the app after changes are posted constitutes your acceptance of the revised Terms.",
    termsOfServiceContact: "Contact",
    termsOfServiceContactBody:
      "For any questions regarding these Terms, contact us at: anifoodie.app@gmail.com",
  },
  es: {
    animals: "Animales",
    foods: "Alimentos",
    favorites: "Favoritos",
    settings: "Ajustes",
    settingsTitle: "Ajustes",
    languagePreference: "Idioma",
    english: "Inglés",
    spanish: "Español",
    french: "Francés",
    german: "Alemán",
    italian: "Italiano",
    russian: "Ruso",
    polish: "Polaco",
    darkTheme: "Tema Oscuro",
    about: "Acerca de",
    version: "Versión",
    aboutTheApp: "Acerca de la App",
    howToUseApp: "Cómo usar la App",
    welcomeTitle: "Bienvenido a AniFoodie",
    welcomeDescription: "Descubre qué alimentos son seguros para tus mascotas",
    howItWorks: "Cómo funciona",
    welcomeExplanation:
      "AniFood te ayuda a descubrir qué alimentos son seguros para tus mascotas y cuáles son potencialmente dañinos.",
    searchByAnimal: "Buscar por Animal",
    searchByAnimalDescription:
      "Selecciona un animal para ver qué alimentos pueden comer, cuáles deberían comer con moderación o cuáles deberían evitar por completo.",
    searchByFood: "Buscar por Alimento",
    searchByFoodDescription:
      "Selecciona un alimento para descubrir qué animales pueden consumirlo de manera segura y cuáles deberían evitarlo.",
    colorKey: "Código de Colores",
    safeToEat: "Seguro para comer",
    acceptableInSmallQuantities: "Aceptable en pequeñas cantidades",
    smallQty: "Peq. cant.",
    notAllowedUnsafe: "No permitido - inseguro",
    boiledIconTitle: "Icono de Hervido",
    boiledIconDescription:
      "Algunos alimentos solo son seguros cuando están hervidos o cocinados. Busca este icono en los alimentos.",
    disclaimer: "Aviso Legal",
    disclaimerText:
      "La información proporcionada en esta aplicación es solo para fines informativos generales. Siempre consulte con un veterinario antes de introducir nuevos alimentos en la dieta de su mascota.",
    iUnderstand: "Entiendo",
    appName: "PetPlate",
    appSubtitle: "Guía Inteligente de Nutrición para Mascotas",
    appTagline: "Mantén a tus mascotas seguras y saludables",
    poweredBy: "Impulsado por Amantes de Mascotas",
    allAnimals: "Todos los Animales",
    searchAnimals: "Buscar animales...",
    selectAnAnimal: "Seleccionar un Animal",
    searchByAnimalOrCategory: "Buscar por nombre de animal o categoría...",
    noAnimalsFound: "No se encontraron animales",
    mammals: "Mamíferos",
    birds: "Aves",
    reptiles: "Reptiles",
    amphibians: "Anfibios",
    fish: "Peces",
    allFoods: "Todos los Alimentos",
    searchFoods: "Buscar alimentos...",
    selectAFood: "Seleccionar un Alimento",
    searchFoodsOrTypes: "Buscar alimentos o tipos de alimentos...",
    noFoodsFound: "No se encontraron alimentos",
    fruits: "Frutas",
    vegetables: "Verduras",
    dairy: "Lácteos",
    grains: "Granos",
    meat: "Carne",
    nuts: "Frutos secos",
    noFavorites: "Aún no hay favoritos",
    addFavorites: "Agregar elementos a tus favoritos",
    favoriteAnimals: "Animales Favoritos",
    favoriteFoods: "Alimentos Favoritos",
    backButton: "Atrás",
    allowedFoods: "Alimentos Permitidos",
    acceptableFoods: "Aceptables en Pequeñas Cantidades",
    notAllowedFoods: "No Permitidos",
    noAnimalsInCategory: "No hay animales en esta categoría",
    boiled: "Hervido",
    animalsThatCanEat: "Animales que pueden comer este alimento",
    animalsThatCanEatSmallQuantities:
      "Animales que pueden comer este alimento en pequeñas cantidades",
    animalsThatCannotEat: "Animales que no pueden comer este alimento",
    save: "Guardar",
    cancel: "Cancelar",
    search: "Buscar",
    loading: "Cargando...",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    legalTitle: "Legal",
    lastUpdated: "Última actualización: 22 de febrero de 2026",
    privacyPolicyTitle: "Política de Privacidad",
    privacyPolicyIntro:
      'AniFoodie ("nosotros") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo manejamos la información cuando utiliza nuestra aplicación móvil.',
    privacyPolicyDataCollection: "Información que recopilamos",
    privacyPolicyDataCollectionBody:
      "AniFoodie no recopila, almacena ni transmite información de identificación personal. Todos sus datos (favoritos, preferencias de idioma) se almacenan localmente en su dispositivo y nunca se envían a nuestros servidores.",
    privacyPolicyAds: "Publicidad",
    privacyPolicyAdsBody:
      "Utilizamos Google AdMob para mostrar anuncios. AdMob puede recopilar cierta información del dispositivo y usar cookies para servir anuncios personalizados. Puede revisar la Política de Privacidad de Google en https://policies.google.com/privacy.",
    privacyPolicyChildren: "Privacidad de los niños",
    privacyPolicyChildrenBody:
      "Nuestra aplicación no está dirigida a niños menores de 13 años. No recopilamos información personal de niños intencionalmente.",
    privacyPolicyChanges: "Cambios en esta política",
    privacyPolicyChangesBody:
      'Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos de cualquier cambio actualizando la fecha de "Última actualización" en esta política.',
    privacyPolicyContact: "Contáctenos",
    privacyPolicyContactBody:
      "Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos en: anifoodie.app@gmail.com",
    termsOfServiceTitle: "Términos de Servicio",
    termsOfServiceIntro:
      "Al descargar o utilizar AniFoodie, acepta estar sujeto a estos Términos de Servicio. Por favor, léalos cuidadosamente.",
    termsOfServiceUse: "Uso aceptable",
    termsOfServiceUseBody:
      "AniFoodie se proporciona únicamente para uso personal y no comercial. No puede copiar, modificar, distribuir, vender o arrendar ninguna parte de la aplicación.",
    termsOfServiceDisclaimer: "Aviso médico",
    termsOfServiceDisclaimerBody:
      "La información sobre seguridad alimentaria en AniFoodie es solo para fines informativos y no constituye asesoramiento veterinario. Siempre consulte a un veterinario calificado antes de realizar cambios en la dieta de su mascota.",
    termsOfServiceLiability: "Limitación de responsabilidad",
    termsOfServiceLiabilityBody:
      "En la medida máxima permitida por la ley, AniFoodie y sus desarrolladores no serán responsables de ningún daño indirecto, incidental o consecuente derivado del uso de la aplicación.",
    termsOfServiceChanges: "Cambios en los términos",
    termsOfServiceChangesBody:
      "Nos reservamos el derecho de modificar estos Términos en cualquier momento. El uso continuado de la aplicación después de los cambios constituye su aceptación.",
    termsOfServiceContact: "Contacto",
    termsOfServiceContactBody:
      "Para cualquier pregunta sobre estos Términos, contáctenos en: anifoodie.app@gmail.com",
  },
  fr: {
    animals: "Animaux",
    foods: "Aliments",
    favorites: "Favoris",
    settings: "Paramètres",
    settingsTitle: "Paramètres",
    languagePreference: "Langue",
    english: "Anglais",
    spanish: "Espagnol",
    french: "Français",
    german: "Allemand",
    italian: "Italien",
    russian: "Russe",
    polish: "Polonais",
    darkTheme: "Thème Sombre",
    about: "À propos",
    version: "Version",
    aboutTheApp: "À propos de l'application",
    howToUseApp: "Comment utiliser l'application",
    welcomeTitle: "Bienvenue sur AniFoodie",
    welcomeDescription: "Découvrez quels aliments sont sûrs pour vos animaux",
    howItWorks: "Comment ça marche",
    welcomeExplanation:
      "AniFood vous aide à découvrir quels aliments sont sûrs pour vos animaux et lesquels sont potentiellement nocifs.",
    searchByAnimal: "Rechercher par Animal",
    searchByAnimalDescription:
      "Sélectionnez un animal pour voir quels aliments ils peuvent manger, devraient manger avec modération ou devraient éviter complètement.",
    searchByFood: "Rechercher par Aliment",
    searchByFoodDescription:
      "Sélectionnez un aliment pour découvrir quels animaux peuvent le consommer sans danger et lesquels devraient l'éviter.",
    colorKey: "Code Couleur",
    safeToEat: "Sans danger à manger",
    acceptableInSmallQuantities: "Acceptable en petites quantités",
    smallQty: "Pet. qté",
    notAllowedUnsafe: "Non autorisé - dangereux",
    boiledIconTitle: "Icône de Bouilli",
    boiledIconDescription:
      "Certains aliments ne sont sûrs que lorsqu'ils sont bouillis ou cuits. Cherchez cette icône sur les aliments.",
    disclaimer: "Avertissement",
    disclaimerText:
      "Les informations fournies dans cette application sont uniquement à titre informatif général. Consultez toujours un vétérinaire avant d'introduire de nouveaux aliments dans le régime alimentaire de votre animal.",
    iUnderstand: "Je Comprends",
    appName: "PetPlate",
    appSubtitle: "Guide Intelligent de Nutrition pour Animaux",
    appTagline: "Gardez vos animaux en sécurité et en bonne santé",
    poweredBy: "Propulsé par des Amoureux des Animaux",
    allAnimals: "Tous les Animaux",
    searchAnimals: "Rechercher des animaux...",
    selectAnAnimal: "Sélectionner un Animal",
    searchByAnimalOrCategory: "Rechercher par nom d'animal ou catégorie...",
    noAnimalsFound: "Aucun animal trouvé",
    mammals: "Mammifères",
    birds: "Oiseaux",
    reptiles: "Reptiles",
    amphibians: "Amphibiens",
    fish: "Poissons",
    allFoods: "Tous les Aliments",
    searchFoods: "Rechercher des aliments...",
    selectAFood: "Sélectionner un Aliment",
    searchFoodsOrTypes: "Rechercher des aliments ou types d'aliments...",
    noFoodsFound: "Aucun aliment trouvé",
    fruits: "Fruits",
    vegetables: "Légumes",
    dairy: "Produits laitiers",
    grains: "Céréales",
    meat: "Viande",
    nuts: "Noix",
    noFavorites: "Pas encore de favoris",
    addFavorites: "Ajouter des éléments à vos favoris",
    favoriteAnimals: "Animaux Favoris",
    favoriteFoods: "Aliments Favoris",
    backButton: "Retour",
    allowedFoods: "Aliments Autorisés",
    acceptableFoods: "Acceptables en Petites Quantités",
    notAllowedFoods: "Non Autorisés",
    noAnimalsInCategory: "Aucun animal dans cette catégorie",
    boiled: "Bouilli",
    animalsThatCanEat: "Animaux qui peuvent manger cet aliment",
    animalsThatCanEatSmallQuantities:
      "Animaux qui peuvent manger cet aliment en petites quantités",
    animalsThatCannotEat: "Animaux qui ne peuvent pas manger cet aliment",
    save: "Enregistrer",
    cancel: "Annuler",
    search: "Rechercher",
    loading: "Chargement...",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'Utilisation",
    legalTitle: "Mentions Légales",
    lastUpdated: "Dernière mise à jour : 22 février 2026",
    privacyPolicyTitle: "Politique de Confidentialité",
    privacyPolicyIntro:
      'AniFoodie ("nous") s\'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous traitons les informations lorsque vous utilisez notre application mobile.',
    privacyPolicyDataCollection: "Informations que nous collectons",
    privacyPolicyDataCollectionBody:
      "AniFoodie ne collecte, ne stocke ni ne transmet aucune information personnelle identifiable. Toutes vos données (favoris, préférences de langue) sont stockées localement sur votre appareil et ne sont jamais envoyées à nos serveurs.",
    privacyPolicyAds: "Publicité",
    privacyPolicyAdsBody:
      "Nous utilisons Google AdMob pour afficher des publicités. AdMob peut collecter certaines informations sur l'appareil et utiliser des cookies pour diffuser des annonces personnalisées. Vous pouvez consulter la Politique de Confidentialité de Google sur https://policies.google.com/privacy.",
    privacyPolicyChildren: "Confidentialité des enfants",
    privacyPolicyChildrenBody:
      "Notre application n'est pas destinée aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants.",
    privacyPolicyChanges: "Modifications de cette politique",
    privacyPolicyChangesBody:
      'Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps. Nous vous informerons de tout changement en mettant à jour la date de "Dernière mise à jour" dans cette politique.',
    privacyPolicyContact: "Nous contacter",
    privacyPolicyContactBody:
      "Si vous avez des questions sur cette Politique de Confidentialité, contactez-nous à : anifoodie.app@gmail.com",
    termsOfServiceTitle: "Conditions d'Utilisation",
    termsOfServiceIntro:
      "En téléchargeant ou en utilisant AniFoodie, vous acceptez d'être lié par ces Conditions d'Utilisation. Veuillez les lire attentivement.",
    termsOfServiceUse: "Utilisation acceptable",
    termsOfServiceUseBody:
      "AniFoodie est fourni uniquement à des fins personnelles et non commerciales. Vous ne pouvez pas copier, modifier, distribuer, vendre ou louer une partie de l'application.",
    termsOfServiceDisclaimer: "Avertissement médical",
    termsOfServiceDisclaimerBody:
      "Les informations sur la sécurité alimentaire dans AniFoodie sont uniquement à titre informatif et ne constituent pas un conseil vétérinaire. Consultez toujours un vétérinaire qualifié avant de modifier le régime alimentaire de votre animal.",
    termsOfServiceLiability: "Limitation de responsabilité",
    termsOfServiceLiabilityBody:
      "Dans toute la mesure permise par la loi, AniFoodie et ses développeurs ne seront pas responsables des dommages indirects, accessoires ou consécutifs résultant de l'utilisation de l'application.",
    termsOfServiceChanges: "Modifications des conditions",
    termsOfServiceChangesBody:
      "Nous nous réservons le droit de modifier ces Conditions à tout moment. Votre utilisation continue de l'application après les modifications constitue votre acceptation.",
    termsOfServiceContact: "Contact",
    termsOfServiceContactBody:
      "Pour toute question concernant ces Conditions, contactez-nous à : anifoodie.app@gmail.com",
  },
  de: {
    animals: "Tiere",
    foods: "Lebensmittel",
    favorites: "Favoriten",
    settings: "Einstellungen",
    settingsTitle: "Einstellungen",
    languagePreference: "Sprache",
    english: "Englisch",
    spanish: "Spanisch",
    french: "Französisch",
    german: "Deutsch",
    italian: "Italienisch",
    russian: "Russisch",
    polish: "Polnisch",
    darkTheme: "Dunkles Thema",
    about: "Über",
    version: "Version",
    aboutTheApp: "Über die App",
    howToUseApp: "Wie man die App benutzt",
    welcomeTitle: "Willkommen bei AniFoodie",
    welcomeDescription:
      "Entdecken Sie, welche Lebensmittel für Ihre Haustiere sicher sind",
    howItWorks: "Wie es funktioniert",
    welcomeExplanation:
      "AniFood hilft Ihnen zu entdecken, welche Lebensmittel für Ihre Haustiere sicher sind und welche potenziell schädlich sind.",
    searchByAnimal: "Nach Tier suchen",
    searchByAnimalDescription:
      "Wählen Sie ein Tier aus, um zu sehen, welche Lebensmittel es essen kann, welche es in Maßen essen sollte oder welche es komplett vermeiden sollte.",
    searchByFood: "Nach Lebensmittel suchen",
    searchByFoodDescription:
      "Wählen Sie ein Lebensmittel aus, um zu entdecken, welche Tiere es sicher konsumieren können und welche es vermeiden sollten.",
    colorKey: "Farbschlüssel",
    safeToEat: "Sicher zu essen",
    acceptableInSmallQuantities: "In kleinen Mengen akzeptabel",
    smallQty: "Kleine Menge",
    notAllowedUnsafe: "Nicht erlaubt - unsicher",
    boiledIconTitle: "Gekochtes Symbol",
    boiledIconDescription:
      "Einige Lebensmittel sind nur sicher, wenn sie gekocht oder zubereitet werden. Achten Sie auf dieses Symbol bei Lebensmitteln.",
    disclaimer: "Haftungsausschluss",
    disclaimerText:
      "Die in dieser App bereitgestellten Informationen dienen nur zu allgemeinen Informationszwecken. Konsultieren Sie immer einen Tierarzt, bevor Sie neue Lebensmittel in die Ernährung Ihres Haustieres einführen.",
    iUnderstand: "Ich verstehe",
    appName: "PetPlate",
    appSubtitle: "Intelligenter Haustier-Ernährungsführer",
    appTagline: "Halten Sie Ihre Haustiere sicher & gesund",
    poweredBy: "Unterstützt von Tierliebhabern",
    allAnimals: "Alle Tiere",
    searchAnimals: "Tiere suchen...",
    selectAnAnimal: "Ein Tier auswählen",
    searchByAnimalOrCategory: "Nach Tiername oder Kategorie suchen...",
    noAnimalsFound: "Keine Tiere gefunden",
    mammals: "Säugetiere",
    birds: "Vögel",
    reptiles: "Reptilien",
    amphibians: "Amphibien",
    fish: "Fische",
    allFoods: "Alle Lebensmittel",
    searchFoods: "Lebensmittel suchen...",
    selectAFood: "Lebensmittel auswählen",
    searchFoodsOrTypes: "Lebensmittel oder Lebensmitteltypen suchen...",
    noFoodsFound: "Keine Lebensmittel gefunden",
    fruits: "Obst",
    vegetables: "Gemüse",
    dairy: "Milchprodukte",
    grains: "Getreide",
    meat: "Fleisch",
    nuts: "Nüsse",
    noFavorites: "Noch keine Favoriten",
    addFavorites: "Fügen Sie Elemente zu Ihren Favoriten hinzu",
    favoriteAnimals: "Lieblingstiere",
    favoriteFoods: "Lieblingslebensmittel",
    backButton: "Zurück",
    allowedFoods: "Erlaubte Lebensmittel",
    acceptableFoods: "In Kleinen Mengen Akzeptabel",
    notAllowedFoods: "Nicht Erlaubt",
    noAnimalsInCategory: "Keine Tiere in dieser Kategorie",
    boiled: "Gekocht",
    animalsThatCanEat: "Tiere, die dieses Lebensmittel essen können",
    animalsThatCanEatSmallQuantities:
      "Tiere, die dieses Lebensmittel in kleinen Mengen essen können",
    animalsThatCannotEat: "Tiere, die dieses Lebensmittel nicht essen können",
    save: "Speichern",
    cancel: "Abbrechen",
    search: "Suchen",
    loading: "Laden...",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
    legalTitle: "Rechtliches",
    lastUpdated: "Zuletzt aktualisiert: 22. Februar 2026",
    privacyPolicyTitle: "Datenschutzrichtlinie",
    privacyPolicyIntro:
      'AniFoodie ("wir") verpflichtet sich, Ihre Privatsphäre zu schützen. Diese Datenschutzrichtlinie erklärt, wie wir Informationen verarbeiten, wenn Sie unsere mobile App nutzen.',
    privacyPolicyDataCollection: "Von uns erhobene Informationen",
    privacyPolicyDataCollectionBody:
      "AniFoodie erfasst, speichert oder überträgt keine personenbezogenen Daten. Alle Ihre Daten (Favoriten, Spracheinstellungen) werden nur lokal auf Ihrem Gerät gespeichert und niemals an unsere Server übertragen.",
    privacyPolicyAds: "Werbung",
    privacyPolicyAdsBody:
      "Wir verwenden Google AdMob zur Anzeige von Werbung. AdMob kann bestimmte Geräteinformationen erfassen und Cookies verwenden, um personalisierte Anzeigen zu schalten. Die Datenschutzrichtlinie von Google finden Sie unter https://policies.google.com/privacy.",
    privacyPolicyChildren: "Datenschutz für Kinder",
    privacyPolicyChildrenBody:
      "Unsere App richtet sich nicht an Kinder unter 13 Jahren. Wir erfassen wissentlich keine persönlichen Daten von Kindern.",
    privacyPolicyChanges: "Änderungen dieser Richtlinie",
    privacyPolicyChangesBody:
      'Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir informieren Sie über Änderungen, indem wir das Datum "Zuletzt aktualisiert" in dieser Richtlinie aktualisieren.',
    privacyPolicyContact: "Kontakt",
    privacyPolicyContactBody:
      "Bei Fragen zu dieser Datenschutzrichtlinie kontaktieren Sie uns unter: anifoodie.app@gmail.com",
    termsOfServiceTitle: "Nutzungsbedingungen",
    termsOfServiceIntro:
      "Mit dem Herunterladen oder der Nutzung von AniFoodie erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Bitte lesen Sie sie sorgfältig durch.",
    termsOfServiceUse: "Zulässige Nutzung",
    termsOfServiceUseBody:
      "AniFoodie wird ausschließlich für den persönlichen, nicht-kommerziellen Gebrauch bereitgestellt. Sie dürfen keine Teile der App kopieren, modifizieren, verteilen, verkaufen oder vermieten.",
    termsOfServiceDisclaimer: "Medizinischer Haftungsausschluss",
    termsOfServiceDisclaimerBody:
      "Die Informationen zur Lebensmittelsicherheit in AniFoodie dienen nur zu allgemeinen Informationszwecken und stellen keine tierärztliche Beratung dar. Konsultieren Sie immer einen qualifizierten Tierarzt, bevor Sie die Ernährung Ihres Haustieres ändern.",
    termsOfServiceLiability: "Haftungsbeschränkung",
    termsOfServiceLiabilityBody:
      "Im größtmöglichen gesetzlich zulässigen Umfang haftet AniFoodie und seine Entwickler nicht für indirekte, zufällige oder Folgeschäden, die aus der Nutzung der App entstehen.",
    termsOfServiceChanges: "Änderungen der Bedingungen",
    termsOfServiceChangesBody:
      "Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Ihre fortgesetzte Nutzung der App nach Änderungen gilt als Ihre Zustimmung.",
    termsOfServiceContact: "Kontakt",
    termsOfServiceContactBody:
      "Bei Fragen zu diesen Bedingungen kontaktieren Sie uns unter: anifoodie.app@gmail.com",
  },
  it: {
    animals: "Animali",
    foods: "Cibi",
    favorites: "Preferiti",
    settings: "Impostazioni",
    settingsTitle: "Impostazioni",
    languagePreference: "Lingua",
    english: "Inglese",
    spanish: "Spagnolo",
    french: "Francese",
    german: "Tedesco",
    italian: "Italiano",
    russian: "Russo",
    polish: "Polacco",
    darkTheme: "Tema Scuro",
    about: "Informazioni",
    version: "Versione",
    aboutTheApp: "Informazioni sull'app",
    howToUseApp: "Come usare l'app",
    welcomeTitle: "Benvenuto in AniFoodie",
    welcomeDescription:
      "Scopri quali cibi sono sicuri per i tuoi animali domestici",
    howItWorks: "Come funziona",
    welcomeExplanation:
      "AniFood ti aiuta a scoprire quali cibi sono sicuri per i tuoi animali domestici e quali sono potenzialmente dannosi.",
    searchByAnimal: "Cerca per Animale",
    searchByAnimalDescription:
      "Seleziona un animale per vedere quali cibi possono mangiare, quali dovrebbero mangiare con moderazione o quali dovrebbero evitare completamente.",
    searchByFood: "Cerca per Cibo",
    searchByFoodDescription:
      "Seleziona un alimento per scoprire quali animali possono consumarlo in sicurezza e quali dovrebbero evitarlo.",
    colorKey: "Codice Colori",
    safeToEat: "Sicuro da mangiare",
    acceptableInSmallQuantities: "Accettabile in piccole quantità",
    smallQty: "Pic. q.tà",
    notAllowedUnsafe: "Non consentito - pericoloso",
    boiledIconTitle: "Icona Bollito",
    boiledIconDescription:
      "Alcuni alimenti sono sicuri solo quando sono bolliti o cotti. Cerca questa icona sugli alimenti.",
    disclaimer: "Disclaimer",
    disclaimerText:
      "Le informazioni fornite in questa app sono solo a scopo informativo generale. Consultare sempre un veterinario prima di introdurre nuovi alimenti nella dieta del vostro animale domestico.",
    iUnderstand: "Ho Capito",
    appName: "PetPlate",
    appSubtitle: "Guida Intelligente alla Nutrizione degli Animali",
    appTagline: "Mantieni i tuoi animali al sicuro e in salute",
    poweredBy: "Realizzato da Amanti degli Animali",
    allAnimals: "Tutti gli Animali",
    searchAnimals: "Cerca animali...",
    selectAnAnimal: "Seleziona un Animale",
    searchByAnimalOrCategory: "Cerca per nome o categoria di animale...",
    noAnimalsFound: "Nessun animale trovato",
    mammals: "Mammiferi",
    birds: "Uccelli",
    reptiles: "Rettili",
    amphibians: "Anfibi",
    fish: "Pesci",
    allFoods: "Tutti i Cibi",
    searchFoods: "Cerca cibi...",
    selectAFood: "Seleziona un Cibo",
    searchFoodsOrTypes: "Cerca cibi o tipi di cibo...",
    noFoodsFound: "Nessun cibo trovato",
    fruits: "Frutta",
    vegetables: "Verdura",
    dairy: "Latticini",
    grains: "Cereali",
    meat: "Carne",
    nuts: "Frutta secca",
    noFavorites: "Ancora nessun preferito",
    addFavorites: "Aggiungi elementi ai tuoi preferiti",
    favoriteAnimals: "Animali Preferiti",
    favoriteFoods: "Cibi Preferiti",
    backButton: "Indietro",
    allowedFoods: "Cibi Permessi",
    acceptableFoods: "Accettabili in Piccole Quantità",
    notAllowedFoods: "Non Permessi",
    noAnimalsInCategory: "Nessun animale in questa categoria",
    boiled: "Bollito",
    animalsThatCanEat: "Animali che possono mangiare questo cibo",
    animalsThatCanEatSmallQuantities:
      "Animali che possono mangiare questo cibo in piccole quantità",
    animalsThatCannotEat: "Animali che non possono mangiare questo cibo",
    save: "Salva",
    cancel: "Annulla",
    search: "Cerca",
    loading: "Caricamento...",
    privacyPolicy: "Informativa sulla Privacy",
    termsOfService: "Termini di Servizio",
    legalTitle: "Legale",
    lastUpdated: "Ultimo aggiornamento: 22 febbraio 2026",
    privacyPolicyTitle: "Informativa sulla Privacy",
    privacyPolicyIntro:
      'AniFoodie ("noi") si impegna a proteggere la tua privacy. Questa Informativa sulla Privacy spiega come gestiamo le informazioni quando utilizzi la nostra applicazione mobile.',
    privacyPolicyDataCollection: "Informazioni che raccogliamo",
    privacyPolicyDataCollectionBody:
      "AniFoodie non raccoglie, archivia né trasmette informazioni personali identificabili. Tutti i tuoi dati (preferiti, preferenze di lingua) sono memorizzati localmente sul tuo dispositivo e non vengono mai inviati ai nostri server.",
    privacyPolicyAds: "Pubblicità",
    privacyPolicyAdsBody:
      "Utilizziamo Google AdMob per mostrare pubblicità. AdMob può raccogliere informazioni sul dispositivo e utilizzare cookie per mostrare annunci personalizzati. Puoi consultare la Privacy Policy di Google su https://policies.google.com/privacy.",
    privacyPolicyChildren: "Privacy dei minori",
    privacyPolicyChildrenBody:
      "La nostra app non è rivolta a bambini sotto i 13 anni. Non raccogliamo consapevolmente informazioni personali da minori.",
    privacyPolicyChanges: "Modifiche a questa politica",
    privacyPolicyChangesBody:
      'Potremmo aggiornare questa Informativa sulla Privacy di tanto in tanto. Ti informeremo di eventuali modifiche aggiornando la data "Ultimo aggiornamento" in questa informativa.',
    privacyPolicyContact: "Contattaci",
    privacyPolicyContactBody:
      "Per domande su questa Informativa sulla Privacy, contattaci a: anifoodie.app@gmail.com",
    termsOfServiceTitle: "Termini di Servizio",
    termsOfServiceIntro:
      "Scaricando o utilizzando AniFoodie, accetti di essere vincolato da questi Termini di Servizio. Leggili attentamente.",
    termsOfServiceUse: "Uso accettabile",
    termsOfServiceUseBody:
      "AniFoodie è fornito esclusivamente per uso personale e non commerciale. Non puoi copiare, modificare, distribuire, vendere o concedere in licenza alcuna parte dell'app.",
    termsOfServiceDisclaimer: "Avviso medico",
    termsOfServiceDisclaimerBody:
      "Le informazioni sulla sicurezza alimentare in AniFoodie sono solo a scopo informativo e non costituiscono un consiglio veterinario. Consulta sempre un veterinario qualificato prima di modificare la dieta del tuo animale.",
    termsOfServiceLiability: "Limitazione di responsabilità",
    termsOfServiceLiabilityBody:
      "Nella misura massima consentita dalla legge, AniFoodie e i suoi sviluppatori non saranno responsabili per danni indiretti, incidentali o consequenziali derivanti dall'uso dell'app.",
    termsOfServiceChanges: "Modifiche ai termini",
    termsOfServiceChangesBody:
      "Ci riserviamo il diritto di modificare questi Termini in qualsiasi momento. L'uso continuato dell'app dopo le modifiche costituisce la tua accettazione.",
    termsOfServiceContact: "Contatto",
    termsOfServiceContactBody:
      "Per domande su questi Termini, contattaci a: anifoodie.app@gmail.com",
  },
  ru: {
    animals: "Животные",
    foods: "Продукты",
    favorites: "Избранное",
    settings: "Настройки",
    settingsTitle: "Настройки",
    languagePreference: "Язык",
    english: "Английский",
    spanish: "Испанский",
    french: "Французский",
    german: "Немецкий",
    italian: "Итальянский",
    russian: "Русский",
    polish: "Польский",
    darkTheme: "Тёмная тема",
    about: "О приложении",
    version: "Версия",
    aboutTheApp: "О приложении",
    howToUseApp: "Как пользоваться приложением",
    welcomeTitle: "Добро пожаловать в AniFoodie",
    welcomeDescription: "Узнайте, какие продукты безопасны для ваших питомцев",
    howItWorks: "Как это работает",
    welcomeExplanation:
      "AniFood помогает вам узнать, какие продукты безопасны для ваших питомцев, а какие потенциально опасны.",
    searchByAnimal: "Поиск по животному",
    searchByAnimalDescription:
      "Выберите животное, чтобы узнать, какие продукты они могут есть, какие следует есть умеренно или каких следует избегать полностью.",
    searchByFood: "Поиск по продукту",
    searchByFoodDescription:
      "Выберите продукт, чтобы узнать, какие животные могут безопасно его употреблять, а каким следует его избегать.",
    colorKey: "Цветовая схема",
    safeToEat: "Безопасно для употребления",
    acceptableInSmallQuantities: "Приемлемо в малых количествах",
    smallQty: "Мал. кол.",
    notAllowedUnsafe: "Запрещено - небезопасно",
    boiledIconTitle: "Значок варёного",
    boiledIconDescription:
      "Некоторые продукты безопасны только в варёном или приготовленном виде. Ищите этот значок на продуктах.",
    disclaimer: "Отказ от ответственности",
    disclaimerText:
      "Информация, представленная в этом приложении, предназначена только для общих информационных целей. Всегда консультируйтесь с ветеринаром перед введением новых продуктов в рацион вашего питомца.",
    iUnderstand: "Я понимаю",
    appName: "PetPlate",
    appSubtitle: "Умный Гид по Питанию Питомцев",
    appTagline: "Держите ваших питомцев в безопасности и здоровье",
    poweredBy: "Разработано Любителями Животных",
    allAnimals: "Все животные",
    searchAnimals: "Поиск животных...",
    selectAnAnimal: "Выберите животное",
    searchByAnimalOrCategory: "Поиск по названию животного или категории...",
    noAnimalsFound: "Животные не найдены",
    mammals: "Млекопитающие",
    birds: "Птицы",
    reptiles: "Рептилии",
    amphibians: "Амфибии",
    fish: "Рыбы",
    allFoods: "Все продукты",
    searchFoods: "Поиск продуктов...",
    selectAFood: "Выберите продукт",
    searchFoodsOrTypes: "Поиск продуктов или типов продуктов...",
    noFoodsFound: "Продукты не найдены",
    fruits: "Фрукты",
    vegetables: "Овощи",
    dairy: "Молочные продукты",
    grains: "Зерновые",
    meat: "Мясо",
    nuts: "Орехи",
    noFavorites: "Пока нет избранного",
    addFavorites: "Добавить элементы в избранное",
    favoriteAnimals: "Избранные животные",
    favoriteFoods: "Избранные продукты",
    backButton: "Назад",
    allowedFoods: "Разрешённые продукты",
    acceptableFoods: "Приемлемо в малых количествах",
    notAllowedFoods: "Запрещённые продукты",
    noAnimalsInCategory: "В этой категории нет животных",
    boiled: "Варёный",
    animalsThatCanEat: "Животные, которые могут есть этот продукт",
    animalsThatCanEatSmallQuantities:
      "Животные, которые могут есть этот продукт в малых количествах",
    animalsThatCannotEat: "Животные, которые не могут есть этот продукт",
    save: "Сохранить",
    cancel: "Отмена",
    search: "Поиск",
    loading: "Загрузка...",
    privacyPolicy: "Политика конфиденциальности",
    termsOfService: "Условия использования",
    legalTitle: "Правовая информация",
    lastUpdated: "Последнее обновление: 22 февраля 2026 г.",
    privacyPolicyTitle: "Политика конфиденциальности",
    privacyPolicyIntro:
      "AniFoodie («мы») стремится защищать вашу конфиденциальность. Эта Политика конфиденциальности объясняет, как мы обрабатываем информацию при использовании нашего мобильного приложения.",
    privacyPolicyDataCollection: "Информация, которую мы собираем",
    privacyPolicyDataCollectionBody:
      "AniFoodie не собирает, не хранит и не передаёт персональные данные. Все ваши данные (избранное, языковые настройки) хранятся только локально на вашем устройстве и никогда не отправляются на наши серверы.",
    privacyPolicyAds: "Реклама",
    privacyPolicyAdsBody:
      "Мы используем Google AdMob для показа рекламы. AdMob может собирать определённые сведения об устройстве и использовать файлы cookie для показа персонализированной рекламы. Ознакомьтесь с Политикой конфиденциальности Google на https://policies.google.com/privacy.",
    privacyPolicyChildren: "Конфиденциальность детей",
    privacyPolicyChildrenBody:
      "Наше приложение не предназначено для детей до 13 лет. Мы намеренно не собираем личные данные от детей.",
    privacyPolicyChanges: "Изменения в политике",
    privacyPolicyChangesBody:
      "Мы можем периодически обновлять эту Политику конфиденциальности. Об изменениях мы сообщим, обновив дату «Последнее обновление» в этой политике.",
    privacyPolicyContact: "Свяжитесь с нами",
    privacyPolicyContactBody:
      "По вопросам об этой Политике конфиденциальности свяжитесь с нами: anifoodie.app@gmail.com",
    termsOfServiceTitle: "Условия использования",
    termsOfServiceIntro:
      "Загружая или используя AniFoodie, вы соглашаетесь соблюдать настоящие Условия использования. Пожалуйста, прочитайте их внимательно.",
    termsOfServiceUse: "Допустимое использование",
    termsOfServiceUseBody:
      "AniFoodie предоставляется исключительно для личного некоммерческого использования. Вы не можете копировать, изменять, распространять, продавать или сдавать в аренду какую-либо часть приложения.",
    termsOfServiceDisclaimer: "Медицинская оговорка",
    termsOfServiceDisclaimerBody:
      "Информация о безопасности продуктов питания в AniFoodie предназначена только для общих информационных целей и не является ветеринарным советом. Всегда консультируйтесь с квалифицированным ветеринаром перед изменением рациона питомца.",
    termsOfServiceLiability: "Ограничение ответственности",
    termsOfServiceLiabilityBody:
      "В максимально допустимой законом мере AniFoodie и её разработчики не несут ответственности за косвенный, случайный или последующий ущерб, возникший в результате использования приложения.",
    termsOfServiceChanges: "Изменения условий",
    termsOfServiceChangesBody:
      "Мы оставляем за собой право изменять настоящие Условия в любое время. Продолжение использования приложения после изменений означает ваше согласие с ними.",
    termsOfServiceContact: "Контакт",
    termsOfServiceContactBody:
      "По вопросам об этих Условиях свяжитесь с нами: anifoodie.app@gmail.com",
  },
  pl: {
    animals: "Zwierzęta",
    foods: "Produkty",
    favorites: "Ulubione",
    settings: "Ustawienia",
    settingsTitle: "Ustawienia",
    languagePreference: "Język",
    english: "Angielski",
    spanish: "Hiszpański",
    french: "Francuski",
    german: "Niemiecki",
    italian: "Włoski",
    russian: "Rosyjski",
    polish: "Polski",
    darkTheme: "Ciemny motyw",
    about: "O aplikacji",
    version: "Wersja",
    aboutTheApp: "Informacje o aplikacji",
    howToUseApp: "Jak korzystać z aplikacji",
    welcomeTitle: "Witaj w AniFoodie",
    welcomeDescription:
      "Odkryj, które produkty są bezpieczne dla Twoich zwierząt",
    howItWorks: "Jak to działa",
    welcomeExplanation:
      "AniFood pomaga Ci odkryć, które produkty są bezpieczne dla Twoich zwierząt, a które potencjalnie szkodliwe.",
    searchByAnimal: "Szukaj według zwierzęcia",
    searchByAnimalDescription:
      "Wybierz zwierzę, aby zobaczyć, jakie produkty może jeść, które powinno jeść z umiarem lub których powinno całkowicie unikać.",
    searchByFood: "Szukaj według produktu",
    searchByFoodDescription:
      "Wybierz produkt, aby odkryć, które zwierzęta mogą go bezpiecznie spożywać, a które powinny go unikać.",
    colorKey: "Oznaczenia kolorów",
    safeToEat: "Bezpieczne do jedzenia",
    acceptableInSmallQuantities: "Akceptowalne w małych ilościach",
    smallQty: "Mała il.",
    notAllowedUnsafe: "Niedozwolone - niebezpieczne",
    boiledIconTitle: "Ikona Gotowanego",
    boiledIconDescription:
      "Niektóre produkty są bezpieczne tylko wtedy, gdy są gotowane lub przygotowane. Szukaj tej ikony na produktach spożywczych.",
    disclaimer: "Zastrzeżenie",
    disclaimerText:
      "Informacje zawarte w tej aplikacji służą wyłącznie ogólnym celom informacyjnym. Zawsze konsultuj się z weterynarzem przed wprowadzeniem nowych produktów do diety swojego zwierzęcia.",
    iUnderstand: "Rozumiem",
    appName: "PetPlate",
    appSubtitle: "Inteligentny Przewodnik Żywienia Zwierząt",
    appTagline: "Dbaj o bezpieczeństwo i zdrowie swoich zwierząt",
    poweredBy: "Stworzone przez Miłośników Zwierząt",
    allAnimals: "Wszystkie zwierzęta",
    searchAnimals: "Szukaj zwierząt...",
    selectAnAnimal: "Wybierz zwierzę",
    searchByAnimalOrCategory: "Szukaj według nazwy zwierzęcia lub kategorii...",
    noAnimalsFound: "Nie znaleziono zwierząt",
    mammals: "Ssaki",
    birds: "Ptaki",
    reptiles: "Gady",
    amphibians: "Płazy",
    fish: "Ryby",
    allFoods: "Wszystkie produkty",
    searchFoods: "Szukaj produktów...",
    selectAFood: "Wybierz produkt",
    searchFoodsOrTypes: "Szukaj produktów lub rodzajów produktów...",
    noFoodsFound: "Nie znaleziono produktów",
    fruits: "Owoce",
    vegetables: "Warzywa",
    dairy: "Nabiał",
    grains: "Zboża",
    meat: "Mięso",
    nuts: "Orzechy",
    noFavorites: "Brak ulubionych",
    addFavorites: "Dodaj elementy do ulubionych",
    favoriteAnimals: "Ulubione zwierzęta",
    favoriteFoods: "Ulubione produkty",
    backButton: "Wstecz",
    allowedFoods: "Dozwolone produkty",
    acceptableFoods: "Akceptowalne w małych ilościach",
    notAllowedFoods: "Niedozwolone",
    noAnimalsInCategory: "Brak zwierząt w tej kategorii",
    boiled: "Gotowane",
    animalsThatCanEat: "Zwierzęta, które mogą jeść ten produkt",
    animalsThatCanEatSmallQuantities:
      "Zwierzęta, które mogą jeść ten produkt w małych ilościach",
    animalsThatCannotEat: "Zwierzęta, które nie mogą jeść tego produktu",
    save: "Zapisz",
    cancel: "Anuluj",
    search: "Szukaj",
    loading: "Ładowanie...",
    privacyPolicy: "Polityka Prywatności",
    termsOfService: "Warunki Korzystania",
    legalTitle: "Informacje Prawne",
    lastUpdated: "Ostatnia aktualizacja: 22 lutego 2026",
    privacyPolicyTitle: "Polityka Prywatności",
    privacyPolicyIntro:
      'AniFoodie ("my") zobowiązuje się do ochrony Twojej prywatności. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób przetwarzamy informacje podczas korzystania z naszej aplikacji mobilnej.',
    privacyPolicyDataCollection: "Zbierane informacje",
    privacyPolicyDataCollectionBody:
      "AniFoodie nie zbiera, nie przechowuje ani nie przesyła żadnych danych osobowych. Wszystkie Twoje dane (ulubione, preferencje językowe) są przechowywane wyłącznie lokalnie na Twoim urządzeniu i nigdy nie są wysyłane na nasze serwery.",
    privacyPolicyAds: "Reklamy",
    privacyPolicyAdsBody:
      "Używamy Google AdMob do wyświetlania reklam. AdMob może zbierać pewne informacje o urządzeniu i używać plików cookie do wyświetlania spersonalizowanych reklam. Politykę Prywatności Google możesz przejrzeć na https://policies.google.com/privacy.",
    privacyPolicyChildren: "Prywatność dzieci",
    privacyPolicyChildrenBody:
      "Nasza aplikacja nie jest skierowana do dzieci poniżej 13 roku życia. Nie zbieramy świadomie danych osobowych od dzieci.",
    privacyPolicyChanges: "Zmiany w polityce",
    privacyPolicyChangesBody:
      'Możemy od czasu do czasu aktualizować niniejszą Politykę Prywatności. Poinformujemy Cię o wszelkich zmianach, aktualizując datę "Ostatniej aktualizacji" w tej polityce.',
    privacyPolicyContact: "Skontaktuj się z nami",
    privacyPolicyContactBody:
      "W przypadku pytań dotyczących niniejszej Polityki Prywatności, skontaktuj się z nami: anifoodie.app@gmail.com",
    termsOfServiceTitle: "Warunki Korzystania",
    termsOfServiceIntro:
      "Pobierając lub używając AniFoodie, zgadzasz się na przestrzeganie niniejszych Warunków Korzystania. Przeczytaj je uważnie.",
    termsOfServiceUse: "Dopuszczalne użytkowanie",
    termsOfServiceUseBody:
      "AniFoodie jest udostępniany wyłącznie do osobistego, niekomercyjnego użytku. Nie wolno kopiować, modyfikować, dystrybuować, sprzedawać ani wynajmować żadnej części aplikacji.",
    termsOfServiceDisclaimer: "Zastrzeżenie medyczne",
    termsOfServiceDisclaimerBody:
      "Informacje o bezpieczeństwie żywności w AniFoodie służą wyłącznie ogólnym celom informacyjnym i nie stanowią porady weterynaryjnej. Zawsze konsultuj się z wykwalifikowanym weterynarzem przed zmianą diety swojego zwierzęcia.",
    termsOfServiceLiability: "Ograniczenie odpowiedzialności",
    termsOfServiceLiabilityBody:
      "W maksymalnym zakresie dozwolonym przez prawo, AniFoodie i jej twórcy nie ponoszą odpowiedzialności za pośrednie, przypadkowe ani wynikowe szkody wynikające z korzystania z aplikacji.",
    termsOfServiceChanges: "Zmiany warunków",
    termsOfServiceChangesBody:
      "Zastrzegamy sobie prawo do modyfikowania niniejszych Warunków w dowolnym momencie. Dalsze korzystanie z aplikacji po zmianach oznacza Twoją akceptację.",
    termsOfServiceContact: "Kontakt",
    termsOfServiceContactBody:
      "W przypadku pytań dotyczących niniejszych Warunków, skontaktuj się z nami: anifoodie.app@gmail.com",
  },
};

export const getTranslation = (
  key: TranslationKey,
  language: Language,
): string => {
  return translations[language][key] || translations.en[key];
};

export const useTranslations = (language: Language) => {
  return {
    t: (key: TranslationKey) => getTranslation(key, language),
  };
};
