import { Language } from '../../hooks/useLanguage';

export type CategoryTranslationDictionary = Record<string, string>;

export const categoryTranslations: Record<Language, CategoryTranslationDictionary> = {
  en: {
    // Vegetable categories
    'Leafy Greens': 'Leafy Greens',
    'Root Vegetables': 'Root Vegetables',
    'Cruciferous Vegetables': 'Cruciferous Vegetables',
    'Alliums': 'Alliums',
    'Squashes & Gourds': 'Squashes & Gourds',
    'Legumes': 'Legumes',
    'Stalk Vegetables': 'Stalk Vegetables',
    'Other': 'Other',
    
    // Fruit categories
    'Common Fruits': 'Common Fruits',
    'Berries': 'Berries',
    'Stone Fruits': 'Stone Fruits',
    'Tropical Fruits': 'Tropical Fruits',
    'Tropical/Exotic': 'Tropical/Exotic',
    'Citrus Fruits': 'Citrus Fruits',
    'Melons': 'Melons',
    'Grapes & Raisins': 'Grapes & Raisins',
    
    // Meat categories
    'Chicken': 'Chicken',
    'Turkey': 'Turkey',
    'Duck': 'Duck',
    'Goose': 'Goose',
    'Beef': 'Beef',
    'Pork': 'Pork',
    'Lamb': 'Lamb',
    'Goat': 'Goat',
    'Rabbit': 'Rabbit',
    'Venison': 'Venison',
    'Bison': 'Bison',
    'Fish': 'Fish',
    'Shellfish': 'Shellfish',

    // Dairy categories
    'Milk': 'Milk',
    'Cheese': 'Cheese',
    'Fermented': 'Fermented',
    'Cream': 'Cream',
    'Butter': 'Butter',

    // Grain categories
    'Cereal': 'Cereal',
    'Bread': 'Bread',
    'Pasta': 'Pasta',

    // Nut categories
    'Tree Nut': 'Tree Nut',
    'Peanut': 'Peanut',
    
    // Food types
    'Vegetable': 'Vegetable',
    'Fruit': 'Fruit',
    'Meat': 'Meat',
    'Dairy': 'Dairy',
    'Grain': 'Grain',
    'Nut': 'Nut',
  },
  es: {
    // Vegetable categories
    'Leafy Greens': 'Hojas Verdes',
    'Root Vegetables': 'Verduras de Raíz',
    'Cruciferous Vegetables': 'Verduras Crucíferas',
    'Alliums': 'Allium',
    'Squashes & Gourds': 'Calabazas y Calabacines',
    'Legumes': 'Legumbres',
    'Stalk Vegetables': 'Verduras de Tallo',
    'Other': 'Otro',

    // Fruit categories
    'Common Fruits': 'Frutas Comunes',
    'Berries': 'Bayas',
    'Stone Fruits': 'Frutas con Hueso',
    'Tropical Fruits': 'Frutas Tropicales',
    'Tropical/Exotic': 'Tropical/Exótico',
    'Citrus Fruits': 'Frutas Cítricas',
    'Melons': 'Melones',
    'Grapes & Raisins': 'Uvas y Pasas',

    // Meat categories
    'Chicken': 'Pollo',
    'Turkey': 'Pavo',
    'Duck': 'Pato',
    'Goose': 'Ganso',
    'Beef': 'Carne de Res',
    'Pork': 'Cerdo',
    'Lamb': 'Cordero',
    'Goat': 'Cabra',
    'Rabbit': 'Conejo',
    'Venison': 'Venado',
    'Bison': 'Bisonte',
    'Fish': 'Pescado',
    'Shellfish': 'Mariscos',

    // Dairy categories
    'Milk': 'Leche',
    'Cheese': 'Queso',
    'Fermented': 'Fermentado',
    'Cream': 'Crema',
    'Butter': 'Mantequilla',

    // Grain categories
    'Cereal': 'Cereal',
    'Bread': 'Pan',
    'Pasta': 'Pasta',

    // Nut categories
    'Tree Nut': 'Nuez de Árbol',
    'Peanut': 'Cacahuate',

    // Food types
    'Vegetable': 'Vegetal',
    'Fruit': 'Fruta',
    'Meat': 'Carne',
    'Dairy': 'Lácteo',
    'Grain': 'Grano',
    'Nut': 'Nuez'
  },
  fr: {
    // Vegetable categories
    'Leafy Greens': 'Légumes à Feuilles',
    'Root Vegetables': 'Légumes Racines',
    'Cruciferous Vegetables': 'Légumes Crucifères',
    'Alliums': 'Alliacées',
    'Squashes & Gourds': 'Courges et Gourdes',
    'Legumes': 'Légumineuses',
    'Stalk Vegetables': 'Légumes Tiges',
    'Other': 'Autre',

    // Fruit categories
    'Common Fruits': 'Fruits Communs',
    'Berries': 'Baies',
    'Stone Fruits': 'Fruits à Noyau',
    'Tropical Fruits': 'Fruits Tropicaux',
    'Tropical/Exotic': 'Tropical/Exotique',
    'Citrus Fruits': 'Agrumes',
    'Melons': 'Melons',
    'Grapes & Raisins': 'Raisins et Raisins Secs',

    // Meat categories
    'Chicken': 'Poulet',
    'Turkey': 'Dinde',
    'Duck': 'Canard',
    'Goose': 'Oie',
    'Beef': 'Boeuf',
    'Pork': 'Porc',
    'Lamb': 'Agneau',
    'Goat': 'Chèvre',
    'Rabbit': 'Lapin',
    'Venison': 'Chevreuil',
    'Bison': 'Bison',
    'Fish': 'Poisson',
    'Shellfish': 'Coquillages',

    // Dairy categories
    'Milk': "Lait",
    "Cheese": "Fromage",
    "Fermented": "Fermenté",
    "Cream": "Crème",
    "Butter": "Beurre",

    // Grain categories
    "Cereal": "Céréales",
    "Bread": "Pain",
    "Pasta": "Pâtes",

    // Nut categories
    "Tree Nut": "Fruit à Coque",
    "Peanut": "Cacahuète",

    // Food types
    "Vegetable": "Légume",
    "Fruit": "Fruit",
    "Meat": "Viande",
    "Dairy": "Produits Laitiers",
    "Grain": "Céréale",
    "Nut": "Noix"
  },
  de: {
    // Vegetable categories
    'Leafy Greens': 'Blattgemüse',
    'Root Vegetables': 'Wurzelgemüse',
    'Cruciferous Vegetables': 'Kreuzblütler',
    'Alliums': 'Lauchgewächse',
    'Squashes & Gourds': 'Kürbisse und Zierkürbisse',
    'Legumes': 'Hülsenfrüchte',
    'Stalk Vegetables': 'Stängelgemüse',
    'Other': 'Andere',

    // Fruit categories
    'Common Fruits': 'Gewöhnliche Früchte',
    'Berries': 'Beeren',
    'Stone Fruits': 'Steinfrüchte',
    'Tropical Fruits': 'Tropische Früchte',
    'Tropical/Exotic': 'Tropisch/Exotisch',
    'Citrus Fruits': 'Zitrusfrüchte',
    'Melons': 'Melonen',
    'Grapes & Raisins': 'Trauben und Rosinen',

    // Meat categories
    'Chicken': 'Huhn',
    'Turkey': 'Truthahn',
    'Duck': 'Ente',
    'Goose': 'Gans',
    'Beef': 'Rindfleisch',
    'Pork': 'Schweinefleisch',
    'Lamb': 'Lammfleisch',
    'Goat': 'Ziegenfleisch',
    'Rabbit': 'Kaninchenfleisch',
    'Venison': "Wild",
    "Bison": "Bison",
    "Fish": "Fisch",
    "Shellfish": "Schalentiere",

    // Dairy categories
    "Milk": "Milch",
    "Cheese": "Käse",
    "Fermented": "Fermentiert",
    "Cream": "Sahne",
    "Butter": "Butter",

    // Grain categories
    "Cereal": "Getreide",
    "Bread": "Brot",
    "Pasta": "Nudeln",

    // Nut categories
    "Tree Nut": "Baumnuss",
    "Peanut": "Erdnuss",

    // Food types
    "Vegetable": "Gemüse",
    "Fruit": "Frucht",
    "Meat": "Fleisch",
    "Dairy": "Milchprodukte",
    "Grain": "Getreide",
    "Nut": "Nuss"
  },
  it: {
    // Vegetable categories
    'Leafy Greens': 'Verdure a Foglia',
    'Root Vegetables': 'Ortaggi a Radice',
    'Cruciferous Vegetables': 'Verdure Crucifere',
    'Alliums': 'Allium',
    'Squashes & Gourds': 'Zucche e Cucurbitacee',
    'Legumes': 'Legumi',
    'Stalk Vegetables': 'Verdure a Fusto',
    'Other': 'Altro',

    // Fruit categories
    'Common Fruits': 'Frutti Comuni',
    'Berries': 'Bacche',
    'Stone Fruits': 'Frutti con Nocciolo',
    'Tropical Fruits': 'Frutti Tropicali',
    'Tropical/Exotic': 'Tropicale/Esotico',
    'Citrus Fruits': 'Agrumi',
    'Melons': 'Meloni',
    'Grapes & Raisins': 'Uva e Uvetta',

    // Meat categories
    'Chicken': 'Pollo',
    'Turkey': 'Tacchino',
    'Duck': 'Anatra',
    'Goose': "Oca",
    'Beef': 'Manzo',
    'Pork': 'Maiale',
    'Lamb': 'Agnello',
    'Goat': 'Capra',
    'Rabbit': 'Coniglio',
    'Venison': 'Cervo',
    'Bison': 'Bisonte',
    'Fish': 'Pesce',
    'Shellfish': 'Frutti di Mare',

    // Dairy categories
    'Milk': 'Latte',
    'Cheese': 'Formaggio',
    'Fermented': 'Fermentato',
    'Cream': 'Panna',
    'Butter': 'Burro',

    // Grain categories
    'Cereal': 'Cereali',
    'Bread': 'Pane',
    'Pasta': 'Pasta',

    // Nut categories
    'Tree Nut': 'Frutta Secca',
    'Peanut': 'Arachidi',
  },
  ru: {
    // Vegetable categories
    'Leafy Greens': 'Листовые овощи',
    'Root Vegetables': 'Корнеплоды',
    'Cruciferous Vegetables': 'Крестоцветные овощи',
    'Alliums': 'Луковые',
    'Squashes & Gourds': 'Тыквы и кабачки',
    'Legumes': 'Бобовые',
    'Stalk Vegetables': 'Стеблевые овощи',
    'Other': 'Прочее',

    // Fruit categories
    'Common Fruits': 'Обычные фрукты',
    'Berries': 'Ягоды',
    'Stone Fruits': 'Косточковые фрукты',
    'Tropical Fruits': 'Тропические фрукты',
    'Tropical/Exotic': 'Тропические/Экзотические',
    'Citrus Fruits': 'Цитрусовые фрукты',
    'Melons': 'Дынные культуры',
    'Grapes & Raisins': 'Виноград и изюм',

    // Meat categories
    'Chicken': 'Курица',
    'Turkey': 'Индейка',
    'Duck': 'Утка',
    'Goose': "Гусь",
    'Beef': "Говядина",
    "Pork": "Свинина",
    "Lamb": "Баранина",
    "Goat": "Козлятина",
    "Rabbit": "Кролик",
    "Venison": "Оленина",
    "Bison": "Бизон",
    "Fish": "Рыба",
    "Shellfish": "Моллюски",

    // Dairy categories
    "Milk": "Молоко",
    "Cheese": "Сыр",
    "Fermented": "Ферментированные продукты",
    "Cream": "Сливки",
    "Butter": "Масло",

    // Grain categories
    "Cereal": "Злаки",
    "Bread": "Хлеб",
    "Pasta": "Макароны",

    // Nut categories
    "Tree Nut": "Орехи",
    "Peanut": "Арахис",
  },
  pl: {
    // Vegetable categories
    'Leafy Greens': 'Zielone Liście',
    'Root Vegetables': 'Warzywa Korzeniowe',
    'Cruciferous Vegetables': 'Warzywa Krzyżowe',
    'Alliums': 'Cebulowe',
    'Squashes & Gourds': 'Dynie i Kabaczki',
    'Legumes': 'Rośliny Strączkowe',
    'Stalk Vegetables': 'Warzywa Łodygowe',
    'Other': 'Inne',

    // Fruit categories
    'Common Fruits': 'Zwykłe Owoce',
    'Berries': 'Jagody',
    'Stone Fruits': 'Owoce Pestkowe',
    'Tropical Fruits': 'Owoce Tropikalne',
    'Tropical/Exotic': 'Tropikalne/Exotyczne',
    'Citrus Fruits': 'Owoce Cytrusowe',
    'Melons': 'Arbuzy i Melony',
    'Grapes & Raisins': 'Winogrona i Rodzynki',

    // Meat categories
    'Chicken': 'Kurczak',
    'Turkey': 'Indyk',
    'Duck': 'Kaczka',
    'Goose': 'Gęś',
    'Beef': 'Wołowina',
    'Pork': 'Wieprzowina',
    'Lamb': 'Jagnięcina',
    'Goat': 'Koza',
    'Rabbit': 'Królik',
    'Venison': 'Dziczyzna',
    'Bison': 'Bizon',
    'Fish': 'Ryba',
    'Shellfish': 'Owoce Morza',

    // Dairy categories
    'Milk': 'Mleko',
    'Cheese': 'Ser',
    'Fermented': 'Fermentowane',
    'Cream': 'Śmietana',
    'Butter': 'Masło',

    // Grain categories
    'Cereal': 'Zboża',
    'Bread': 'Chleb',
    'Pasta': 'Makaron',

    // Nut categories
    'Tree Nut': 'Orzechy Drzewne',
    'Peanut': 'Orzeszki Ziemne',
  }
};

export const getCategoryTranslation = (categoryName: string, language: Language): string => {
  return categoryTranslations[language][categoryName] || categoryTranslations.en[categoryName] || categoryName;
}; 