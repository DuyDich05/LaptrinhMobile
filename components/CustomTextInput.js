import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function CustomTextInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
  },
});