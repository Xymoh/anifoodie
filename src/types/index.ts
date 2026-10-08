export interface FoodItem {
  type: string;
  category: string;
  item: string;
  icon: string;
  compatibility: Record<string, string>;
  translatedItem?: string;
  translatedCategory?: string;
  translatedType?: string;
  translatedCompatibility?: Record<string, string>;
  translatedAnimalNames?: Record<string, string>;
}

export type AnimalName = 
  | 'Dog' 
  | 'Cat' 
  | 'Rabbit' 
  | 'Guinea Pig' 
  | 'Hamster' 
  | 'Gerbil' 
  | 'Ferret' 
  | 'Mouse' 
  | 'Rat' 
  | 'Chinchilla' 
  | 'Hedgehog' 
  | 'Sugar Glider' 
  | 'Parakeet' 
  | 'Cockatiel' 
  | 'Parrot' 
  | 'Lovebird' 
  | 'Canary' 
  | 'Finch' 
  | 'Dove' 
  | 'Turtle' 
  | 'Tortoise' 
  | 'Bearded Dragon' 
  | 'Leopard Gecko' 
  | 'Iguana' 
  | 'Snake' 
  | 'Frog' 
  | 'Toad' 
  | 'Axolotl' 
  | 'Newt' 
  | 'Salamander' 
  | 'Goldfish' 
  | 'Betta Fish' 
  | 'Angelfish';

export type CompatibilityStatus = 
  | 'allowed' 
  | 'allowed (boiled)'
  | 'not allowed' 
  | 'acceptable in small quantities'
  | 'acceptable in small quantities (boiled)'
  | 'acceptable in small quantities (ripe only)'
  | 'acceptable in small quantities (cooked)'
  | 'allowed (cooked)'
  | 'allowed (without seeds/pits)'
  | 'acceptable in small quantities (without seeds/pits)';

export interface FilteredResults {
  allowed: FoodItem[];
  notAllowed: FoodItem[];
  acceptable: FoodItem[];
}
