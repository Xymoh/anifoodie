import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { getAnimalsForFood } from "../data/data-utils";
import { AnimalName, CompatibilityStatus } from "../types";
import CompatibilityIndicator from "../components/CompatibilityIndicator";
import AnimalIcon from "../components/AnimalIcon";
import FoodIcon from "../components/FoodIcon";
import AnimalCard from "../components/AnimalCard";

type FoodDetailScreenProps = {
  route: RouteProp<RootStackParamList, "FoodDetail">;
};

interface SectionData {
  title: string;
  data: AnimalName[];
  status: CompatibilityStatus;
}

const FoodDetailScreen = ({ route }: FoodDetailScreenProps) => {
  const { foodName } = route.params;
  const animalData = getAnimalsForFood(foodName);

  const sections: SectionData[] = [
    {
      title: "Animals that can eat this food",
      data: animalData["allowed"],
      status: "allowed",
    },
    {
      title: "Animals that can eat this food in small quantities",
      data: [
        ...animalData["acceptable in small quantities"],
        ...animalData["acceptable in small quantities (boiled)"],
      ],
      status: "acceptable in small quantities",
    },
    {
      title: "Animals that cannot eat this food",
      data: animalData["not allowed"],
      status: "not allowed",
    },
  ];

  const renderSectionHeader = ({ section }: { section: SectionData }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      <CompatibilityIndicator status={section.status} />
    </View>
  );

  const renderAnimalItem = ({
    item,
    section,
  }: {
    item: AnimalName;
    section: SectionData;
  }) => <AnimalCard animal={item} status={section.status} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FoodIcon category={foodName} size={36} />
        <Text style={styles.title}>{foodName}</Text>
      </View>
      <SectionList
        sections={sections}
        renderItem={renderAnimalItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled
        renderSectionFooter={({ section }) =>
          section.data.length === 0 ? (
            <View style={styles.emptySection}>
              <Text style={styles.emptyText}>No animals in this category</Text>
            </View>
          ) : null
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  animalItem: {
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
  emptySection: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#95a5a6",
    fontStyle: "italic",
  },
});

export default FoodDetailScreen;
