import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const images = {
  CaffeMocha: require("../assets/CaffeMocha.png"),
  FlatWhite: require("../assets/FlatWhite.png"),
};

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;
  const [size, setSize] = useState("M");

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>Detail</Text>

        <Ionicons name="heart-outline" size={22} />
      </View>

      {/* IMAGE */}
      <Image source={images[item.image]} style={styles.image} />

      {/* INFO */}
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.type}>Ice/Hot</Text>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}> 4.8 (230)</Text>
        </View>

        <Text style={styles.section}>Description</Text>
        <Text style={styles.desc}>
          A cappuccino is an approximately 150 ml beverage, with espresso and
          milk foam.
        </Text>

        {/* SIZE */}
        <Text style={styles.section}>Size</Text>
        <View style={styles.sizeRow}>
          {["S", "M", "L"].map((s) => (
            <TouchableOpacity
              key={s}
              style={[
                styles.sizeBtn,
                size === s && styles.sizeActive,
              ]}
              onPress={() => setSize(s)}
            >
              <Text
                style={[
                  styles.sizeText,
                  size === s && { color: "#C67C4E" },
                ]}
              >
                {s}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View>
          <Text style={{ color: "#999" }}>Price</Text>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>

        <TouchableOpacity style={styles.buyBtn}>
          <Text style={{ color: "#fff", fontWeight: "600" }}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginTop: 15,
  },

  content: {
    marginTop: 20,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  type: {
    color: "#999",
    marginBottom: 5,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  rating: {
    fontSize: 14,
  },

  section: {
    marginTop: 15,
    fontWeight: "600",
  },

  desc: {
    color: "#777",
    marginTop: 5,
  },

  sizeRow: {
    flexDirection: "row",
    marginTop: 10,
  },

  sizeBtn: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    width: 50,
    alignItems: "center",
  },

  sizeActive: {
    borderColor: "#C67C4E",
  },

  sizeText: {
    color: "#000",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#C67C4E",
  },

  buyBtn: {
    backgroundColor: "#C67C4E",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 14,
  },
});