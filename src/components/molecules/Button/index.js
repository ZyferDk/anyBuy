import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Color } from "../../../utils/Colors";

const Button = ({ bgColor = "white", color = Color.orangePeel, content }) => {
  return (
    <Pressable style={styles.page(bgColor)}>
      <Text style={styles.text(color)}>{content}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  page: (bgColor) => ({
    backgroundColor: bgColor,
    paddingVertical: 25,
    borderRadius: 38,
  }),
  text: (color) => ({
    color: color,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  }),
});
