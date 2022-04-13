import { View, Text } from "react-native";
import React from "react";

const Typhograpy = ({ flex, color, size, children, fw, ta }) => {
  return (
    <Text
      style={{
        flex: flex,
        color: color,
        fontSize: size,
        fontWeight: fw,
        textAlign: ta,
      }}
    >
      {children}
    </Text>
  );
};

export default Typhograpy;
