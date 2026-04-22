import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OnBoardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* IMAGE */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/6.png")}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Gradient */}
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={styles.gradient}
        />
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Fall in Love with{"\n"}Coffee in Blissful{"\n"}Delight!
        </Text>

        <Text style={styles.subtitle}>
          Welcome to our cozy coffee corner, where every cup is a delightful
          for you.
        </Text>

        <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.replace("MainTabs")}
>
  <Text style={styles.buttonText}>Get Started</Text>
</TouchableOpacity>
      </View>
    </View>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  /* IMAGE */
  imageContainer: {
    flex: 2,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40%",
  },

  /* CONTENT */
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 38,
    marginBottom: 12,
  },

  subtitle: {
    color: "#CFCFCF",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 24,
    paddingHorizontal: 10,
  },

  button: {
    backgroundColor: "#C67C4E",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});