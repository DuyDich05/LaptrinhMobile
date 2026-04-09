import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const data = await AsyncStorage.getItem("isLogin");
    if (data === "true") setIsLogin(true);
    setLoading(false);
  };

  const login = async () => {
    await AsyncStorage.setItem("isLogin", "true");
    setIsLogin(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("isLogin");
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};