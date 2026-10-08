// Food-safety table, one entry per food. Each spec maps a group or animal (see GROUPS
// in rules.mjs) to "<code> <reason>", where <code> is a key of STATUS and <reason> is
// either "@key" (shared reason from R) or free text ending with [SOURCE,...] tags.
// A trailing " ?" marks a judgement call that deserves a second opinion.
//
// Resolution per animal: spec[animal] > spec[group] > base[animal] > base[group].
// build.mjs fails if any cell is left unresolved.

const PLANT = {
  ferret: 'N @ferretPlant',
  gecko: 'N @gecko',
  snake: 'N @snake',
  amph: 'N @amph',
  Axolotl: 'N @axolotlNo',
  fish: 'N @fishNo',
  'Betta Fish': 'N @betta',
};
const FRUIT = { ...PLANT, tort: 'N @tortFruit', Chinchilla: 'N @chinSugar' };
const ALLIUM = {
  all: 'N @allium',
  turtle: 'N @alliumCold', tort: 'N @alliumCold', dragon: 'N @alliumCold', gecko: 'N @alliumCold',
  iguana: 'N @alliumCold', snake: 'N @alliumCold', amph: 'N @alliumCold', fish: 'N @alliumCold',
};
const ANIMAL_PRODUCT = {
  herb: 'N @herbMeat',
  tort: 'N @reptMeat',
  iguana: 'N @reptMeat',
  dragon: 'N @dragonMeat',
  gecko: 'N @gecko',
  snake: 'N @snake',
  amph: 'N @amph',
  Axolotl: 'N @axolotlNo',
  fish: 'N @fishNo',
  sbird: 'N @seedbirdMeat',
};
const DAIRY = {
  ...ANIMAL_PRODUCT,
  herb: 'N @herbDairy',
  ferret: 'N @lactose',
  turtle: 'N @reptDairy', tort: 'N @reptDairy', dragon: 'N @reptDairy', iguana: 'N @reptDairy',
  fish: 'N @fishDairy', amph: 'N @amph', sbird: 'N @birdDairy',
};
const GRAIN = {
  ...PLANT,
  ferret: 'N @ferretCarb',
  turtle: 'N @reptGrain', tort: 'N @reptGrain', dragon: 'N @reptGrain', iguana: 'N @reptGrain',
  Rabbit: 'N @herbStarch', 'Guinea Pig': 'N @herbStarch', Chinchilla: 'N @herbStarch',
};
const NUT = {
  ...PLANT,
  ferret: 'N @ferretCarb',
  herb: 'N @herbNut',
  turtle: 'N @reptNut', tort: 'N @reptNut', dragon: 'N @reptNut', iguana: 'N @reptNut',
  hog: 'N Nuts and seeds can lodge in the roof of the mouth; too fatty. [VCA]',
};
const TOXIC = (reason) => ({ all: `N ${reason}` });

const foods = [];
const food = (type, category, item, icon, base, spec) =>
  foods.push({ type, category, item, icon, base, spec });

// ─── Vegetables ──────────────────────────────────────────────────────────────

food('Vegetable', 'Leafy Greens', 'Spinach', 'spinach', PLANT, {
  dog: 'S @oxalate', cat: 'N @oxalateCat',
  Rabbit: 'S @oxalate', 'Guinea Pig': 'S @oxalate', Chinchilla: 'N @chinFresh',
  rodent: 'S @oxalate', hog: 'S @oxalate', glider: 'N @oxalateGlider',
  psitt: 'S @oxalate', sbird: 'S @oxalate',
  turtle: 'S @oxalateReptile', tort: 'S @oxalateReptile', dragon: 'S @oxalateReptile', iguana: 'S @oxalateReptile',
  Goldfish: 'Sb Blanched and chopped; occasional plant matter for an omnivorous fish. [RSPCA]',
  Angelfish: 'Sb Blanched and chopped; occasional plant matter. [VCA] ?',
});
food('Vegetable', 'Leafy Greens', 'Kale', 'kale', PLANT, {
  dog: 'S Isothiocyanates can irritate the gut; small amounts. [VCA]', cat: 'S @catVeg',
  Rabbit: 'Y Recommended leafy green; rotate with others. [HRS]', 'Guinea Pig': 'S High calcium – bladder sludge risk; rotate. [RSPCA]',
  Chinchilla: 'S A small leaf occasionally; dry diet first. [VCA] ?',
  rodent: 'S @goitrogen', hog: 'S @goitrogen', glider: 'S @goitrogen',
  psitt: 'Y Rich in vitamin A and calcium. [LAF]', sbird: 'Y Dark leafy greens are recommended. [VCA]',
  turtle: 'S @goitrogen', tort: 'S @goitrogen', dragon: 'S @goitrogen', iguana: 'S @goitrogen',
  Goldfish: 'Sb Blanched, chopped. [RSPCA] ?',
});
food('Vegetable', 'Leafy Greens', 'Lettuce (Romaine)', 'lettuce_romaine', PLANT, {
  dog: 'Y Plain, low calorie. [VCA]', cat: 'S @catVeg',
  Rabbit: 'Y Dark lettuces are a recommended green. [HRS]', 'Guinea Pig': 'Y Good everyday green. [RSPCA]',
  Chinchilla: 'S A small leaf occasionally. [VCA] ?',
  rodent: 'S Watery – too much causes diarrhea. [RSPCA]', hog: 'S @catVeg',
  glider: 'S Low nutrition; fine in small amounts. [VCA]',
  psitt: 'Y Dark lettuce is fine. [LAF]', sbird: 'Y Dark lettuce is fine. [VCA]',
  turtle: 'Y Common green for aquatic turtles (mix with darker greens). [VCA]', tort: 'S Low fiber; part of a mix only. [TT]',
  dragon: 'S Low nutrition, mostly water. [VCA]', iguana: 'S Low nutrition, mostly water. [VCA]',
  Goldfish: 'Sb Blanched, chopped. [RSPCA]', Angelfish: 'Sb Blanched, chopped. [VCA] ?',
});
food('Vegetable', 'Leafy Greens', 'Lettuce (Iceberg)', 'lettuce_iceberg', PLANT, {
  dog: 'S Safe but mostly water. [VCA]', cat: 'S @catVeg',
  Rabbit: 'N Little nutrition and can cause diarrhea; welfare charities advise against it. [RWAF]',
  'Guinea Pig': 'N Little nutrition and can cause diarrhea. [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Watery – diarrhea risk. [RSPCA]', hog: 'S Low nutrition. [VCA]', glider: 'N Low nutrition; use better greens. [VCA] ?',
  psitt: 'S Low nutrition, mostly water. [LAF]', sbird: 'S Low nutrition, mostly water. [VCA]',
  turtle: 'S Low nutrition; use darker greens. [VCA]', tort: 'N No useful nutrition for tortoises. [TT]',
  dragon: 'N No useful nutrition; diarrhea. [VCA]', iguana: 'N No useful nutrition; diarrhea. [VCA]',
});
food('Vegetable', 'Leafy Greens', 'Swiss Chard', 'swiss_chard', PLANT, {
  dog: 'S @oxalate', cat: 'N @oxalateCat',
  Rabbit: 'S @oxalate', 'Guinea Pig': 'S @oxalate', Chinchilla: 'N @chinFresh',
  rodent: 'S @oxalate', hog: 'S @oxalate', glider: 'N @oxalateGlider',
  psitt: 'S @oxalate', sbird: 'S @oxalate',
  turtle: 'S @oxalateReptile', tort: 'S @oxalateReptile', dragon: 'S @oxalateReptile', iguana: 'S @oxalateReptile',
});
food('Vegetable', 'Leafy Greens', 'Collard Greens', 'collard_greens', PLANT, {
  dog: 'S Fine plain, may cause gas. [VCA]', cat: 'S @catVeg',
  Rabbit: 'Y Recommended leafy green. [HRS]', 'Guinea Pig': 'S High calcium; rotate. [RSPCA]',
  Chinchilla: 'S A small leaf occasionally. [VCA] ?',
  rodent: 'S @goitrogen', hog: 'S @goitrogen', glider: 'S @goitrogen',
  psitt: 'Y Calcium- and vitamin-A-rich green. [LAF]', sbird: 'Y Dark leafy greens are recommended. [VCA]',
  turtle: 'Y Good calcium-rich green. [VCA]', tort: 'S @goitrogen',
  dragon: 'Y @stagingCalcium', iguana: 'Y @stagingCalcium',
});
food('Vegetable', 'Leafy Greens', 'Mustard Greens', 'mustard_greens', PLANT, {
  dog: 'S Fine plain, may cause gas. [VCA]', cat: 'S @catVeg',
  Rabbit: 'S @oxalate', 'Guinea Pig': 'S @oxalate', Chinchilla: 'N @chinFresh',
  rodent: 'S @goitrogen', hog: 'S @goitrogen', glider: 'S @goitrogen',
  psitt: 'Y Nutritious dark green. [LAF]', sbird: 'S Dark green; rotate. [VCA]',
  turtle: 'Y Good calcium-rich green. [VCA]', tort: 'S @goitrogen',
  dragon: 'Y @stagingCalcium', iguana: 'Y @stagingCalcium',
});
food('Vegetable', 'Leafy Greens', 'Turnip Greens', 'turnip_greens', PLANT, {
  dog: 'S Fine plain, may cause gas. [VCA]', cat: 'S @catVeg',
  Rabbit: 'Y Recommended leafy green. [HRS]', 'Guinea Pig': 'S High calcium; rotate. [RSPCA]',
  Chinchilla: 'S A small leaf occasionally. [VCA] ?',
  rodent: 'S @goitrogen', hog: 'S @goitrogen', glider: 'S @goitrogen',
  psitt: 'Y Nutritious dark green. [LAF]', sbird: 'S Dark green; rotate. [VCA]',
  turtle: 'Y Good calcium-rich green. [VCA]', tort: 'S @goitrogen',
  dragon: 'Y @stagingCalcium', iguana: 'Y @stagingCalcium',
});
food('Vegetable', 'Leafy Greens', 'Beet Greens', 'beet_greens', PLANT, {
  dog: 'S @oxalate', cat: 'N @oxalateCat',
  Rabbit: 'S @oxalate', 'Guinea Pig': 'S @oxalate', Chinchilla: 'N @chinFresh',
  rodent: 'S @oxalate', hog: 'S @oxalate', glider: 'N @oxalateGlider',
  psitt: 'S @oxalate', sbird: 'S @oxalate',
  turtle: 'S @oxalateReptile', tort: 'S @oxalateReptile', dragon: 'S @oxalateReptile', iguana: 'S @oxalateReptile',
});

