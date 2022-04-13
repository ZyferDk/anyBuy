import { View, Text } from "react-native";
import React from "react";

const Typhograpy = ({ color, size, children, fw }) => {
  return (
    <Text style={{ color: color, fontSize: size, fontWeight: fw }}>
      {children}
    </Text>
  );
};

export default Typhograpy;
