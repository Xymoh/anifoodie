import { Language } from "../hooks/useLanguage";

export type TranslationDictionary = Record<string, string>;

/**
 * Animal name translations for all supported languages
 * Key format: English animal name (exactly as in CSV)
 * Value: Translated name in target language
 */
export const animalTranslations: Record<Language, TranslationDictionary> = {
  en: {
    'Dog': 'Dog',
    'Cat': 'Cat',
    'Rabbit': 'Rabbit',
    'Guinea Pig': 'Guinea Pig',
    'Hamster': 'Hamster',
    'Gerbil': 'Gerbil',
    'Ferret': 'Ferret',
    'Mouse': 'Mouse',
    'Rat': 'Rat',
    'Chinchilla': 'Chinchilla',
    'Hedgehog': 'Hedgehog',
    'Sugar Glider': 'Sugar Glider',
    'Parakeet': 'Parakeet',
    'Cockatiel': 'Cockatiel',
    'Parrot': 'Parrot',
    'Lovebird': 'Lovebird',
    'Canary': 'Canary',
    'Finch': 'Finch',
    'Dove': 'Dove',
    'Turtle': 'Turtle',
    'Tortoise': 'Tortoise',
    'Bearded Dragon': 'Bearded Dragon',
    'Leopard Gecko': 'Leopard Gecko',
    'Iguana': 'Iguana',
    'Snake': 'Snake',
    'Frog': 'Frog',
    'Toad': 'Toad',
    'Axolotl': 'Axolotl',
    'Newt': 'Newt',
    'Salamander': 'Salamander',
    'Goldfish': 'Goldfish',
    'Betta Fish': 'Betta Fish',
    'Angelfish': 'Angelfish'
  },
  es: {
    'Dog': 'Perro',
    'Cat': 'Gato',
    'Rabbit': 'Conejo',
    'Guinea Pig': 'Conejillo de Indias',
    'Hamster': 'Hámster',
    'Gerbil': 'Jerbo',
    'Ferret': 'Hurón',
    'Mouse': 'Ratón',
    'Rat': 'Rata',
    'Chinchilla': 'Chinchilla',
    'Hedgehog': 'Erizo',
    'Sugar Glider': 'Petauro del Azúcar',
    'Parakeet': 'Periquito',
    'Cockatiel': 'Cacatúa Ninfa',
    'Parrot': 'Loro',
    'Lovebird': 'Inseparable',
    'Canary': 'Canario',
    'Finch': 'Pinzón',
    'Dove': 'Paloma',
    'Turtle': 'Tortuga acuática',
    'Tortoise': 'Tortuga terrestre',
    'Bearded Dragon': 'Dragón Barbudo',
    'Leopard Gecko': 'Gecko Leopardo',
    'Iguana': 'Iguana',
    'Snake': 'Serpiente',
    'Frog': 'Rana',
    'Toad': 'Sapo',
    'Axolotl': 'Ajolote',
    'Newt': 'Tritón',
    'Salamander': 'Salamandra',
    'Goldfish': 'Pez Dorado',
    'Betta Fish': 'Pez Betta',
    'Angelfish': 'Pez Ángel'
  },
  fr: {
    'Dog': 'Chien',
    'Cat': 'Chat',
    'Rabbit': 'Lapin',
    'Guinea Pig': 'Cochon d\'Inde',
    'Hamster': 'Hamster',
    'Gerbil': 'Gerbille',
    'Ferret': 'Furet',
    'Mouse': 'Souris',
    'Rat': 'Rat',
    'Chinchilla': 'Chinchilla',
    'Hedgehog': 'Hérisson',
    'Sugar Glider': 'Phalanger Volant',
    'Parakeet': 'Perruche',
    'Cockatiel': 'Calopsitte',
    'Parrot': 'Perroquet',
    'Lovebird': 'Inséparable',
    'Canary': 'Canari',
    'Finch': 'Pinson',
    'Dove': 'Colombe',
    'Turtle': 'Tortue d\'eau',
    'Tortoise': 'Tortue terrestre',
    'Bearded Dragon': 'Dragon Barbu',
    'Leopard Gecko': 'Gecko Léopard',
    'Iguana': 'Iguane',
    'Snake': 'Serpent',
    'Frog': 'Grenouille',
    'Toad': 'Crapaud',
    'Axolotl': 'Axolotl',
    'Newt': 'Triton',
    'Salamander': 'Salamandre',
    'Goldfish': 'Poisson Rouge',
    'Betta Fish': 'Poisson Combattant',
    'Angelfish': 'Poisson-Ange'
  },
  de: {
    'Dog': 'Hund',
    'Cat': 'Katze',
    'Rabbit': 'Kaninchen',
    'Guinea Pig': 'Meerschweinchen',
    'Hamster': 'Hamster',
    'Gerbil': 'Rennmaus',
    'Ferret': 'Frettchen',
    'Mouse': 'Maus',
    'Rat': 'Ratte',
    'Chinchilla': 'Chinchilla',
    'Hedgehog': 'Igel',
    'Sugar Glider': 'Kurzkopfgleitbeutler',
    'Parakeet': 'Sittich',
    'Cockatiel': 'Nymphensittich',
    'Parrot': 'Papagei',
    'Lovebird': 'Agapornis',
    'Canary': 'Kanarienvogel',
    'Finch': 'Fink',
    'Dove': 'Taube',
    'Turtle': 'Wasserschildkröte',
    'Tortoise': 'Landschildkröte',
    'Bearded Dragon': 'Bartagame',
    'Leopard Gecko': 'Leopardgecko',
    'Iguana': 'Leguan',
    'Snake': 'Schlange',
    'Frog': 'Frosch',
    'Toad': 'Kröte',
    'Axolotl': 'Axolotl',
    'Newt': 'Molch',
    'Salamander': 'Salamander',
    'Goldfish': 'Goldfisch',
    'Betta Fish': 'Kampffisch',
    'Angelfish': 'Skalar'
  },
  it: {
    'Dog': 'Cane',
    'Cat': 'Gatto',
    'Rabbit': 'Coniglio',
    'Guinea Pig': 'Porcellino d\'India',
    'Hamster': 'Criceto',
    'Gerbil': 'Gerbillo',
    'Ferret': 'Furetto',
    'Mouse': 'Topo',
    'Rat': 'Ratto',
    'Chinchilla': 'Cincillà',
    'Hedgehog': 'Riccio',
    'Sugar Glider': 'Petauro dello Zucchero',
    'Parakeet': 'Parrocchetto',
    'Cockatiel': 'Calopsitta',
    'Parrot': 'Pappagallo',
    'Lovebird': 'Inseparabile',
    'Canary': 'Canarino',
    'Finch': 'Fringuello',
    'Dove': 'Colomba',
    'Turtle': 'Tartaruga acquatica',
    'Tortoise': 'Tartaruga terrestre',
    'Bearded Dragon': 'Drago Barbuto',
    'Leopard Gecko': 'Geco Leopardo',
    'Iguana': 'Iguana',
    'Snake': 'Serpente',
    'Frog': 'Rana',
    'Toad': 'Rospo',
    'Axolotl': 'Axolotl',
    'Newt': 'Tritone',
    'Salamander': 'Salamandra',
    'Goldfish': 'Pesce Rosso',
    'Betta Fish': 'Pesce Combattente',
    'Angelfish': 'Pesce Angelo'
  },
  ru: {
    'Dog': 'Собака',
    'Cat': 'Кошка',
    'Rabbit': 'Кролик',
    'Guinea Pig': 'Морская свинка',
    'Hamster': 'Хомяк',
    'Gerbil': 'Песчанка',
    'Ferret': 'Хорек',
    'Mouse': 'Мышь',
    'Rat': 'Крыса',
    'Chinchilla': 'Шиншилла',
    'Hedgehog': 'Еж',
    'Sugar Glider': 'Сахарная сумчатая летяга',
    'Parakeet': 'Попугай',
    'Cockatiel': 'Корелла',
    'Parrot': 'Попугай',
    'Lovebird': 'Неразлучник',
    'Canary': 'Канарейка',
    'Finch': 'Зяблик',
    'Dove': 'Голубь',
    'Turtle': 'Черепаха водная',
    'Tortoise': 'Черепаха сухопутная',
    'Bearded Dragon': 'Бородатая агама',
    'Leopard Gecko': 'Леопардовый геккон',
    'Iguana': 'Игуана',
    'Snake': 'Змея',
    'Frog': 'Лягушка',
    'Toad': 'Жаба',
    'Axolotl': 'Аксолотль',
    'Newt': 'Тритон',
    'Salamander': 'Саламандра',
    'Goldfish': 'Золотая рыбка',
    'Betta Fish': 'Рыбка петушок',
    'Angelfish': 'Скалярия'
  },
  pl: {
    'Dog': 'Pies',
    'Cat': 'Kot',
    'Rabbit': 'Królik',
    'Guinea Pig': 'Świnka morska',
    'Hamster': 'Chomik',
    'Gerbil': 'Myszoskoczek',
    'Ferret': 'Fretka',
    'Mouse': 'Mysz',
    'Rat': 'Szczur',
    'Chinchilla': 'Szynszyla',
    'Hedgehog': 'Jeż',
    'Sugar Glider': 'Lotopałanka cukrowa',
    'Parakeet': 'Papużka',
    'Cockatiel': 'Nimfa',
    'Parrot': 'Papuga',
    'Lovebird': 'Nierozłączka',
    'Canary': 'Kanarek',
    'Finch': 'Zięba',
    'Dove': 'Gołąb',
    'Turtle': 'Żółw wodny',
    'Tortoise': 'Żółw lądowy',
    'Bearded Dragon': 'Agama brodata',
    'Leopard Gecko': 'Gekon lamparci',
    'Iguana': 'Iguana',
    'Snake': 'Wąż',
    'Frog': 'Żaba',
    'Toad': 'Ropucha',
    'Axolotl': 'Aksolotl',
    'Newt': 'Traszka',
    'Salamander': 'Salamandra',
    'Goldfish': 'Złota rybka',
    'Betta Fish': 'Bojownik wspaniały',
    'Angelfish': 'Skalar'
  }
};

