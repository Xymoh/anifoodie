import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Welcome">;

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleGetStarted = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to AniFood</Text>
          <Text style={styles.subtitle}>
            Find out what your pets can and cannot eat
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How it works</Text>
          <Text style={styles.text}>
            AniFood helps you discover which foods are safe for your pets and
            which are potentially harmful.
          </Text>
        </View>

        <View style={styles.featureSection}>
          <View style={styles.feature}>
            <Text style={styles.emoji}>🐶</Text>
            <Text style={styles.featureTitle}>Search by Animal</Text>
            <Text style={styles.featureText}>
              Select an animal to see what foods they can eat, should eat in
              moderation, or should avoid completely.
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.emoji}>🍎</Text>
            <Text style={styles.featureTitle}>Search by Food</Text>
            <Text style={styles.featureText}>
              Select a food item to discover which animals can safely consume it
              and which should avoid it.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Color Key</Text>
          <View style={styles.colorKey}>
            <View
              style={[styles.colorIndicator, { backgroundColor: "#2ecc71" }]}
            />
            <Text style={styles.colorKeyText}>Safe to eat</Text>
          </View>
          <View style={styles.colorKey}>
            <View
              style={[styles.colorIndicator, { backgroundColor: "#f39c12" }]}
            />
            <Text style={styles.colorKeyText}>
              Acceptable in small quantities
            </Text>
          </View>
          <View style={styles.colorKey}>
            <View
              style={[styles.colorIndicator, { backgroundColor: "#e74c3c" }]}
            />
            <Text style={styles.colorKeyText}>Not allowed - unsafe</Text>
          </View>
        </View>

        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerTitle}>Disclaimer</Text>
          <Text style={styles.disclaimerText}>
            The information provided in this app is for general informational
            purposes only. Always consult with a veterinarian before introducing
            new foods to your pet's diet.
          </Text>
        </View>
      </ScrollView>

      <Pressable style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#7f8c8d",
    textAlign: "center",
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#34495e",
    lineHeight: 24,
  },
  featureSection: {
    flexDirection: "column",
    marginBottom: 25,
  },
  feature: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  emoji: {
    fontSize: 36,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
  },
  featureText: {
    fontSize: 14,
    color: "#34495e",
    lineHeight: 20,
  },
  colorKey: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  colorIndicator: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginRight: 10,
  },
  colorKeyText: {
    fontSize: 16,
    color: "#34495e",
  },
  disclaimer: {
    backgroundColor: "#edf0f1",
    padding: 15,
    borderRadius: 10,
    marginBottom: 60,
  },
  disclaimerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },
  disclaimerText: {
    fontSize: 14,
    color: "#34495e",
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
