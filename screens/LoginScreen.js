import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomTextInput from "../components/CustomTextInput";
import IconButton from "../components/IconButton";

export default function LoginScreen({ setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // 👉 bấm là đăng nhập luôn
    await AsyncStorage.setItem("isLogin", "true");
    setIsLogin(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <CustomTextInput
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <CustomTextInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialRow}>
        <IconButton title="Google" icon="logo-google" color="#DB4437" />
        <IconButton title="Facebook" icon="logo-facebook" color="#3b5998" />
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
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 30,
  },
  forgot: {
    alignSelf: "flex-end",
    color: "orange",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginTop: 20,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  signup: {
    marginTop: 20,
    alignSelf: "center",
  },
});