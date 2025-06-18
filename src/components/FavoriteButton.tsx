import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface FavoriteButtonProps {
  initialValue?: boolean;
  onToggle?: (isFavorite: boolean) => void;
  size?: number;
  isFavorite?: boolean;
}

const FavoriteButton = ({
  initialValue = false,
  onToggle,
  size = 24,
  isFavorite: externalIsFavorite,
}: FavoriteButtonProps) => {
  const [internalIsFavorite, setInternalIsFavorite] = useState(initialValue);

  // Use external state if provided, otherwise use internal state
  const isFavorite =
    externalIsFavorite !== undefined ? externalIsFavorite : internalIsFavorite;

  useEffect(() => {
    if (externalIsFavorite !== undefined) {
      setInternalIsFavorite(externalIsFavorite);
    }
  }, [externalIsFavorite]);

  const handlePress = () => {
    const newValue = !isFavorite;

    // Only update internal state if external state is not provided
    if (externalIsFavorite === undefined) {
      setInternalIsFavorite(newValue);
    }

    if (onToggle) {
      onToggle(newValue);
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      {isFavorite ? (
        <Text style={[styles.icon, { fontSize: size }]}>★</Text>
      ) : (
        <Text style={[styles.icon, { fontSize: size }]}>☆</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
  },
  icon: {
    color: "#f1c40f",
  },
});

export default FavoriteButton;