food('Vegetable', 'Root Vegetables', 'Carrot', 'carrot', PLANT, {
  dog: 'Y Plain raw or cooked; cut to avoid choking. [VCA]', cat: 'Sc Cooked soft, small pieces. [VCA]',
  Rabbit: 'S Sugary root – a treat, not a staple. [HRS]', 'Guinea Pig': 'S @sugarHerb', Chinchilla: 'N @chinFresh',
  rodent: 'S @sugar', hog: 'Sc Cooked soft; raw carrot is a choking risk. [VCA]', glider: 'S Part of a varied vegetable mix. [VCA]',
  psitt: 'Y Excellent vitamin A source. [LAF]', sbird: 'S Grated, small amounts. [VCA]',
  turtle: 'S Grated, occasionally. [VCA]', tort: 'S Grated, occasionally (sugary). [TT] ?',
  dragon: 'S Grated, occasionally (vitamin A). [VCA]', iguana: 'S Grated, occasionally. [VCA]',
});
food('Vegetable', 'Root Vegetables', 'Beetroot', 'beetroot', PLANT, {
  dog: 'S Sugary and high oxalate; may color urine red. [VCA]', cat: 'N @catNoNeed',
  Rabbit: 'S @sugarHerb', 'Guinea Pig': 'S @sugarHerb', Chinchilla: 'N @chinFresh',
  rodent: 'S @sugar', hog: 'N Sugary/high oxalate; no benefit. [VCA] ?', glider: 'S @sugar',
  psitt: 'S Sugary root; occasional. [LAF]', sbird: 'S Small amounts. [VCA] ?',
  turtle: 'N @oxalateReptile', tort: 'N @tortStarch', dragon: 'N @oxalateReptile', iguana: 'N @oxalateReptile',
});
food('Vegetable', 'Root Vegetables', 'Turnip', 'turnip', PLANT, {
  dog: 'S Plain, small amounts; gassy. [VCA]', cat: 'N @catNoNeed',
  Rabbit: 'S Root vegetable – treat amounts. [HRS]', 'Guinea Pig': 'S Small amounts. [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA]', hog: 'N No benefit; hard to chew. [VCA] ?', glider: 'S Small amounts. [VCA] ?',
  psitt: 'S Occasional. [LAF]', sbird: 'S Grated, small amounts. [VCA] ?',
  turtle: 'N @tortStarch', tort: 'N @tortStarch', dragon: 'N @tortStarch', iguana: 'S Grated, occasionally. [VCA] ?',
});
food('Vegetable', 'Root Vegetables', 'Radish', 'radish', PLANT, {
  dog: 'S Plain, small amounts; can upset the stomach. [VCA]', cat: 'N @catNoNeed',
  Rabbit: 'S Root and tops in small amounts. [HRS]', 'Guinea Pig': 'S Small amounts. [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA]', hog: 'N Spicy; no benefit. [VCA] ?', glider: 'N Spicy; no benefit. [VCA] ?',
  psitt: 'S Occasional. [LAF]', sbird: 'S Small amounts. [VCA] ?',
  turtle: 'N @tortVeg', tort: 'N @tortVeg', dragon: 'N Low nutrition, goitrogenic. [VCA] ?', iguana: 'S Occasional. [VCA] ?',
});
food('Vegetable', 'Root Vegetables', 'Parsnip', 'parsnip', PLANT, {
  dog: 'Sc Plain cooked, small amounts. [VCA]', cat: 'N @catNoNeed',
  Rabbit: 'S @sugarHerb', 'Guinea Pig': 'S @sugarHerb', Chinchilla: 'N @chinFresh',
  rodent: 'S @sugar', hog: 'Sc Cooked soft, small amounts. [VCA] ?', glider: 'S @sugar',
  psitt: 'S Occasional. [LAF]', sbird: 'S Grated, small amounts. [VCA] ?',
  turtle: 'N @tortStarch', tort: 'N @tortStarch', dragon: 'N @tortStarch', iguana: 'S Grated, occasionally. [VCA] ?',
});
food('Vegetable', 'Root Vegetables', 'Sweet Potato', 'sweet_potato', PLANT, {
  dog: 'Yc Plain cooked, no skin or seasoning. [VCA]', cat: 'Sc Plain cooked, small amounts. [VCA]',
  Rabbit: 'N @herbStarch', 'Guinea Pig': 'N @herbStarch', Chinchilla: 'N @herbStarch',
  rodent: 'Sc Plain cooked, small amounts. [RSPCA]', hog: 'Sc Plain cooked; common hedgehog treat. [VCA]',
  glider: 'Sc Plain cooked. [VCA]', psitt: 'Yc Cooked; excellent vitamin A source. [LAF]', sbird: 'Sc Cooked, small amounts. [VCA] ?',
  turtle: 'Sc Cooked, occasionally. [VCA] ?', tort: 'N @tortStarch',
  dragon: 'S Occasional; raw grated or cooked. [VCA] ?', iguana: 'S Occasional. [VCA] ?',
});
food('Vegetable', 'Root Vegetables', 'Potato', 'potato', PLANT, {
  dog: 'Sc Plain cooked only; raw or green potato contains solanine. [ASPCA]', cat: 'N @solanine',
  Rabbit: 'N @herbStarch', 'Guinea Pig': 'N @herbStarch', Chinchilla: 'N @herbStarch',
  rodent: 'Sc Plain cooked only; raw/green potato contains solanine. [RSPCA]', hog: 'Sc Plain cooked only. [VCA] ?',
  glider: 'N @solanine', psitt: 'Sc Plain cooked only; raw/green potato contains solanine. [LAF]', sbird: 'N @solanine',
  turtle: 'N @solanine', tort: 'N @solanine', dragon: 'N @solanine', iguana: 'N @solanine',
});

food('Vegetable', 'Cruciferous Vegetables', 'Broccoli', 'broccoli', PLANT, {
  dog: 'S Isothiocyanates irritate the gut; keep under ~10% of daily food. [VCA]', cat: 'S @catVeg',
  Rabbit: 'S Leaves and stems in moderation; can cause gas. [HRS]', 'Guinea Pig': 'S Small amounts (gas). [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA]', hog: 'Sc Cooked, small amounts. [VCA]', glider: 'S @goitrogen',
  psitt: 'Y Nutritious; raw or steamed. [LAF]', sbird: 'S Florets in small amounts. [VCA]',
  turtle: 'S @goitrogen', tort: 'S @goitrogen', dragon: 'S @goitrogen', iguana: 'S @goitrogen',
  Goldfish: 'Sb Blanched, chopped. [RSPCA] ?',
});
food('Vegetable', 'Cruciferous Vegetables', 'Cauliflower', 'cauliflower', PLANT, {
  dog: 'S Plain, small amounts (gas). [VCA]', cat: 'S @catVeg',
  Rabbit: 'S Leaves and florets in moderation (gas). [HRS]', 'Guinea Pig': 'S Small amounts (gas). [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA]', hog: 'Sc Cooked, small amounts. [VCA] ?', glider: 'S @goitrogen',
  psitt: 'Y Fine raw or steamed. [LAF]', sbird: 'S Small amounts. [VCA] ?',
  turtle: 'S @goitrogen', tort: 'S @goitrogen', dragon: 'S @goitrogen', iguana: 'S @goitrogen',
});
food('Vegetable', 'Cruciferous Vegetables', 'Cabbage', 'cabbage', PLANT, {
  dog: 'S Plain, small amounts (gas). [VCA]', cat: 'S @catVeg',
  Rabbit: 'S Introduce slowly; can cause gas. [HRS]', 'Guinea Pig': 'S Small amounts (gas). [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA]', hog: 'N Gassy; no benefit. [VCA] ?', glider: 'S @goitrogen',
  psitt: 'S @goitrogen', sbird: 'S @goitrogen',
  turtle: 'S @goitrogen', tort: 'S @goitrogen', dragon: 'S @goitrogen', iguana: 'S @goitrogen',
});
food('Vegetable', 'Cruciferous Vegetables', 'Brussels Sprouts', 'brussels_sprouts', PLANT, {
  dog: 'S Plain, small amounts (gas). [VCA]', cat: 'S @catVeg',
  Rabbit: 'S In moderation (gas). [HRS]', 'Guinea Pig': 'S Small amounts (gas). [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA]', hog: 'N Gassy; no benefit. [VCA] ?', glider: 'S @goitrogen',
  psitt: 'S @goitrogen', sbird: 'S @goitrogen',
  turtle: 'S @goitrogen', tort: 'S @goitrogen', dragon: 'S @goitrogen', iguana: 'S @goitrogen',
});
food('Vegetable', 'Cruciferous Vegetables', 'Bok Choy', 'bok_choy', PLANT, {
  dog: 'S Plain, small amounts. [VCA]', cat: 'S @catVeg',
  Rabbit: 'Y Recommended leafy green. [HRS]', 'Guinea Pig': 'S Rotate with other greens. [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA]', hog: 'S @catVeg', glider: 'S @goitrogen',
  psitt: 'Y Nutritious green. [LAF]', sbird: 'Y Leafy greens are recommended. [VCA]',
  turtle: 'S @goitrogen', tort: 'S @goitrogen', dragon: 'S @goitrogen', iguana: 'S @goitrogen',
  Goldfish: 'Sb Blanched, chopped. [RSPCA] ?',
});

food('Vegetable', 'Alliums', 'Onion', 'onion', ALLIUM, {});
food('Vegetable', 'Alliums', 'Garlic', 'garlic', ALLIUM, {});
food('Vegetable', 'Alliums', 'Leek', 'leek', ALLIUM, {});
food('Vegetable', 'Alliums', 'Shallot', 'shallot', ALLIUM, {});
food('Vegetable', 'Alliums', 'Chives', 'chives', ALLIUM, {});
food('Vegetable', 'Alliums', 'Scallions', 'scallions', ALLIUM, {});

food('Vegetable', 'Squashes & Gourds', 'Pumpkin', 'pumpkin', PLANT, {
  dog: 'Y Plain cooked or canned pure pumpkin (not pie filling). [VCA]', cat: 'S Plain pumpkin can help digestion. [VCA]',
  Rabbit: 'S Flesh in small amounts. [HRS]', 'Guinea Pig': 'S Small amounts. [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA]', hog: 'S Plain cooked pumpkin. [VCA]', glider: 'S Part of a varied vegetable mix. [VCA]',
  psitt: 'Y Raw or cooked flesh. [LAF]', sbird: 'S Small amounts. [VCA]',
  turtle: 'S Occasional. [VCA]', tort: 'S @tortVeg', dragon: 'S Occasional. [VCA]', iguana: 'Y Squashes are a good staple portion. [VCA]',
});
food('Vegetable', 'Squashes & Gourds', 'Zucchini', 'zucchini', PLANT, {
  dog: 'Y Plain, low calorie. [VCA]', cat: 'S @catVeg',
  Rabbit: 'S Non-leafy vegetable – limited portion. [HRS]', 'Guinea Pig': 'S Small amounts. [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA]', hog: 'S Small amounts. [VCA]', glider: 'S Part of a varied vegetable mix. [VCA]',
  psitt: 'Y Raw or steamed. [LAF]', sbird: 'S Small amounts. [VCA]',
  turtle: 'S Occasional. [VCA]', tort: 'S @tortVeg', dragon: 'S Low nutrition; occasional. [VCA]', iguana: 'S Occasional. [VCA]',
  Goldfish: 'Yb Blanched zucchini is a recommended vegetable for goldfish. [RSPCA]',
  Angelfish: 'Sb Blanched, small pieces. [VCA] ?',
});
food('Vegetable', 'Squashes & Gourds', 'Cucumber', 'cucumber', PLANT, {
  dog: 'Y Plain, low calorie. [VCA]', cat: 'S @catVeg',
  Rabbit: 'S Watery – small amounts. [RWAF]', 'Guinea Pig': 'S Watery – small amounts. [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Watery – small amounts. [RSPCA]', hog: 'S Small amounts. [VCA]', glider: 'S Part of a varied vegetable mix. [VCA]',
  psitt: 'Y Fine raw. [LAF]', sbird: 'Y Fine raw. [VCA]',
  turtle: 'S Low nutrition; occasional. [VCA]', tort: 'S @tortVeg', dragon: 'S Low nutrition; for hydration. [VCA]', iguana: 'S Low nutrition. [VCA]',
  Goldfish: 'S Thin slices, remove after a few hours. [RSPCA]', Angelfish: 'S Thin slices, remove leftovers. [VCA] ?',
});
food('Vegetable', 'Squashes & Gourds', 'Butternut Squash', 'butternut_squash', PLANT, {
  dog: 'Yc Plain cooked, no skin or seeds. [VCA]', cat: 'Sc Plain cooked, small amounts. [VCA]',
  Rabbit: 'S Small amounts. [HRS]', 'Guinea Pig': 'S Small amounts. [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA]', hog: 'Sc Plain cooked. [VCA]', glider: 'S Part of a varied vegetable mix. [VCA]',
  psitt: 'Y Raw or cooked. [LAF]', sbird: 'S Small amounts. [VCA] ?',
  turtle: 'S Occasional. [VCA]', tort: 'S @tortVeg', dragon: 'Y Good staple vegetable (raw, grated). [VCA]', iguana: 'Y Good staple vegetable. [VCA]',
});
food('Vegetable', 'Squashes & Gourds', 'Acorn Squash', 'acorn_squash', PLANT, {
  dog: 'Yc Plain cooked, no skin or seeds. [VCA]', cat: 'Sc Plain cooked, small amounts. [VCA]',
  Rabbit: 'S Small amounts. [HRS]', 'Guinea Pig': 'S Small amounts. [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA]', hog: 'Sc Plain cooked. [VCA]', glider: 'S Part of a varied vegetable mix. [VCA]',
  psitt: 'Y Raw or cooked. [LAF]', sbird: 'S Small amounts. [VCA] ?',
  turtle: 'S Occasional. [VCA]', tort: 'S @tortVeg', dragon: 'Y Good staple vegetable (raw, grated). [VCA]', iguana: 'Y Good staple vegetable. [VCA]',
});

