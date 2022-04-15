import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Color } from "../../../utils/Colors";
import { Typhograpy } from "../../atoms";

const Input = ({
  placeholder,
  value,
  onChangeText,
  maxLength,
  editable,
  keyboardType,
  label,
}) => {
  return (
    <>
      {label && (
        <Typhograpy size={18} color={Color.mountainMist} style={input.label}>
          {label}
        </Typhograpy>
      )}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        editable={editable}
        keyboardType={keyboardType}
        style={input.container}
      />
    </>
  );
};

export default Input;

const input = StyleSheet.create({
  label: {
    marginHorizontal: 10,
    marginTop: 18,
  },
  container: {
    borderRadius: 15,
    backgroundColor: Color.aquaHaze,
    paddingVertical: 18,
    paddingHorizontal: 22,
    fontSize: 16,
    letterSpacing: 0.5,
  },
});
