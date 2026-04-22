import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import OnBoardingScreen from "./Screens/OnBoardingScreen";
import HomeScreen from "./Screens/HomeScreen";
import DetailScreen from "./Screens/DetailScreen";

// Dummy Profile (có thể thay sau)
import { View, Text } from "react-native";
function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/* ===== Bottom Tabs ===== */
function MainTabs() {
  return (
    <Tab.Navigator
  screenOptions={{
    headerShown: false,
    tabBarStyle: { display: "none" }, // 👈 Ẩn tabBar
  }}
>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

/* ===== Stack Navigator ===== */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Onboarding */}
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />

        {/* Main App */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}