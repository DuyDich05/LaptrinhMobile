import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function AccountScreen({ setIsLogin }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <Text style={styles.name}>Admin</Text>
      <Text style={styles.job}>Mobile developer</Text>

      <Text style={styles.desc}>
        I have above 5 years of experience in native mobile apps development,
        now i am learning React Native
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsLogin(false)}
      >
        <Text style={{ color: "white" }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  header: {
    width: "100%",
    height: 150,
    backgroundColor: "#18a4c7",
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },

  job: {
    color: "#18a4c7",
    marginBottom: 10,
  },

  desc: {
    textAlign: "center",
    paddingHorizontal: 40,
  },

  button: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 6,
    marginTop: 20,
  },
});