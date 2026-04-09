import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SectionHeader({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.more}>See all</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  more: {
    color: "orange",
  },
});