food('Vegetable', 'Legumes', 'Green Beans', 'green_beans', PLANT, {
  dog: 'Y Plain, no salt (not canned with salt). [VCA]', cat: 'S @catVeg',
  Rabbit: 'S Small amounts. [HRS] ?', 'Guinea Pig': 'S Small amounts. [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA]', hog: 'Sc Cooked; common hedgehog treat. [VCA]', glider: 'S Part of a varied vegetable mix. [VCA]',
  psitt: 'Y Raw or cooked. [LAF]', sbird: 'S Chopped, small amounts. [VCA]',
  turtle: 'S Occasional. [VCA]', tort: 'N @tortProtein', dragon: 'S Occasional. [VCA]', iguana: 'S Occasional. [VCA]',
});
food('Vegetable', 'Legumes', 'Peas', 'peas', PLANT, {
  dog: 'Y Fresh or frozen, no salt. [VCA]', cat: 'S @catVeg',
  Rabbit: 'S Fresh pods in small amounts. [HRS] ?', 'Guinea Pig': 'S Small amounts. [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA]', hog: 'S Common hedgehog treat. [VCA]', glider: 'S Part of a varied vegetable mix. [VCA]',
  psitt: 'Y Fresh, frozen-thawed or cooked. [LAF]', sbird: 'S Small amounts. [VCA]',
  turtle: 'S Occasional. [VCA]', tort: 'N @tortProtein', dragon: 'S High phosphorus; occasional. [VCA]', iguana: 'S High phosphorus; occasional. [VCA]',
  Goldfish: 'Yb Shelled, blanched peas – a classic goldfish food. [RSPCA]',
  Angelfish: 'Sb Shelled, blanched, crushed. [VCA] ?',
  'Betta Fish': 'Sb A tiny shelled, blanched piece occasionally (constipation). [VCA] ?',
});
food('Vegetable', 'Legumes', 'Lentils', 'lentils', PLANT, {
  dog: 'Sc Plain cooked, small amounts (gas). [VCA]', cat: 'N @catNoNeed',
  herb: 'N @herbLegume',
  rodent: 'Sc Cooked plain; never raw. [RSPCA]', hog: 'N No benefit; gassy. [VCA] ?', glider: 'N No benefit. [VCA] ?',
  psitt: 'Sc Cooked or sprouted only – raw dried legumes contain lectins. [LAF]', sbird: 'Sc Cooked or sprouted only. [VCA] ?',
  turtle: 'N @tortProtein', tort: 'N @tortProtein', dragon: 'N @tortProtein', iguana: 'N @tortProtein',
});
food('Vegetable', 'Legumes', 'Chickpeas', 'chickpeas', PLANT, {
  dog: 'Sc Plain cooked only – never hummus (garlic). [VCA]', cat: 'N @catNoNeed',
  herb: 'N @herbLegume',
  rodent: 'Sc Cooked plain; never raw. [RSPCA]', hog: 'N No benefit; gassy. [VCA] ?', glider: 'N No benefit. [VCA] ?',
  psitt: 'Sc Cooked or sprouted only – raw dried legumes contain lectins. [LAF]', sbird: 'N No benefit for small seed-eaters. [VCA] ?',
  turtle: 'N @tortProtein', tort: 'N @tortProtein', dragon: 'N @tortProtein', iguana: 'N @tortProtein',
});
food('Vegetable', 'Legumes', 'Soybeans (Edamame)', 'soybeans_edamame', PLANT, {
  dog: 'Sc Plain cooked, shelled, unsalted. [VCA]', cat: 'N @catNoNeed',
  herb: 'N @herbLegume',
  rodent: 'Sc Cooked plain; raw soy contains trypsin inhibitors. [RSPCA]', hog: 'N No benefit; gassy. [VCA] ?', glider: 'N No benefit. [VCA] ?',
  psitt: 'Sc Cooked only – raw soy contains trypsin inhibitors. [LAF]', sbird: 'N No benefit for small seed-eaters. [VCA] ?',
  turtle: 'N @tortProtein', tort: 'N @tortProtein', dragon: 'N @tortProtein', iguana: 'N @tortProtein',
});

food('Vegetable', 'Stalk Vegetables', 'Celery', 'celery', PLANT, {
  dog: 'S Cut small – strings can choke. [VCA]', cat: 'S @catVeg',
  Rabbit: 'S Cut into short pieces (strings). [HRS]', 'Guinea Pig': 'S Cut into short pieces (strings). [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'S Cut small (strings). [RSPCA]', hog: 'N Strings are a choking risk. [VCA]', glider: 'S Cut small. [VCA] ?',
  psitt: 'S Cut small (strings). [LAF]', sbird: 'S Leaves or finely cut stalk. [VCA] ?',
  turtle: 'S Occasional. [VCA] ?', tort: 'S @tortVeg', dragon: 'S Occasional. [VCA]', iguana: 'S Occasional. [VCA]',
});
food('Vegetable', 'Stalk Vegetables', 'Asparagus', 'asparagus', PLANT, {
  dog: 'Sc Cooked, cut small (tough raw). [VCA]', cat: 'N @catNoNeed',
  Rabbit: 'S Small amounts. [HRS] ?', 'Guinea Pig': 'S Small amounts. [RSPCA] ?', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA] ?', hog: 'N No benefit. [VCA] ?', glider: 'S Small amounts. [VCA] ?',
  psitt: 'S Raw or steamed. [LAF]', sbird: 'N No benefit. [VCA] ?',
  turtle: 'S Occasional. [VCA] ?', tort: 'N @tortVeg', dragon: 'S Occasional. [VCA] ?', iguana: 'S Occasional. [VCA] ?',
});
food('Vegetable', 'Stalk Vegetables', 'Rhubarb (stalk)', 'rhubarb_stalk', PLANT, {
  all: 'N @rhubarb',
});
food('Vegetable', 'Stalk Vegetables', 'Rhubarb (leaves)', 'rhubarb_leaves', PLANT, {
  all: 'N @rhubarb',
});

food('Vegetable', 'Other', 'Corn', 'corn', PLANT, {
  dog: 'S Kernels only, plain – never the cob (intestinal blockage). [ASPCA]', cat: 'S @catVeg',
  Rabbit: 'N Kernel hulls are indigestible (impaction) and starchy. [HRS]', 'Guinea Pig': 'S Fresh kernels, husk and silk occasionally. [RSPCA] ?', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts; part of seed mixes. [RSPCA]', hog: 'N Hard kernels; no benefit. [VCA] ?', glider: 'S Small amounts. [VCA] ?',
  psitt: 'Y Fresh, cooked or on the cob. [LAF]', Canary: 'S Small amounts. [VCA] ?', Finch: 'S Small amounts. [VCA] ?', Dove: 'Y Cracked corn is a normal dove food. [VCA]',
  turtle: 'N Low nutrition. [VCA] ?', tort: 'N @tortStarch', dragon: 'N Low nutrition; hard kernels. [VCA]', iguana: 'N Low nutrition. [VCA]',
});
for (const [color, icon] of [['Red', 'bell_pepper_red'], ['Green', 'bell_pepper_green'], ['Yellow', 'bell_pepper_yellow']]) {
  food('Vegetable', 'Other', `Bell Pepper (${color})`, icon, PLANT, {
    dog: 'S Plain, no seeds; may cause gas. [VCA]', cat: 'S @catVeg',
    Rabbit: 'S Non-leafy vegetable – limited portion. [HRS]', 'Guinea Pig': 'Y Excellent vitamin C source. [RSPCA]', Chinchilla: 'N @chinFresh',
    rodent: 'S Small amounts. [RSPCA]', hog: 'S Small amounts. [VCA] ?', glider: 'S Part of a varied vegetable mix. [VCA]',
    psitt: 'Y Seeds included; vitamin rich. [LAF]', sbird: 'S Small amounts. [VCA]',
    turtle: 'S Occasional. [VCA]', tort: 'S @tortVeg', dragon: 'S Occasional. [VCA]', iguana: 'S Occasional. [VCA]',
  });
}
food('Vegetable', 'Other', 'Chili Pepper', 'chili_pepper', PLANT, {
  dog: 'N Capsaicin irritates the mouth and gut. [ASPCA]', cat: 'N Capsaicin irritates the mouth and gut. [ASPCA]',
  herb: 'N Capsaicin irritates the gut. [HRS]', rodent: 'N Capsaicin irritates the gut. [RSPCA]',
  hog: 'N Capsaicin irritates the gut. [VCA]', glider: 'N Capsaicin irritates the gut. [VCA]',
  Parrot: 'Y Birds don\'t feel capsaicin heat; chilies are a common parrot treat. [LAF]',
  Cockatiel: 'S Birds don\'t feel capsaicin heat; small amounts. [LAF]', Parakeet: 'S Birds don\'t feel capsaicin heat; small amounts. [LAF]',
  Lovebird: 'S Birds don\'t feel capsaicin heat; small amounts. [LAF]',
  Canary: 'S Small amounts. [VCA] ?', Finch: 'S Small amounts. [VCA] ?', Dove: 'N Not part of diet. [VCA] ?',
  turtle: 'N Irritant. [VCA]', tort: 'N Irritant. [TT]', dragon: 'N Irritant. [VCA]', iguana: 'N Irritant. [VCA]',
});
food('Vegetable', 'Other', 'Tomato', 'tomato', PLANT, {
  dog: 'Sr Ripe red flesh only; green tomatoes, leaves and stems contain solanine. [ASPCA]', cat: 'N @solanine',
  Rabbit: 'Sr Ripe flesh only, tiny amounts; never leaves/stems. [HRS] ?', 'Guinea Pig': 'Sr Ripe flesh only; never leaves/stems. [RSPCA]', Chinchilla: 'N @chinFresh',
  rodent: 'Sr Ripe flesh only; never leaves/stems. [RSPCA]', hog: 'N Acidic; leaves/green parts toxic. [VCA] ?', glider: 'Sr Ripe flesh only. [VCA] ?',
  psitt: 'Sr Ripe flesh only, acidic; never leaves/stems. [LAF]', sbird: 'Sr Ripe flesh only, small amounts. [VCA] ?',
  turtle: 'Sr Ripe flesh only, occasionally. [VCA] ?', tort: 'N @tortFruit', dragon: 'Sr Ripe flesh only, rarely (acidic). [VCA] ?', iguana: 'Sr Ripe flesh only, rarely. [VCA] ?',
});
food('Vegetable', 'Other', 'Eggplant', 'eggplant', PLANT, {
  dog: 'Sc Plain cooked, small amounts; leaves/stems contain solanine. [ASPCA]', cat: 'N @solanine',
  herb: 'N @solanine', rodent: 'N @solanine', hog: 'N @solanine', glider: 'N @solanine',
  psitt: 'N @solanine', sbird: 'N @solanine',
  turtle: 'N @solanine', tort: 'N @solanine', dragon: 'N @solanine', iguana: 'N @solanine',
});
food('Vegetable', 'Other', 'Okra', 'okra', PLANT, {
  dog: 'S Plain, unfried. [VCA]', cat: 'N @catNoNeed',
  Rabbit: 'S Small amounts. [HRS] ?', 'Guinea Pig': 'S Small amounts. [RSPCA] ?', Chinchilla: 'N @chinFresh',
  rodent: 'S Small amounts. [RSPCA] ?', hog: 'N No benefit. [VCA] ?', glider: 'S Small amounts. [VCA] ?',
  psitt: 'Y Raw or cooked. [LAF]', sbird: 'S Small amounts. [VCA] ?',
  turtle: 'S Occasional. [VCA] ?', tort: 'S @tortVeg', dragon: 'S Occasional. [VCA]', iguana: 'S Occasional. [VCA]',
});
food('Vegetable', 'Other', 'Mushrooms (edible)', 'mushrooms_edible', PLANT, {
  dog: 'S Plain store-bought mushrooms only, cooked, unseasoned. [ASPCA]', cat: 'N @catNoNeed',
  herb: 'N @mushroom', rodent: 'N @mushroom', hog: 'N @mushroom', glider: 'N @mushroom',
  psitt: 'N @mushroom', sbird: 'N @mushroom',
  turtle: 'N @mushroom', tort: 'N @mushroom', dragon: 'N @mushroom', iguana: 'N @mushroom',
});
food('Vegetable', 'Other', 'Mushrooms (wild)', 'mushrooms_wild', PLANT, {
  all: 'N @wildMushroom',
});

