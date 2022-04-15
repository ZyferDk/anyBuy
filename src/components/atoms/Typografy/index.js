import { View, Text } from "react-native";
import React from "react";

const Typhograpy = ({ flex, color, size, children, fw, ta, style }) => {
  return (
    <Text
      style={[
        {
          flex: flex,
          color: color,
          fontSize: size,
          fontWeight: fw,
          textAlign: ta,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default Typhograpy;
