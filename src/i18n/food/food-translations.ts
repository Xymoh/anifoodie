import { Language } from '../../hooks/useLanguage';

export type FoodTranslationDictionary = Record<string, string>;

export const foodTranslations: Record<Language, FoodTranslationDictionary> = {
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

    // Added foods
    'Macadamia Nuts': 'Macadamia Nuts',
    'Walnuts': 'Walnuts',
    'Sunflower Seeds (unsalted)': 'Sunflower Seeds (unsalted)',
    'Pumpkin Seeds (unsalted)': 'Pumpkin Seeds (unsalted)',
    'Egg (cooked)': 'Egg (cooked)',
    'Chocolate': 'Chocolate',
    'Xylitol (sugar-free gum)': 'Xylitol (sugar-free gum)',
    'Honey': 'Honey',
    'Coffee': 'Coffee',
    'Alcohol': 'Alcohol',
    'Crickets': 'Crickets',
    'Mealworms': 'Mealworms',
    'Dubia Roaches': 'Dubia Roaches',
    'Black Soldier Fly Larvae': 'Black Soldier Fly Larvae',
    'Waxworms': 'Waxworms',
    'Earthworms': 'Earthworms',
    'Bloodworms': 'Bloodworms',
    'Brine Shrimp': 'Brine Shrimp',
    'Feeder Rodents (frozen-thawed)': 'Feeder Rodents (frozen-thawed)',
    'Stomach Tripe': 'Stomach Tripe',
  },
  es: {
    // Vegetales - Verduras de hoja
    'Spinach': 'Espinaca',
    'Kale': 'Col rizada',
    'Lettuce (Romaine)': 'Lechuga (Romaine)',
    'Lettuce (Iceberg)': 'Lechuga (Iceberg)',
    'Swiss Chard': 'Acelga suiza',
    'Collard Greens': 'Col rizada',
    'Mustard Greens': 'Mostaza',
    'Turnip Greens': 'Hojas de nabo',
    'Beet Greens': 'Hojas de remolacha',

    // Vegetales - Raíces
    'Carrot': 'Zanahoria',
    'Beetroot': 'Remolacha',
    'Turnip': 'Nabo',
    'Radish': 'Rábano',
    'Parsnip': 'Chirivía',
    'Sweet Potato': 'Batata',
    'Potato': 'Papa',

    // Vegetales - Crucíferas
    'Broccoli': 'Brócoli',
    'Cauliflower': 'Coliflor',
    'Cabbage': 'Repollo',
    'Brussels Sprouts': 'Coles de Bruselas',
    'Bok Choy': 'Bok Choy',

    // Vegetales - Alliums
    'Onion': 'Cebolla',
    'Garlic': 'Ajo',
    'Leek': 'Puerro',
    'Shallot': 'Chalote',
    'Chives': 'Cebollino',
    'Scallions': 'Cebollas de verdeo',

    // Vegetales - Calabazas y gourds
    'Pumpkin': 'Calabaza',
    'Zucchini': 'Calabacín',
    'Cucumber': 'Pepino',
    'Butternut Squash': 'Calabaza moscada',
    'Acorn Squash': 'Calabaza bellota',

    // Vegetales - Legumbres
    'Green Beans': 'Judías verdes',
    'Peas': 'Guisantes',
    'Lentils': 'Lentejas',
    'Chickpeas': 'Garbanzos',
    'Soybeans (Edamame)': 'Soja (Edamame)',

    // Vegetales - Tallos
    'Celery': 'Apio',
    'Asparagus': 'Espárragos',
    'Rhubarb (stalk)': 'Ruibarbo (tallo)',
    'Rhubarb (leaves)': 'Ruibarbo (hojas)',

    // Vegetales - Otros
    'Corn': 'Maíz',
    'Bell Pepper (Red)': 'Pimiento (Rojo)',
    'Bell Pepper (Green)': 'Pimiento (Verde)',
    'Bell Pepper (Yellow)': 'Pimiento (Amarillo)',
    'Chili Pepper': 'Pimiento picante',
    'Tomato': 'Tomate',
    'Eggplant': 'Berenjena',
    'Okra': 'Okra',
    'Mushrooms (edible)': 'Champiñones (comestibles)',
    'Mushrooms (wild)': 'Champiñones (silvestres)',

    // Frutas
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
    'Honeydew': 'Melón honeydew',
    'Watermelon': 'Sandía',
    'Avocado': 'Aguacate',
    'Strawberry': 'Fresa',
    'Blueberry': 'Arándano',
    'Raspberry': 'Frambuesa',
    'Blackberry': 'Mora',
    'Cranberry': 'Arándano rojo',
    'Elderberry': 'Saúco (crudo)',
    'Elderberry (cooked)': 'Saúco (cocido)',
    'Peach': 'Durazno',
    'Plum': 'Ciruela',
    'Apricot': 'Albaricoque',
    'Cherry': 'Cereza',
    'Nectarine': 'Nectarina',
    'Date': 'Dátil',
    'Grapes': 'Uvas',
    'Raisins': 'Pasas',
    'Coconut': 'Coco',
    'Dragon Fruit': 'Fruta del dragón',
    'Passion Fruit': 'Fruta de la pasión',
    'Lychee': 'Lichi',
    'Guava': 'Guayaba',
    'Starfruit': 'Carambola',
    'Pomegranate': 'Granada',
    'Fig': 'Higo',

    // Carne - Pollo
    'Breast': 'Pechuga',
    'Thigh': 'Muslo',
    'Leg': 'Pierna',
    'Wing': 'Ala',
    'Heart': 'Corazón',
    'Liver': 'Hígado',
    'Gizzard': 'Molleja',
    'Stomach': 'Estómago',
    'Skin': 'Piel',

    // Carne - Pavo (mismos cortes que el pollo)
    'Neck': 'Cuello',

    // Carne - Res
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
    'stomach_tripe': 'Tripa de estómago',
    'Fat': 'Grasa',
    'Bone': 'Hueso',

    // Carne - Cerdo (usa los mismos cortes que la res)
    'Shoulder': 'Paleta',
    'Belly': 'Panceta',

    // Carne - Fisch
    'Fillet': 'Filet',
    'Head': 'Cabeza',

    // Carne - Mariscos
    'Shrimp': 'Camarón',
    'Crab': 'Cangrejo',
    'Lobster': 'Langosta',

    // Dairy - Milk
    'Cow Milk': 'Leche de vaca',
    'Goat Milk': 'Leche de cabra',
    'Sheep Milk': 'Leche de oveja',

    // Dairy - Cheese
    'Cheddar Cheese': 'Queso Cheddar',
    'Mozzarella Cheese': 'Queso Mozzarella',
    'Cottage Cheese': 'Queso Cottage',

    // Dairy - Fermented
    'Yogurt (plain)': 'Yogur (natural)',
    'Kefir': 'Kéfir',

    // Dairy - Cream
    'Whipping Cream': 'Crema para batir',

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
    'Pecans': 'Nueces pecanas',
    'Hazelnuts': 'Avellanas',

    // Nut - Peanut
    'Peanuts (unsalted)': 'Cacahuetes (sin sal)',
    'Peanut Butter (unsweetened)': 'Mantequilla de cacahuete (sin azúcar)',

    // Added foods
    'Macadamia Nuts': 'Nueces de macadamia',
    'Walnuts': 'Nueces',
    'Sunflower Seeds (unsalted)': 'Semillas de girasol (sin sal)',
    'Pumpkin Seeds (unsalted)': 'Semillas de calabaza (sin sal)',
    'Egg (cooked)': 'Huevo (cocido)',
    'Chocolate': 'Chocolate',
    'Xylitol (sugar-free gum)': 'Xilitol (chicle sin azúcar)',
    'Honey': 'Miel',
    'Coffee': 'Café',
    'Alcohol': 'Alcohol',
    'Crickets': 'Grillos',
    'Mealworms': 'Gusanos de la harina',
    'Dubia Roaches': 'Cucarachas dubia',
    'Black Soldier Fly Larvae': 'Larvas de mosca soldado negra',
    'Waxworms': 'Gusanos de cera',
    'Earthworms': 'Lombrices de tierra',
    'Bloodworms': 'Larvas rojas de mosquito',
    'Brine Shrimp': 'Artemia',
    'Feeder Rodents (frozen-thawed)': 'Roedores de alimento (descongelados)',
    'Stomach Tripe': 'Callos (tripa)',
  },
  fr: {
    // Légumes - Légumes à feuilles
    'Spinach': 'Épinard',
    'Kale': 'Chou frisé',
    'Lettuce (Romaine)': 'Laitue (Romaine)',
    'Lettuce (Iceberg)': 'Laitue (Iceberg)',
    'Swiss Chard': 'Bette à carde',
    'Collard Greens': 'Chou cavalier',
    'Mustard Greens': 'Feuilles de moutarde',
    'Turnip Greens': 'Feuilles de navet',
    'Beet Greens': 'Feuilles de betterave',

    // Légumes - Racines
    'Carrot': 'Carotte',
    'Beetroot': 'Betterave',
    'Turnip': 'Navet',
    'Radish': 'Radis',
    'Parsnip': 'Panais',
    'Sweet Potato': 'Patate douce',
    'Potato': 'Pomme de terre',

    // Légumes - Crucifères
    'Broccoli': 'Brocoli',
    'Cauliflower': 'Chou-fleur',
    'Cabbage': 'Chou',
    'Brussels Sprouts': 'Choux de Bruxelles',
    'Bok Choy': 'Bok Choy',

    // Légumes - Alliacées
    'Onion': 'Oignon',
    'Garlic': 'Ail',
    'Leek': 'Poireau',
    'Shallot': 'Échalote',
    'Chives': 'Ciboulette',
    'Scallions': 'Ciboule',

    // Légumes - Courges et gourdes
    'Pumpkin': 'Citrouille',
    'Zucchini': 'Courgette',
    'Cucumber': 'Concombre',
    'Butternut Squash': 'Courge musquée',
    'Acorn Squash': 'Courge gobelet',

    // Légumes - Légumineuses
    'Green Beans': 'Haricots verts',
    'Peas': 'Pois',
    'Lentils': 'Lentilles',
    'Chickpeas': 'Pois chiches',
    'Soybeans (Edamame)': 'Soja (Edamame)',

    // Légumes - Tiges
    'Celery': 'Céleri',
    'Asparagus': 'Asperge',
    'Rhubarb (stalk)': 'Rhubarbe (tige)',
    'Rhubarb (leaves)': 'Rhubarbe (feuilles)',

    // Légumes - Autres
    'Corn': 'Maïs',
    'Bell Pepper (Red)': 'Poivron (Rouge)',
    'Bell Pepper (Green)': 'Poivron (Vert)',
    'Bell Pepper (Yellow)': 'Poivron (Jaune)',
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
    'Cantaloupe': 'Melon cantaloup',
    'Honeydew': 'Melon miel',
    'Watermelon': 'Pastèque',
    'Avocado': 'Avocat',
    'Strawberry': 'Fraise',
    'Blueberry': 'Myrtille',
    'Raspberry': 'Framboise',
    'Blackberry': 'Mûre',
    'Cranberry': 'Canneberge',
    'Elderberry': 'Baies de sureau (crues)',
    'Elderberry (cooked)': 'Baies de sureau (cuites)',
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

    // Viande - Poulet
    'Breast': 'Poitrine',
    'Thigh': 'Cuisse',
    'Leg': 'Jambe',
    'Wing': 'Aile',
    'Heart': 'Cœur',
    'Liver': 'Foie',
    'Gizzard': 'Gésier',
    'Stomach': 'Estomac',
    'Skin': 'Peau',

    // Viande - Dinde (mêmes parties que le poulet)
    'Neck': 'Cou',

    // Viande - Bœuf
    'Rib': 'Côte',
    'Loin': 'Longe',
    'Tenderloin': 'Filet mignon',
    'Chuck': 'Épaule',
    'Sirloin': 'Contre-filet',
    'Brisket': 'Poitrine',
    'Kidney': 'Rein',
    'Lung': 'Poumon',
    'Spleen': 'Rate',
    'Brain': 'Cerveau',
    'Pancreas': 'Pancréas',
    'stomach_tripe': 'Tripes d\'estomac',
    'Fat': 'Graisse',
    'Bone': 'Os',

    // Viande - Porc (utilise les mêmes parties que le bœuf)
    'Shoulder': 'Épaule',
    'Belly': 'Ventre',

    // Viande - Poisson
    'Fillet': 'Filet',
    'Head': 'Tête',

    // Viande - Fruits de mer
    'Shrimp': 'Crevette',
    'Crab': 'Crabe',
    'Lobster': 'Homard',

    // Produits laitiers - Lait
    'Cow Milk': 'Lait de vache',
    'Goat Milk': 'Lait de chèvre',
    'Sheep Milk': 'Lait de brebis',

    // Produits laitiers - Fromage
    'Cheddar Cheese': 'Fromage Cheddar',
    'Mozzarella Cheese': 'Fromage Mozzarella',
    'Cottage Cheese': 'Fromage Cottage',

    // Produits laitiers - Fermentés
    'Yogurt (plain)': 'Yaourt (nature)',
    'Kefir': 'Kéfir',

    // Produits laitiers - Crème
    'Whipping Cream': 'Crème fouettée',

    // Produits laitiers - Beurre
    'Butter': 'Beurre',

    // Produits laitiers - Autres
    'Ice Cream': 'Crème glacée',
    'Sour Cream': 'Crème aigre',

    // Céréales - Céréales
    'Rice': 'Riz',
    'Oats': 'Avoine',
    'Barley': 'Orge',
    'Wheat': 'Blé',

    // Céréales - Pain
    'Whole Grain Bread': 'Pain complet',
    'White Bread': 'Pain blanc',

    // Céréales - Pâtes
    'Pasta (cooked)': 'Pâtes (cuites)',

    // Céréales - Autres
    'Quinoa': 'Quinoa',
    'Millet': 'Millet',

    // Noix - Noix de cajou
    'Almonds': 'Amandes',
    'Cashews': 'Noix de cajou',
    'Pecans': 'Noix de pécan',
    'Hazelnuts': 'Noisettes',

    // Noix - Cacahuètes
    'Peanuts (unsalted)': 'Cacahuètes (non salées)',
    'Peanut Butter (unsweetened)': 'Beurre de cacahuète (non sucré)',

    // Added foods
    'Macadamia Nuts': 'Noix de macadamia',
    'Walnuts': 'Noix',
    'Sunflower Seeds (unsalted)': 'Graines de tournesol (non salées)',
    'Pumpkin Seeds (unsalted)': 'Graines de courge (non salées)',
    'Egg (cooked)': 'Œuf (cuit)',
    'Chocolate': 'Chocolat',
    'Xylitol (sugar-free gum)': 'Xylitol (chewing-gum sans sucre)',
    'Honey': 'Miel',
    'Coffee': 'Café',
    'Alcohol': 'Alcool',
    'Crickets': 'Grillons',
    'Mealworms': 'Vers de farine',
    'Dubia Roaches': 'Blattes dubia',
    'Black Soldier Fly Larvae': 'Larves de mouche soldat noire',
    'Waxworms': 'Larves de fausse teigne',
    'Earthworms': 'Vers de terre',
    'Bloodworms': 'Vers de vase',
    'Brine Shrimp': 'Artémias',
    'Feeder Rodents (frozen-thawed)': 'Rongeurs proies (décongelés)',
    'Stomach Tripe': 'Tripes',
  },
  de: {
    // Gemüse - Blattgemüse
    'Spinach': 'Spinat',
    'Kale': 'Grünkohl',
    'Lettuce (Romaine)': 'Salat (Romaine)',
    'Lettuce (Iceberg)': 'Salat (Iceberg)',
    'Swiss Chard': 'Mangold',
    'Collard Greens': 'Kohlrabi',
    'Mustard Greens': 'Senfgrün',
    'Turnip Greens': 'Rübenblätter',
    'Beet Greens': 'Rübenblätter',

    // Gemüse - Wurzelgemüse
    'Carrot': 'Karotte',
    'Beetroot': 'Rote Bete',
    'Turnip': 'Rübe',
    'Radish': 'Radieschen',
    'Parsnip': 'Pastinake',
    'Sweet Potato': 'Süßkartoffel',
    'Potato': 'Kartoffel',

    // Gemüse - Kreuzblütler
    'Broccoli': 'Brokkoli',
    'Cauliflower': 'Blumenkohl',
    'Cabbage': 'Kohl',
    'Brussels Sprouts': 'Rosenkohl',
    'Bok Choy': 'Pak Choi',

    // Gemüse - Lauchgewächse
    'Onion': 'Zwiebel',
    'Garlic': 'Knoblauch',
    'Leek': 'Lauch',
    'Shallot': 'Schalotte',
    'Chives': 'Schnittlauch',
    'Scallions': 'Frühlingszwiebeln',

    // Gemüse - Kürbis und Zierkürbisse
    'Pumpkin': 'Kürbis',
    'Zucchini': 'Zucchini',
    'Cucumber': 'Gurke',
    'Butternut Squash': "Butternut-Kürbis",
    "Acorn Squash": "Eichelkürbis",

    // Gemüse - Hülsenfrüchte
    "Green Beans": "Grüne Bohnen",
    "Peas": "Erbsen",
    "Lentils": "Linsen",
    "Chickpeas": "Kichererbsen",
    "Soybeans (Edamame)": "Sojabohnen (Edamame)",

    // Gemüse - Stängel
    'Celery': 'Sellerie',
    'Asparagus': 'Spargel',
    'Rhubarb (stalk)': 'Rhabarber (Stängel)',
    'Rhubarb (leaves)': 'Rhabarber (Blätter)',

    // Gemüse - Andere
    'Corn': 'Mais',
    'Bell Pepper (Red)': 'Paprika (Rot)',
    'Bell Pepper (Green)': 'Paprika (Grün)',
    'Bell Pepper (Yellow)': 'Paprika (Gelb)',
    'Chili Pepper': 'Chili',
    'Tomato': 'Tomate',
    'Eggplant': 'Aubergine',
    'Okra': 'Okra',
    'Mushrooms (edible)': 'Pilze (essbar)',
    'Mushrooms (wild)': 'Pilze (wild)',

    // Früchte
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
    'Grapes': 'Trauben',
    'Raisins': 'Rosinen',
    'Coconut': 'Kokosnuss',
    'Dragon Fruit': 'Drachenfrucht',
    'Passion Fruit': 'Passionsfrucht',
    'Lychee': 'Litschi',
    'Guava': 'Guave',
    'Starfruit': 'Sternfrucht',
    'Pomegranate': 'Granatapfel',
    'Fig': 'Feige',

    // Fleisch - Huhn
    'Breast': 'Brust',
    'Thigh': 'Oberschenkel',
    'Leg': 'Bein',
    'Wing': 'Flügel',
    'Heart': 'Herz',
    'Liver': 'Leber',
    'Gizzard': 'Kükenmagen',
    'Stomach': 'Magen',
    'Skin': 'Haut',
    
    // Fleisch - Truthahn (gleiche Teile wie Huhn)
    'Neck': 'Hals',

    // Fleisch - Rind
    'Rib': 'Rippe',
    'Loin': 'Lende',
    'Tenderloin': 'Filet',
    'Chuck': 'Schulter',
    'Sirloin': 'Rinderfilet',
    'Brisket': 'Brust',
    'Kidney': 'Niere',
    'Lung': 'Lunge',
    'Spleen': 'Milz',
    'Brain': 'Cerebro',
    'Pancreas': 'Bauchspeicheldrüse',
    'stomach_tripe': 'Magen-Tripes',
    'Fat': 'Fett',
    'Bone': 'Knochen',

    // Fleisch - Schwein (verwendet die gleichen Teile wie Rind)
    'Shoulder': 'Schulter',
    'Belly': 'Bauch',

    // Fleisch - Fisch
    'Fillet': 'Filet',
    'Head': 'Kopf',

    // Fleisch - Schalentiere
    'Shrimp': 'Garnelen',
    'Crab': 'Krabbe',
    'Lobster': 'Hummer',

    // Milchprodukte - Milch
    'Cow Milk': 'Kuhmilch',
    'Goat Milk': 'Ziegenmilch',
    'Sheep Milk': 'Schafmilch',

    // Milchprodukte - Käse
    'Cheddar Cheese': 'Cheddar-Käse',
    'Mozzarella Cheese': 'Mozzarella-Käse',
    'Cottage Cheese': 'Hüttenkäse',

    // Milchprodukte - Fermentiert
    'Yogurt (plain)': 'Joghurt (natur)',
    'Kefir': 'Kefir',

    // Milchprodukte - Sahne
    'Whipping Cream': 'Schlagsahne',

    // Milchprodukte - Butter
    'Butter': 'Butter',

    // Milchprodukte - Andere
    'Ice Cream': 'Eiscreme',
    'Sour Cream': 'Sauerrahm',

    // Getreide - Getreide
    'Rice': 'Reis',
    'Oats': 'Hafer',
    'Barley': 'Gerste',
    'Wheat': 'Weizen',

    // Getreide - Brot
    'Whole Grain Bread': 'Vollkornbrot',
    'White Bread': 'Weißbrot',

    // Getreide - Pasta
    'Pasta (cooked)': 'Pasta (gekocht)',

    // Getreide - Andere
    'Quinoa': 'Quinoa',
    'Millet': 'Hirse',

    // Nüsse - Baumnüsse
    'Almonds': 'Mandeln',
    'Cashews': 'Cashews',
    'Pecans': 'Pekannüsse',
    'Hazelnuts': 'Haselnüsse',

    // Nüsse - Erdnüsse
    'Peanuts (unsalted)': 'Erdnüsse (ungesalzen)',
    'Peanut Butter (unsweetened)': 'Erdnussbutter (ungesüßt)',

    // Added foods
    'Macadamia Nuts': 'Macadamianüsse',
    'Walnuts': 'Walnüsse',
    'Sunflower Seeds (unsalted)': 'Sonnenblumenkerne (ungesalzen)',
    'Pumpkin Seeds (unsalted)': 'Kürbiskerne (ungesalzen)',
    'Egg (cooked)': 'Ei (gekocht)',
    'Chocolate': 'Schokolade',
    'Xylitol (sugar-free gum)': 'Xylit (zuckerfreier Kaugummi)',
    'Honey': 'Honig',
    'Coffee': 'Kaffee',
    'Alcohol': 'Alkohol',
    'Crickets': 'Heimchen',
    'Mealworms': 'Mehlwürmer',
    'Dubia Roaches': 'Dubia-Schaben',
    'Black Soldier Fly Larvae': 'Larven der Schwarzen Soldatenfliege',
    'Waxworms': 'Wachsmaden',
    'Earthworms': 'Regenwürmer',
    'Bloodworms': 'Rote Mückenlarven',
    'Brine Shrimp': 'Artemia (Salinenkrebse)',
    'Feeder Rodents (frozen-thawed)': 'Futternager (aufgetaut)',
    'Stomach Tripe': 'Pansen',
  },
  it: {
    // Verdure - Verdure a foglia
    'Spinach': 'Spinaci',
    'Kale': 'Cavolo riccio',
    'Lettuce (Romaine)': 'Lattuga (Romaine)',
    'Lettuce (Iceberg)': 'Lattuga (Iceberg)',
    'Swiss Chard': 'Bietola',
    'Collard Greens': 'Cavolo nero',
    'Mustard Greens': 'Foglie di senape',
    'Turnip Greens': 'Foglie di rapa',
    'Beet Greens': 'Foglie di barbabietola',

    // Verdure - Radici
    'Carrot': 'Carota',
    'Beetroot': 'Barbabietola',
    'Turnip': 'Rapa',
    'Radish': 'Ravanello',
    'Parsnip': 'Pastinaca',
    'Sweet Potato': 'Patata dolce',
    'Potato': 'Patata',

    // Verdure - Crucifere
    'Broccoli': 'Broccoli',
    'Cauliflower': 'Cavolfiore',
    'Cabbage': 'Cavolo',
    'Brussels Sprouts': "Cavoletti di Bruxelles",
    'Bok Choy': "Bok Choy",

    // Verdure - Allium
    'Onion': "Cipolla",
    'Garlic': "Aglio",
    'Leek': "Porro",
    'Shallot': "Scalogno",
    'Chives': "Erba cipollina",
    'Scallions': "Cipollotti",

    // Verdure - Zucche e zucche ornamentali
    'Pumpkin': "Zucca",
    'Zucchini': "Zucchina",
    'Cucumber': "Cetriolo",
    'Butternut Squash': "Zucca butternut",
    "Acorn Squash": "Zucca ghianda",

    // Verdure - Legumi
    "Green Beans": "Fagiolini",
    "Peas": "Piselli",
    "Lentils": "Lenticchie",
    "Chickpeas": "Ceci",
    "Soybeans (Edamame)": "Soia (Edamame)",

    // Verdure - Steli
    "Celery": "Sedano",
    "Asparagus": "Szparagi",
    'Rhubarb (stalk)': 'Rabarbaro (gambo)',
    'Rhubarb (leaves)': 'Rabarbaro (foglie)',

    // Verdure - Altro
    'Corn': 'Mais',
    'Bell Pepper (Red)': 'Peperone (Rosso)',
    'Bell Pepper (Green)': 'Peperone (Verde)',
    'Bell Pepper (Yellow)': 'Peperone (Giallo)',
    'Chili Pepper': 'Peperoncino',
    'Tomato': 'Pomodoro',
    'Eggplant': 'Melanzana',
    'Okra': 'Okra',
    'Mushrooms (edible)': 'Funghi (commestibili)',
    'Mushrooms (wild)': 'Funghi (selvatici)',

    // Frutta
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
    'Honeydew': 'Melone honeydew',
    'Watermelon': 'Anguria',
    'Avocado': 'Avocado',
    'Strawberry': 'Fragola',
    'Blueberry': 'Mirtillo',
    'Raspberry': 'Lampone',
    'Blackberry': 'Mora',
    'Cranberry': 'Mirtillo rosso',
    'Elderberry': 'Sambuco (crudo)',
    'Elderberry (cooked)': 'Sambuco (cotto)',
    'Peach': 'Pesca',
    'Plum': 'Susina',
    'Apricot': 'Albicocca',
    'Cherry': 'Ciliegia',
    'Nectarine': 'Nektarina',
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

    // Carne - Pollo
    'Breast': 'Petto',
    'Thigh': 'Coscia',
    'Leg': 'Gamba',
    'Wing': 'Ala',
    'Heart': 'Cuore',
    'Liver': 'Fegato',
    'Gizzard': 'Ventriglio',
    'Stomach': 'Stomaco',
    'Skin': 'Pelle',

    // Carne - Tacchino (stessi tagli del pollo)
    'Neck': 'Collo',

    // Carne - Manzo
    'Rib': 'Costola',
    'Loin': 'Lombo',
    'Tenderloin': 'Filetto',
    'Chuck': 'Spalla',
    'Sirloin': 'Controfiletto',
    'Brisket': 'Pettorale',
    'Kidney': 'Rene',
    'Lung': 'Polmone',
    'Spleen': 'Milza',
    'Brain': 'Cervello',
    'Pancreas': 'Pancreas',
    'stomach_tripe': 'Trippa di stomaco',
    'Fat': 'Grasso',
    'Bone': 'Osso',

    // Carne - Maiale (usa gli stessi tagli del manzo)
    'Shoulder': 'Spalla',
    'Belly': 'Pancia',

    // Carne - Pesce
    'Fillet': 'Filetto',
    'Head': 'Testa',

    // Carne - Crostacei
    'Shrimp': 'Gambero',
    'Crab': 'Granchio',
    'Lobster': 'Aragosta',

    // Latticini - Latte
    'Cow Milk': 'Latte di mucca',
    'Goat Milk': 'Latte di capra',
    'Sheep Milk': 'Latte di pecora',

    // Latticini - Formaggio
    'Cheddar Cheese': 'Formaggio Cheddar',
    'Mozzarella Cheese': 'Formaggio Mozzarella',
    'Cottage Cheese': 'Formaggio Cottage',

    // Latticini - Fermentati
    'Yogurt (plain)': 'Yogurt (naturale)',
    'Kefir': 'Kefir',

    // Latticini - Panna
    'Whipping Cream': 'Panna montata',

    // Latticini - Burro
    'Butter': 'Burro',

    // Latticini - Altro
    'Ice Cream': 'Gelato',
    'Sour Cream': 'Panna acida',

    // Cereali - Cereali
    'Rice': 'Riso',
    'Oats': 'Avena',
    'Barley': 'Orzo',
    'Wheat': 'Grano',

    // Cereali - Pain
    'Whole Grain Bread': 'Pane integrale',
    'White Bread': 'Pane bianco',

    // Cereali - Pasta
    'Pasta (cooked)': 'Pasta (cotta)',

    // Cereali - Altro
    'Quinoa': 'Quinoa',
    'Millet': 'Miglio',

    // Noci - Noci di alberi
    'Almonds': 'Mandorle',
    'Cashews': 'Anacardi',
    'Pecans': 'Noci pecan',
    'Hazelnuts': 'Nocciole',

    // Noci - Arachidi
    'Peanuts (unsalted)': 'Arachidi (non salate)',
    'Peanut Butter (unsweetened)': 'Burro di arachidi (non zuccherato)',

    // Added foods
    'Macadamia Nuts': 'Noci di macadamia',
    'Walnuts': 'Noci',
    'Sunflower Seeds (unsalted)': 'Semi di girasole (non salati)',
    'Pumpkin Seeds (unsalted)': 'Semi di zucca (non salati)',
    'Egg (cooked)': 'Uovo (cotto)',
    'Chocolate': 'Cioccolato',
    'Xylitol (sugar-free gum)': 'Xilitolo (gomma senza zucchero)',
    'Honey': 'Miele',
    'Coffee': 'Caffè',
    'Alcohol': 'Alcol',
    'Crickets': 'Grilli',
    'Mealworms': 'Tarme della farina',
    'Dubia Roaches': 'Blatte dubia',
    'Black Soldier Fly Larvae': 'Larve di mosca soldato nera',
    'Waxworms': 'Camole del miele',
    'Earthworms': 'Lombrichi',
    'Bloodworms': 'Larve rosse di chironomo',
    'Brine Shrimp': 'Artemia',
    'Feeder Rodents (frozen-thawed)': 'Roditori da pasto (scongelati)',
    'Stomach Tripe': 'Trippa',
  },
  ru: {
    // Овощи - Листовые овощи
    'Spinach': 'Шпинат',
    'Kale': 'Кейл',
    'Lettuce (Romaine)': 'Салат (Романо)',
    'Lettuce (Iceberg)': 'Салат (Айсберг)',
    'Swiss Chard': 'Швейцарский мангольд',
    'Collard Greens': 'Капуста кале',
    'Mustard Greens': 'Горчичная зелень',
    'Turnip Greens': 'Зелень репы',
    'Beet Greens': 'Зелень свеклы',

    // Овощи - Корнеплоды
    'Carrot': 'Морковь',
    'Beetroot': 'Свекла',
    'Turnip': 'Репа',
    'Radish': 'Редис',
    'Parsnip': 'Пастернак',
    'Sweet Potato': 'Сладкий картофель',
    'Potato': 'Картофель',

    // Овощи - Капустные
    'Broccoli': 'Брокколи',
    'Cauliflower': 'Цветная капуста',
    'Cabbage': 'Капуста',
    'Brussels Sprouts': 'Брюссельская капуста',
    'Bok Choy': 'Бок чой',

    // Овощи - Луковидные
    'Onion': 'Лук',
    'Garlic': 'Чеснок',
    'Leek': 'Лук-порей',
    'Shallot': 'Шалот',
    'Chives': 'Зеленый лук',
    'Scallions': 'Лук-репка',
    
    // Овощи - Тыквенные
    'Pumpkin': 'Тыква',
    'Zucchini': 'Цуккини',
    'Cucumber': 'Огурец',
    'Butternut Squash': 'Баттернат',
    'Acorn Squash': 'Желудевый кабачок',

    // Овощи - Бобовые
    'Green Beans': 'Зеленая фасоль',
    'Peas': 'Горох',
    'Lentils': 'Чечевица',
    'Chickpeas': 'Нут',
    'Soybeans (Edamame)': 'Соевые бобы (эдзами)',

    // Овощи - Стебли
    'Celery': 'Сельдерей',
    'Asparagus': 'Спаржа',
    'Rhubarb (stalk)': 'Ревень (стебель)',
    'Rhubarb (leaves)': 'Ревень (листья)',

    // Овощи - Прочие
    'Corn': 'Кукуруза',
    'Bell Pepper (Red)': 'Перец (Красный)',
    'Bell Pepper (Green)': 'Перец (Зеленый)',
    'Bell Pepper (Yellow)': 'Перец (Желтый)',
    'Chili Pepper': 'Перец чили',
    'Tomato': 'Помидор',
    'Eggplant': 'Баклажан',
    'Okra': 'Окра',
    'Mushrooms (edible)': 'Грибы (съедобные)',
    'Mushrooms (wild)': 'Грибы (дикие)',

    // Фрукты
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
    'Cantaloupe': 'Дыня канталупа',
    'Honeydew': 'Дыня хани-дью',
    'Watermelon': 'Арбуз',
    'Avocado': 'Авокадо',
    'Strawberry': 'Клубника',
    'Blueberry': 'Черника',
    'Raspberry': 'Малина',
    'Blackberry': 'Ежевика',
    'Cranberry': 'Клюква',
    'Elderberry': 'Бузина (сырая)',
    'Elderberry (cooked)': 'Бузина (вареная)',
    'Peach': 'Персик',
    'Plum': 'Слива',
    'Apricot': 'Абрикос',
    'Cherry': 'Вишня',
    'Nectarine': 'Нектарин',
    'Date': 'Финик',
    'Grapes': 'Виноград',
    'Raisins': 'Изюм',
    'Coconut': 'Кокос',
    'Dragon Fruit': 'Драконий фрукт',
    'Passion Fruit': 'Маракуйя',
    'Lychee': 'Личи',
    'Guava': 'Гуава',
    'Starfruit': 'Карамбола',
    'Pomegranate': 'Гранат',
    'Fig': 'Инжир',

    // Мясо - Курица
    'Breast': 'Грудка',
    'Thigh': 'Бедро',
    'Leg': 'Нога',
    'Wing': 'Крыло',
    'Heart': 'Сердце',
    'Liver': 'Печень',
    'Gizzard': 'Желудок',
    'Stomach': 'Желудок',
    'Skin': 'Кожа',

    // Мясо - Индейка (те же части, что и у курицы)
    'Neck': 'Шея',

    // Мясо - Говядина
    'Rib': 'Ребро',
    'Loin': 'Поясница',
    'Tenderloin': 'Филе',
    'Chuck': 'Лопатка',
    'Sirloin': 'Стейк',
    'Brisket': 'Грудинка',
    'Kidney': 'Почка',
    'Lung': 'Легкое',
    'Spleen': 'Селезенка',
    'Brain': 'Мозг',
    'Pancreas': 'Поджелудочная железа',
    'stomach_tripe': 'Желудок (трипа)',
    'Fat': 'Жир',
    'Bone': 'Кость',

    // Мясо - Свинина (использует те же части, что и говядина)
    'Shoulder': 'Плечо',
    'Belly': 'Живот',

    // Мясо - Рыба
    'Fillet': 'Филе',
    'Head': 'Голова',

    // Мясо - Морепродукты
    'Shrimp': 'Креветка',
    'Crab': 'Краб',
    'Lobster': 'Омар',

    // Молочные продукты - Молоко
    'Cow Milk': 'Коровье молоко',
    'Goat Milk': 'Козье молоко',
    'Sheep Milk': 'Овечье молоко',

    // Молочные продукты - Сыр
    'Cheddar Cheese': 'Сыр Чеддер',
    'Mozzarella Cheese': 'Сыр Моцарелла',
    'Cottage Cheese': 'Творог',

    // Молочные продукты - Ферментированные
    'Yogurt (plain)': 'Йогурт (натуральный)',
    'Kefir': 'Кефир',

    // Молочные продукты - Сливки
    'Whipping Cream': 'Взбитые сливки',

    // Молочные продукты - Масло
    'Butter': 'Масло',

    // Молочные продукты - Прочее
    'Ice Cream': 'Мороженое',
    'Sour Cream': 'Сметана',

    // Зерновые - Зерно
    'Rice': 'Рис',
    'Oats': 'Овес',
    'Barley': 'Ячмень',
    'Wheat': 'Пшеница',

    // Зерновые - Хлеб
    'Whole Grain Bread': 'Цельнозерновой хлеб',
    'White Bread': 'Белый хлеб',

    // Зерновые - Макароны
    'Pasta (cooked)': 'Паста (вареная)',

    // Зерновые - Прочее
    'Quinoa': 'Киноа',
    'Millet': 'Просо',

    // Орехи - Орехи
    'Almonds': 'Миндаль',
    'Cashews': 'Кешью',
    'Pecans': 'Пекан',
    'Hazelnuts': 'Фундук',

    // Орехи - Арахис
    'Peanuts (unsalted)': 'Арахис (без соли)',
    'Peanut Butter (unsweetened)': 'Арахисовое масло (без сахара)',

    // Added foods
    'Macadamia Nuts': 'Орехи макадамия',
    'Walnuts': 'Грецкие орехи',
    'Sunflower Seeds (unsalted)': 'Семена подсолнечника (несолёные)',
    'Pumpkin Seeds (unsalted)': 'Тыквенные семечки (несолёные)',
    'Egg (cooked)': 'Яйцо (варёное)',
    'Chocolate': 'Шоколад',
    'Xylitol (sugar-free gum)': 'Ксилит (жвачка без сахара)',
    'Honey': 'Мёд',
    'Coffee': 'Кофе',
    'Alcohol': 'Алкоголь',
    'Crickets': 'Сверчки',
    'Mealworms': 'Мучные черви',
    'Dubia Roaches': 'Тараканы дубия',
    'Black Soldier Fly Larvae': 'Личинки чёрной львинки',
    'Waxworms': 'Личинки восковой моли',
    'Earthworms': 'Дождевые черви',
    'Bloodworms': 'Мотыль',
    'Brine Shrimp': 'Артемия',
    'Feeder Rodents (frozen-thawed)': 'Кормовые грызуны (размороженные)',
    'Stomach Tripe': 'Рубец',
  },
  pl: {
    // Warzywa - Warzywa liściaste
    'Spinach': 'Szpinak',
    'Kale': 'Jarmuż',
    'Lettuce (Romaine)': 'Sałata (Romaine)',
    'Lettuce (Iceberg)': 'Sałata (Iceberg)',
    'Swiss Chard': 'Boćwina',
    'Collard Greens': 'Kapusta liściasta',
    'Mustard Greens': 'Liście gorczycy',
    'Turnip Greens': 'Liście rzepy',
    'Beet Greens': 'Liście buraka',

    // Warzywa - Korzeniowe
    'Carrot': 'Marchew',
    'Beetroot': 'Burak',
    'Turnip': 'Rzepa',
    'Radish': 'Rzodkiewka',
    'Parsnip': 'Pasternak',
    'Sweet Potato': 'Bataty',
    'Potato': 'Ziemniak',

    // Warzywa - Kapustne
    'Broccoli': 'Brokuły',
    'Cauliflower': 'Kalafior',
    'Cabbage': 'Kapusta',
    'Brussels Sprouts': "Brukselka",
    'Bok Choy': "Bok Choy",

    // Warzywa - Cebulowe
    'Onion': "Cebula",
    'Garlic': "Czosnek",
    'Leek': "Por",
    'Shallot': "Szalotka",
    'Chives': "Szczypiorek",
    'Scallions': "Dymka",

    // Warzywa - Dyniowate
    'Pumpkin': "Dynia",
    'Zucchini': "Cukinia",
    'Cucumber': "Ogórek",
    'Butternut Squash': "Dynia piżmowa",
    "Acorn Squash": "Dynia żołędziowa",

    // Warzywa - Strączkowe
    "Green Beans": "Fasolka szparagowa",
    "Peas": "Groszek",
    "Lentils": "Soczewica",
    "Chickpeas": "Ciecierzyca",
    "Soybeans (Edamame)": "Soja (Edamame)",

    // Warzywa - Łodygowe
    "Celery": "Seler naciowy",
    "Asparagus": "Szparagi",
    'Rhubarb (stalk)': 'Rabarbar (łodyga)',
    'Rhubarb (leaves)': 'Rabarbar (liście)',

    // Warzywa - Inne
    'Corn': 'Kukurydza',
    'Bell Pepper (Red)': 'Papryka (Czerwona)',
    'Bell Pepper (Green)': 'Papryka (Zielona)',
    'Bell Pepper (Yellow)': 'Papryka (Żółta)',
    'Chili Pepper': 'Papryczka chili',
    'Tomato': 'Pomidor',
    'Eggplant': 'Bakłażan',
    'Okra': 'Okra',
    'Mushrooms (edible)': 'Grzyby (jadalne)',
    'Mushrooms (wild)': 'Grzyby (dzikie)',

    // Owoce
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
    'Blueberry': 'Jagoda',
    'Raspberry': 'Malina',
    'Blackberry': 'Jeżyna',
    'Cranberry': 'Żurawina',
    'Elderberry': 'Czarny bez (surowy)',
    'Elderberry (cooked)': 'Czarny bez (gotowany)',
    'Peach': 'Brzoskwinia',
    'Plum': 'Śliwka',
    'Apricot': 'Morela',
    'Cherry': 'Wiśnia',
    'Nectarine': 'Nektaryna',
    'Date': 'Daktyl',
    'Grapes': 'Winogrona',
    'Raisins': 'Rodzynki',
    'Coconut': 'Kokos',
    'Dragon Fruit': 'Smoczy owoc',
    'Passion Fruit': 'Marakuja',
    'Lychee': 'Litchi',
    'Guava': 'Guawa',
    'Starfruit': 'Karambola',
    'Pomegranate': 'Granat',
    'Fig': 'Figa',

    // Mięso - Kurczak
    'Breast': 'Pierś',
    'Thigh': 'Udo',
    'Leg': 'Noga',
    'Wing': 'Skrzydło',
    'Heart': 'Serce',
    'Liver': 'Wątroba',
    'Gizzard': 'Żołądek',
    'Stomach': 'Żołądek',
    'Skin': 'Skóra',

    // Mięso - Indyk (te same części co kurczak)
    'Neck': 'Szyja',

    // Mięso - Wołowina
    'Rib': 'Żeberko',
    'Loin': 'Polędwica',
    'Tenderloin': 'Filet',
    'Chuck': 'Łopatka',
    'Sirloin': 'Stek',
    'Brisket': 'Mostek',
    'Kidney': 'Nerka',
    'Lung': 'Płuco',
    'Spleen': 'Śledziona',
    'Brain': 'Mózg',
    'Pancreas': 'Trzustka',
    'stomach_tripe': 'Żołądek (tripa)',
    'Fat': 'Tłuszcz',
    'Bone': 'Kość',

    // Mięso - Wieprzowina (używa tych samych części co wołowina)
    'Shoulder': 'Łopatka',
    'Belly': 'Brzuch',

    // Mięso - Ryby
    'Fillet': 'Filet',
    'Head': 'Głowa',

    // Mięso - Owoce morza
    'Shrimp': 'Krewetka',
    'Crab': 'Krab',
    'Lobster': 'Homar',

    // Nabiał - Mleko
    'Cow Milk': 'Mleko krowie',
    'Goat Milk': 'Mleko kozie',
    'Sheep Milk': 'Mleko owcze',

    // Nabiał - Ser
    'Cheddar Cheese': 'Ser Cheddar',
    'Mozzarella Cheese': 'Ser Mozzarella',
    'Cottage Cheese': 'Ser twarogowy',

    // Nabiał - Fermentowane
    'Yogurt (plain)': 'Jogurt (naturalny)',
    'Kefir': 'Kefir',

    // Nabiał - Śmietana
    'Whipping Cream': 'Śmietana kremówka',

    // Nabiał - Masło
    'Butter': 'Masło',

    // Nabiał - Inne
    'Ice Cream': 'Lody',
    'Sour Cream': 'Śmietana kwaśna',

    // Zboża - Ziarna
    'Rice': 'Ryż',
    'Oats': 'Owies',
    'Barley': 'Jęczmień',
    'Wheat': 'Pszenica',

    // Zboża - Chleb
    'Whole Grain Bread': 'Chleb pełnoziarnisty',
    'White Bread': 'Chleb biały',

    // Zboża - Makaron
    'Pasta (cooked)': 'Makaron (ugotowany)',

    // Zboża - Inne
    'Quinoa': 'Komosa ryżowa',
    'Millet': 'Proso',
    
    // Orzechy - Orzechy drzewne
    'Almonds': 'Migdały',
    'Cashews': 'Nerkowce',
    'Pecans': 'Pekany',
    'Hazelnuts': 'Orzechy laskowe',

    // Orzechy - Orzeszki ziemne
    'Peanuts (unsalted)': 'Orzeszki ziemne (niesolone)',
    'Peanut Butter (unsweetened)': 'Masło orzechowe (bez cukru)',

    // Added foods
    'Macadamia Nuts': 'Orzechy makadamia',
    'Walnuts': 'Orzechy włoskie',
    'Sunflower Seeds (unsalted)': 'Pestki słonecznika (niesolone)',
    'Pumpkin Seeds (unsalted)': 'Pestki dyni (niesolone)',
    'Egg (cooked)': 'Jajko (gotowane)',
    'Chocolate': 'Czekolada',
    'Xylitol (sugar-free gum)': 'Ksylitol (guma bez cukru)',
    'Honey': 'Miód',
    'Coffee': 'Kawa',
    'Alcohol': 'Alkohol',
    'Crickets': 'Świerszcze',
    'Mealworms': 'Mączniki',
    'Dubia Roaches': 'Karaczany dubia',
    'Black Soldier Fly Larvae': 'Larwy czarnej muchy żołnierza',
    'Waxworms': 'Larwy barciaka',
    'Earthworms': 'Dżdżownice',
    'Bloodworms': 'Ochotka',
    'Brine Shrimp': 'Artemia (solowiec)',
    'Feeder Rodents (frozen-thawed)': 'Gryzonie karmowe (rozmrożone)',
    'Stomach Tripe': 'Flaki (żwacz)',
  }
};