// ─── Fruits ──────────────────────────────────────────────────────────────────

// Common treat fruit: same shape for most animals, with a few knobs.
const treatFruit = (o = {}) => ({
  dog: 'S @sugar', cat: 'S @catFruit',
  Rabbit: 'S @sugarHerb', 'Guinea Pig': 'S @sugarHerb',
  rodent: 'S @sugar', hog: 'S @sugar', glider: 'S Fruit is part of a sugar glider diet. [VCA]',
  psitt: 'Y Fresh fruit is a good part of a parrot diet. [LAF]', sbird: 'S Small pieces occasionally. [VCA]',
  turtle: 'S Occasional treat. [VCA]', dragon: 'S Fruit ≤10% of diet. [VCA]', iguana: 'S Fruit ≤10% of diet. [VCA]',
  ...o,
});
const seededFruit = (o = {}) => treatFruit({
  dog: 'Yp @fruitSeeds', cat: 'Sp @fruitSeeds',
  Rabbit: 'Sp @fruitSeeds', 'Guinea Pig': 'Sp @fruitSeeds',
  rodent: 'Sp @fruitSeeds', hog: 'Sp @fruitSeeds', glider: 'Sp @fruitSeeds',
  psitt: 'Yp @fruitSeeds', sbird: 'Sp @fruitSeeds',
  turtle: 'Sp @fruitSeeds', dragon: 'Sp @fruitSeeds', iguana: 'Sp @fruitSeeds',
  ...o,
});
const stoneFruit = (o = {}) => treatFruit({
  dog: 'Sp @pitHazard', cat: 'Sp @pitHazard',
  Rabbit: 'Sp @pitHazard', 'Guinea Pig': 'Sp @pitHazard',
  rodent: 'Sp @pitHazard', hog: 'Sp @pitHazard', glider: 'Sp @pitHazard',
  psitt: 'Yp @pitHazard', sbird: 'Sp @pitHazard',
  turtle: 'Sp @pitHazard', dragon: 'Sp @pitHazard', iguana: 'Sp @pitHazard',
  ...o,
});
const citrus = (o = {}) => ({
  dog: 'S Flesh only, small amounts; peel and seeds irritate. [ASPCA]', cat: 'N @citrusCat',
  Rabbit: 'S Flesh only, occasionally (acidic, sugary). [HRS] ?', 'Guinea Pig': 'S Flesh only, small amounts (acidic). [RSPCA]',
  Hamster: 'N @citrusAcid', Gerbil: 'N @citrusAcid', Mouse: 'N @citrusAcid', Rat: 'N @citrusRat',
  hog: 'N @citrusAcid', glider: 'S Flesh only, small amounts. [VCA]',
  psitt: 'S Flesh only, small amounts (acidic). [LAF]', sbird: 'S Flesh only, small amounts. [VCA] ?',
  turtle: 'N @citrusAcid', dragon: 'N @citrusAcid', iguana: 'N @citrusAcid',
  ...o,
});

food('Fruit', 'Common Fruits', 'Apple', 'apple', FRUIT, seededFruit({
  Chinchilla: 'Sp A tiny piece (dried apple is commonly used); no seeds. [VCA] ?',
}));
food('Fruit', 'Common Fruits', 'Banana', 'banana', FRUIT, treatFruit({
  dog: 'S Sugary; small pieces. [VCA]',
}));
food('Fruit', 'Common Fruits', 'Pear', 'pear', FRUIT, seededFruit());
food('Fruit', 'Common Fruits', 'Orange', 'orange', FRUIT, citrus());
food('Fruit', 'Common Fruits', 'Grapefruit', 'grapefruit', FRUIT, citrus({
  dog: 'N Very acidic; peel/plant contain psoralens. [ASPCA]', Rabbit: 'N @citrusAcid', 'Guinea Pig': 'N @citrusAcid',
  glider: 'N @citrusAcid', sbird: 'N @citrusAcid',
}));
food('Fruit', 'Common Fruits', 'Lemon', 'lemon', FRUIT, {
  all: 'N Very acidic; peel oils and psoralens irritate. [ASPCA]',
});
food('Fruit', 'Common Fruits', 'Lime', 'lime', FRUIT, {
  all: 'N Very acidic; peel oils and psoralens irritate. [ASPCA]',
});
food('Fruit', 'Common Fruits', 'Kiwi', 'kiwi', FRUIT, treatFruit({
  dog: 'S Peeled, small pieces. [VCA]',
}));
food('Fruit', 'Common Fruits', 'Mango', 'mango', FRUIT, stoneFruit({
  Rat: 'Sp Flesh only; contains some d-limonene – tiny amounts. [RSPCA] ?',
}));
food('Fruit', 'Common Fruits', 'Papaya', 'papaya', FRUIT, treatFruit({
  dog: 'S Flesh only, no seeds or skin. [VCA]',
  dragon: 'S Good calcium-to-phosphorus ratio among fruits; still ≤10%. [VCA]',
}));
food('Fruit', 'Common Fruits', 'Pineapple', 'pineapple', FRUIT, treatFruit({
  dog: 'S Fresh flesh only, no core or skin. [VCA]', hog: 'N Acidic; no benefit. [VCA] ?',
}));
food('Fruit', 'Common Fruits', 'Cantaloupe', 'cantaloupe', FRUIT, treatFruit({
  dog: 'S Flesh only, no rind. [VCA]',
}));
food('Fruit', 'Common Fruits', 'Honeydew', 'honeydew', FRUIT, treatFruit({
  dog: 'S Flesh only, no rind. [VCA]',
}));
food('Fruit', 'Common Fruits', 'Watermelon', 'watermelon', FRUIT, treatFruit({
  dog: 'Sp Seedless flesh only, no rind. [VCA]', cat: 'Sp Seedless flesh only. [VCA]',
}));
food('Fruit', 'Common Fruits', 'Avocado', 'avocado', FRUIT, {
  dog: 'N @avocadoDog', cat: 'N @avocadoDog', ferret: 'N @avocadoMammal',
  herb: 'N @avocadoMammal', rodent: 'N @avocadoMammal', hog: 'N @avocadoMammal', glider: 'N @avocadoMammal',
  psitt: 'N @avocadoBird', sbird: 'N @avocadoBird',
  turtle: 'N @avocadoRept', tort: 'N @avocadoRept', dragon: 'N @avocadoRept', gecko: 'N @avocadoRept',
  iguana: 'N @avocadoRept', snake: 'N @avocadoRept', amph: 'N @avocadoRept', fish: 'N @avocadoRept',
});

food('Fruit', 'Berries', 'Strawberry', 'strawberry', FRUIT, treatFruit({ glider: 'Y Fruit is part of a sugar glider diet. [VCA]' }));
food('Fruit', 'Berries', 'Blueberry', 'blueberry', FRUIT, treatFruit({
  dog: 'Y Low-calorie, healthy treat. [VCA]', glider: 'Y Fruit is part of a sugar glider diet. [VCA]',
}));
food('Fruit', 'Berries', 'Raspberry', 'raspberry', FRUIT, treatFruit({ glider: 'Y Fruit is part of a sugar glider diet. [VCA]' }));
food('Fruit', 'Berries', 'Blackberry', 'blackberry', FRUIT, treatFruit({ glider: 'Y Fruit is part of a sugar glider diet. [VCA]' }));
food('Fruit', 'Berries', 'Cranberry', 'cranberry', FRUIT, treatFruit({
  dog: 'S Plain fresh or unsweetened dried only. [VCA]', psitt: 'S Tart; small amounts. [LAF]',
  hog: 'N Tart; no benefit. [VCA] ?', turtle: 'N Tart; no benefit. [VCA] ?', dragon: 'N Acidic. [VCA] ?', iguana: 'N Acidic. [VCA] ?',
}));
food('Fruit', 'Berries', 'Elderberry', 'elderberry', FRUIT, {
  all: 'N @elderberry',
});

