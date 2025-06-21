import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { AnimalName } from "../types";
import { spacing } from "../styles";

// Import animal images
const animalImages = {
  dog: require("../../assets/animals/dog.png"),
  chinchilla: require("../../assets/animals/chinchilla.png"),
  guinea_pig: require("../../assets/animals/guinea_pig.png"),
  mouse: require("../../assets/animals/mouse.png"),
  // Add more images as you create them
};

interface AnimalIconProps {
  animal: AnimalName;
  size?: number;
}

const AnimalIcon = ({ animal, size = 24 }: AnimalIconProps) => {
  const getImageForAnimal = () => {
    switch (animal) {
      case "Dog":
        return animalImages.dog;
      case "Chinchilla":
        return animalImages.chinchilla;
      case "Guinea Pig":
        return animalImages.guinea_pig;
      case "Mouse":
        return animalImages.mouse;
      // For animals that don't have PNG images yet, use emojis as a fallback
      case "Cat":
        return null; // Will use fallback emoji
      case "Rabbit":
        return null;
      default:
        return null;
    }
  };

  // Get the image source for the animal
  const imageSource = getImageForAnimal();

  // If we have an image for this animal, render an Image component
  if (imageSource) {
    return (
      <Image
        source={imageSource}
        style={[styles.icon, { width: size, height: size }]}
        resizeMode="contain"
      />
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
    <View style={[styles.emojiContainer, { width: size, height: size }]}>
      <Text style={[styles.emoji, { fontSize: size }]}>
        {getFallbackEmoji()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: spacing.sm,
  },
  emojiContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    marginRight: spacing.sm,
  },
});

export default AnimalIcon;
