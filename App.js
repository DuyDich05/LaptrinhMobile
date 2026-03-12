import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

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
          } 
          else if (route.name === "Account") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Explorer">
        {(props) => <ExplorerScreen {...props} />}
      </Tab.Screen>

      <Tab.Screen name="Account">
        {(props) => <AccountScreen {...props} setIsLogin={setIsLogin} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogin ? (
          <Stack.Screen name="Home">
            {(props) => <HomeTabs {...props} setIsLogin={setIsLogin} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} setIsLogin={setIsLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}