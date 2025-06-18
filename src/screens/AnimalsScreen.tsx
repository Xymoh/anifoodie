import React, { useState, useMemo } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getAllAnimals } from "../data/data-utils";
import { RootStackParamList } from "../navigation/types";
import { AnimalName } from "../types";
import SearchBar from "../components/SearchBar";
import AnimalIcon from "../components/AnimalIcon";
import AnimalCategoryFilter, {
  AnimalCategory,
} from "../components/AnimalCategoryFilter";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Main">;

const AnimalsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const allAnimals = getAllAnimals();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<AnimalCategory>("All");

  const getAnimalCategory = (animal: AnimalName): AnimalCategory => {
    const mammals = [
      "Dog",
      "Cat",
      "Rabbit",
      "Guinea Pig",
      "Hamster",
      "Gerbil",
      "Ferret",
      "Mouse",
      "Rat",
      "Chinchilla",
      "Hedgehog",
      "Sugar Glider",
    ];
    const birds = [
      "Parakeet",
      "Cockatiel",
      "Parrot",
      "Lovebird",
      "Canary",
      "Finch",
      "Dove",
    ];
    const reptiles = [
      "Turtle",
      "Tortoise",
      "Bearded Dragon",
      "Leopard Gecko",
      "Iguana",
      "Snake",
    ];
    const amphibians = ["Frog", "Toad", "Axolotl", "Newt", "Salamander"];
    const fish = ["Goldfish", "Betta Fish", "Angelfish"];

    if (mammals.includes(animal)) return "Mammals";
    if (birds.includes(animal)) return "Birds";
    if (reptiles.includes(animal)) return "Reptiles";
    if (amphibians.includes(animal)) return "Amphibians";
    if (fish.includes(animal)) return "Fish";

    return "All";
  };

  const filteredAnimals = useMemo(() => {
    let filtered = allAnimals;

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter((animal) =>
        animal.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (animal) => getAnimalCategory(animal) === selectedCategory
      );
    }

    return filtered;
  }, [allAnimals, searchQuery, selectedCategory]);

  const handleAnimalPress = (animalName: AnimalName) => {
    navigation.navigate("AnimalDetail", { animalName });
  };

  const renderAnimalItem = ({ item }: { item: AnimalName }) => (
    <TouchableOpacity
      style={styles.animalItem}
      onPress={() => handleAnimalPress(item)}
    >
      <View style={styles.animalRow}>
        <AnimalIcon animal={item} size={24} />
        <Text style={styles.animalName}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an Animal</Text>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search animals..."
      />
      <AnimalCategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <FlatList
        data={filteredAnimals}
        renderItem={renderAnimalItem}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No animals found</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#2c3e50",
  },
  listContent: {
    padding: 16,
  },
  animalItem: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  animalRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  animalName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2c3e50",
    marginLeft: 12,
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
  },
});

export default AnimalsScreen;