food('Fruit', 'Stone Fruits', 'Peach', 'peach', FRUIT, stoneFruit());
food('Fruit', 'Stone Fruits', 'Plum', 'plum', FRUIT, stoneFruit());
food('Fruit', 'Stone Fruits', 'Apricot', 'apricot', FRUIT, stoneFruit());
food('Fruit', 'Stone Fruits', 'Nectarine', 'nectarine', FRUIT, stoneFruit());
food('Fruit', 'Stone Fruits', 'Cherry', 'cherry', FRUIT, stoneFruit({
  dog: 'N Pits, stems and leaves contain cyanide; pits are hard to remove and obstruct. [ASPCA]',
  cat: 'N Pits, stems and leaves contain cyanide. [ASPCA]',
  hog: 'N Pits contain cyanide; hard to remove reliably. [ASPCA] ?',
  dragon: 'N Pits contain cyanide; acidic. [VCA] ?',
}));
food('Fruit', 'Stone Fruits', 'Date', 'date', FRUIT, {
  dog: 'Sp Pitted, very sugary – a piece occasionally. [VCA]', cat: 'N @catNoNeed',
  Rabbit: 'N Very high sugar. [HRS] ?', 'Guinea Pig': 'N Very high sugar. [RSPCA] ?',
  rodent: 'Sp Pitted, tiny piece; very sugary. [RSPCA] ?', hog: 'N Very high sugar. [VCA] ?', glider: 'Sp Pitted, small amounts. [VCA] ?',
  psitt: 'Sp Pitted, small amounts. [LAF]', sbird: 'N Very high sugar. [VCA] ?',
  turtle: 'N Very high sugar. [VCA] ?', dragon: 'N Very high sugar. [VCA] ?', iguana: 'N Very high sugar. [VCA] ?',
});

food('Fruit', 'Grapes & Raisins', 'Grapes', 'grapes', FRUIT, treatFruit({
  dog: 'N @grapeDog', cat: 'N @grapeDog', ferret: 'N @grapeDog', hog: 'N @hogGrape',
  rodent: 'Sp Seedless, small amounts. [RSPCA]', psitt: 'S Small amounts. [LAF]',
  Rabbit: 'S @sugarHerb', 'Guinea Pig': 'S @sugarHerb',
}));
food('Fruit', 'Grapes & Raisins', 'Raisins', 'raisins', FRUIT, {
  dog: 'N @grapeDog', cat: 'N @grapeDog', ferret: 'N @grapeDog', hog: 'N @hogGrape',
  Rabbit: 'N Concentrated sugar. [HRS] ?', 'Guinea Pig': 'N Concentrated sugar. [RSPCA] ?',
  rodent: 'S One raisin occasionally; concentrated sugar. [RSPCA] ?', glider: 'S Small amounts. [VCA] ?',
  psitt: 'S Small amounts; concentrated sugar. [LAF]', Canary: 'S Small amounts. [VCA] ?', Finch: 'S Small amounts. [VCA] ?', Dove: 'N Not part of diet. [VCA] ?',
  turtle: 'N Concentrated sugar. [VCA]', dragon: 'N Concentrated sugar. [VCA]', iguana: 'N Concentrated sugar. [VCA]',
});

food('Fruit', 'Tropical/Exotic', 'Coconut', 'coconut', FRUIT, {
  dog: 'S Small amounts of flesh; fatty. Avoid coconut water (potassium). [ASPCA]', cat: 'N Fatty; GI upset. [ASPCA]',
  Rabbit: 'N Very fatty. [HRS]', 'Guinea Pig': 'N Very fatty. [RSPCA]',
  rodent: 'S Small amounts of fresh flesh; fatty. [RSPCA] ?', hog: 'N Fatty. [VCA] ?', glider: 'S Small amounts. [VCA] ?',
  psitt: 'S Fresh flesh in small amounts; fatty. [LAF]', sbird: 'N Fatty; not part of diet. [VCA] ?',
  turtle: 'N Fatty. [VCA]', dragon: 'N Fatty. [VCA]', iguana: 'N Fatty. [VCA]',
});
food('Fruit', 'Tropical/Exotic', 'Dragon Fruit', 'dragon_fruit', FRUIT, treatFruit({
  dog: 'S Flesh only, no skin. [VCA]',
}));
food('Fruit', 'Tropical/Exotic', 'Passion Fruit', 'passion_fruit', FRUIT, {
  dog: 'N Rind and unripe fruit contain cyanogenic glycosides; seeds. [ASPCA] ?', cat: 'N @catNoNeed',
  Rabbit: 'N Seeds/rind risk; no benefit. [HRS] ?', 'Guinea Pig': 'N Seeds/rind risk; no benefit. [RSPCA] ?',
  rodent: 'N Seeds/rind risk; no benefit. [RSPCA] ?', hog: 'N Acidic; no benefit. [VCA] ?', glider: 'Sr Ripe pulp only, small amounts. [VCA] ?',
  psitt: 'Sr Ripe pulp only, small amounts. [LAF] ?', sbird: 'N Not part of diet. [VCA] ?',
  turtle: 'N No benefit. [VCA] ?', dragon: 'N Acidic. [VCA] ?', iguana: 'N Acidic. [VCA] ?',
});
food('Fruit', 'Tropical/Exotic', 'Lychee', 'lychee', FRUIT, {
  dog: 'Sp Ripe, peeled, seed removed; a piece occasionally (unripe lychee contains hypoglycin). [VCA] ?', cat: 'N @catNoNeed',
  Rabbit: 'N Very sugary; no benefit. [HRS] ?', 'Guinea Pig': 'N Very sugary; no benefit. [RSPCA] ?',
  rodent: 'Sp Ripe flesh only, tiny amounts. [RSPCA] ?', hog: 'N No benefit. [VCA] ?', glider: 'Sp Ripe flesh only. [VCA] ?',
  psitt: 'Sp Ripe flesh only. [LAF] ?', sbird: 'N Not part of diet. [VCA] ?',
  turtle: 'N No benefit. [VCA] ?', dragon: 'N Sugary. [VCA] ?', iguana: 'N Sugary. [VCA] ?',
});
food('Fruit', 'Tropical/Exotic', 'Guava', 'guava', FRUIT, treatFruit({
  'Guinea Pig': 'S Rich in vitamin C; small amounts. [RSPCA]', cat: 'N @catNoNeed',
}));
food('Fruit', 'Tropical/Exotic', 'Starfruit', 'starfruit', FRUIT, {
  all: 'N @starfruit',
});
food('Fruit', 'Tropical/Exotic', 'Pomegranate', 'pomegranate', FRUIT, treatFruit({
  dog: 'N Seeds/tannins commonly cause vomiting; no benefit. [VCA] ?', cat: 'N @catNoNeed',
  hog: 'N No benefit. [VCA] ?', dragon: 'N Seeds; no benefit. [VCA] ?', iguana: 'N Seeds; no benefit. [VCA] ?',
  psitt: 'Y Arils are a well-liked, safe parrot treat. [LAF]',
}));
food('Fruit', 'Tropical/Exotic', 'Fig', 'fig', FRUIT, treatFruit({
  dog: 'S Fresh fruit only, small amounts; fig plant sap irritates. [ASPCA]', cat: 'N Fig plant sap irritates; no benefit. [ASPCA]',
  hog: 'N No benefit. [VCA] ?', psitt: 'S Fresh, small amounts. [LAF]',
  dragon: 'S Good calcium-to-phosphorus ratio among fruits; still ≤10%. [VCA]', iguana: 'S Good calcium-to-phosphorus ratio among fruits. [VCA]',
}));

// ─── Meat ────────────────────────────────────────────────────────────────────

// Cut kinds: lean | shoulder | fatty | belly | bony | heart | gizzard | liver | kidney | offal | brain | skin | fat | bone
// Sources: poultry | waterfowl | pork | red
const meatSpec = (src, cut, item) => {
  const s = { ...ANIMAL_PRODUCT };
  const cooked = src === 'pork' ? '@cookedPork' : '@cookedMeat';
  const leanSmallOmni = (src === 'poultry' && ['lean', 'heart', 'gizzard'].includes(cut));

  // Dog & cat
  const dc = {
    lean: `Yc ${cooked}`,
    shoulder: src === 'pork' || item === 'lamb_shoulder' ? 'Sc Fattier cut – trim fat, cooked, plain. [ASPCA]' : `Yc ${cooked}`,
    fatty: 'Sc Meat off the bone only, fat trimmed, cooked; cooked rib bones splinter. [ASPCA,FDA]',
    belly: 'N @fatTrim',
    bony: 'N Mostly small bones that splinter when cooked. [FDA,ASPCA]',
    heart: 'Yc Lean muscle organ; cooked, plain. [MSD]',
    gizzard: 'Yc Lean muscle organ; cooked, plain. [MSD]',
    liver: 'Sc @liverDog',
    kidney: 'Sc @organ', offal: 'Sc @organ',
    brain: item === 'beef_brain' ? 'N Bovine brain is BSE specified-risk material; not sold as food in many countries. [MSD] ?' : 'Sc @organ',
    skin: 'N @fatTrim', fat: 'N @fatTrim', bone: 'N @bones',
  }[cut];
  s.dog = src === 'waterfowl' && cut === 'lean' ? 'Sc Fatty meat (pancreatitis risk); skinless, cooked, plain. [ASPCA]' : dc;
  s.cat = s.dog;
  if (cut === 'heart') s.cat = 'Yc Taurine-rich muscle organ; cooked, plain. [MSD]';

  // Ferret
  s.ferret = {
    lean: src === 'pork' ? `Yc ${cooked}` : 'Y Obligate carnivore – plain meat is ideal. [VCA,MSD]',
    shoulder: src === 'pork' ? `Yc ${cooked}` : 'Y Obligate carnivore – plain meat is ideal. [VCA,MSD]',
    fatty: 'S Meat off the bone; large weight-bearing bones are too hard. [VCA]',
    belly: src === 'pork' ? `Sc ${cooked}` : 'S Fatty; small amounts. [VCA]',
    bony: 'N Cooked bones splinter; raw bony parts only on a vet-guided raw diet. [FDA,VCA]',
    heart: 'Y Taurine-rich muscle organ. [VCA,MSD]', gizzard: 'Y Lean muscle organ. [VCA]',
    liver: 'S Max ~5–10% of diet (vitamin A). [VCA,MSD]', kidney: 'S Part of a varied carnivore diet. [VCA]',
    offal: 'S Part of a varied carnivore diet. [VCA]',
    brain: item === 'beef_brain' ? 'N Bovine brain is BSE specified-risk material. [MSD] ?' : 'S Part of a varied carnivore diet. [VCA] ?',
    skin: 'S Fatty; small amounts. [VCA]', fat: 'S Ferrets need fat, but trimmings only in small amounts. [VCA] ?',
    bone: 'N @bones',
  }[cut];
  if (src === 'pork' && ['heart', 'liver', 'kidney', 'offal', 'brain', 'skin', 'fat'].includes(cut)) {
    s.ferret = s.ferret.replace(/^([YS])\s/, '$1c ').replace(/^Nc /, 'N ');
  }

  // Small omnivores and parrots: plain cooked lean poultry only.
  s.rodent = leanSmallOmni ? 'Sc @smallOmniMeat' : 'N @smallOmniRich';
  s.hog = leanSmallOmni ? 'Sc @smallOmniMeat' : 'N @smallOmniRich';
  s.glider = leanSmallOmni ? 'Sc @smallOmniMeat' : 'N @smallOmniRich';
  s.psitt = src === 'poultry' && cut === 'lean' ? 'Sc @birdMeat' : 'N @birdRich';
  s.turtle = 'N Too fatty; protein should come from pellets, insects or fish. [VCA]';
  return s;
};
const meats = {
  Chicken: ['poultry', [['Breast', 'lean'], ['Thigh', 'lean'], ['Leg', 'lean'], ['Wing', 'bony'], ['Heart', 'heart'], ['Liver', 'liver'], ['Gizzard', 'gizzard'], ['Stomach', 'offal'], ['Skin', 'skin']]],
  Turkey: ['poultry', [['Breast', 'lean'], ['Thigh', 'lean'], ['Leg', 'lean'], ['Neck', 'bony'], ['Heart', 'heart'], ['Liver', 'liver'], ['Gizzard', 'gizzard'], ['Stomach', 'offal'], ['Skin', 'skin']]],
  Duck: ['waterfowl', [['Breast', 'lean'], ['Leg', 'lean'], ['Heart', 'heart'], ['Liver', 'liver'], ['Skin', 'skin']]],
  Goose: ['waterfowl', [['Breast', 'lean'], ['Leg', 'lean'], ['Heart', 'heart'], ['Liver', 'liver'], ['Skin', 'skin']]],
  Beef: ['red', [['Rib', 'fatty'], ['Loin', 'lean'], ['Tenderloin', 'lean'], ['Chuck', 'shoulder'], ['Sirloin', 'lean'], ['Brisket', 'fatty'], ['Heart', 'heart'], ['Liver', 'liver'], ['Kidney', 'kidney'], ['Lung', 'offal'], ['Spleen', 'offal'], ['Brain', 'brain'], ['Pancreas', 'offal'], ['Stomach Tripe', 'offal'], ['Fat', 'fat'], ['Bone', 'bone']]],
  Pork: ['pork', [['Rib', 'fatty'], ['Loin', 'lean'], ['Tenderloin', 'lean'], ['Shoulder', 'shoulder'], ['Belly', 'belly'], ['Heart', 'heart'], ['Liver', 'liver'], ['Kidney', 'kidney'], ['Lung', 'offal'], ['Spleen', 'offal'], ['Brain', 'brain'], ['Pancreas', 'offal'], ['Stomach Tripe', 'offal'], ['Fat', 'fat'], ['Skin', 'skin'], ['Bone', 'bone']]],
  Lamb: ['red', [['Rib', 'fatty'], ['Loin', 'lean'], ['Shoulder', 'shoulder'], ['Leg', 'lean'], ['Heart', 'heart'], ['Liver', 'liver'], ['Kidney', 'kidney'], ['Lung', 'offal'], ['Spleen', 'offal'], ['Pancreas', 'offal'], ['Stomach', 'offal'], ['Fat', 'fat'], ['Bone', 'bone']]],
  Goat: ['red', [['Rib', 'fatty'], ['Loin', 'lean'], ['Shoulder', 'shoulder'], ['Leg', 'lean'], ['Heart', 'heart'], ['Liver', 'liver'], ['Kidney', 'kidney'], ['Pancreas', 'offal'], ['Stomach', 'offal'], ['Fat', 'fat'], ['Bone', 'bone']]],
  Rabbit: ['red', [['Leg', 'lean'], ['Loin', 'lean'], ['Heart', 'heart'], ['Liver', 'liver'], ['Kidney', 'kidney']]],
  Venison: ['red', [['Rib', 'fatty'], ['Loin', 'lean'], ['Shoulder', 'shoulder'], ['Leg', 'lean'], ['Heart', 'heart'], ['Liver', 'liver'], ['Kidney', 'kidney'], ['Pancreas', 'offal'], ['Stomach', 'offal'], ['Fat', 'fat'], ['Bone', 'bone']]],
  Bison: ['red', [['Rib', 'fatty'], ['Loin', 'lean'], ['Shoulder', 'shoulder'], ['Leg', 'lean'], ['Heart', 'heart'], ['Liver', 'liver'], ['Kidney', 'kidney'], ['Fat', 'fat'], ['Bone', 'bone']]],
};
for (const [category, [src, cuts]] of Object.entries(meats)) {
  for (const [item, cut] of cuts) {
    const icon = `${category.toLowerCase()}_${item.toLowerCase().replace(/ /g, '_')}`;
    food('Meat', category, item, icon, {}, meatSpec(src, cut, icon));
  }
}

