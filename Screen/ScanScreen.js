import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ScanScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../Pictures/OrangeJuice.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar style="light" />

      {/* overlay */}
      <View style={styles.overlay} />

      {/* Back */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* KHUNG SCAN (phóng to) */}
      <Image
        source={require("../Pictures/Group 5.png")}
        style={styles.frame}
      />

      {/* CARD */}
      <View style={styles.card}>
        <Image
          source={require("../Pictures/OrangeJuice.png")}
          style={styles.thumb}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>Lauren's</Text>
          <Text style={styles.name}>Orange Juice</Text>
        </View>

        <TouchableOpacity style={styles.plusBtn}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.15)",
  },

  backBtn: {
    position: "absolute",
    top: 60,
    left: 20,
    width: 45,
    height: 45,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },

  /*  FRAME TO HƠN */
  frame: {
    width: 300,      // tăng từ 260 → 320
    height: 550,     // tăng từ 320 → 420
    position: "absolute",
    top: "20%",      // chỉnh lên chút cho cân
    alignSelf: "center",
    resizeMode: "contain",
    zIndex: 2,
  },

  card: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    zIndex: 2,
  },

  thumb: {
    width: 50,
    height: 50,
    marginRight: 10,
  },

  brand: {
    color: "gray",
    fontSize: 13,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
  },

  plusBtn: {
    backgroundColor: "#5B6EF5",
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});