import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { getFoodsForAnimal } from "../data/data-utils";
import { FoodItem } from "../types";
import CompatibilityIndicator from "../components/CompatibilityIndicator";
import FoodIcon from "../components/FoodIcon";
import AnimalIcon from "../components/AnimalIcon";
import FoodCard from "../components/FoodCard";

type AnimalDetailScreenProps = {
  route: RouteProp<RootStackParamList, "AnimalDetail">;
};

interface SectionData {
  title: string;
  data: FoodItem[];
  status: string;
}

const AnimalDetailScreen = ({ route }: AnimalDetailScreenProps) => {
  const { animalName } = route.params;
  const foodData = getFoodsForAnimal(animalName);

  const sections: SectionData[] = [
    { title: "Allowed Foods", data: foodData.allowed, status: "allowed" },
    {
      title: "Acceptable in Small Quantities",
      data: foodData.acceptable,
      status: "acceptable in small quantities",
    },
    { title: "Not Allowed", data: foodData.notAllowed, status: "not allowed" },
  ];

  const renderSectionHeader = ({ section }: { section: SectionData }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      <CompatibilityIndicator status={section.status} />
    </View>
  );

  const renderFoodItem = ({ item }: { item: FoodItem }) => (
    <FoodCard food={item} animalName={animalName} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AnimalIcon animal={animalName} size={32} />
        <Text style={styles.title}>{animalName} Can Eat</Text>
      </View>
      <SectionList
        sections={sections}
        renderItem={renderFoodItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.item}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2c3e50",
    marginLeft: 10,
  },
  listContent: {
    padding: 16,
  },
  sectionHeader: {
    backgroundColor: "#ecf0f1",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  foodItem: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    marginLeft: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  foodRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  foodName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2c3e50",
  },
  foodCategory: {
    fontSize: 14,
    color: "#7f8c8d",
    marginTop: 4,
  },
});

export default AnimalDetailScreen;
