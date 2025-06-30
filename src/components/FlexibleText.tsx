import React from "react";
import { Text, TextProps } from "react-native";

interface FlexibleTextProps extends TextProps {
  children: React.ReactNode;
  maxLines?: number;
}

/**
 * A flexible text component that handles long text gracefully
 * by wrapping text properly and ensuring it doesn't break layouts
 */
const FlexibleText: React.FC<FlexibleTextProps> = ({
  children,
  style,
  maxLines = 2,
  ...props
}) => {
  return (
    <Text
      style={[
        {
          flexWrap: "wrap",
          flexShrink: 1,
        },
        style,
      ]}
      numberOfLines={maxLines}
      ellipsizeMode="tail"
      {...props}
    >
      {children}
    </Text>
  );
};

export default FlexibleText;
