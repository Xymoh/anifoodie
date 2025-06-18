export interface FoodItem {
  type: string;
  category: string;
  item: string;
  compatibility: Record<string, string>;
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
  | 'not allowed' 
  | 'acceptable in small quantities'
  | 'acceptable in small quantities (boiled)';

export interface FilteredResults {
  allowed: FoodItem[];
  notAllowed: FoodItem[];
  acceptable: FoodItem[];
}