export const statusTranslations: Record<Language, Record<string, string>> = {
  en: {
    'allowed': 'allowed',
    'allowed (boiled)': 'allowed (boiled)',
    'not allowed': 'not allowed',
    'acceptable in small quantities': 'acceptable in small quantities',
    'acceptable in small quantities (boiled)': 'acceptable in small quantities (boiled)',
    'acceptable in small quantities (ripe only)': 'acceptable in small quantities (ripe only)',
    'acceptable in small quantities (cooked)': 'acceptable in small quantities (cooked)',
    'allowed (cooked)': 'allowed (cooked)',
    'allowed (without seeds/pits)': 'allowed (without seeds/pits)',
    'acceptable in small quantities (without seeds/pits)': 'acceptable in small quantities (without seeds/pits)',
  },
  es: {
    'allowed': 'permitido',
    'allowed (boiled)': 'permitido (hervido)',
    'not allowed': 'no permitido',
    'acceptable in small quantities': 'aceptable en pequeñas cantidades',
    'acceptable in small quantities (boiled)': 'aceptable en pequeñas cantidades (hervido)',
    'acceptable in small quantities (ripe only)': 'aceptable en pequeñas cantidades (solo maduro)',
    'acceptable in small quantities (cooked)': 'aceptable en pequeñas cantidades (cocido)',
    'allowed (cooked)': 'permitido (cocido)',
    'allowed (without seeds/pits)': 'permitido (sin semillas ni hueso)',
    'acceptable in small quantities (without seeds/pits)': 'aceptable en pequeñas cantidades (sin semillas ni hueso)',
  },
  fr: {
    'allowed': 'autorisé',
    'allowed (boiled)': 'autorisé (bouilli)',
    'not allowed': 'interdit',
    'acceptable in small quantities': 'acceptable en petites quantités',
    'acceptable in small quantities (boiled)': 'acceptable en petites quantités (bouilli)',
    'acceptable in small quantities (ripe only)': 'acceptable en petites quantités (mûr seulement)',
    'acceptable in small quantities (cooked)': 'acceptable en petites quantités (cuit)',
    'allowed (cooked)': 'autorisé (cuit)',
    'allowed (without seeds/pits)': 'autorisé (sans pépins ni noyau)',
    'acceptable in small quantities (without seeds/pits)': 'acceptable en petites quantités (sans pépins ni noyau)',
  },
  de: {
    'allowed': 'erlaubt',
    'allowed (boiled)': 'erlaubt (gekocht)',
    'not allowed': 'nicht erlaubt',
    'acceptable in small quantities': 'in kleinen Mengen akzeptabel',
    'acceptable in small quantities (boiled)': 'in kleinen Mengen akzeptabel (gekocht)',
    'acceptable in small quantities (ripe only)': 'in kleinen Mengen akzeptabel (nur reif)',
    'acceptable in small quantities (cooked)': 'in kleinen Mengen akzeptabel (gekocht)',
    'allowed (cooked)': 'erlaubt (gekocht)',
    'allowed (without seeds/pits)': 'erlaubt (ohne Kerne/Steine)',
    'acceptable in small quantities (without seeds/pits)': 'in kleinen Mengen akzeptabel (ohne Kerne/Steine)',
  },
  it: {
    'allowed': 'consentito',
    'allowed (boiled)': 'consentito (bollito)',
    'not allowed': 'non consentito',
    'acceptable in small quantities': 'accettabile in piccole quantità',
    'acceptable in small quantities (boiled)': 'accettabile in piccole quantità (bollito)',
    'acceptable in small quantities (ripe only)': 'accettabile in piccole quantità (solo maturo)',
    'acceptable in small quantities (cooked)': 'accettabile in piccole quantità (cotto)',
    'allowed (cooked)': 'consentito (cotto)',
    'allowed (without seeds/pits)': 'consentito (senza semi né nocciolo)',
    'acceptable in small quantities (without seeds/pits)': 'accettabile in piccole quantità (senza semi né nocciolo)',
  },
  ru: {
    'allowed': 'разрешено',
    'allowed (boiled)': 'разрешено (вареное)',
    'not allowed': 'запрещено',
    'acceptable in small quantities': 'приемлемо в небольших количествах',
    'acceptable in small quantities (boiled)': 'приемлемо в небольших количествах (вареное)',
    'acceptable in small quantities (ripe only)': 'приемлемо в небольших количествах (только спелое)',
    'acceptable in small quantities (cooked)': 'приемлемо в небольших количествах (вареное)',
    'allowed (cooked)': 'разрешено (в приготовленном виде)',
    'allowed (without seeds/pits)': 'разрешено (без семян и косточек)',
    'acceptable in small quantities (without seeds/pits)': 'приемлемо в небольших количествах (без семян и косточек)',
  },
  pl: {
    'allowed': 'dozwolone',
    'allowed (boiled)': 'dozwolone (gotowane)',
    'not allowed': 'niedozwolone',
    'acceptable in small quantities': 'akceptowalne w małych ilościach',
    'acceptable in small quantities (boiled)': 'akceptowalne w małych ilościach (gotowane)',
    'acceptable in small quantities (ripe only)': 'akceptowalne w małych ilościach (tylko dojrzałe)',
    'acceptable in small quantities (cooked)': 'akceptowalne w małych ilościach (ugotowane)',
    'allowed (cooked)': 'dozwolone (po ugotowaniu)',
    'allowed (without seeds/pits)': 'dozwolone (bez pestek)',
    'acceptable in small quantities (without seeds/pits)': 'akceptowalne w małych ilościach (bez pestek)',
  }
};

