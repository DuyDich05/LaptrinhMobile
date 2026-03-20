import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen({ navigation }) {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Orange Juice",
      brand: "Lauren's",
      price: 149,
      qty: 0, //  ban đầu = 0
      image: require("../Pictures/OrangeJuice.png"),
    },
    {
      id: 2,
      name: "Skimmed Milk",
      brand: "Baskin's",
      price: 129,
      qty: 0,
      image: require("../Pictures/Rectangle 31.png"),
    },
    {
      id: 3,
      name: "Aloe Vera Lotion",
      brand: "Marley's",
      price: 1249,
      qty: 0,
      image: require("../Pictures/Rectangle 45.png"),
    },
  ]);

  //  tăng số lượng
  const increase = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  //  giảm số lượng (về 0, không âm)
  const decrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  //  tổng tiền
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Your Cart 👍</Text>
      </View>

      {/* DANH SÁCH */}
      {cart.map((item) => (
        <View key={item.id} style={styles.card}>
          {/* ẢNH */}
          <Image source={item.image} style={styles.image} />

          {/* INFO */}
          <View style={{ flex: 1 }}>
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹ {item.price}</Text>
          </View>

          {/* +/- */}
          <View style={styles.qtyBox}>
            <TouchableOpacity onPress={() => decrease(item.id)}>
              <Text style={styles.btn}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qty}>{item.qty}</Text>

            <TouchableOpacity onPress={() => increase(item.id)}>
              <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* TOTAL */}
      <View style={styles.totalRow}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>₹ {total}</Text>
      </View>

      {/* BUTTON */}
      <TouchableOpacity style={styles.checkout}>
        <Text style={styles.checkoutText}>Proceed to checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4F5F7",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 40,
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginRight: 10,
  },

  brand: {
    fontSize: 12,
    color: "gray",
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  price: {
    color: "#FF7A45",
    marginTop: 5,
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F5F7",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  btn: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: "#FF7A45",
    fontWeight: "600",
  },

  qty: {
    fontSize: 16,
    marginHorizontal: 5,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  total: {
    fontSize: 18,
    fontWeight: "600",
  },

  checkout: {
    marginTop: 20,
    backgroundColor: "#FF8C5A",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  checkoutText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});