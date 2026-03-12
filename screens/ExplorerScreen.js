import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, Image } from "react-native";

export default function ExplorerScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Explorer</Text>

      <TextInput
        placeholder="Search for meals or area"
        style={styles.search}
      />

      <Text style={styles.section}>Top Categories</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={require("../assets/Pizza.png")}
            style={styles.image}
          />
          <Text>Pizza</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/Burger.jpg")}
            style={styles.image}
          />
          <Text>Burgers</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/Steak.jpg")}
            style={styles.image}
          />
          <Text>Steak</Text>
        </View>
      </View>

      <Text style={styles.section}>Popular Items</Text>

      <View style={styles.item}>
        <Image
          source={require("../assets/Spaghetti.jpg")}
          style={styles.foodImage}
        />
        <View>
          <Text>Food 1</Text>
          <Text>1$</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Image
          source={require("../assets/Burrito.jpg")}
          style={styles.foodImage}
        />
        <View>
          <Text>Food 2</Text>
          <Text>3$</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
  },

  section: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 18,
  },

  row: {
    flexDirection: "row",
    marginTop: 10,
  },

  card: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 5,
  },

  item: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
});