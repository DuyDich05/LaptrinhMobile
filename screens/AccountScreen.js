import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AccountScreen({ setIsLogin }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("isLogin");
    setIsLogin(false);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require("../assets/AnhDoMixi.png")} // 👉 thêm ảnh avatar vào assets
          style={styles.avatar}
        />
      </View>

      {/* INFO */}
      <View style={styles.info}>
        <Text style={styles.name}>Admin</Text>
        <Text style={styles.job}>Mobile Developer</Text>

        <Text style={styles.desc}>
          Hello Do Mixi.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // HEADER
  header: {
    height: 180,
    backgroundColor: "#18a4c7",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: -50, // 👉 đè xuống phần info
    borderWidth: 3,
    borderColor: "#fff",
  },

  // INFO
  info: {
    alignItems: "center",
    marginTop: 60,
    paddingHorizontal: 20,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
  },

  job: {
    color: "#18a4c7",
    marginBottom: 10,
  },

  desc: {
    textAlign: "center",
    marginTop: 10,
  },

  button: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    width: "60%",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});