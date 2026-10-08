import React from "react";
import {
  Image,
  StyleSheet,
  View,
  ImageSourcePropType,
  Text,
} from "react-native";

import { colors, spacing } from "../styles";
import { imageCache } from "../utils/imageCache";

type FoodImages = {
  [key: string]: ImageSourcePropType;
};

const foodImages: FoodImages = {
  // Vegetables - Leafy Greens
  spinach: require("../../assets/products/spinach.png"),
  kale: require("../../assets/products/kale.png"),
  lettuce_romaine: require("../../assets/products/lettuce_romaine.png"),
  lettuce_iceberg: require("../../assets/products/lettuce_iceberg.png"),
  swiss_chard: require("../../assets/products/swiss_chard.png"),
  collard_greens: require("../../assets/products/collard_greens.png"),
  mustard_greens: require("../../assets/products/mustard_greens.png"),
  turnip_greens: require("../../assets/products/turnip_greens.png"),
  beet_greens: require("../../assets/products/beet_greens.png"),

  // Vegetables - Root Vegetables
  carrot: require("../../assets/products/carrot.png"),
  beetroot: require("../../assets/products/beetroot.png"),
  turnip: require("../../assets/products/turnip.png"),
  radish: require("../../assets/products/radish.png"),
  parsnip: require("../../assets/products/parsnip.png"),
  sweet_potato: require("../../assets/products/sweet_potato.png"),
  potato: require("../../assets/products/potato.png"),

  // Vegetables - Cruciferous
  broccoli: require("../../assets/products/broccoli.png"),
  cauliflower: require("../../assets/products/cauliflower.png"),
  cabbage: require("../../assets/products/cabbage.png"),
  brussels_sprouts: require("../../assets/products/brussels_sprouts.png"),
  bok_choy: require("../../assets/products/bok_choy.png"),

  // Vegetables - Alliums
  onion: require("../../assets/products/onion.png"),
  garlic: require("../../assets/products/garlic.png"),
  leek: require("../../assets/products/leek.png"),
  shallot: require("../../assets/products/shallot.png"),
  chives: require("../../assets/products/chives.png"),
  scallions: require("../../assets/products/scallions.png"),

  // Vegetables - Squashes & Gourds
  pumpkin: require("../../assets/products/pumpkin.png"),
  zucchini: require("../../assets/products/zucchini.png"),
  cucumber: require("../../assets/products/cucumber.png"),
  butternut_squash: require("../../assets/products/butternut_squash.png"),
  acorn_squash: require("../../assets/products/acorn_squash.png"),

  // Vegetables - Legumes
  green_beans: require("../../assets/products/green_beans.png"),
  peas: require("../../assets/products/peas.png"),
  lentils: require("../../assets/products/lentils.png"),
  chickpeas: require("../../assets/products/chickpeas.png"),
  soybeans_edamame: require("../../assets/products/soybeans_edamame.png"),

  // Vegetables - Stalk Vegetables
  celery: require("../../assets/products/celery.png"),
  asparagus: require("../../assets/products/asparagus.png"),
  rhubarb_stalk: require("../../assets/products/rhubarb_stalk.png"),
  rhubarb_leaves: require("../../assets/products/rhubarb_leaves.png"),

  // Vegetables - Other
  corn: require("../../assets/products/corn.png"),
  bell_pepper_red: require("../../assets/products/bell_pepper_red.png"),
  bell_pepper_green: require("../../assets/products/bell_pepper_green.png"),
  bell_pepper_yellow: require("../../assets/products/bell_pepper_yellow.png"),
  chili_pepper: require("../../assets/products/chili_pepper.png"),
  tomato: require("../../assets/products/tomato.png"),
  eggplant: require("../../assets/products/eggplant.png"),
  okra: require("../../assets/products/okra.png"),
  mushrooms_edible: require("../../assets/products/mushrooms_edible.png"),
  mushrooms_wild: require("../../assets/products/mushrooms_wild.png"),

  // Fruits - Common Fruits
  apple: require("../../assets/products/apple.png"),
  banana: require("../../assets/products/banana.png"),
  pear: require("../../assets/products/pear.png"),
  orange: require("../../assets/products/orange.png"),
  grapefruit: require("../../assets/products/grapefruit.png"),
  lemon: require("../../assets/products/lemon.png"),
  lime: require("../../assets/products/lime.png"),
  kiwi: require("../../assets/products/kiwi.png"),
  mango: require("../../assets/products/mango.png"),
  papaya: require("../../assets/products/papaya.png"),
  pineapple: require("../../assets/products/pineapple.png"),
  cantaloupe: require("../../assets/products/cantaloupe.png"),
  honeydew: require("../../assets/products/honeydew.png"),
  watermelon: require("../../assets/products/watermelon.png"),
  avocado: require("../../assets/products/avocado.png"),

  // Fruits - Berries
  strawberry: require("../../assets/products/strawberry.png"),
  blueberry: require("../../assets/products/blueberry.png"),
  raspberry: require("../../assets/products/raspberry.png"),
  blackberry: require("../../assets/products/blackberry.png"),
  cranberry: require("../../assets/products/cranberry.png"),
  elderberry: require("../../assets/products/elderberry.png"),
  elderberry_cooked: require("../../assets/products/elderberry_cooked.png"),

  // Fruits - Stone Fruits
  peach: require("../../assets/products/peach.png"),
  plum: require("../../assets/products/plum.png"),
  apricot: require("../../assets/products/apricot.png"),
  cherry: require("../../assets/products/cherry.png"),
  nectarine: require("../../assets/products/nectarine.png"),
  date: require("../../assets/products/date.png"),

  // Fruits - Grapes & Raisins
  grapes: require("../../assets/products/grapes.png"),
  raisins: require("../../assets/products/raisins.png"),

  // Fruits - Tropical/Exotic
  coconut: require("../../assets/products/coconut.png"),
  dragon_fruit: require("../../assets/products/dragon_fruit.png"),
  passion_fruit: require("../../assets/products/passion_fruit.png"),
  lychee: require("../../assets/products/lychee.png"),
  guava: require("../../assets/products/guava.png"),
  starfruit: require("../../assets/products/starfruit.png"),
  pomegranate: require("../../assets/products/pomegranate.png"),
  fig: require("../../assets/products/fig.png"),

  // Meat - Chicken
  chicken_breast: require("../../assets/products/chicken_breast.png"),
  chicken_thigh: require("../../assets/products/chicken_thigh.png"),
  chicken_leg: require("../../assets/products/chicken_leg.png"),
  chicken_wing: require("../../assets/products/chicken_wing.png"),
  chicken_heart: require("../../assets/products/chicken_heart.png"),
  chicken_liver: require("../../assets/products/chicken_liver.png"),
  chicken_gizzard: require("../../assets/products/chicken_gizzard.png"),
  chicken_stomach: require("../../assets/products/chicken_stomach.png"),
  chicken_skin: require("../../assets/products/chicken_skin.png"),

  // Meat - Turkey
  turkey_breast: require("../../assets/products/turkey_breast.png"),
  turkey_thigh: require("../../assets/products/turkey_thigh.png"),
  turkey_leg: require("../../assets/products/turkey_leg.png"),
  turkey_neck: require("../../assets/products/turkey_neck.png"),
  turkey_heart: require("../../assets/products/turkey_heart.png"),
  turkey_liver: require("../../assets/products/turkey_liver.png"),
  turkey_gizzard: require("../../assets/products/turkey_gizzard.png"),
  turkey_stomach: require("../../assets/products/turkey_stomach.png"),
  turkey_skin: require("../../assets/products/turkey_skin.png"),

  // Meat - Duck
  duck_breast: require("../../assets/products/duck_breast.png"),
  duck_leg: require("../../assets/products/duck_leg.png"),
  duck_heart: require("../../assets/products/duck_heart.png"),
  duck_liver: require("../../assets/products/duck_liver.png"),
  duck_skin: require("../../assets/products/duck_skin.png"),

  // Meat - Goose
  goose_breast: require("../../assets/products/goose_breast.png"),
  goose_leg: require("../../assets/products/goose_leg.png"),
  goose_heart: require("../../assets/products/goose_heart.png"),
  goose_liver: require("../../assets/products/goose_liver.png"),
  goose_skin: require("../../assets/products/goose_skin.png"),

  // Meat - Beef
  beef_rib: require("../../assets/products/beef_rib.png"),
  beef_loin: require("../../assets/products/beef_loin.png"),
  beef_tenderloin: require("../../assets/products/beef_tenderloin.png"),
  beef_chuck: require("../../assets/products/beef_chuck.png"),
  beef_sirloin: require("../../assets/products/beef_sirloin.png"),
  beef_brisket: require("../../assets/products/beef_brisket.png"),
  beef_heart: require("../../assets/products/beef_heart.png"),
  beef_liver: require("../../assets/products/beef_liver.png"),
  beef_kidney: require("../../assets/products/beef_kidney.png"),
  beef_lung: require("../../assets/products/beef_lung.png"),
  beef_spleen: require("../../assets/products/beef_spleen.png"),
  beef_brain: require("../../assets/products/beef_brain.png"),
  beef_pancreas: require("../../assets/products/beef_pancreas.png"),
  beef_stomach_tripe: require("../../assets/products/beef_stomach_tripe.png"),
  beef_fat: require("../../assets/products/beef_fat.png"),
  beef_bone: require("../../assets/products/beef_bone.png"),

  // Meat - Pork
  pork_rib: require("../../assets/products/pork_rib.png"),
  pork_loin: require("../../assets/products/pork_loin.png"),
  pork_tenderloin: require("../../assets/products/pork_tenderloin.png"),
  pork_shoulder: require("../../assets/products/pork_shoulder.png"),
  pork_belly: require("../../assets/products/pork_belly.png"),
  pork_heart: require("../../assets/products/pork_heart.png"),
  pork_liver: require("../../assets/products/pork_liver.png"),
  pork_kidney: require("../../assets/products/pork_kidney.png"),
  pork_lung: require("../../assets/products/pork_lung.png"),
  pork_spleen: require("../../assets/products/pork_spleen.png"),
  pork_brain: require("../../assets/products/pork_brain.png"),
  pork_pancreas: require("../../assets/products/pork_pancreas.png"),
  pork_stomach_tripe: require("../../assets/products/pork_stomach_tripe.png"),
  pork_fat: require("../../assets/products/pork_fat.png"),
  pork_skin: require("../../assets/products/pork_skin.png"),
  pork_bone: require("../../assets/products/pork_bone.png"),

  // Meat - Lamb
  lamb_rib: require("../../assets/products/lamb_rib.png"),
  lamb_loin: require("../../assets/products/lamb_loin.png"),
  lamb_shoulder: require("../../assets/products/lamb_shoulder.png"),
  lamb_leg: require("../../assets/products/lamb_leg.png"),
  lamb_heart: require("../../assets/products/lamb_heart.png"),
  lamb_liver: require("../../assets/products/lamb_liver.png"),
  lamb_kidney: require("../../assets/products/lamb_kidney.png"),
  lamb_lung: require("../../assets/products/lamb_lung.png"),
  lamb_spleen: require("../../assets/products/lamb_spleen.png"),
  lamb_pancreas: require("../../assets/products/lamb_pancreas.png"),
  lamb_stomach: require("../../assets/products/lamb_stomach.png"),
  lamb_fat: require("../../assets/products/lamb_fat.png"),
  lamb_bone: require("../../assets/products/lamb_bone.png"),

  // Meat - Goat
  goat_rib: require("../../assets/products/goat_rib.png"),
  goat_loin: require("../../assets/products/goat_loin.png"),
  goat_shoulder: require("../../assets/products/goat_shoulder.png"),
  goat_leg: require("../../assets/products/goat_leg.png"),
  goat_heart: require("../../assets/products/goat_heart.png"),
  goat_liver: require("../../assets/products/goat_liver.png"),
  goat_kidney: require("../../assets/products/goat_kidney.png"),
  goat_pancreas: require("../../assets/products/goat_pancreas.png"),
  goat_stomach: require("../../assets/products/goat_stomach.png"),
  goat_fat: require("../../assets/products/goat_fat.png"),
  goat_bone: require("../../assets/products/goat_bone.png"),

  // Meat - Rabbit
  rabbit_leg: require("../../assets/products/rabbit_leg.png"),
  rabbit_loin: require("../../assets/products/rabbit_loin.png"),
  rabbit_heart: require("../../assets/products/rabbit_heart.png"),
  rabbit_liver: require("../../assets/products/rabbit_liver.png"),
  rabbit_kidney: require("../../assets/products/rabbit_kidney.png"),

  // Meat - Venison
  venison_rib: require("../../assets/products/venison_rib.png"),
  venison_loin: require("../../assets/products/venison_loin.png"),
  venison_shoulder: require("../../assets/products/venison_shoulder.png"),
  venison_leg: require("../../assets/products/venison_leg.png"),
  venison_heart: require("../../assets/products/venison_heart.png"),
  venison_liver: require("../../assets/products/venison_liver.png"),
  venison_kidney: require("../../assets/products/venison_kidney.png"),
  venison_pancreas: require("../../assets/products/venison_pancreas.png"),
  venison_stomach: require("../../assets/products/venison_stomach.png"),
  venison_fat: require("../../assets/products/venison_fat.png"),
  venison_bone: require("../../assets/products/venison_bone.png"),

  // Meat - Bison
  bison_rib: require("../../assets/products/bison_rib.png"),
  bison_loin: require("../../assets/products/bison_loin.png"),
  bison_shoulder: require("../../assets/products/bison_shoulder.png"),
  bison_leg: require("../../assets/products/bison_leg.png"),
  bison_heart: require("../../assets/products/bison_heart.png"),
  bison_liver: require("../../assets/products/bison_liver.png"),
  bison_kidney: require("../../assets/products/bison_kidney.png"),
  bison_fat: require("../../assets/products/bison_fat.png"),
  bison_bone: require("../../assets/products/bison_bone.png"),

  // Meat - Fish & Shellfish
  fish_fillet: require("../../assets/products/fish_fillet.png"),
  fish_head: require("../../assets/products/fish_head.png"),
  fish_skin: require("../../assets/products/fish_skin.png"),
  fish_bone: require("../../assets/products/fish_bone.png"),
  shrimp: require("../../assets/products/shrimp.png"),
  crab: require("../../assets/products/crab.png"),
  lobster: require("../../assets/products/lobster.png"),

  // Dairy
  cow_milk: require("../../assets/products/cow_milk.png"),
  goat_milk: require("../../assets/products/goat_milk.png"),
  sheep_milk: require("../../assets/products/sheep_milk.png"),
  cheddar_cheese: require("../../assets/products/cheddar_cheese.png"),
  mozzarella_cheese: require("../../assets/products/mozzarella_cheese.png"),
  cottage_cheese: require("../../assets/products/cottage_cheese.png"),
  yogurt_plain: require("../../assets/products/yogurt_plain.png"),
  kefir: require("../../assets/products/kefir.png"),
  whipping_cream: require("../../assets/products/whipping_cream.png"),
  butter: require("../../assets/products/butter.png"),
  ice_cream: require("../../assets/products/ice_cream.png"),
  sour_cream: require("../../assets/products/sour_cream.png"),

  // Grains
  rice_cooked: require("../../assets/products/rice_cooked.png"),
  rice: require("../../assets/products/rice.png"),
  oats: require("../../assets/products/oats.png"),
  barley: require("../../assets/products/barley.png"),
  wheat: require("../../assets/products/wheat.png"),
  corn_cooked: require("../../assets/products/corn_cooked.png"),
  corn_raw: require("../../assets/products/corn_raw.png"),
  whole_grain_bread: require("../../assets/products/whole_grain_bread.png"),
  white_bread: require("../../assets/products/white_bread.png"),
  pasta_cooked: require("../../assets/products/pasta_cooked.png"),
  quinoa: require("../../assets/products/quinoa.png"),
  millet: require("../../assets/products/millet.png"),

  // Nuts
  almonds: require("../../assets/products/almonds.png"),
  cashews: require("../../assets/products/cashews.png"),
  pecans: require("../../assets/products/pecans.png"),
  hazelnuts: require("../../assets/products/hazelnuts.png"),
  peanuts_unsalted: require("../../assets/products/peanuts_unsalted.png"),
  peanut_butter_unsweetened: require("../../assets/products/peanut_butter_unsweetened.png"),

  // Added foods
  macadamia_nuts: require("../../assets/products/macadamia_nuts.png"),
  walnuts: require("../../assets/products/walnuts.png"),
  sunflower_seeds: require("../../assets/products/sunflower_seeds.png"),
  pumpkin_seeds: require("../../assets/products/pumpkin_seeds.png"),
  egg_cooked: require("../../assets/products/egg_cooked.png"),
  chocolate: require("../../assets/products/chocolate.png"),
  xylitol_gum: require("../../assets/products/xylitol_gum.png"),
  honey: require("../../assets/products/honey.png"),
  coffee: require("../../assets/products/coffee.png"),
  alcohol: require("../../assets/products/alcohol.png"),
  crickets: require("../../assets/products/crickets.png"),
  mealworms: require("../../assets/products/mealworms.png"),
  dubia_roaches: require("../../assets/products/dubia_roaches.png"),
  bsf_larvae: require("../../assets/products/bsf_larvae.png"),
  waxworms: require("../../assets/products/waxworms.png"),
  earthworms: require("../../assets/products/earthworms.png"),
  bloodworms: require("../../assets/products/bloodworms.png"),
  brine_shrimp: require("../../assets/products/brine_shrimp.png"),
  feeder_rodents: require("../../assets/products/feeder_rodents.png"),

  // Special icons
  boil: require("../../assets/icons/boil.png"),
};

