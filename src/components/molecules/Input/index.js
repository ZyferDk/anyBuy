import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Color } from "../../../utils/Colors";

const Input = ({
  placeholder,
  value,
  onChangeText,
  maxLength,
  editable,
  keyboardType,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      maxLength={maxLength}
      editable={editable}
      keyboardType={keyboardType}
      style={input.container}
    />
  );
};

export default Input;

const input = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: Color.grey,
    paddingVertical: 18,
    paddingHorizontal: 22,
    fontSize: 16,
    letterSpacing: 0.5,
  },
});
