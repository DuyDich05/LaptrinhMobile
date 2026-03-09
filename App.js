import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const Card = ({ icon, color, title, subtitle, onPress }) => {
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={[styles.iconBox, { backgroundColor: color }]}>
          {icon}
        </View>

        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSub}>{subtitle}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Do Mixi</Text>
        </View>

        <Image
          source={require("./Screen/AnhDoMixi.png")}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.sectionTitle}>Your Insights</Text>

      <View style={styles.grid}>
        {/* Scan new */}
        <Card
          title="Scan new"
          subtitle="Scanned 483"
          color="#E7E8FF"
          icon={<Ionicons name="briefcase-outline" size={26} color="#6C7BFF" />}
          onPress={() => navigation.navigate("Scan")}
        />

        <Card
          title="Counterfeits"
          subtitle="Counterfeited 32"
          color="#FFE9E1"
          icon={<Ionicons name="warning-outline" size={26} color="#FF7A45" />}
        />

        <Card
          title="Success"
          subtitle="Checkouts 8"
          color="#E6F8F3"
          icon={
            <Ionicons name="checkmark-circle-outline" size={26} color="#3BC6A3" />
          }
        />

        <Card
          title="Directory"
          subtitle="History 26"
          color="#E6F3FF"
          icon={<Ionicons name="calendar-outline" size={26} color="#3AA6FF" />}
        />
      </View>
    </View>
  );
}

function ScanScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./Screen/OrangeJuice.png")}
      style={styles.scanContainer}
      resizeMode="cover"
    >
      
      {/* Back button */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={28} color="#fff" />
      </TouchableOpacity>
      <Image
        source={require("./Screen/Group 5.png")}
        style={styles.imageFrame}
      />
      <Image
        source={require("./Screen/Rectangle 26.png")}
        style={styles.imageScan}
      />

      {/* Product Card */}
      <View style={styles.productCard}>
        <Image
          source={require("./Screen/OrangeJuice.png")}
          style={styles.smallImg}
        />

        <View style={{ flex: 1 }}>
          <Text style={{ color: "gray" }}>Lauren's</Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Orange Juice
          </Text>
        </View>

        <TouchableOpacity style={styles.plusBtn}>
          <Ionicons name="add" size={28} color="#fff" />
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  hello: {
    fontSize: 26,
    fontWeight: "600",
  },

  name: {
    fontSize: 16,
    color: "gray",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    elevation: 3,
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  cardSub: {
    fontSize: 13,
    color: "gray",
    marginTop: 4,
  },

  /* Scan Screen */

  scanContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  backBtn: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 10,
    borderRadius: 10,
  },

  productCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    margin: 20,
    bottom:30
  },

  smallImg: {
    width: 50,
    height: 50,
    marginRight: 10,
  },

  plusBtn: {
    backgroundColor: "#5B6EF5",
    padding: 10,
    borderRadius: 10,
    
  },
  imageFrame:{
  width: 550,
  height: 450,
  position: "absolute",
  top: "25%",
  alignSelf: "center",
  resizeMode: "contain"
  },
  imageScan: {
    border: 2,
    width:270,
    height:200,
    alignSelf:'center',
    bottom:70
  }
});