/**
 * Food item translations for all supported languages
 * Key format: English food name (exactly as in CSV)
 * Value: Translated name in target language
 */
export const foodTranslations: Record<Language, TranslationDictionary> = {
  // English - serves as the source/reference
  en: {
    // Vegetables - Leafy Greens
    'Spinach': 'Spinach',
    'Kale': 'Kale',
    'Lettuce (Romaine)': 'Lettuce (Romaine)',
    'Lettuce (Iceberg)': 'Lettuce (Iceberg)',
    'Swiss Chard': 'Swiss Chard',
    'Collard Greens': 'Collard Greens',
    'Mustard Greens': 'Mustard Greens',
    'Turnip Greens': 'Turnip Greens',
    'Beet Greens': 'Beet Greens',
    
    // Vegetables - Root Vegetables
    'Carrot': 'Carrot',
    'Beetroot': 'Beetroot',
    'Turnip': 'Turnip',
    'Radish': 'Radish',
    'Parsnip': 'Parsnip',
    'Sweet Potato': 'Sweet Potato',
    'Potato': 'Potato',
    
    // Vegetables - Cruciferous
    'Broccoli': 'Broccoli',
    'Cauliflower': 'Cauliflower',
    'Cabbage': 'Cabbage',
    'Brussels Sprouts': 'Brussels Sprouts',
    'Bok Choy': 'Bok Choy',
    
    // Vegetables - Alliums
    'Onion': 'Onion',
    'Garlic': 'Garlic',
    'Leek': 'Leek',
    'Shallot': 'Shallot',
    'Chives': 'Chives',
    'Scallions': 'Scallions',
    
    // Vegetables - Squashes & Gourds
    'Pumpkin': 'Pumpkin',
    'Zucchini': 'Zucchini',
    'Cucumber': 'Cucumber',
    'Butternut Squash': 'Butternut Squash',
    'Acorn Squash': 'Acorn Squash',
    
    // Vegetables - Legumes
    'Green Beans': 'Green Beans',
    'Peas': 'Peas',
    'Lentils': 'Lentils',
    'Chickpeas': 'Chickpeas',
    'Soybeans (Edamame)': 'Soybeans (Edamame)',
    
    // Vegetables - Stalk Vegetables
    'Celery': 'Celery',
    'Asparagus': 'Asparagus',
    'Rhubarb (stalk)': 'Rhubarb (stalk)',
    'Rhubarb (leaves)': 'Rhubarb (leaves)',
    
    // Vegetables - Other
    'Corn': 'Corn',
    'Bell Pepper (Red)': 'Bell Pepper (Red)',
    'Bell Pepper (Green)': 'Bell Pepper (Green)',
    'Bell Pepper (Yellow)': 'Bell Pepper (Yellow)',
    'Chili Pepper': 'Chili Pepper',
    'Tomato': 'Tomato',
    'Eggplant': 'Eggplant',
    'Okra': 'Okra',
    'Mushrooms (edible)': 'Mushrooms (edible)',
    'Mushrooms (wild)': 'Mushrooms (wild)',
    
    // Fruits
    'Apple': 'Apple',
    'Banana': 'Banana',
    'Pear': 'Pear',
    'Orange': 'Orange',
    'Grapefruit': 'Grapefruit',
    'Lemon': 'Lemon',
    'Lime': 'Lime',
    'Kiwi': 'Kiwi',
    'Mango': 'Mango',
    'Papaya': 'Papaya',
    'Pineapple': 'Pineapple',
    'Cantaloupe': 'Cantaloupe',
    'Honeydew': 'Honeydew',
    'Watermelon': 'Watermelon',
    'Avocado': 'Avocado',
    'Strawberry': 'Strawberry',
    'Blueberry': 'Blueberry',
    'Raspberry': 'Raspberry',
    'Blackberry': 'Blackberry',
    'Cranberry': 'Cranberry',
    'Elderberry': 'Elderberry (raw)',
    'Elderberry (cooked)': 'Elderberry (cooked)',
    'Peach': 'Peach',
    'Plum': 'Plum',
    'Apricot': 'Apricot',
    'Cherry': 'Cherry',
    'Nectarine': 'Nectarine',
    'Date': 'Date',
    'Grapes': 'Grapes',
    'Raisins': 'Raisins',
    'Coconut': 'Coconut',
    'Dragon Fruit': 'Dragon Fruit',
    'Passion Fruit': 'Passion Fruit',
    'Lychee': 'Lychee',
    'Guava': 'Guava',
    'Starfruit': 'Starfruit',
    'Pomegranate': 'Pomegranate',
    'Fig': 'Fig',
    
    // Meat - Chicken
    'Breast': 'Breast',
    'Thigh': 'Thigh',
    'Leg': 'Leg',
    'Wing': 'Wing',
    'Heart': 'Heart',
    'Liver': 'Liver',
    'Gizzard': 'Gizzard',
    'Stomach': 'Stomach',
    'Skin': 'Skin',
    
    // Meat - Turkey (same parts as chicken)
    'Neck': 'Neck',
    
    // Meat - Duck (uses same parts as chicken)
    
    // Meat - Goose (uses same parts as chicken and duck)
    
    // Meat - Beef
    'Rib': 'Rib',
    'Loin': 'Loin',
    'Tenderloin': 'Tenderloin',
    'Chuck': 'Chuck',
    'Sirloin': 'Sirloin',
    'Brisket': 'Brisket',
    'Kidney': 'Kidney',
    'Lung': 'Lung',
    'Spleen': 'Spleen',
    'Brain': 'Brain',
    'Pancreas': 'Pancreas',
    'stomach_tripe': 'Stomach Tripe',
    'Fat': 'Fat',
    'Bone': 'Bone',
    
    // Meat - Pork (uses same parts as beef)
    'Shoulder': 'Shoulder',
    'Belly': 'Belly',
    
    // Meat - Lamb (uses same parts as beef)
    
    // Meat - Goat (uses same parts as beef)
    
    // Meat - Rabbit (uses similar parts)
    
    // Meat - Venison (uses same parts as beef)
    
    // Meat - Bison (uses same parts as beef)
    
    // Meat - Fish
    'Fillet': 'Fillet',
    'Head': 'Head',
    
    // Meat - Shellfish
    'Shrimp': 'Shrimp',
    'Crab': 'Crab',
    'Lobster': 'Lobster',
    
    // Dairy - Milk
    'Cow Milk': 'Cow Milk',
    'Goat Milk': 'Goat Milk',
    'Sheep Milk': 'Sheep Milk',
    
    // Dairy - Cheese
    'Cheddar Cheese': 'Cheddar Cheese',
    'Mozzarella Cheese': 'Mozzarella Cheese',
    'Cottage Cheese': 'Cottage Cheese',
    
    // Dairy - Fermented
    'Yogurt (plain)': 'Yogurt (plain)',
    'Kefir': 'Kefir',
    
    // Dairy - Cream
    'Whipping Cream': 'Whipping Cream',
    
    // Dairy - Butter
    'Butter': 'Butter',
    
    // Dairy - Other
    'Ice Cream': 'Ice Cream',
    'Sour Cream': 'Sour Cream',
    
    // Grain - Cereal
    'Rice': 'Rice',
    'Oats': 'Oats',
    'Barley': 'Barley',
    'Wheat': 'Wheat',
    
    // Grain - Bread
    'Whole Grain Bread': 'Whole Grain Bread',
    'White Bread': 'White Bread',
    
    // Grain - Pasta
    'Pasta (cooked)': 'Pasta (cooked)',
    
    // Grain - Other
    'Quinoa': 'Quinoa',
    'Millet': 'Millet',
    
    // Nut - Tree Nut
    'Almonds': 'Almonds',
    'Cashews': 'Cashews',
    'Pecans': 'Pecans',
    'Hazelnuts': 'Hazelnuts',
    
    // Nut - Peanut
    'Peanuts (unsalted)': 'Peanuts (unsalted)',
    'Peanut Butter (unsweetened)': 'Peanut Butter (unsweetened)',
  },
  
  // Spanish translations
  es: {
    // Vegetables - Leafy Greens
    'Spinach': 'Espinaca',
    'Kale': 'Col rizada',
    'Lettuce (Romaine)': 'Lechuga romana',
    'Lettuce (Iceberg)': 'Lechuga iceberg',
    'Swiss Chard': 'Acelga',
    'Collard Greens': 'Col berza',
    'Mustard Greens': 'Hojas de mostaza',
    'Turnip Greens': 'Hojas de nabo',
    'Beet Greens': 'Hojas de remolacha',
    
    // Vegetables - Root Vegetables
    'Carrot': 'Zanahoria',
    'Beetroot': 'Remolacha',
    'Turnip': 'Nabo',
    'Radish': 'Rábano',
    'Parsnip': 'Chirivía',
    'Sweet Potato': 'Batata',
    'Potato': 'Patata',
    
    // Vegetables - Cruciferous
    'Broccoli': 'Brócoli',
    'Cauliflower': 'Coliflor',
    'Cabbage': 'Repollo',
    'Brussels Sprouts': 'Coles de Bruselas',
    'Bok Choy': 'Bok choy',
    
    // Vegetables - Alliums
    'Onion': 'Cebolla',
    'Garlic': 'Ajo',
    'Leek': 'Puerro',
    'Shallot': 'Chalota',
    'Chives': 'Cebollino',
    'Scallions': 'Cebolletas',
    
    // Vegetables - Squashes & Gourds
    'Pumpkin': 'Calabaza',
    'Zucchini': 'Calabacín',
    'Cucumber': 'Pepino',
    'Butternut Squash': 'Calabaza butternut',
    'Acorn Squash': 'Calabaza bellota',
    
    // Vegetables - Legumes
    'Green Beans': 'Judías verdes',
    'Peas': 'Guisantes',
    'Lentils': 'Lentejas',
    'Chickpeas': 'Garbanzos',
    'Soybeans (Edamame)': 'Soja (Edamame)',
    
    // Vegetables - Stalk Vegetables
    'Celery': 'Apio',
    'Asparagus': 'Espárragos',
    'Rhubarb (stalk)': 'Ruibarbo (tallo)',
    'Rhubarb (leaves)': 'Ruibarbo (hojas)',
    
    // Vegetables - Other
    'Corn': 'Maíz',
    'Bell Pepper (Red)': 'Pimiento rojo',
    'Bell Pepper (Green)': 'Pimiento verde',
    'Bell Pepper (Yellow)': 'Pimiento amarillo',
    'Chili Pepper': 'Chile',
    'Tomato': 'Tomate',
    'Eggplant': 'Berenjena',
    'Okra': 'Okra',
    'Mushrooms (edible)': 'Champiñones (comestibles)',
    'Mushrooms (wild)': 'Setas silvestres',
    
    // Fruits
    'Apple': 'Manzana',
    'Banana': 'Plátano',
    'Pear': 'Pera',
    'Orange': 'Naranja',
    'Grapefruit': 'Pomelo',
    'Lemon': 'Limón',
    'Lime': 'Lima',
    'Kiwi': 'Kiwi',
    'Mango': 'Mango',
    'Papaya': 'Papaya',
    'Pineapple': 'Piña',
    'Cantaloupe': 'Melón cantalupo',
    'Honeydew': 'Melón verde',
    'Watermelon': 'Sandía',
    'Avocado': 'Aguacate',
    'Strawberry': 'Fresa',
    'Blueberry': 'Arándano',
    'Raspberry': 'Frambuesa',
    'Blackberry': 'Mora',
    'Cranberry': 'Arándano rojo',
    'Elderberry': 'Baya de saúco (cruda)',
    'Elderberry (cooked)': 'Baya de saúco (cocida)',
    'Peach': 'Melocotón',
    'Plum': 'Ciruela',
    'Apricot': 'Albaricoque',
    'Cherry': 'Cereza',
    'Nectarine': 'Nectarina',
    'Date': 'Dátil',
    'Grapes': 'Uvas',
    'Raisins': 'Pasas',
    'Coconut': 'Coco',
    'Dragon Fruit': 'Pitahaya',
    'Passion Fruit': 'Maracuyá',
    'Lychee': 'Lichi',
    'Guava': 'Guayaba',
    'Starfruit': 'Carambola',
    'Pomegranate': 'Granada',
    'Fig': 'Higo',
    
    // Meat - Chicken
    'Breast': 'Pechuga',
    'Thigh': 'Muslo',
    'Leg': 'Pierna',
    'Wing': 'Ala',
    'Heart': 'Corazón',
    'Liver': 'Hígado',
    'Gizzard': 'Molleja',
    'Stomach': 'Estómago',
    'Skin': 'Piel',
    
    // Meat - Turkey
    'Neck': 'Cuello',
    
    // Meat - Duck (uses same parts as chicken)
    
    // Meat - Goose (uses same parts as chicken and duck)
    
    // Meat - Beef
    'Rib': 'Costilla',
    'Loin': 'Lomo',
    'Tenderloin': 'Solomillo',
    'Chuck': 'Paleta',
    'Sirloin': 'Solomillo',
    'Brisket': 'Pecho',
    'Kidney': 'Riñón',
    'Lung': 'Pulmón',
    'Spleen': 'Bazo',
    'Brain': 'Cerebro',
    'Pancreas': 'Páncreas',
    'stomach_tripe': 'Callos',
    'Fat': 'Grasa',
    'Bone': 'Hueso',
    
    // Meat - Pork
    'Shoulder': 'Hombro',
    'Belly': 'Panceta',
    
    // Meat - Lamb (uses same parts as beef)
    
    // Meat - Goat (uses same parts as beef)
    
    // Meat - Rabbit (uses similar parts)
    
    // Meat - Venison (uses same parts as beef)
    
    // Meat - Bison (uses same parts as beef)
    
    // Meat - Fish
    'Fillet': 'Filete',
    'Head': 'Cabeza',
    
    // Meat - Shellfish
    'Shrimp': 'Camarón',
    'Crab': 'Cangrejo',
    'Lobster': 'Langosta',
    
    // Dairy - Milk
    'Cow Milk': 'Leche de vaca',
    'Goat Milk': 'Leche de cabra',
    'Sheep Milk': 'Leche de oveja',
    
    // Dairy - Cheese
    'Cheddar Cheese': 'Queso cheddar',
    'Mozzarella Cheese': 'Queso mozzarella',
    'Cottage Cheese': 'Requesón',
    
    // Dairy - Fermented
    'Yogurt (plain)': 'Yogur natural',
    'Kefir': 'Kéfir',
    
    // Dairy - Cream
    'Whipping Cream': 'Nata para montar',
    
    // Dairy - Butter
    'Butter': 'Mantequilla',
    
    // Dairy - Other
    'Ice Cream': 'Helado',
    'Sour Cream': 'Crema agria',
    
    // Grain - Cereal
    'Rice': 'Arroz',
    'Oats': 'Avena',
    'Barley': 'Cebada',
    'Wheat': 'Trigo',
    
    // Grain - Bread
    'Whole Grain Bread': 'Pan integral',
    'White Bread': 'Pan blanco',
    
    // Grain - Pasta
    'Pasta (cooked)': 'Pasta (cocida)',
    
    // Grain - Other
    'Quinoa': 'Quinoa',
    'Millet': 'Mijo',
    
    // Nut - Tree Nut
    'Almonds': 'Almendras',
    'Cashews': 'Anacardos',
    'Pecans': 'Pacanas',
    'Hazelnuts': 'Avellanas',
    
    // Nut - Peanut
    'Peanuts (unsalted)': 'Cacahuetes (sin sal)',
    'Peanut Butter (unsweetened)': 'Mantequilla de cacahuete (sin azúcar)',
  },
  
  // French translations
  fr: {
    // Vegetables - Leafy Greens
    'Spinach': 'Épinard',
    'Kale': 'Chou frisé',
    'Lettuce (Romaine)': 'Laitue romaine',
    'Lettuce (Iceberg)': 'Laitue iceberg',
    'Swiss Chard': 'Blette',
    'Collard Greens': 'Chou cavalier',
    'Mustard Greens': 'Feuilles de moutarde',
    'Turnip Greens': 'Feuilles de navet',
    'Beet Greens': 'Feuilles de betterave',
    
    // Vegetables - Root Vegetables
    'Carrot': 'Carotte',
    'Beetroot': 'Betterave',
    'Turnip': 'Navet',
    'Radish': 'Radis',
    'Parsnip': 'Panais',
    'Sweet Potato': 'Patate douce',
    'Potato': 'Pomme de terre',
    
    // Vegetables - Cruciferous
    'Broccoli': 'Brocoli',
    'Cauliflower': 'Chou-fleur',
    'Cabbage': 'Chou',
    'Brussels Sprouts': 'Choux de Bruxelles',
    'Bok Choy': 'Pak choï',
    
    // Vegetables - Alliums
    'Onion': 'Oignon',
    'Garlic': 'Ail',
    'Leek': 'Poireau',
    'Shallot': 'Échalote',
    'Chives': 'Ciboulette',
    'Scallions': 'Ciboule',
    
    // Vegetables - Squashes & Gourds
    'Pumpkin': 'Citrouille',
    'Zucchini': 'Courgette',
    'Cucumber': 'Concombre',
    'Butternut Squash': 'Courge butternut',
    'Acorn Squash': 'Courge poivrée',
    
    // Vegetables - Legumes
    'Green Beans': 'Haricots verts',
    'Peas': 'Petits pois',
    'Lentils': 'Lentilles',
    'Chickpeas': 'Pois chiches',
    'Soybeans (Edamame)': 'Soja (Edamame)',
    
    // Vegetables - Stalk Vegetables
    'Celery': 'Céleri',
    'Asparagus': 'Asperge',
    'Rhubarb (stalk)': 'Rhubarbe (tige)',
    'Rhubarb (leaves)': 'Rhubarbe (feuilles)',
    
    // Vegetables - Other
    'Corn': 'Maïs',
    'Bell Pepper (Red)': 'Poivron rouge',
    'Bell Pepper (Green)': 'Poivron vert',
    'Bell Pepper (Yellow)': 'Poivron jaune',
    'Chili Pepper': 'Piment',
    'Tomato': 'Tomate',
    'Eggplant': 'Aubergine',
    'Okra': 'Gombo',
    'Mushrooms (edible)': 'Champignons (comestibles)',
    'Mushrooms (wild)': 'Champignons (sauvages)',
    
    // Fruits
    'Apple': 'Pomme',
    'Banana': 'Banane',
    'Pear': 'Poire',
    'Orange': 'Orange',
    'Grapefruit': 'Pamplemousse',
    'Lemon': 'Citron',
    'Lime': 'Citron vert',
    'Kiwi': 'Kiwi',
    'Mango': 'Mangue',
    'Papaya': 'Papaye',
    'Pineapple': 'Ananas',
    'Cantaloupe': 'Cantaloup',
    'Honeydew': 'Melon miel',
    'Watermelon': 'Pastèque',
    'Avocado': 'Avocat',
    'Strawberry': 'Fraise',
    'Blueberry': 'Myrtille',
    'Raspberry': 'Framboise',
    'Blackberry': 'Mûre',
    'Cranberry': 'Canneberge',
    'Elderberry': 'Baie de sureau (crue)',
    'Elderberry (cooked)': 'Baie de sureau (cuite)',
    'Peach': 'Pêche',
    'Plum': 'Prune',
    'Apricot': 'Abricot',
    'Cherry': 'Cerise',
    'Nectarine': 'Nectarine',
    'Date': 'Datte',
    'Grapes': 'Raisins',
    'Raisins': 'Raisins secs',
    'Coconut': 'Noix de coco',
    'Dragon Fruit': 'Fruit du dragon',
    'Passion Fruit': 'Fruit de la passion',
    'Lychee': 'Litchi',
    'Guava': 'Goyave',
    'Starfruit': 'Carambole',
    'Pomegranate': 'Grenade',
    'Fig': 'Figue',
    
    // Meat - Chicken
    'Breast': 'Poitrine',
    'Thigh': 'Cuisse',
    'Leg': 'Patte',
    'Wing': 'Aile',
    'Heart': 'Cœur',
    'Liver': 'Foie',
    'Gizzard': 'Gésier',
    'Stomach': 'Estomac',
    'Skin': 'Peau',
    
    // Meat - Turkey
    'Neck': 'Cou',
    
    // Meat - Duck (uses same parts as chicken)
    
    // Meat - Goose (uses same parts as chicken and duck)
    
    // Meat - Beef
    'Rib': 'Côte',
    'Loin': 'Longe',
    'Tenderloin': 'Filet',
    'Chuck': 'Palette',
    'Sirloin': 'Faux-filet',
    'Brisket': 'Poitrine',
    'Kidney': 'Rein',
    'Lung': 'Poumon',
    'Spleen': 'Rate',
    'Brain': 'Cerveau',
    'Pancreas': 'Pancréas',
    'stomach_tripe': 'Tripes',
    'Fat': 'Graisse',
    'Bone': 'Os',
    
    // Meat - Pork
    'Shoulder': 'Épaule',
    'Belly': 'Ventre',
    
    // Meat - Lamb (uses same parts as beef)
    
    // Meat - Goat (uses same parts as beef)
    
    // Meat - Rabbit (uses similar parts)
    
    // Meat - Venison (uses same parts as beef)
    
    // Meat - Bison (uses same parts as beef)
    
    // Meat - Fish
    'Fillet': 'Filet',
    'Head': 'Tête',
    
    // Meat - Shellfish
    'Shrimp': 'Crevette',
    'Crab': 'Crabe',
    'Lobster': 'Homard',
    
    // Dairy - Milk
    'Cow Milk': 'Lait de vache',
    'Goat Milk': 'Lait de chèvre',
    'Sheep Milk': 'Lait de brebis',
    
    // Dairy - Cheese
    'Cheddar Cheese': 'Fromage cheddar',
    'Mozzarella Cheese': 'Mozzarella',
    'Cottage Cheese': 'Fromage blanc',
    
    // Dairy - Fermented
    'Yogurt (plain)': 'Yaourt nature',
    'Kefir': 'Kéfir',
    
    // Dairy - Cream
    'Whipping Cream': 'Crème fraîche',
    
    // Dairy - Butter
    'Butter': 'Beurre',
    
    // Dairy - Other
    'Ice Cream': 'Crème glacée',
    'Sour Cream': 'Crème aigre',
    
    // Grain - Cereal
    'Rice': 'Riz',
    'Oats': 'Avoine',
    'Barley': 'Orge',
    'Wheat': 'Blé',
    
    // Grain - Bread
    'Whole Grain Bread': 'Pain complet',
    'White Bread': 'Pain blanc',
    
    // Grain - Pasta
    'Pasta (cooked)': 'Pâtes (cuites)',
    
    // Grain - Other
    'Quinoa': 'Quinoa',
    'Millet': 'Millet',
    
    // Nut - Tree Nut
    'Almonds': 'Amandes',
    'Cashews': 'Noix de cajou',
    'Pecans': 'Pacanes',
    'Hazelnuts': 'Noisettes',
    
    // Nut - Peanut
    'Peanuts (unsalted)': 'Cacahuètes (non salées)',
    'Peanut Butter (unsweetened)': 'Beurre de cacahuète (non sucré)',
  },
  
  // German translations
  de: {
    // Vegetables - Leafy Greens
    'Spinach': 'Spinat',
    'Kale': 'Grünkohl',
    'Lettuce (Romaine)': 'Römersalat',
    'Lettuce (Iceberg)': 'Eisbergsalat',
    'Swiss Chard': 'Mangold',
    'Collard Greens': 'Blätterkohl',
    'Mustard Greens': 'Senfblätter',
    'Turnip Greens': 'Rübenblätter',
    'Beet Greens': 'Rote-Bete-Blätter',
    
    // Vegetables - Root Vegetables
    'Carrot': 'Karotte',
    'Beetroot': 'Rote Bete',
    'Turnip': 'Rübe',
    'Radish': 'Radieschen',
    'Parsnip': 'Pastinake',
    'Sweet Potato': 'Süßkartoffel',
    'Potato': 'Kartoffel',
    
    // Vegetables - Cruciferous
    'Broccoli': 'Brokkoli',
    'Cauliflower': 'Blumenkohl',
    'Cabbage': 'Kohl',
    'Brussels Sprouts': 'Rosenkohl',
    'Bok Choy': 'Pak Choi',
    
    // Vegetables - Alliums
    'Onion': 'Zwiebel',
    'Garlic': 'Knoblauch',
    'Leek': 'Lauch',
    'Shallot': 'Schalotte',
    'Chives': 'Schnittlauch',
    'Scallions': 'Frühlingszwiebeln',
    
    // Vegetables - Squashes & Gourds
    'Pumpkin': 'Kürbis',
    'Zucchini': 'Zucchini',
    'Cucumber': 'Gurke',
    'Butternut Squash': 'Butternusskürbis',
    'Acorn Squash': 'Eichelkürbis',
    
    // Vegetables - Legumes
    'Green Beans': 'Grüne Bohnen',
    'Peas': 'Erbsen',
    'Lentils': 'Linsen',
    'Chickpeas': 'Kichererbsen',
    'Soybeans (Edamame)': 'Sojabohnen (Edamame)',
    
    // Vegetables - Stalk Vegetables
    'Celery': 'Sellerie',
    'Asparagus': 'Spargel',
    'Rhubarb (stalk)': 'Rhabarber (Stiel)',
    'Rhubarb (leaves)': 'Rhabarber (Blätter)',
    
    // Vegetables - Other
    'Corn': 'Mais',
    'Bell Pepper (Red)': 'Paprika (rot)',
    'Bell Pepper (Green)': 'Paprika (grün)',
    'Bell Pepper (Yellow)': 'Paprika (gelb)',
    'Chili Pepper': 'Chilischote',
    'Tomato': 'Tomate',
    'Eggplant': 'Aubergine',
    'Okra': 'Okraschote',
    'Mushrooms (edible)': 'Pilze (essbar)',
    'Mushrooms (wild)': 'Pilze (wild)',
    
    // Fruits
    'Apple': 'Apfel',
    'Banana': 'Banane',
    'Pear': 'Birne',
    'Orange': 'Orange',
    'Grapefruit': 'Grapefruit',
    'Lemon': 'Zitrone',
    'Lime': 'Limette',
    'Kiwi': 'Kiwi',
    'Mango': 'Mango',
    'Papaya': 'Papaya',
    'Pineapple': 'Ananas',
    'Cantaloupe': 'Cantaloupe-Melone',
    'Honeydew': 'Honigmelone',
    'Watermelon': 'Wassermelone',
    'Avocado': 'Avocado',
    'Strawberry': 'Erdbeere',
    'Blueberry': 'Blaubeere',
    'Raspberry': 'Himbeere',
    'Blackberry': 'Brombeere',
    'Cranberry': 'Cranberry',
    'Elderberry': 'Holunderbeere (roh)',
    'Elderberry (cooked)': 'Holunderbeere (gekocht)',
    'Peach': 'Pfirsich',
    'Plum': 'Pflaume',
    'Apricot': 'Aprikose',
    'Cherry': 'Kirsche',
    'Nectarine': 'Nektarine',
    'Date': 'Dattel',
    'Grapes': 'Weintrauben',
    'Raisins': 'Rosinen',
    'Coconut': 'Kokosnuss',
    'Dragon Fruit': 'Drachenfrucht',
    'Passion Fruit': 'Passionsfrucht',
    'Lychee': 'Litschi',
    'Guava': 'Guave',
    'Starfruit': 'Sternfrucht',
    'Pomegranate': 'Granatapfel',
    'Fig': 'Feige',
    
    // Meat - Chicken
    'Breast': 'Brust',
    'Thigh': 'Oberschenkel',
    'Leg': 'Bein',
    'Wing': 'Flügel',
    'Heart': 'Herz',
    'Liver': 'Leber',
    'Gizzard': 'Muskelmagen',
    'Stomach': 'Magen',
    'Skin': 'Haut',
    
    // Meat - Turkey
    'Neck': 'Hals',
    
    // Meat - Duck (uses same parts as chicken)
    
    // Meat - Goose (uses same parts as chicken and duck)
    
    // Meat - Beef
    'Rib': 'Rippe',
    'Loin': 'Lende',
    'Tenderloin': 'Filet',
    'Chuck': 'Bug',
    'Sirloin': 'Roastbeef',
    'Brisket': 'Brust',
    'Kidney': 'Niere',
    'Lung': 'Lunge',
    'Spleen': 'Milz',
    'Brain': 'Gehirn',
    'Pancreas': 'Bauchspeicheldrüse',
    'stomach_tripe': 'Kutteln',
    'Fat': 'Fett',
    'Bone': 'Knochen',
    
    // Meat - Pork
    'Shoulder': 'Schulter',
    'Belly': 'Bauch',
    
    // Meat - Lamb (uses same parts as beef)
    
    // Meat - Goat (uses same parts as beef)
    
    // Meat - Rabbit (uses similar parts)
    
    // Meat - Venison (uses same parts as beef)
    
    // Meat - Bison (uses same parts as beef)
    
    // Meat - Fish
    'Fillet': 'Filet',
    'Head': 'Kopf',
    
    // Meat - Shellfish
    'Shrimp': 'Garnele',
    'Crab': 'Krabbe',
    'Lobster': 'Hummer',
    
    // Dairy - Milk
    'Cow Milk': 'Kuhmilch',
    'Goat Milk': 'Ziegenmilch',
    'Sheep Milk': 'Schafsmilch',
    
    // Dairy - Cheese
    'Cheddar Cheese': 'Cheddar-Käse',
    'Mozzarella Cheese': 'Mozzarella',
    'Cottage Cheese': 'Hüttenkäse',
    
    // Dairy - Fermented
    'Yogurt (plain)': 'Naturjoghurt',
    'Kefir': 'Kefir',
    
    // Dairy - Cream
    'Whipping Cream': 'Schlagsahne',
    
    // Dairy - Butter
    'Butter': 'Butter',
    
    // Dairy - Other
    'Ice Cream': 'Eiscreme',
    'Sour Cream': 'Saure Sahne',
    
    // Grain - Cereal
    'Rice': 'Reis',
    'Oats': 'Hafer',
    'Barley': 'Gerste',
    'Wheat': 'Weizen',
    
    // Grain - Bread
    'Whole Grain Bread': 'Vollkornbrot',
    'White Bread': 'Weißbrot',
    
    // Grain - Pasta
    'Pasta (cooked)': 'Nudeln (gekocht)',
    
    // Grain - Other
    'Quinoa': 'Quinoa',
    'Millet': 'Hirse',
    
    // Nut - Tree Nut
    'Almonds': 'Mandeln',
    'Cashews': 'Cashewnüsse',
    'Pecans': 'Pekannüsse',
    'Hazelnuts': 'Haselnüsse',
    
    // Nut - Peanut
    'Peanuts (unsalted)': 'Erdnüsse (ungesalzen)',
    'Peanut Butter (unsweetened)': 'Erdnussbutter (ungesüßt)',
  },
  
  // Italian translations
  it: {
    // Vegetables - Leafy Greens
    'Spinach': 'Spinaci',
    'Kale': 'Cavolo riccio',
    'Lettuce (Romaine)': 'Lattuga romana',
    'Lettuce (Iceberg)': 'Lattuga iceberg',
    'Swiss Chard': 'Bietola',
    'Collard Greens': 'Cavolo verde',
    'Mustard Greens': 'Foglie di senape',
    'Turnip Greens': 'Cime di rapa',
    'Beet Greens': 'Foglie di barbabietola',
    
    // Vegetables - Root Vegetables
    'Carrot': 'Carota',
    'Beetroot': 'Barbabietola',
    'Turnip': 'Rapa',
    'Radish': 'Ravanello',
    'Parsnip': 'Pastinaca',
    'Sweet Potato': 'Patata dolce',
    'Potato': 'Patata',
    
    // Vegetables - Cruciferous
    'Broccoli': 'Broccoli',
    'Cauliflower': 'Cavolfiore',
    'Cabbage': 'Cavolo',
    'Brussels Sprouts': 'Cavoletti di Bruxelles',
    'Bok Choy': 'Bok choy',
    
    // Vegetables - Alliums
    'Onion': 'Cipolla',
    'Garlic': 'Aglio',
    'Leek': 'Porro',
    'Shallot': 'Scalogno',
    'Chives': 'Erba cipollina',
    'Scallions': 'Cipollotti',
    
    // Vegetables - Squashes & Gourds
    'Pumpkin': 'Zucca',
    'Zucchini': 'Zucchine',
    'Cucumber': 'Cetriolo',
    'Butternut Squash': 'Zucca butternut',
    'Acorn Squash': 'Zucca ghianda',
    
    // Vegetables - Legumes
    'Green Beans': 'Fagiolini',
    'Peas': 'Piselli',
    'Lentils': 'Lenticchie',
    'Chickpeas': 'Ceci',
    'Soybeans (Edamame)': 'Fagioli di soia (Edamame)',
    
    // Vegetables - Stalk Vegetables
    'Celery': 'Sedano',
    'Asparagus': 'Asparagi',
    'Rhubarb (stalk)': 'Rabarbaro (gambo)',
    'Rhubarb (leaves)': 'Rabarbaro (foglie)',
    
    // Vegetables - Other
    'Corn': 'Mais',
    'Bell Pepper (Red)': 'Peperone rosso',
    'Bell Pepper (Green)': 'Peperone verde',
    'Bell Pepper (Yellow)': 'Peperone giallo',
    'Chili Pepper': 'Peperoncino',
    'Tomato': 'Pomodoro',
    'Eggplant': 'Melanzana',
    'Okra': 'Okra',
    'Mushrooms (edible)': 'Funghi (commestibili)',
    'Mushrooms (wild)': 'Funghi (selvatici)',
    
    // Fruits
    'Apple': 'Mela',
    'Banana': 'Banana',
    'Pear': 'Pera',
    'Orange': 'Arancia',
    'Grapefruit': 'Pompelmo',
    'Lemon': 'Limone',
    'Lime': 'Lime',
    'Kiwi': 'Kiwi',
    'Mango': 'Mango',
    'Papaya': 'Papaya',
    'Pineapple': 'Ananas',
    'Cantaloupe': 'Melone cantalupo',
    'Honeydew': 'Melone dolce',
    'Watermelon': 'Anguria',
    'Avocado': 'Avocado',
    'Strawberry': 'Fragola',
    'Blueberry': 'Mirtillo',
    'Raspberry': 'Lampone',
    'Blackberry': 'Mora',
    'Cranberry': 'Mirtillo rosso',
    'Elderberry': 'Bacche di sambuco (crudo)',
    'Elderberry (cooked)': 'Bacche di sambuco (cotto)',
    'Peach': 'Pesca',
    'Plum': 'Prugna',
    'Apricot': 'Albicocca',
    'Cherry': 'Ciliegia',
    'Nectarine': 'Nettarina',
    'Date': 'Dattero',
    'Grapes': 'Uva',
    'Raisins': 'Uvetta',
    'Coconut': 'Cocco',
    'Dragon Fruit': 'Frutto del drago',
    'Passion Fruit': 'Frutto della passione',
    'Lychee': 'Litchi',
    'Guava': 'Guava',
    'Starfruit': 'Carambola',
    'Pomegranate': 'Melograno',
    'Fig': 'Fico',
    
    // Meat - Chicken
    'Breast': 'Petto',
    'Thigh': 'Coscia',
    'Leg': 'Zampa',
    'Wing': 'Ala',
    'Heart': 'Cuore',
    'Liver': 'Fegato',
    'Gizzard': 'Ventriglio',
    'Stomach': 'Stomaco',
    'Skin': 'Pelle',
    
    // Meat - Turkey
    'Neck': 'Collo',
    
    // Meat - Duck (uses same parts as chicken)
    
    // Meat - Goose (uses same parts as chicken and duck)
    
    // Meat - Beef
    'Rib': 'Costola',
    'Loin': 'Lombo',
    'Tenderloin': 'Filetto',
    'Chuck': 'Spalla',
    'Sirloin': 'Controfiletto',
    'Brisket': 'Petto',
    'Kidney': 'Rene',
    'Lung': 'Polmone',
    'Spleen': 'Milza',
    'Brain': 'Cervello',
    'Pancreas': 'Pancreas',
    'stomach_tripe': 'Trippa',
    'Fat': 'Grasso',
    'Bone': 'Osso',
    
    // Meat - Pork
    'Shoulder': 'Spalla',
    'Belly': 'Pancetta',
    
    // Meat - Lamb (uses same parts as beef)
    
    // Meat - Goat (uses same parts as beef)
    
    // Meat - Rabbit (uses similar parts)
    
    // Meat - Venison (uses same parts as beef)
    
    // Meat - Bison (uses same parts as beef)
    
    // Meat - Fish
    'Fillet': 'Filetto',
    'Head': 'Testa',
    
    // Meat - Shellfish
    'Shrimp': 'Gamberetto',
    'Crab': 'Granchio',
    'Lobster': 'Aragosta',
    
    // Dairy - Milk
    'Cow Milk': 'Latte di mucca',
    'Goat Milk': 'Latte di capra',
    'Sheep Milk': 'Latte di pecora',
    
    // Dairy - Cheese
    'Cheddar Cheese': 'Formaggio cheddar',
    'Mozzarella Cheese': 'Mozzarella',
    'Cottage Cheese': 'Ricotta',
    
    // Dairy - Fermented
    'Yogurt (plain)': 'Yogurt naturale',
    'Kefir': 'Kefir',
    
    // Dairy - Cream
    'Whipping Cream': 'Panna da montare',
    
    // Dairy - Butter
    'Butter': 'Burro',
    
    // Dairy - Other
    'Ice Cream': 'Gelato',
    'Sour Cream': 'Panna acida',
    
    // Grain - Cereal
    'Rice': 'Riso',
    'Oats': 'Avena',
    'Barley': 'Orzo',
    'Wheat': 'Grano',
    
    // Grain - Bread
    'Whole Grain Bread': 'Pane integrale',
    'White Bread': 'Pane bianco',
    
    // Grain - Pasta
    'Pasta (cooked)': 'Pasta (cotta)',
    
    // Grain - Other
    'Quinoa': 'Quinoa',
    'Millet': 'Miglio',
    
    // Nut - Tree Nut
    'Almonds': 'Mandorle',
    'Cashews': 'Anacardi',
    'Pecans': 'Noci pecan',
    'Hazelnuts': 'Nocciole',
    
    // Nut - Peanut
    'Peanuts (unsalted)': 'Arachidi (non salate)',
    'Peanut Butter (unsweetened)': 'Burro di arachidi (non zuccherato)',
  },
  
  // Russian translations
  ru: {
    // Vegetables - Leafy Greens
    'Spinach': 'Шпинат',
    'Kale': 'Капуста кале',
    'Lettuce (Romaine)': 'Салат ромэн',
    'Lettuce (Iceberg)': 'Салат айсберг',
    'Swiss Chard': 'Мангольд',
    'Collard Greens': 'Капуста огородная',
    'Mustard Greens': 'Горчичная зелень',
    'Turnip Greens': 'Ботва репы',
    'Beet Greens': 'Ботва свеклы',
    
    // Vegetables - Root Vegetables
    'Carrot': 'Морковь',
    'Beetroot': 'Свекла',
    'Turnip': 'Репа',
    'Radish': 'Редис',
    'Parsnip': 'Пастернак',
    'Sweet Potato': 'Сладкий картофель',
    'Potato': 'Картофель',
    
    // Vegetables - Cruciferous
    'Broccoli': 'Брокколи',
    'Cauliflower': 'Цветная капуста',
    'Cabbage': 'Капуста',
    'Brussels Sprouts': 'Брюссельская капуста',
    'Bok Choy': 'Бок-чой',
    
    // Vegetables - Alliums
    'Onion': 'Лук',
    'Garlic': 'Чеснок',
    'Leek': 'Лук-порей',
    'Shallot': 'Лук-шалот',
    'Chives': 'Зеленый лук',
    'Scallions': 'Зеленый лук',
    
    // Vegetables - Squashes & Gourds
    'Pumpkin': 'Тыква',
    'Zucchini': 'Цуккини',
    'Cucumber': 'Огурец',
    'Butternut Squash': 'Мускатная тыква',
    'Acorn Squash': 'Желудевая тыква',
    
    // Vegetables - Legumes
    'Green Beans': 'Стручковая фасоль',
    'Peas': 'Горох',
    'Lentils': 'Чечевица',
    'Chickpeas': 'Нут',
    'Soybeans (Edamame)': 'Соя (Эдамаме)',
    
    // Vegetables - Stalk Vegetables
    'Celery': 'Сельдерей',
    'Asparagus': 'Спаржа',
    'Rhubarb (stalk)': 'Ревень (стебель)',
    'Rhubarb (leaves)': 'Ревень (листья)',
    
    // Vegetables - Other
    'Corn': 'Кукуруза',
    'Bell Pepper (Red)': 'Красный болгарский перец',
    'Bell Pepper (Green)': 'Зеленый болгарский перец',
    'Bell Pepper (Yellow)': 'Желтый болгарский перец',
    'Chili Pepper': 'Перец чили',
    'Tomato': 'Помидор',
    'Eggplant': 'Баклажан',
    'Okra': 'Окра',
    'Mushrooms (edible)': 'Грибы (съедобные)',
    'Mushrooms (wild)': 'Грибы (дикие)',
    
    // Fruits
    'Apple': 'Яблоко',
    'Banana': 'Банан',
    'Pear': 'Груша',
    'Orange': 'Апельсин',
    'Grapefruit': 'Грейпфрут',
    'Lemon': 'Лимон',
    'Lime': 'Лайм',
    'Kiwi': 'Киви',
    'Mango': 'Манго',
    'Papaya': 'Папайя',
    'Pineapple': 'Ананас',
    'Cantaloupe': 'Мускусная дыня',
    'Honeydew': 'Медовая дыня',
    'Watermelon': 'Арбуз',
    'Avocado': 'Авокадо',
    'Strawberry': 'Клубника',
    'Blueberry': 'Черника',
    'Raspberry': 'Малина',
    'Blackberry': 'Ежевика',
    'Cranberry': 'Клюква',
    'Elderberry': 'Бузина (сырая)',
    'Elderberry (cooked)': 'Бузина (приготовленная)',
    'Peach': 'Персик',
    'Plum': 'Слива',
    'Apricot': 'Абрикос',
    'Cherry': 'Вишня',
    'Nectarine': 'Нектарин',
    'Date': 'Финик',
    'Grapes': 'Виноград',
    'Raisins': 'Изюм',
    'Coconut': 'Кокос',
    'Dragon Fruit': 'Питахайя',
    'Passion Fruit': 'Маракуйя',
    'Lychee': 'Личи',
    'Guava': 'Гуава',
    'Starfruit': 'Карамбола',
    'Pomegranate': 'Гранат',
    'Fig': 'Инжир',
    
    // Meat - Chicken
    'Breast': 'Грудка',
    'Thigh': 'Бедро',
    'Leg': 'Ножка',
    'Wing': 'Крыло',
    'Heart': 'Сердце',
    'Liver': 'Печень',
    'Gizzard': 'Желудок',
    'Stomach': 'Желудок',
    'Skin': 'Кожа',
    
    // Meat - Turkey
    'Neck': 'Шея',
    
    // Meat - Duck (uses same parts as chicken)
    
    // Meat - Goose (uses same parts as chicken and duck)
    
    // Meat - Beef
    'Rib': 'Ребро',
    'Loin': 'Корейка',
    'Tenderloin': 'Вырезка',
    'Chuck': 'Лопатка',
    'Sirloin': 'Филей',
    'Brisket': 'Грудинка',
    'Kidney': 'Почка',
    'Lung': 'Легкое',
    'Spleen': 'Селезенка',
    'Brain': 'Мозги',
    'Pancreas': 'Поджелудочная железа',
    'stomach_tripe': 'Рубец',
    'Fat': 'Жир',
    'Bone': 'Кость',
    
    // Meat - Pork
    'Shoulder': 'Лопатка',
    'Belly': 'Грудинка',
    
    // Meat - Fish
    'Fillet': 'Филе',
    'Head': 'Голова',
    
    // Meat - Shellfish
    'Shrimp': 'Креветка',
    'Crab': 'Краб',
    'Lobster': 'Омар',
    
    // Dairy - Milk
    'Cow Milk': 'Коровье молоко',
    'Goat Milk': 'Козье молоко',
    'Sheep Milk': 'Овечье молоко',
    
    // Dairy - Cheese
    'Cheddar Cheese': 'Сыр чеддер',
    'Mozzarella Cheese': 'Моцарелла',
    'Cottage Cheese': 'Творог',
    
    // Dairy - Fermented
    'Yogurt (plain)': 'Йогурт натуральный',
    'Kefir': 'Кефир',
    
    // Dairy - Cream
    'Whipping Cream': 'Сливки для взбивания',
    
    // Dairy - Butter
    'Butter': 'Сливочное масло',
    
    // Dairy - Other
    'Ice Cream': 'Мороженое',
    'Sour Cream': 'Сметана',
    
    // Grain - Cereal
    'Rice': 'Рис',
    'Oats': 'Овес',
    'Barley': 'Ячмень',
    'Wheat': 'Пшеница',
    
    // Grain - Bread
    'Whole Grain Bread': 'Цельнозерновой хлеб',
    'White Bread': 'Белый хлеб',
    
    // Grain - Pasta
    'Pasta (cooked)': 'Макароны (вареные)',
    
    // Grain - Other
    'Quinoa': 'Киноа',
    'Millet': 'Пшено',
    
    // Nut - Tree Nut
    'Almonds': 'Миндаль',
    'Cashews': 'Кешью',
    'Pecans': 'Пекан',
    'Hazelnuts': 'Фундук',
    
    // Nut - Peanut
    'Peanuts (unsalted)': 'Арахис (несоленый)',
    'Peanut Butter (unsweetened)': 'Арахисовая паста (без сахара)',
  },
  
  // Polish translations
  pl: {
    // Vegetables - Leafy Greens
    'Spinach': 'Szpinak',
    'Kale': 'Jarmuż',
    'Lettuce (Romaine)': 'Sałata rzymska',
    'Lettuce (Iceberg)': 'Sałata lodowa',
    'Swiss Chard': 'Botwina',
    'Collard Greens': 'Kapusta liściasta',
    'Mustard Greens': 'Liście gorczycy',
    'Turnip Greens': 'Liście rzepy',
    'Beet Greens': 'Liście buraka',
    
    // Vegetables - Root Vegetables
    'Carrot': 'Marchewka',
    'Beetroot': 'Burak',
    'Turnip': 'Rzepa',
    'Radish': 'Rzodkiewka',
    'Parsnip': 'Pasternak',
    'Sweet Potato': 'Batat',
    'Potato': 'Ziemniak',
    
    // Vegetables - Cruciferous
    'Broccoli': 'Brokuł',
    'Cauliflower': 'Kalafior',
    'Cabbage': 'Kapusta',
    'Brussels Sprouts': 'Brukselka',
    'Bok Choy': 'Kapusta chińska',
    
    // Vegetables - Alliums
    'Onion': 'Cebula',
    'Garlic': 'Czosnek',
    'Leek': 'Por',
    'Shallot': 'Szalotka',
    'Chives': 'Szczypiorek',
    'Scallions': 'Dymka',
    
    // Vegetables - Squashes & Gourds
    'Pumpkin': 'Dynia',
    'Zucchini': 'Cukinia',
    'Cucumber': 'Ogórek',
    'Butternut Squash': 'Dynia piżmowa',
    'Acorn Squash': 'Dynia żołędziowa',
    
    // Vegetables - Legumes
    'Green Beans': 'Fasolka szparagowa',
    'Peas': 'Groszek',
    'Lentils': 'Soczewica',
    'Chickpeas': 'Ciecierzyca',
    'Soybeans (Edamame)': 'Soja (Edamame)',
    
    // Vegetables - Stalk Vegetables
    'Celery': 'Seler',
    'Asparagus': 'Szparagi',
    'Rhubarb (stalk)': 'Rabarbar (łodyga)',
    'Rhubarb (leaves)': 'Rabarbar (liście)',
    
    // Vegetables - Other
    'Corn': 'Kukurydza',
    'Bell Pepper (Red)': 'Papryka czerwona',
    'Bell Pepper (Green)': 'Papryka zielona',
    'Bell Pepper (Yellow)': 'Papryka żółta',
    'Chili Pepper': 'Papryczka chili',
    'Tomato': 'Pomidor',
    'Eggplant': 'Bakłażan',
    'Okra': 'Okra',
    'Mushrooms (edible)': 'Grzyby (jadalne)',
    'Mushrooms (wild)': 'Grzyby (dzikie)',
    
    // Fruits
    'Apple': 'Jabłko',
    'Banana': 'Banan',
    'Pear': 'Gruszka',
    'Orange': 'Pomarańcza',
    'Grapefruit': 'Grejpfrut',
    'Lemon': 'Cytryna',
    'Lime': 'Limonka',
    'Kiwi': 'Kiwi',
    'Mango': 'Mango',
    'Papaya': 'Papaja',
    'Pineapple': 'Ananas',
    'Cantaloupe': 'Melon kantalupa',
    'Honeydew': 'Melon miodowy',
    'Watermelon': 'Arbuz',
    'Avocado': 'Awokado',
    'Strawberry': 'Truskawka',
    'Blueberry': 'Borówka',
    'Raspberry': 'Malina',
    'Blackberry': 'Jeżyna',
    'Cranberry': 'Żurawina',
    'Elderberry': 'Czarny bez (surowy)',
    'Elderberry (cooked)': 'Czarny bez (gotowany)',
    'Peach': 'Brzoskwinia',
    'Plum': 'Śliwka',
    'Apricot': 'Morela',
    'Cherry': 'Wiśnia',
    'Nectarine': 'Nektarynka',
    'Date': 'Daktyl',
    'Grapes': 'Winogrono',
    'Raisins': 'Rodzynki',
    'Coconut': 'Kokos',
    'Dragon Fruit': 'Pitaja',
    'Passion Fruit': 'Marakuja',
    'Lychee': 'Liczi',
    'Guava': 'Guawa',
    'Starfruit': 'Karambola',
    'Pomegranate': 'Granat',
    'Fig': 'Figa',
    
    // Meat - Chicken
    'Breast': 'Pierś',
    'Thigh': 'Udo',
    'Leg': 'Noga',
    'Wing': 'Skrzydło',
    'Heart': 'Serce',
    'Liver': 'Wątroba',
    'Gizzard': 'Żołądek',
    'Stomach': 'Żołądek',
    'Skin': 'Skóra',
    
    // Meat - Turkey
    'Neck': 'Szyja',
    
    // Meat - Duck (uses same parts as chicken)
    
    // Meat - Goose (uses same parts as chicken and duck)
    
    // Meat - Beef
    'Rib': 'Żeberko',
    'Loin': 'Polędwica',
    'Tenderloin': 'Polędwiczka',
    'Chuck': 'Łopatka',
    'Sirloin': 'Rostbef',
    'Brisket': 'Mostek',
    'Kidney': 'Nerka',
    'Lung': 'Płuco',
    'Spleen': 'Śledziona',
    'Brain': 'Mózg',
    'Pancreas': 'Trzustka',
    'stomach_tripe': 'Flaki',
    'Fat': 'Tłuszcz',
    'Bone': 'Kość',
    
    // Meat - Pork
    'Shoulder': 'Łopatka',
    'Belly': 'Brzuch',
    
    // Meat - Fish
    'Fillet': 'Filet',
    'Head': 'Głowa',
    
    // Meat - Shellfish
    'Shrimp': 'Krewetka',
    'Crab': 'Krab',
    'Lobster': 'Homar',
    
    // Dairy - Milk
    'Cow Milk': 'Mleko krowie',
    'Goat Milk': 'Mleko kozie',
    'Sheep Milk': 'Mleko owcze',
    
    // Dairy - Cheese
    'Cheddar Cheese': 'Ser cheddar',
    'Mozzarella Cheese': 'Mozzarella',
    'Cottage Cheese': 'Twaróg',
    
    // Dairy - Fermented
    'Yogurt (plain)': 'Jogurt naturalny',
    'Kefir': 'Kefir',
    
    // Dairy - Cream
    'Whipping Cream': 'Śmietana do ubijania',
    
    // Dairy - Butter
    'Butter': 'Masło',
    
    // Dairy - Other
    'Ice Cream': 'Lody',
    'Sour Cream': 'Śmietana kwaśna',
    
    // Grain - Cereal
    'Rice': 'Ryż',
    'Oats': 'Owies',
    'Barley': 'Jęczmień',
    'Wheat': 'Pszenica',
    
    // Grain - Bread
    'Whole Grain Bread': 'Chleb pełnoziarnisty',
    'White Bread': 'Chleb biały',
    
    // Grain - Pasta
    'Pasta (cooked)': 'Makaron (gotowany)',
    
    // Grain - Other
    'Quinoa': 'Komosa ryżowa',
    'Millet': 'Proso',
    
    // Nut - Tree Nut
    'Almonds': 'Migdały',
    'Cashews': 'Orzechy nerkowca',
    'Pecans': 'Orzechy pekan',
    'Hazelnuts': 'Orzechy laskowe',
    
    // Nut - Peanut
    'Peanuts (unsalted)': 'Orzeszki ziemne (niesolone)',
    'Peanut Butter (unsweetened)': 'Masło orzechowe (niesłodzone)',
  },
};

