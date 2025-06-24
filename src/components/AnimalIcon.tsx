import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";

import { AnimalName } from "../types";
import { spacing, colors } from "../styles";

type AnimalImages = {
  [key: string]: ImageSourcePropType;
};

const animalImages: AnimalImages = {
  dog: require("../../assets/animals/dog.png"),
  cat: require("../../assets/animals/cat.png"),
  rabbit: require("../../assets/animals/rabbit.png"),
  guinea_pig: require("../../assets/animals/guinea_pig.png"),
  hamster: require("../../assets/animals/hamster.png"),
  gerbil: require("../../assets/animals/gerbil.png"),
  ferret: require("../../assets/animals/ferret.png"),
  mouse: require("../../assets/animals/mouse.png"),
  rat: require("../../assets/animals/rat.png"),
  chinchilla: require("../../assets/animals/chinchilla.png"),
  hedgehog: require("../../assets/animals/hedgehog.png"),
  sugar_glider: require("../../assets/animals/sugar_glider.png"),
  parakeet: require("../../assets/animals/parakeet.png"),
  cockatiel: require("../../assets/animals/cockatiel.png"),
  parrot: require("../../assets/animals/parrot.png"),
  lovebird: require("../../assets/animals/lovebird.png"),
  canary: require("../../assets/animals/canary.png"),
  finch: require("../../assets/animals/finch.png"),
  dove: require("../../assets/animals/dove.png"),
  turtle: require("../../assets/animals/turtle.png"),
  tortoise: require("../../assets/animals/tortoise.png"),
  bearded_dragon: require("../../assets/animals/bearded_dragon.png"),
  leopard_gecko: require("../../assets/animals/leopard_gecko.png"),
  iguana: require("../../assets/animals/iguana.png"),
  snake: require("../../assets/animals/snake.png"),
  frog: require("../../assets/animals/frog.png"),
  toad: require("../../assets/animals/toad.png"),
  axolotl: require("../../assets/animals/axolotl.png"),
  newt: require("../../assets/animals/newt.png"),
  salamander: require("../../assets/animals/salamander.png"),
  goldfish: require("../../assets/animals/goldfish.png"),
  betta_fish: require("../../assets/animals/betta_fish.png"),
  angelfish: require("../../assets/animals/angelfish.png"),
};

interface AnimalIconProps {
  animal: AnimalName;
  size?: number;
  tintColor?: string;
  noBackground?: boolean;
}

const AnimalIcon = ({
  animal,
  size = 32,
  tintColor,
  noBackground = false,
}: AnimalIconProps) => {
  const getImageKey = (animalName: AnimalName): string => {
    return animalName.toLowerCase().replace(/\s+/g, "_");
  };

  const getImageForAnimal = (): ImageSourcePropType | null => {
    const imageKey = getImageKey(animal);
    return animalImages[imageKey] || null;
  };

  // Get background color based on animal category for the container
  const getBackgroundColor = (): string => {
    switch (animal) {
      case "Dog":
        return `${colors.dogBrown}CC`;
      case "Cat":
        return `${colors.catOrange}CC`;
      case "Rabbit":
        return `${colors.rabbitPink}CC`;
      case "Chinchilla":
      case "Guinea Pig":
      case "Hamster":
      case "Gerbil":
      case "Ferret":
      case "Rat":
      case "Mouse":
      case "Hedgehog":
      case "Sugar Glider":
        return `${colors.chinchillaGray}CC`;
      case "Parakeet":
      case "Cockatiel":
      case "Parrot":
      case "Lovebird":
      case "Canary":
      case "Finch":
      case "Dove":
        return `${colors.parrotGreen}CC`;
      case "Turtle":
      case "Tortoise":
      case "Bearded Dragon":
      case "Leopard Gecko":
      case "Iguana":
      case "Snake":
      case "Frog":
      case "Toad":
      case "Axolotl":
      case "Newt":
      case "Salamander":
        return `${colors.turtleGreen}CC`;
      case "Goldfish":
      case "Betta Fish":
      case "Angelfish":
        return `${colors.primary}CC`;
      default:
        return `${colors.gray400}CC`;
    }
  };

  // Get the image source for the animal
  const imageSource = getImageForAnimal();

  // Calculate container and image dimensions
  const containerSize = size + 24;
  const imageSize = size * 1.6;

  return (
    <View
      style={[
        styles.imageContainer,
        {
          width: containerSize,
          height: containerSize,
          backgroundColor: noBackground ? "transparent" : getBackgroundColor(),
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
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.xs,
    borderColor: "rgba(255,255,255,0.5)",
  },
  icon: {
    marginRight: 0,
  },
});

export default AnimalIcon;