const fishBase = { ...ANIMAL_PRODUCT, rodent: 'N @smallOmniRich', hog: 'N @smallOmniRich', glider: 'N @smallOmniRich', psitt: 'N @birdRich', turtle: 'N Not suitable. [VCA]', ferret: 'N Not suitable. [VCA]' };
food('Meat', 'Fish', 'Fillet', 'fish_fillet', fishBase, {
  dog: 'Yc Cooked, plain, deboned; raw fish can carry parasites. [ASPCA]',
  cat: 'Sc Cooked, plain, deboned; not as a daily staple (raw fish destroys thiamine). [ASPCA,MSD]',
  ferret: 'Sc Cooked, deboned, occasionally (raw fish destroys thiamine). [VCA,MSD]',
  rodent: 'Sc @smallOmniMeat', hog: 'Sc @smallOmniMeat', glider: 'N Not part of a sugar glider diet. [VCA] ?',
  psitt: 'Sc Small bits of plain cooked fish. [LAF]',
  turtle: 'S Small pieces of lean white fish occasionally. [VCA]',
});
food('Meat', 'Fish', 'Head', 'fish_head', fishBase, {
  dog: 'N Bones and sharp parts; obstruction/perforation risk. [FDA]', cat: 'N Bones and sharp parts; obstruction/perforation risk. [FDA]',
});
food('Meat', 'Fish', 'Skin', 'fish_skin', fishBase, {
  dog: 'Sc Cooked, plain, scales and bones removed. [VCA]', cat: 'Sc Cooked, plain, scales and bones removed. [VCA]',
  ferret: 'Sc Cooked, plain, occasionally. [VCA] ?',
});
food('Meat', 'Fish', 'Bone', 'fish_bone', fishBase, { all: 'N @bones' });

const shellBase = { ...fishBase };
food('Meat', 'Shellfish', 'Shrimp', 'shrimp', shellBase, {
  dog: 'Sc Cooked, peeled, plain. [ASPCA]', cat: 'Sc Cooked, peeled, plain. [ASPCA]',
  rodent: 'Sc Cooked, plain, tiny piece. [RSPCA] ?', hog: 'Sc Cooked, plain, tiny piece. [VCA] ?',
  turtle: 'S Aquatic turtles eat shrimp; plain, unseasoned. [VCA]',
  Axolotl: 'S Small pieces of plain raw shrimp occasionally. [VCA] ?',
  fish: 'S Finely chopped plain raw shrimp occasionally; remove leftovers. [VCA] ?',
});
food('Meat', 'Shellfish', 'Crab', 'crab', shellBase, {
  dog: 'Sc Cooked, shelled, plain; common allergen. [ASPCA]', cat: 'Sc Cooked, shelled, plain. [ASPCA] ?',
});
food('Meat', 'Shellfish', 'Lobster', 'lobster', shellBase, {
  dog: 'Sc Cooked, shelled, plain (no butter). [ASPCA]', cat: 'Sc Cooked, shelled, plain. [ASPCA] ?',
});

// ─── Dairy & eggs ────────────────────────────────────────────────────────────

food('Dairy', 'Milk', 'Cow Milk', 'cow_milk', DAIRY, {
  dog: 'S Small amounts; many dogs are lactose intolerant. [ASPCA]', cat: 'N @lactose',
  rodent: 'N @lactose', hog: 'N @hogDairy', glider: 'N @lactose', psitt: 'N @birdDairy',
});
food('Dairy', 'Milk', 'Goat Milk', 'goat_milk', DAIRY, {
  dog: 'S Small amounts; still contains lactose. [ASPCA]', cat: 'N @lactose',
  rodent: 'N @lactose', hog: 'N @hogDairy', glider: 'N @lactose', psitt: 'N @birdDairy',
});
food('Dairy', 'Milk', 'Sheep Milk', 'sheep_milk', DAIRY, {
  dog: 'S Small amounts; rich and contains lactose. [ASPCA]', cat: 'N @lactose',
  rodent: 'N @lactose', hog: 'N @hogDairy', glider: 'N @lactose', psitt: 'N @birdDairy',
});
food('Dairy', 'Cheese', 'Cheddar Cheese', 'cheddar_cheese', DAIRY, {
  dog: 'S Small cubes; fatty and salty. [ASPCA]', cat: 'S Tiny amounts; low lactose but fatty. [ASPCA]',
  rodent: 'S A tiny piece occasionally; fatty and salty. [RSPCA] ?', hog: 'N @hogDairy', glider: 'N @lactose',
  psitt: 'S A small piece of hard cheese occasionally. [LAF] ?',
});
food('Dairy', 'Cheese', 'Mozzarella Cheese', 'mozzarella_cheese', DAIRY, {
  dog: 'S Small amounts; lower fat cheese. [ASPCA]', cat: 'S Tiny amounts. [ASPCA]',
  rodent: 'S A tiny piece occasionally. [RSPCA] ?', hog: 'N @hogDairy', glider: 'N @lactose',
  psitt: 'S A small piece occasionally. [LAF] ?',
});
food('Dairy', 'Cheese', 'Cottage Cheese', 'cottage_cheese', DAIRY, {
  dog: 'S Plain, low-fat, small amounts. [ASPCA]', cat: 'S Tiny amounts. [ASPCA] ?',
  rodent: 'S A little plain cottage cheese occasionally. [RSPCA] ?', hog: 'S A little plain cottage cheese occasionally. [VCA] ?', glider: 'N @lactose',
  psitt: 'S Small amounts occasionally. [LAF] ?',
});
food('Dairy', 'Fermented', 'Yogurt (plain)', 'yogurt_plain', DAIRY, {
  dog: 'S Plain, unsweetened, no xylitol. [ASPCA]', cat: 'S Plain, unsweetened, small amounts. [ASPCA]',
  rodent: 'S Plain, unsweetened, small amounts. [RSPCA] ?', hog: 'S @hogDairy', glider: 'S Plain yogurt is used in some glider diets; small amounts. [VCA] ?',
  psitt: 'S @birdDairy',
});
food('Dairy', 'Fermented', 'Kefir', 'kefir', DAIRY, {
  dog: 'S Plain, unsweetened, small amounts. [ASPCA]', cat: 'S Plain, tiny amounts. [ASPCA] ?',
  rodent: 'N @lactose', hog: 'N @hogDairy', glider: 'N @lactose', psitt: 'N @birdDairy',
});
food('Dairy', 'Cream', 'Whipping Cream', 'whipping_cream', DAIRY, {
  dog: 'N @dairyFat', cat: 'N @dairyFat', rodent: 'N @dairyFat', hog: 'N @dairyFat', glider: 'N @dairyFat', psitt: 'N @dairyFat',
});
food('Dairy', 'Butter', 'Butter', 'butter', DAIRY, {
  dog: 'N @dairyFat', cat: 'N @dairyFat', rodent: 'N @dairyFat', hog: 'N @dairyFat', glider: 'N @dairyFat', psitt: 'N @dairyFat',
});
food('Dairy', 'Other', 'Ice Cream', 'ice_cream', DAIRY, {
  dog: 'N Sugar, fat, lactose – and may contain chocolate or xylitol. [ASPCA]', cat: 'N @dairyFat',
  rodent: 'N @dairyFat', hog: 'N @dairyFat', glider: 'N @dairyFat', psitt: 'N @dairyFat',
});
food('Dairy', 'Other', 'Sour Cream', 'sour_cream', DAIRY, {
  dog: 'N @dairyFat', cat: 'N @dairyFat', rodent: 'N @dairyFat', hog: 'N @dairyFat', glider: 'N @dairyFat', psitt: 'N @dairyFat',
});

