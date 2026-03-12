import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen({ setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.forgot}>Forgot password?</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsLogin(true)}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20 }}>Or sign in with</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn}>
          <Text>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#3b5998" }]}>
          <Text style={{ color: "white" }}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signup}>
        Not yet a member? <Text style={{ color: "orange" }}>Sign Up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
    marginVertical: 10,
  },

  forgot: {
    alignSelf: "flex-end",
    color: "orange",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  socialBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 6,
    width: "45%",
    alignItems: "center",
  },

  signup: {
    marginTop: 20,
    alignSelf: "center",
  },
});