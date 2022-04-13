import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { Color } from "../../../utils/Colors";
import { IcChevronLeft, IcGoogle } from "../../../assets";
import { HStack, Typhograpy } from "../../atoms";
import Gap from "../Gap";

const Button = ({
  onPress,
  icon,
  bgColor = "white",
  color = Color.orangePeel,
  content,
  variant,
}) => {
  switch (variant) {
    case "back":
      return (
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Image source={IcChevronLeft} />
        </Pressable>
      );
    case "icon":
      return (
        <Pressable onPress={onPress}>
          <HStack style={styles.pageIcon}>
            <Image source={icon} style={{ alignItems: "center" }} />
            <Typhograpy flex={1} fw="bold" ta={"center"}>
              {content}
            </Typhograpy>
          </HStack>
        </Pressable>
      );
      break;

    default:
      return (
        <Pressable onPress={onPress} style={styles.page(bgColor)}>
          <Text style={styles.text(color)}>{content}</Text>
        </Pressable>
      );
  }
};

export default Button;

const styles = StyleSheet.create({
  page: (bgColor) => ({
    backgroundColor: bgColor,
    paddingVertical: 25,
    borderRadius: 38,
  }),
  back: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#EBEAEC",
  },
  text: (color) => ({
    color: color,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  }),
  pageIcon: {
    borderWidth: 1,
    borderColor: Color.grey,
    borderRadius: 38,
    alignItems: "center",
    paddingVertical: 19,
    paddingHorizontal: 29,
  },
});
