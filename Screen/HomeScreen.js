import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const Card = ({ icon, bgColor, iconColor, title, subtitle, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={[styles.iconBox, { backgroundColor: bgColor }]}>
        <Ionicons name={icon} size={26} color={iconColor} />
      </View>

      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSub}>{subtitle}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#F4F5F7" }}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.hello}>Hello 👋</Text>
            <Text style={styles.name}>Do Mixi</Text>
          </View>

          <Image
            source={require("../Pictures/AnhDoMixi.png")}
            style={styles.avatar}
          />
        </View>

        {/* TITLE */}
        <Text style={styles.sectionTitle}>Your Insights</Text>

        {/* GRID */}
        <View style={styles.grid}>
          <Card
            title="Scan new"
            subtitle="Scanned 483"
            icon="briefcase-outline"
            bgColor="#E7E8FF"
            iconColor="#6C7BFF"
            onPress={() => navigation.navigate("Scan")}
          />

          <Card
            title="Counterfeits"
            subtitle="Counterfeited 32"
            icon="warning-outline"
            bgColor="#FFE9E1"
            iconColor="#FF7A45"
          />

          <Card
            title="Success"
            subtitle="Checkouts 8"
            icon="checkmark-circle-outline"
            bgColor="#E6F8F3"
            iconColor="#3BC6A3"
          />

          <Card
            title="Directory"
            subtitle="History 26"
            icon="calendar-outline"
            bgColor="#E6F3FF"
            iconColor="#3AA6FF"
          />
        </View>

        {/* EXPLORE */}
        <View style={styles.exploreRow}>
          <Text style={styles.sectionTitle}>Explore More</Text>
          <Ionicons name="arrow-forward" size={22} />
        </View>

        <Text>Check for update</Text>
      </ScrollView>

      {/*  BOTTOM TAB */}
      <View style={styles.bottomTab}>
        {/* Home */}
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home" size={24} color="#4DA6FF" />
        </TouchableOpacity>

        {/* Bell */}
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="notifications-outline" size={24} color="#999" />
        </TouchableOpacity>

        {/*  SCAN */}
        <TouchableOpacity
          style={styles.scanTab}
          onPress={() => navigation.navigate("Scan")}
        >
          <Ionicons name="scan-outline" size={24} color="#4DA6FF" />
        </TouchableOpacity>

        {/* History */}
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="time-outline" size={24} color="#999" />
        </TouchableOpacity>

        {/* Cart */}
        <TouchableOpacity
  style={styles.tabItem}
  onPress={() => navigation.navigate("Cart")}
>
  <Ionicons name="cart-outline" size={24} color="#999" />
</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 100,
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
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    elevation: 3,
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 18,
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

  exploreRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  /*  TAB */
  bottomTab: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 10,
  },

  tabItem: {
    flex: 1,
    alignItems: "center",
  },

  /*  SCAN BUTTON */
  scanTab: {
    width: 50,
    height: 50,
    backgroundColor: "#E6F0FF",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});