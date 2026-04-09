import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import SectionHeader from "../components/SectionHeader";

export default function ExplorerScreen() {
  // DATA
  const categories = [
    { id: "1", name: "Pizza", img: require("../assets/Pizza.png") },
    { id: "2", name: "Burger", img: require("../assets/Burger.jpg") },
    { id: "3", name: "Steak", img: require("../assets/Steak.jpg") },
  ];

  const popular = [
    { id: "1", name: "Spaghetti", price: "$1", img: require("../assets/Spaghetti.jpg") },
    { id: "2", name: "Burrito", price: "$3", img: require("../assets/Burrito.jpg") },
  ];

  const sale = [
    { id: "1", name: "Pizza Sale", price: "$0.5", img: require("../assets/Pizza.png") },
    { id: "2", name: "Burger Sale", price: "$1.5", img: require("../assets/Burger.jpg") },
  ];

  // RENDER CATEGORY
  const renderCategory = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.img} style={styles.image} />
      <Text>{item.name}</Text>
    </View>
  );

  // RENDER FOOD ITEM
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.img} style={styles.foodImage} />
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <Text style={styles.title}>Explorer</Text>

          {/* SEARCH */}
          <TextInput
            placeholder="Search for meals or area"
            style={styles.search}
          />

          {/* TOP CATEGORIES */}
          <SectionHeader title="Top Categories" />
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          {/* POPULAR */}
          <SectionHeader title="Popular Items" />
          <FlatList
            data={popular}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />

          {/* SALE */}
          <SectionHeader title="Sale-off Items" />
          <FlatList
            data={sale}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </>
      }
      data={[]} // bắt buộc có
      renderItem={null}
    />
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

  card: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    marginTop: 10,
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