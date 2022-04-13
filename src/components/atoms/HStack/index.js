import { View, Text } from "react-native";
import React from "react";

const HStack = ({ children, style }) => {
  return <View style={[{ flexDirection: "row" }, style]}>{children}</View>;
};

export default HStack;