/**
 * Food category translations for all supported languages
 * Key format: English category name (exactly as in CSV)
 * Value: Translated name in target language
 */
export const categoryTranslations: Record<Language, TranslationDictionary> = {
  // English - serves as the source/reference
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
  
  // Spanish translations
  es: {
    // Vegetable categories
    'Leafy Greens': 'Verduras de hoja verde',
    'Root Vegetables': 'Vegetales de raíz',
    'Cruciferous Vegetables': 'Vegetales crucíferos',
    'Alliums': 'Aliaceas',
    'Squashes & Gourds': 'Calabazas y calabacines',
    'Legumes': 'Legumbres',
    'Stalk Vegetables': 'Vegetales de tallo',
    'Other': 'Otros',
    
    // Fruit categories
    'Common Fruits': 'Frutas comunes',
    'Berries': 'Bayas',
    'Stone Fruits': 'Frutas con hueso',
    'Tropical Fruits': 'Frutas tropicales',
    'Tropical/Exotic': 'Tropical/Exótico',
    'Citrus Fruits': 'Frutas cítricas',
    'Melons': 'Melones',
    'Grapes & Raisins': 'Uvas y pasas',
    
    // Meat categories
    'Chicken': 'Pollo',
    'Turkey': 'Pavo',
    'Duck': 'Pato',
    'Goose': 'Ganso',
    'Beef': 'Ternera',
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
    'Tree Nut': 'Nuez',
    'Peanut': 'Cacahuate',
    
    // Food types
    'Vegetable': 'Vegetal',
    'Fruit': 'Fruta',
    'Meat': 'Carne',
    'Dairy': 'Lácteos',
    'Grain': 'Grano',
    'Nut': 'Fruto seco',
  },
  
  // French translations
  fr: {
    // Vegetable categories
    'Leafy Greens': 'Légumes à feuilles vertes',
    'Root Vegetables': 'Légumes racines',
    'Cruciferous Vegetables': 'Légumes crucifères',
    'Alliums': 'Alliacées',
    'Squashes & Gourds': 'Courges et citrouilles',
    'Legumes': 'Légumineuses',
    'Stalk Vegetables': 'Légumes tiges',
    'Other': 'Autres',
    
    // Fruit categories
    'Common Fruits': 'Fruits communs',
    'Berries': 'Baies',
    'Stone Fruits': 'Fruits à noyau',
    'Tropical Fruits': 'Fruits tropicaux',
    'Tropical/Exotic': 'Tropical/Exotique',
    'Citrus Fruits': 'Agrumes',
    'Melons': 'Melons',
    'Grapes & Raisins': 'Raisins frais et secs',
    
    // Meat categories
    'Chicken': 'Poulet',
    'Turkey': 'Dinde',
    'Duck': 'Canard',
    'Goose': 'Oie',
    'Beef': 'Bœuf',
    'Pork': 'Porc',
    'Lamb': 'Agneau',
    'Goat': 'Chèvre',
    'Rabbit': 'Lapin',
    'Venison': 'Venaison',
    'Bison': 'Bison',
    'Fish': 'Poisson',
    'Shellfish': 'Fruits de mer',

    // Dairy categories
    'Milk': 'Lait',
    'Cheese': 'Fromage',
    'Fermented': 'Fermenté',
    'Cream': 'Crème',
    'Butter': 'Beurre',

    // Grain categories
    'Cereal': 'Céréales',
    'Bread': 'Pain',
    'Pasta': 'Pâtes',

    // Nut categories
    'Tree Nut': 'Noix',
    'Peanut': 'Cacahuète',
    
    // Food types
    'Vegetable': 'Légume',
    'Fruit': 'Fruit',
    'Meat': 'Viande',
    'Dairy': 'Produits laitiers',
    'Grain': 'Céréale',
    'Nut': 'Fruits à coque',
  },
  
  // German translations
  de: {
    // Vegetable categories
    'Leafy Greens': 'Blattgemüse',
    'Root Vegetables': 'Wurzelgemüse',
    'Cruciferous Vegetables': 'Kreuzblütler',
    'Alliums': 'Lauchgewächse',
    'Squashes & Gourds': 'Kürbisgewächse',
    'Legumes': 'Hülsenfrüchte',
    'Stalk Vegetables': 'Stängelgemüse',
    'Other': 'Sonstiges',
    
    // Fruit categories
    'Common Fruits': 'Gängige Früchte',
    'Berries': 'Beeren',
    'Stone Fruits': 'Steinobst',
    'Tropical Fruits': 'Tropische Früchte',
    'Tropical/Exotic': 'Tropisch/Exotisch',
    'Citrus Fruits': 'Zitrusfrüchte',
    'Melons': 'Melonen',
    'Grapes & Raisins': 'Weintrauben & Rosinen',
    
    // Meat categories
    'Chicken': 'Hähnchen',
    'Turkey': 'Truthahn',
    'Duck': 'Ente',
    'Goose': 'Gans',
    'Beef': 'Rindfleisch',
    'Pork': 'Schweinefleisch',
    'Lamb': 'Lamm',
    'Goat': 'Ziege',
    'Rabbit': 'Kaninchen',
    'Venison': 'Hirschfleisch',
    'Bison': 'Bison',
    'Fish': 'Fisch',
    'Shellfish': 'Meeresfrüchte',

    // Dairy categories
    'Milk': 'Milch',
    'Cheese': 'Käse',
    'Fermented': 'Fermentiert',
    'Cream': 'Sahne',
    'Butter': 'Butter',

    // Grain categories
    'Cereal': 'Getreide',
    'Bread': 'Brot',
    'Pasta': 'Nudeln',

    // Nut categories
    'Tree Nut': 'Baumnuss',
    'Peanut': 'Erdnuss',
    
    // Food types
    'Vegetable': 'Gemüse',
    'Fruit': 'Obst',
    'Meat': 'Fleisch',
    'Dairy': 'Milchprodukte',
    'Grain': 'Getreide',
    'Nut': 'Nuss',
  },
  
  // Italian translations
  it: {
    // Vegetable categories
    'Leafy Greens': 'Verdure a foglia verde',
    'Root Vegetables': 'Ortaggi a radice',
    'Cruciferous Vegetables': 'Verdure crucifere',
    'Alliums': 'Alliacee',
    'Squashes & Gourds': 'Zucche e zucchine',
    'Legumes': 'Legumi',
    'Stalk Vegetables': 'Ortaggi a gambo',
    'Other': 'Altri',
    
    // Fruit categories
    'Common Fruits': 'Frutti comuni',
    'Berries': 'Bacche',
    'Stone Fruits': 'Frutti con nocciolo',
    'Tropical Fruits': 'Frutti tropicali',
    'Tropical/Exotic': 'Tropicale/Esotico',
    'Citrus Fruits': 'Agrumi',
    'Melons': 'Meloni',
    'Grapes & Raisins': 'Uva e uvetta',
    
    // Meat categories
    'Chicken': 'Pollo',
    'Turkey': 'Tacchino',
    'Duck': 'Anatra',
    'Goose': 'Oca',
    'Beef': 'Manzo',
    'Pork': 'Maiale',
    'Lamb': 'Agnello',
    'Goat': 'Capra',
    'Rabbit': 'Coniglio',
    'Venison': 'Cervo',
    'Bison': 'Bisonte',
    'Fish': 'Pesce',
    'Shellfish': 'Molluschi',

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
    'Tree Nut': 'Frutta secca',
    'Peanut': 'Arachidi',
    
    // Food types
    'Vegetable': 'Verdura',
    'Fruit': 'Frutta',
    'Meat': 'Carne',
    'Dairy': 'Latticini',
    'Grain': 'Cereali',
    'Nut': 'Frutta secca',
  },
  
  // Russian translations
  ru: {
    // Vegetable categories
    'Leafy Greens': 'Листовые овощи',
    'Root Vegetables': 'Корнеплоды',
    'Cruciferous Vegetables': 'Крестоцветные овощи',
    'Alliums': 'Луковичные',
    'Squashes & Gourds': 'Тыквенные',
    'Legumes': 'Бобовые',
    'Stalk Vegetables': 'Стеблевые овощи',
    'Other': 'Другие',
    
    // Fruit categories
    'Common Fruits': 'Распространенные фрукты',
    'Berries': 'Ягоды',
    'Stone Fruits': 'Косточковые',
    'Tropical Fruits': 'Тропические фрукты',
    'Tropical/Exotic': 'Тропические/Экзотические',
    'Citrus Fruits': 'Цитрусовые',
    'Melons': 'Дыни',
    'Grapes & Raisins': 'Виноград и изюм',
    
    // Meat categories
    'Chicken': 'Курица',
    'Turkey': 'Индейка',
    'Duck': 'Утка',
    'Goose': 'Гусь',
    'Beef': 'Говядина',
    'Pork': 'Свинина',
    'Lamb': 'Баранина',
    'Goat': 'Козлятина',
    'Rabbit': 'Кролик',
    'Venison': 'Оленина',
    'Bison': 'Бизон',
    'Fish': 'Рыба',
    'Shellfish': 'Морепродукты',

    // Dairy categories
    'Milk': 'Молоко',
    'Cheese': 'Сыр',
    'Fermented': 'Ферментированные продукты',
    'Cream': 'Сливки',
    'Butter': 'Масло',

    // Grain categories
    'Cereal': 'Зерновые',
    'Bread': 'Хлеб',
    'Pasta': 'Макароны',

    // Nut categories
    'Tree Nut': 'Орехи',
    'Peanut': 'Арахис',
    
    // Food types
    'Vegetable': 'Овощ',
    'Fruit': 'Фрукт',
    'Meat': 'Мясо',
    'Dairy': 'Молочные продукты',
    'Grain': 'Зерновые',
    'Nut': 'Орехи',
  },
  
  // Polish translations
  pl: {
    // Vegetable categories
    'Leafy Greens': 'Zielone liściaste',
    'Root Vegetables': 'Warzywa korzeniowe',
    'Cruciferous Vegetables': 'Warzywa krzyżowe',
    'Alliums': 'Cebulowe',
    'Squashes & Gourds': 'Dynie i kabaczki',
    'Legumes': 'Rośliny strączkowe',
    'Stalk Vegetables': 'Warzywa łodygowe',
    'Other': 'Inne',
    
    // Fruit categories
    'Common Fruits': 'Popularne owoce',
    'Berries': 'Jagody',
    'Stone Fruits': 'Owoce pestkowe',
    'Tropical Fruits': 'Owoce tropikalne',
    'Tropical/Exotic': 'Tropikalne/Egzotyczne',
    'Citrus Fruits': 'Owoce cytrusowe',
    'Melons': 'Melony',
    'Grapes & Raisins': 'Winogrona i rodzynki',
    
    // Meat categories
    'Chicken': 'Kurczak',
    'Turkey': 'Indyk',
    'Duck': 'Kaczka',
    'Goose': 'Gęś',
    'Beef': 'Wołowina',
    'Pork': 'Wieprzowina',
    'Lamb': 'Jagnięcina',
    'Goat': 'Koźlęcina',
    'Rabbit': 'Królik',
    'Venison': 'Dziczyzna',
    'Bison': 'Bizon',
    'Fish': 'Ryba',
    'Shellfish': 'Skorupiaki',

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
    'Tree Nut': 'Orzechy drzewne',
    'Peanut': 'Orzeszki ziemne',
    
    // Food types
    'Vegetable': 'Warzywo',
    'Fruit': 'Owoc',
    'Meat': 'Mięso',
    'Dairy': 'Nabiał',
    'Grain': 'Zboże',
    'Nut': 'Orzech',
  },
};