// ─── Grains ──────────────────────────────────────────────────────────────────

food('Grain', 'Cereal', 'Rice', 'rice', GRAIN, {
  dog: 'Yc Plain cooked; good for upset stomachs. [VCA]', cat: 'Sc Plain cooked, small amounts. [VCA]',
  rodent: 'Sc Plain cooked, small amounts. [RSPCA]', hog: 'N No benefit. [VCA] ?', glider: 'N No benefit. [VCA] ?',
  psitt: 'Yc Plain cooked (brown rice preferred). [LAF]', sbird: 'Sc Plain cooked, small amounts. [VCA]',
});
food('Grain', 'Cereal', 'Oats', 'oats', GRAIN, {
  dog: 'Sc Plain cooked oatmeal, no sugar. [VCA]', cat: 'Sc Plain cooked, tiny amounts. [VCA] ?',
  Chinchilla: 'S A few rolled oats as a treat. [VCA] ?',
  rodent: 'Y @grainRodent', hog: 'N No benefit. [VCA] ?', glider: 'N No benefit. [VCA] ?',
  psitt: 'Y Raw or cooked. [LAF]', sbird: 'Y Part of seed mixes. [VCA]',
});
food('Grain', 'Cereal', 'Barley', 'barley', GRAIN, {
  dog: 'Sc Plain cooked. [VCA]', cat: 'N @catNoNeed',
  rodent: 'Y @grainRodent', hog: 'N No benefit. [VCA] ?', glider: 'N No benefit. [VCA] ?',
  psitt: 'Y Cooked or sprouted. [LAF]', sbird: 'Y Part of seed mixes. [VCA]',
});
food('Grain', 'Cereal', 'Wheat', 'wheat', GRAIN, {
  dog: 'Sc Plain cooked grain, small amounts. [VCA]', cat: 'N @catNoNeed',
  rodent: 'Y @grainRodent', hog: 'N No benefit. [VCA] ?', glider: 'N No benefit. [VCA] ?',
  psitt: 'Y Cooked or sprouted. [LAF]', sbird: 'Y Part of seed mixes. [VCA]',
});
food('Grain', 'Bread', 'Whole Grain Bread', 'whole_grain_bread', GRAIN, {
  dog: 'S Plain, small amounts; no raisins, garlic or xylitol. [ASPCA]', cat: 'S Plain, tiny amounts. [ASPCA] ?',
  rodent: 'S @bread', hog: 'N No benefit. [VCA] ?', glider: 'N No benefit. [VCA] ?',
  psitt: 'S @bread', sbird: 'S @bread', fish: 'N @breadFish',
});
food('Grain', 'Bread', 'White Bread', 'white_bread', GRAIN, {
  dog: 'S Plain, small amounts; no raisins, garlic or xylitol. [ASPCA]', cat: 'S Plain, tiny amounts. [ASPCA] ?',
  rodent: 'S @bread', hog: 'N No benefit. [VCA] ?', glider: 'N No benefit. [VCA] ?',
  psitt: 'N Empty calories; use whole grains instead. [LAF]', sbird: 'N Empty calories. [VCA]', fish: 'N @breadFish',
});
food('Grain', 'Pasta', 'Pasta (cooked)', 'pasta_cooked', GRAIN, {
  dog: 'S Plain, no sauce. [VCA]', cat: 'S Plain, tiny amounts. [VCA] ?',
  rodent: 'S Plain, small amounts. [RSPCA]', hog: 'N No benefit. [VCA] ?', glider: 'N No benefit. [VCA] ?',
  psitt: 'S Plain whole-wheat pasta, small amounts. [LAF]', sbird: 'N No benefit. [VCA] ?',
});
food('Grain', 'Other', 'Quinoa', 'quinoa', GRAIN, {
  dog: 'Sc Plain cooked (rinsed). [VCA]', cat: 'N @catNoNeed',
  rodent: 'Sc Plain cooked. [RSPCA] ?', hog: 'N No benefit. [VCA] ?', glider: 'N No benefit. [VCA] ?',
  psitt: 'Yc Rinsed and cooked. [LAF]', sbird: 'Sc Rinsed and cooked. [VCA] ?',
});
food('Grain', 'Other', 'Millet', 'millet', GRAIN, {
  dog: 'Sc Plain cooked. [VCA]', cat: 'N @catNoNeed',
  rodent: 'Y @grainRodent', hog: 'N No benefit. [VCA] ?', glider: 'N No benefit. [VCA] ?',
  psitt: 'S Spray millet is a treat – low in nutrients if overfed. [LAF]', sbird: 'Y Millet is a staple seed. [VCA]',
});

// ─── Nuts & seeds ────────────────────────────────────────────────────────────

const nutSmall = 'S Unsalted, a small piece occasionally (fatty). [RSPCA]';
food('Nut', 'Tree Nut', 'Almonds', 'almonds', NUT, {
  dog: 'N @nutDog', cat: 'N @nutCat',
  rodent: nutSmall, glider: 'N Fatty, poor calcium balance. [VCA] ?',
  psitt: 'S Unsalted; fatty – treat. [LAF]', sbird: 'N Too large and fatty. [VCA]',
});
food('Nut', 'Tree Nut', 'Cashews', 'cashews', NUT, {
  dog: 'S Unsalted, roasted, a few occasionally (fatty). [ASPCA]', cat: 'N @nutCat',
  rodent: nutSmall, glider: 'N Fatty. [VCA] ?',
  psitt: 'S Unsalted; fatty – treat. [LAF]', sbird: 'N Too large and fatty. [VCA]',
});
food('Nut', 'Tree Nut', 'Pecans', 'pecans', NUT, {
  dog: 'N @nutDog', cat: 'N @nutCat',
  rodent: nutSmall, glider: 'N Fatty. [VCA] ?',
  psitt: 'S Unsalted; fatty – treat. [LAF]', sbird: 'N Too large and fatty. [VCA]',
});
food('Nut', 'Tree Nut', 'Hazelnuts', 'hazelnuts', NUT, {
  dog: 'N @nutDog', cat: 'N @nutCat',
  rodent: nutSmall, glider: 'N Fatty. [VCA] ?',
  psitt: 'S Unsalted; fatty – treat. [LAF]', sbird: 'N Too large and fatty. [VCA]',
});
food('Nut', 'Peanut', 'Peanuts (unsalted)', 'peanuts_unsalted', NUT, {
  dog: 'S Unsalted, shelled, a few occasionally. [ASPCA]', cat: 'N @nutCat',
  rodent: nutSmall, glider: 'N Fatty. [VCA] ?',
  psitt: 'S Human-grade, shelled – in-shell peanuts can carry aflatoxin mold. [LAF]', sbird: 'N Too large and fatty; aflatoxin risk. [VCA]',
});
food('Nut', 'Peanut', 'Peanut Butter (unsweetened)', 'peanut_butter_unsweetened', NUT, {
  dog: 'S Check the label: must be xylitol-free; small amounts. [FDA,ASPCA]', cat: 'N @nutCat',
  Rat: 'S A tiny smear; sticky (choking). [RSPCA] ?', Hamster: 'N Sticky – can block cheek pouches and throat. [RSPCA]',
  Gerbil: 'N Sticky – choking risk. [RSPCA] ?', Mouse: 'N Sticky – choking risk. [RSPCA] ?', glider: 'N Fatty, sticky. [VCA] ?',
  Parrot: 'S Xylitol-free, small amounts. [LAF]', Cockatiel: 'N Sticky and fatty for small birds. [LAF] ?',
  Parakeet: 'N Sticky and fatty for small birds. [LAF] ?', Lovebird: 'N Sticky and fatty for small birds. [LAF] ?',
  sbird: 'N Sticky and fatty. [VCA]',
});

// ─── Added foods (need icons before they ship) ───────────────────────────────

const added = (type, category, item, icon, base, spec) => {
  food(type, category, item, icon, base, spec);
  foods[foods.length - 1].added = true;
};

added('Nut', 'Tree Nut', 'Macadamia Nuts', 'macadamia_nuts', NUT, {
  dog: 'N @macadamia', cat: 'N Same concern as in dogs; very fatty. [ASPCA] ?',
  rodent: 'N Very fatty; no benefit. [RSPCA] ?', glider: 'N Fatty. [VCA] ?',
  Parrot: 'S Not toxic to parrots (macaws eat them); very fatty – treat. [LAF]',
  Cockatiel: 'N Too large and fatty for small parrots. [LAF] ?', Parakeet: 'N Too large and fatty for small parrots. [LAF] ?',
  Lovebird: 'N Too large and fatty for small parrots. [LAF] ?', sbird: 'N Too large and fatty. [VCA]',
});
added('Nut', 'Tree Nut', 'Walnuts', 'walnuts', NUT, {
  dog: 'N Moldy walnuts carry tremorgenic mycotoxins, black walnut is toxic, choking risk. [ASPCA,MSD]', cat: 'N @nutCat',
  rodent: nutSmall, glider: 'N Fatty. [VCA] ?',
  psitt: 'S Unsalted; fatty – treat. [LAF]', sbird: 'N Too large and fatty. [VCA]',
});
added('Nut', 'Seeds', 'Sunflower Seeds (unsalted)', 'sunflower_seeds', NUT, {
  dog: 'S Shelled, unsalted, small amounts. [ASPCA]', cat: 'N @nutCat',
  rodent: 'S @seedTreat', glider: 'S Small amounts. [VCA] ?',
  psitt: 'S @seedTreat', sbird: 'S @seedTreat',
});
added('Nut', 'Seeds', 'Pumpkin Seeds (unsalted)', 'pumpkin_seeds', NUT, {
  dog: 'S Plain, shelled, unsalted, small amounts. [VCA]', cat: 'N @nutCat',
  rodent: 'S @seedTreat', glider: 'S Small amounts. [VCA] ?',
  psitt: 'S Raw or roasted, unsalted. [LAF]', sbird: 'S Hulled, small amounts. [VCA] ?',
});
added('Dairy', 'Eggs', 'Egg (cooked)', 'egg_cooked', ANIMAL_PRODUCT, {
  dog: 'Y Plain cooked egg is good protein; raw egg risks Salmonella. [ASPCA]', cat: 'S Plain cooked, small amounts. [ASPCA]',
  ferret: 'S Cooked egg occasionally (raw egg white binds biotin). [VCA]',
  rodent: 'S Plain hard-boiled, small amounts – good protein. [RSPCA]', hog: 'S Plain cooked egg is a common hedgehog treat. [VCA]',
  glider: 'S Cooked egg is a common protein in glider diets. [VCA]',
  psitt: 'S Hard-boiled egg is a classic bird protein supplement. [LAF]',
  Canary: 'S "Egg food" (hard-boiled egg) is a standard canary/finch supplement. [VCA]',
  Finch: 'S "Egg food" (hard-boiled egg) is a standard canary/finch supplement. [VCA]',
  Dove: 'S Occasional hard-boiled egg. [VCA] ?',
  turtle: 'N Not needed; use pellets, insects or fish. [VCA] ?', dragon: 'S A little plain cooked egg occasionally. [VCA] ?',
});
added('Other', 'Sweets', 'Chocolate', 'chocolate', {}, TOXIC('@chocolate'));
added('Other', 'Sweets', 'Xylitol (sugar-free gum)', 'xylitol_gum', {}, TOXIC('@xylitol'));
added('Other', 'Sweets', 'Honey', 'honey', PLANT, {
  dog: 'S Small amounts; not for puppies or diabetic/overweight dogs. [VCA]', cat: 'N @catNoNeed',
  ferret: 'N @ferretCarb', herb: 'N Pure sugar. [HRS]', rodent: 'N Pure sugar; sticky. [RSPCA]', hog: 'N Pure sugar. [VCA]',
  glider: 'S Gliders eat nectar; small amounts as in established glider diets. [VCA] ?',
  psitt: 'N Pure sugar; not needed. [LAF] ?', sbird: 'N Pure sugar. [VCA]',
  turtle: 'N Pure sugar. [VCA]', tort: 'N Pure sugar. [TT]', dragon: 'N Pure sugar. [VCA]', iguana: 'N Pure sugar. [VCA]',
});
added('Other', 'Drinks', 'Coffee', 'coffee', {}, TOXIC('@caffeine'));
added('Other', 'Drinks', 'Alcohol', 'alcohol', {}, TOXIC('@alcohol'));

