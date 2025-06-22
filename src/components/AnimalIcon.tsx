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
  chinchilla: require("../../assets/animals/chinchilla.png"),
  guinea_pig: require("../../assets/animals/guinea_pig.png"),
  mouse: require("../../assets/animals/mouse.png"),
};

interface AnimalIconProps {
  animal: AnimalName;
  size?: number;
  tintColor?: string;
  noBackground?: boolean;
}

const AnimalIcon = ({
  animal,
  size = 24,
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
        return `${colors.dogBrown}44`;
      case "Cat":
        return `${colors.catOrange}44`;
      case "Chinchilla":
      case "Guinea Pig":
      case "Hamster":
      case "Gerbil":
      case "Ferret":
      case "Rat":
      case "Mouse":
      case "Hedgehog":
      case "Sugar Glider":
        return `${colors.chinchillaGray}44`;
      case "Parakeet":
      case "Cockatiel":
      case "Parrot":
      case "Lovebird":
      case "Canary":
      case "Finch":
      case "Dove":
        return `${colors.parrotGreen}44`;
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
        return `${colors.turtleGreen}44`;
      case "Goldfish":
      case "Betta Fish":
      case "Angelfish":
        return `${colors.primary}44`;
      default:
        return "transparent";
    }
  };

  // Get the image source for the animal
  const imageSource = getImageForAnimal();

  // If we have an image for this animal, render an Image component
  if (imageSource) {
    return (
      <View
        style={[
          styles.imageContainer,
          {
            width: size + 24,
            height: size + 24,
            backgroundColor: noBackground
              ? "transparent"
              : getBackgroundColor(),
            borderRadius: (size + 24) / 2,
            borderWidth: noBackground ? 0 : 2,
          },
        ]}
      >
        <Image
          source={imageSource}
          style={[
            styles.icon,
            {
              width: size,
              height: size,
              tintColor: tintColor,
            },
          ]}
          resizeMode="contain"
        />
      </View>
    );
  }

  // Otherwise, fall back to emojis for animals without images
  const getFallbackEmoji = (): string => {
    switch (animal) {
      case "Cat":
        return "🐈";
      case "Rabbit":
        return "🐇";
      case "Hamster":
        return "🐹";
      case "Gerbil":
        return "🐹";
      case "Ferret":
        return "🦡";
      case "Rat":
        return "🐀";
      case "Hedgehog":
        return "🦔";
      case "Sugar Glider":
        return "🦝";
      case "Parakeet":
        return "🦜";
      case "Cockatiel":
        return "🦜";
      case "Parrot":
        return "🦜";
      case "Lovebird":
        return "🦜";
      case "Canary":
        return "🐦";
      case "Finch":
        return "🐦";
      case "Dove":
        return "🕊️";
      case "Turtle":
        return "🐢";
      case "Tortoise":
        return "🐢";
      case "Bearded Dragon":
        return "🦎";
      case "Leopard Gecko":
        return "🦎";
      case "Iguana":
        return "🦎";
      case "Snake":
        return "🐍";
      case "Frog":
        return "🐸";
      case "Toad":
        return "🐸";
      case "Axolotl":
        return "🦎";
      case "Newt":
        return "🦎";
      case "Salamander":
        return "🦎";
      case "Goldfish":
        return "🐠";
      case "Betta Fish":
        return "🐟";
      case "Angelfish":
        return "🐠";
      default:
        return "🐾";
    }
  };

  return (
    <View
      style={[
        styles.emojiContainer,
        {
          width: size + 24,
          height: size + 24,
          backgroundColor: noBackground ? "transparent" : getBackgroundColor(),
          borderRadius: (size + 24) / 2,
          borderWidth: noBackground ? 0 : 2,
        },
      ]}
    >
      <Text style={[styles.emoji, { fontSize: size * 0.8 }]}>
        {getFallbackEmoji()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.xs,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.15)",
  },
  icon: {
    marginRight: 0,
  },
  emojiContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.xs,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.15)",
  },
  emoji: {
    marginRight: 0,
  },
});

export default AnimalIcon;