/**
 * Compatibility status translations for all supported languages
 */
export const statusTranslations: Record<Language, TranslationDictionary> = {
  en: {
    'allowed': 'allowed',
    'not allowed': 'not allowed',
    'acceptable in small quantities': 'acceptable in small quantities',
    'acceptable in small quantities (boiled)': 'acceptable in small quantities (boiled)',
  },
  es: {
    'allowed': 'permitido',
    'not allowed': 'no permitido',
    'acceptable in small quantities': 'aceptable en pequeñas cantidades',
    'acceptable in small quantities (boiled)': 'aceptable en pequeñas cantidades (hervido)',
  },
  fr: {
    'allowed': 'autorisé',
    'not allowed': 'non autorisé',
    'acceptable in small quantities': 'acceptable en petites quantités',
    'acceptable in small quantities (boiled)': 'acceptable en petites quantités (bouilli)',
  },
  de: {
    'allowed': 'erlaubt',
    'not allowed': 'nicht erlaubt',
    'acceptable in small quantities': 'akzeptabel in kleinen Mengen',
    'acceptable in small quantities (boiled)': 'akzeptabel in kleinen Mengen (gekocht)',
  },
  it: {
    'allowed': 'consentito',
    'not allowed': 'non consentito',
    'acceptable in small quantities': 'accettabile in piccole quantità',
    'acceptable in small quantities (boiled)': 'accettabile in piccole quantità (bollito)',
  },
  ru: {
    'allowed': 'разрешено',
    'not allowed': 'не разрешено',
    'acceptable in small quantities': 'допустимо в небольших количествах',
    'acceptable in small quantities (boiled)': 'допустимо в небольших количествах (вареное)',
  },
  pl: {
    'allowed': 'dozwolone',
    'not allowed': 'niedozwolone',
    'acceptable in small quantities': 'akceptowalne w małych ilościach',
    'acceptable in small quantities (boiled)': 'akceptowalne w małych ilościach (gotowane)',
  },
};

/**
 * Get translated food name
 * @param foodName English food name
 * @param language Target language
 * @returns Translated food name, falls back to English if translation not found
 */
export const getFoodTranslation = (foodName: string, language: Language): string => {
  return foodTranslations[language][foodName] || foodTranslations.en[foodName] || foodName;
};

/**
 * Get translated animal name
 * @param animalName English animal name
 * @param language Target language
 * @returns Translated animal name, falls back to English if translation not found
 */
export const getAnimalTranslation = (animalName: string, language: Language): string => {
  return animalTranslations[language][animalName] || animalTranslations.en[animalName] || animalName;
};

/**
 * Get translated category name
 * @param categoryName English category name
 * @param language Target language
 * @returns Translated category name, falls back to English if translation not found
 */
export const getCategoryTranslation = (categoryName: string, language: Language): string => {
  return categoryTranslations[language][categoryName] || categoryTranslations.en[categoryName] || categoryName;
};

/**
 * Get translated safety status
 * @param status Safety status from CSV
 * @param language Target language
 * @returns Translated safety status
 */
export const getSafetyTranslation = (status: string, language: Language): string => {
  return statusTranslations[language][status] || statusTranslations.en[status] || status;
};
