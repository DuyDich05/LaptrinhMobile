import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// 👉 Load dữ liệu JSON
import data from "../assets/data.json";

// 👉 Map ảnh
const images = {
  CaffeMocha: require("../assets/CaffeMocha.png"),
  FlatWhite: require("../assets/FlatWhite.png"),
  MochaFusi: require("../assets/MochaFusi.png"),
  CaffePanna: require("../assets/CaffePanna.png"),
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* ===== TOP BLACK ===== */}
        <View style={styles.topSection}>
          
          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.locationLabel}>Location</Text>
            <Text style={styles.location}>
              Bilzen, Tanjungbalai{" "}
              <Ionicons name="chevron-down" size={14} color="#fff" />
            </Text>
          </View>

          {/* SEARCH */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
              <Ionicons name="search" size={18} color="#999" />
              <TextInput
                placeholder="Search coffee"
                placeholderTextColor="#999"
                style={styles.input}
              />
            </View>

            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons name="options-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

        </View>

        {/* ===== BODY ===== */}
        <View style={styles.body}>
          
          {/* PROMO */}
          <View style={styles.banner}>
            <Image
              source={require("../assets/Banner.png")}
              style={styles.bannerImg}
              resizeMode="cover"
            />
          </View>

          {/* CATEGORY */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tabs}
          >
            <View style={styles.tab}>
              <Text style={styles.activeTabText}>All Coffee</Text>
            </View>
            <Text style={styles.tabText}>Machiato</Text>
            <Text style={styles.tabText}>Latte</Text>
            <Text style={styles.tabText}>Americano</Text>
          </ScrollView>

          {/* PRODUCTS */}
          <View style={styles.grid}>
            {data.map((item) => (
              <View key={item.id} style={styles.card}>
                <Image
                  source={images[item.image]}
                  style={styles.cardImg}
                />

                <View style={styles.rating}>
                  <Ionicons name="star" size={12} color="#FFD700" />
                  <Text style={styles.ratingText}>4.8</Text>
                </View>

                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc}>{item.desc}</Text>

                <View style={styles.row}>
                  <Text style={styles.price}>$ {item.price}</Text>

                  <TouchableOpacity
                    style={styles.addBtn}
                    onPress={() =>
                      navigation.navigate("Detail", { item })
                    }
                  >
                    <Text style={styles.addText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

        </View>
      </ScrollView>

      {/* BOTTOM TAB (fake UI) */}
      <View style={styles.bottomTab}>
        <Ionicons name="home" size={24} color="#C67C4E" />
        <Ionicons name="heart-outline" size={24} color="#999" />
        <Ionicons name="bag-outline" size={24} color="#999" />
        <Ionicons name="notifications-outline" size={24} color="#999" />
      </View>
    </View>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /* ===== TOP ===== */
  topSection: {
  backgroundColor: "#111",
  paddingBottom: 80,   // 👈 tăng để đủ chỗ cho banner đè
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
},

  header: {
    padding: 20,
    paddingTop: 50,
  },

  locationLabel: {
    color: "#aaa",
    fontSize: 12,
  },

  location: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 4,
  },

  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#2A2A2A",
    borderRadius: 12,
    paddingHorizontal: 10,
    alignItems: "center",
  },

  input: {
    flex: 1,
    marginLeft: 8,
    color: "#fff",
  },

  filterBtn: {
    marginLeft: 10,
    backgroundColor: "#C67C4E",
    padding: 12,
    borderRadius: 12,
  },

  /* ===== BODY ===== */
  body: {
  backgroundColor: "#F5F5F5",
  marginTop: -40,  // 👈 kéo body lên nhẹ
  paddingTop: 40,
},

  banner: {
  marginHorizontal: 20,
  borderRadius: 16,
  overflow: "hidden",

  marginTop: -60,   // 👈 KÉO banner đè lên nền đen
  zIndex: 10,       // 👈 đảm bảo nằm trên

  marginBottom: 15,
},

  bannerImg: {
    width: "100%",
    height: 150,
    borderRadius: 16,
  },

  tabs: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  tab: {
    backgroundColor: "#C67C4E",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 10,
  },

  activeTabText: {
    color: "#fff",
  },

  tabText: {
    marginRight: 15,
    color: "#555",
    alignSelf: "center",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    marginBottom: 15,
  },

  cardImg: {
    width: "100%",
    height: 100,
    borderRadius: 12,
  },

  rating: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    backgroundColor: "#00000080",
    paddingHorizontal: 6,
    borderRadius: 6,
  },

  ratingText: {
    color: "#fff",
    fontSize: 10,
    marginLeft: 2,
  },

  name: {
    fontWeight: "bold",
    marginTop: 8,
  },

  desc: {
    color: "#999",
    fontSize: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  price: {
    fontWeight: "bold",
  },

  addBtn: {
    backgroundColor: "#C67C4E",
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  addText: {
    color: "#fff",
    fontSize: 18,
  },

  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});