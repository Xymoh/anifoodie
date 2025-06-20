import React from "react";
import { Text, StyleSheet } from "react-native";

import { AnimalName } from "../types";
import { spacing } from "../styles";

interface AnimalIconProps {
  animal: AnimalName;
  size?: number;
}

const AnimalIcon = ({ animal, size = 24 }: AnimalIconProps) => {
  const getIconForAnimal = (): string => {
    switch (animal) {
      case "Dog":
        return "🐕";
      case "Cat":
        return "🐈";
      case "Rabbit":
        return "🐇";
      case "Guinea Pig":
        return "🐹";
      case "Hamster":
        return "🐹";
      case "Gerbil":
        return "🐹";
      case "Ferret":
        return "🦡";
      case "Mouse":
        return "🐁";
      case "Rat":
        return "🐀";
      case "Chinchilla":
        return "🐭";
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
    <Text style={[styles.icon, { fontSize: size }]}>{getIconForAnimal()}</Text>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: spacing.sm,
  },
});

export default AnimalIcon;
