import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginScreen from "./screens/LoginScreen";
import ExplorerScreen from "./screens/ExplorerScreen";
import AccountScreen from "./screens/AccountScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs({ setIsLogin }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name === "Explorer") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Explorer" component={ExplorerScreen} />

      <Tab.Screen name="Account">
        {(props) => (
          <AccountScreen {...props} setIsLogin={setIsLogin} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLogin, setIsLogin] = useState(null); // null để loading

  // 🔥 Kiểm tra trạng thái đăng nhập khi mở app
  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      const value = await AsyncStorage.getItem("isLogin");
      setIsLogin(value === "true");
    } catch (e) {
      console.log("Error reading login state");
      setIsLogin(false);
    }
  };

  // ⏳ Tránh render khi chưa load xong
  if (isLogin === null) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogin ? (
          <Stack.Screen name="Home">
            {(props) => (
              <HomeTabs {...props} setIsLogin={setIsLogin} />
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen {...props} setIsLogin={setIsLogin} />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}