// ─── Feeder foods (live, frozen or dried) ────────────────────────────────────

const FEEDER = {
  herb: 'N @herbMeat', tort: 'N @reptMeat', iguana: 'N @reptMeat',
  psitt: 'N Not part of a parrot diet; protein comes from egg, legumes and pellets. [LAF] ?',
  Dove: 'N Seed-eater; not part of a dove diet. [VCA]',
  snake: 'N Most pet snakes (corn snakes, pythons, kingsnakes) eat only rodents. [VCA]',
  fish: 'N Not a suitable food for this fish. [VCA]',
  Axolotl: 'N @axolotlNo',
  rodent: 'N Not needed; use plain cooked chicken or egg for protein. [RSPCA] ?',
  glider: 'N Not part of a sugar glider diet. [VCA] ?',
  hog: 'N Not part of a hedgehog diet. [VCA] ?',
};
const insect = (o) => ({
  ...FEEDER,
  dog: 'S Not toxic; insect protein is used in some dog foods. [VCA] ?',
  cat: 'S Cats naturally hunt insects; not toxic. [VCA] ?',
  ferret: 'S Insects are an occasional snack for an obligate carnivore. [VCA] ?',
  ...o,
});
const gutLoad = 'Gut-load and dust with calcium';

added('Feeder', 'Insects', 'Crickets', 'crickets', {}, insect({
  rodent: 'S Natural insect protein; a few at a time. [RSPCA]', hog: `Y Insects are a core part of a hedgehog diet. [VCA]`,
  glider: 'Y Insects are part of a sugar glider diet. [VCA]',
  Canary: 'S Small (pinhead) crickets, mainly in breeding season. [VCA] ?', Finch: 'S Small (pinhead) crickets, mainly in breeding season. [VCA] ?',
  turtle: 'Y Turtles readily eat insects. [VCA]', dragon: `Y Staple feeder insect. ${gutLoad}. [VCA]`, gecko: `Y Staple feeder insect. ${gutLoad}. [VCA]`,
  Frog: `Y Staple live food, sized to the frog. ${gutLoad}. [VCA]`, Toad: `Y Staple live food. ${gutLoad}. [VCA]`,
  Salamander: `Y Staple live food for land salamanders. ${gutLoad}. [VCA]`, Newt: 'S Small crickets for land-living (eft) stages. [VCA] ?',
  snake: 'N Most pet snakes eat only rodents (a few insect-eating species exist). [VCA] ?',
}));
added('Feeder', 'Insects', 'Mealworms', 'mealworms', {}, insect({
  rodent: 'S Popular treat but fatty; a few at a time. [RSPCA]', hog: 'S Fatty – a treat, not a staple (obesity). [VCA]',
  glider: 'S Fatty; a few as a treat. [VCA]',
  Canary: 'S A few small mealworms in breeding season. [VCA] ?', Finch: 'S A few small mealworms in breeding season. [VCA] ?',
  turtle: 'S Occasional insect treat. [VCA]', dragon: 'S Hard shell, high fat; occasional for adults. [VCA]',
  gecko: `Y A common staple for leopard geckos. ${gutLoad}. [VCA]`,
  Frog: 'S Hard shell; occasional, sized to the frog. [VCA]', Toad: 'S Hard shell; occasional. [VCA]',
  Salamander: 'S Occasional; soft (freshly molted) ones are best. [VCA] ?', Newt: 'N Too hard to digest for newts. [VCA] ?',
}));
added('Feeder', 'Insects', 'Dubia Roaches', 'dubia_roaches', {}, insect({
  rodent: 'S Insect protein; a small one occasionally. [RSPCA] ?', hog: 'S Good insect protein. [VCA] ?',
  glider: 'S Insect protein. [VCA] ?',
  Canary: 'N Too large for small birds. [VCA]', Finch: 'N Too large for small birds. [VCA]',
  turtle: 'S Occasional insect. [VCA] ?', dragon: `Y Excellent staple feeder. ${gutLoad}. [VCA]`, gecko: `Y Good staple feeder. ${gutLoad}. [VCA]`,
  Frog: `Y Good staple, sized to the frog. ${gutLoad}. [VCA]`, Toad: `Y Good staple feeder. ${gutLoad}. [VCA]`,
  Salamander: 'S Small nymphs only. [VCA] ?', Newt: 'N Too large for most newts. [VCA] ?',
}));
added('Feeder', 'Insects', 'Black Soldier Fly Larvae', 'bsf_larvae', {}, insect({
  rodent: 'S Insect protein; a few at a time. [RSPCA] ?', hog: 'S Calcium-rich insect treat. [VCA] ?',
  glider: 'S Insect protein. [VCA] ?',
  Canary: 'S Soft larvae occasionally. [VCA] ?', Finch: 'S Soft larvae occasionally. [VCA] ?',
  turtle: 'S Calcium-rich insect. [VCA]', dragon: 'Y Naturally high in calcium; good staple. [VCA]', gecko: 'Y Naturally high in calcium; good staple. [VCA]',
  Frog: 'S Small frogs may ignore them; occasional. [VCA] ?', Toad: 'S Occasional. [VCA] ?',
  Salamander: 'S Occasional. [VCA] ?', Newt: 'N Too large for most newts. [VCA] ?',
}));
added('Feeder', 'Insects', 'Waxworms', 'waxworms', {}, insect({
  rodent: 'S Very fatty; rare treat. [RSPCA] ?', hog: 'S Very fatty; rare treat. [VCA]',
  glider: 'S Very fatty; rare treat. [VCA] ?',
  Canary: 'N Too fatty for small birds. [VCA] ?', Finch: 'N Too fatty for small birds. [VCA] ?',
  turtle: 'S Very fatty; rare treat. [VCA] ?', dragon: 'S Very fatty; rare treat. [VCA]', gecko: 'S Very fatty; rare treat (can cause picky eating). [VCA]',
  Frog: 'S Very fatty; rare treat. [VCA]', Toad: 'S Very fatty; rare treat. [VCA]', Salamander: 'S Very fatty; rare treat. [VCA] ?',
  Newt: 'N Not suitable for newts. [VCA] ?',
}));
added('Feeder', 'Worms', 'Earthworms', 'earthworms', {}, {
  ...FEEDER,
  dog: 'N Not food; worms can carry parasites. [MSD] ?', cat: 'N Not food; worms can carry parasites. [MSD] ?', ferret: 'N Parasite risk; not needed. [MSD] ?',
  sbird: 'N Not part of diet. [VCA]',
  hog: 'S Bred (bait-shop) worms only – wild worms carry parasites. [VCA] ?',
  turtle: 'Y Turtles relish earthworms (bred, not from treated soil). [VCA]',
  dragon: 'S Bred worms occasionally. [VCA] ?', gecko: 'S Bred worms occasionally, if accepted. [VCA] ?',
  Frog: 'Y Nutritious staple (bred worms). [VCA]', Toad: 'Y Nutritious staple (bred worms). [VCA]',
  Axolotl: 'Y The best staple food for adult axolotls. [VCA]', Newt: 'Y Nutritious staple, chopped to size. [VCA]', Salamander: 'Y Nutritious staple. [VCA]',
  fish: 'S Bred worms, chopped small; an occasional protein treat. [VCA] ?',
});
added('Feeder', 'Aquatic Live Food', 'Bloodworms', 'bloodworms', {}, {
  ...FEEDER,
  dog: 'N Not food for dogs. [VCA]', cat: 'N Not food for cats. [VCA]', ferret: 'N Not food for ferrets. [VCA]', sbird: 'N Not part of diet. [VCA]',
  turtle: 'S Good for young aquatic turtles. [VCA]', dragon: 'N Aquatic food. [VCA]', gecko: 'N Aquatic food. [VCA]',
  Frog: 'S For fully aquatic frogs only. [VCA] ?', Toad: 'N Aquatic food. [VCA]',
  Axolotl: 'S Good for juveniles; too small to be an adult staple. [VCA]', Newt: 'Y Staple for aquatic newts. [VCA]',
  Salamander: 'S For aquatic larvae. [VCA] ?',
  fish: 'S Frozen or freeze-dried; a protein treat, not the only food. [VCA]',
});
added('Feeder', 'Aquatic Live Food', 'Brine Shrimp', 'brine_shrimp', {}, {
  ...FEEDER,
  dog: 'N Not food for dogs. [VCA]', cat: 'N Not food for cats. [VCA]', ferret: 'N Not food for ferrets. [VCA]', sbird: 'N Not part of diet. [VCA]',
  turtle: 'N Too small to be useful. [VCA] ?', dragon: 'N Aquatic food. [VCA]', gecko: 'N Aquatic food. [VCA]',
  Frog: 'S For small fully aquatic frogs. [VCA] ?', Toad: 'N Aquatic food. [VCA]',
  Axolotl: 'S Live for hatchlings; frozen as a treat. [VCA]', Newt: 'S For aquatic newts and larvae. [VCA]', Salamander: 'S For aquatic larvae. [VCA] ?',
  fish: 'S Frozen or live; a treat (adult brine shrimp are low in nutrition). [VCA]',
});
added('Feeder', 'Whole Prey', 'Feeder Rodents (frozen-thawed)', 'feeder_rodents', {}, {
  ...FEEDER,
  dog: 'N Raw whole prey: Salmonella risk. [FDA]', cat: 'N Raw whole prey: Salmonella risk. [FDA] ?',
  ferret: 'S Whole prey is used in vet-guided raw diets. [VCA] ?', sbird: 'N Not part of diet. [VCA]',
  snake: 'Y Whole mice or rats are complete nutrition; always frozen-thawed and sized to the snake. [VCA]',
  turtle: 'N Too fatty. [VCA] ?', dragon: 'N Pinkies are too fatty; not recommended. [VCA]', gecko: 'N Not part of a leopard gecko diet. [VCA]',
  Frog: 'N Only large species (e.g., Pacman frogs) take them, rarely; too fatty. [VCA] ?', Toad: 'N Too fatty. [VCA] ?',
  amph: 'N Not suitable. [VCA]', Axolotl: 'N Not suitable. [VCA]',
  rodent: 'N Not food for rodents. [RSPCA]', hog: 'N Not part of a hedgehog diet. [VCA]', glider: 'N Not part of a sugar glider diet. [VCA]',
});

export { foods };