export const getFoodTranslation = (foodName: string, language: Language): string => {
  return foodTranslations[language][foodName] || foodTranslations.en[foodName] || foodName;
};

export const getSafetyTranslation = (status: string, language: Language): string => {
  return statusTranslations[language][status] || statusTranslations.en[status] || status;
};

// Short preparation note shown under a food or animal, from the bracket in its status.
export const statusNoteTranslations: Record<Language, Record<string, string>> = {
  en: {
    'cooked': 'Cooked only',
    'boiled': 'Boiled only',
    'ripe only': 'Ripe only',
    'without seeds/pits': 'Remove seeds/pits',
  },
  es: {
    'cooked': 'Solo cocido',
    'boiled': 'Solo hervido',
    'ripe only': 'Solo maduro',
    'without seeds/pits': 'Sin semillas ni hueso',
  },
  fr: {
    'cooked': 'Cuit uniquement',
    'boiled': 'Bouilli uniquement',
    'ripe only': 'Mûr uniquement',
    'without seeds/pits': 'Retirer pépins et noyau',
  },
  de: {
    'cooked': 'Nur gekocht',
    'boiled': 'Nur abgekocht',
    'ripe only': 'Nur reif',
    'without seeds/pits': 'Kerne/Steine entfernen',
  },
  it: {
    'cooked': 'Solo cotto',
    'boiled': 'Solo bollito',
    'ripe only': 'Solo maturo',
    'without seeds/pits': 'Togliere semi e nocciolo',
  },
  ru: {
    'cooked': 'Только в приготовленном виде',
    'boiled': 'Только варёное',
    'ripe only': 'Только спелое',
    'without seeds/pits': 'Удалите семена и косточки',
  },
  pl: {
    'cooked': 'Tylko po ugotowaniu',
    'boiled': 'Tylko gotowane',
    'ripe only': 'Tylko dojrzałe',
    'without seeds/pits': 'Usuń pestki',
  },
};

export const getStatusNoteTranslation = (note: string, language: Language): string => {
  return statusNoteTranslations[language]?.[note] || statusNoteTranslations.en[note] || note;
};