interface FoodIconProps {
  category: string;
  itemKey?: string;
  size?: number;
  tintColor?: string;
  noBackground?: boolean;
  status?: string;
}

const FoodIcon = React.memo(
  ({
    category,
    itemKey,
    size = 24,
    tintColor,
    noBackground = false,
    status,
  }: FoodIconProps) => {
    const getBackgroundColor = (): string => {
      const lowerCategory = category.toLowerCase();

      if (
        lowerCategory.includes("fruit") ||
        lowerCategory.includes("berry") ||
        lowerCategory.includes("citrus") ||
        lowerCategory.includes("melon") ||
        lowerCategory.includes("tropical")
      ) {
        return `${colors.primary}CC`;
      }

      if (
        lowerCategory.includes("vegetable") ||
        lowerCategory.includes("leafy green") ||
        lowerCategory.includes("root") ||
        lowerCategory.includes("cruciferous") ||
        lowerCategory.includes("allium") ||
        lowerCategory.includes("squash") ||
        lowerCategory.includes("gourd")
      ) {
        return `${colors.parrotGreen}CC`;
      }

      if (
        lowerCategory.includes("nut") ||
        lowerCategory.includes("seed") ||
        lowerCategory.includes("grain") ||
        lowerCategory.includes("legume")
      ) {
        return `${colors.dogBrown}CC`;
      }

      if (lowerCategory.includes("dairy") || lowerCategory.includes("egg")) {
        return `${colors.secondary}CC`;
      }

      if (lowerCategory.includes("meat") || lowerCategory.includes("fish")) {
        return `${colors.rabbitPink}CC`;
      }

      return `${colors.gray500}CC`;
    };

    const getImageForFood = (): ImageSourcePropType | null => {
      if (itemKey) {
        return getFoodIcon(itemKey);
      }
      return null;
    };

    const getFoodIcon = (iconName: string): ImageSourcePropType | null => {
      if (imageCache.has(`food_${iconName}`)) {
        return imageCache.get(`food_${iconName}`);
      }

      const image = foodImages[iconName] || null;

      if (image) {
        imageCache.set(`food_${iconName}`, image);
      } else {
        console.warn(`Missing icon for: ${iconName}`);
      }

      return image;
    };

    const imageSource = getImageForFood();

    // Check if the item requires boiling
    const requiresBoiling =
      status && (status.includes("(boiled)") || status.includes("(cooked)"));

    // Calculate container and image dimensions
    const containerSize = size + 24;
    const imageSize = size * 1.6;
    const boilIconSize = size * 0.6;

    return (
      <View
        style={[
          styles.container,
          {
            width: containerSize,
            height: containerSize,
            backgroundColor: noBackground
              ? "transparent"
              : getBackgroundColor(),
            borderRadius: containerSize / 2,
            borderWidth: noBackground ? 0 : 2,
          },
        ]}
      >
        {imageSource ? (
          <Image
            source={imageSource}
            style={[
              styles.icon,
              {
                width: imageSize,
                height: imageSize,
                tintColor: tintColor,
              },
            ]}
            resizeMode="contain"
          />
        ) : (
          <Text
            style={[
              styles.icon,
              { fontSize: imageSize * 0.4, color: tintColor || "#666" },
            ]}
          >
            {"<Alt>"}
          </Text>
        )}

        {requiresBoiling && (
          <View style={styles.boilIconContainer}>
            <Image
              source={foodImages.boil}
              style={{
                width: boilIconSize,
                height: boilIconSize,
              }}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(255,255,255,0.15)",
  },
  icon: {
    marginRight: 0,
  },
  boilIconContainer: {
    position: "absolute",
    bottom: -2,
    right: -2,
    backgroundColor: colors.white,
    borderRadius: spacing.radiusSmall,
    padding: 2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default FoodIcon;
