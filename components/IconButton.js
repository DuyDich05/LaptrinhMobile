import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ title, icon, color }) {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: color }]}>
      <Ionicons name={icon} size={20} color="white" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    width: "45%",
  },
  text: {
    color: "white",
    marginLeft: 8,
    fontWeight: "bold",
  },
});