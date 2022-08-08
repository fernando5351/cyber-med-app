import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import SearchBarH from "../../components/searchbar/SearchBar";
import Products from "../../components/products/Products";
import Menu from "../../../assets/icons/home/menu.png";
import Profile from "../../../assets/icons/profile/usercircle.png";

function Home({ navigation }) {
  return (
    <View style={styles.containerMain}>
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.icoMenu} source={Menu} />
        </TouchableOpacity>
        <SearchBarH />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Image style={styles.icoProfile} source={Profile} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.containerCenter}>
        <View style={styles.subContainerCenter}>
          <View style={styles.containerTitle}>
            <Text style={styles.titleMain}>Destacados</Text>
          </View>
          <View style={styles.containerProduct}>
            <Products />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Description")}>
          <Text style={styles.titleMain}>Destacados</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  containerMain: {
    height: "100%",
    width: "100%",
  },

  containerTop: {
    height: "13%",
    backgroundColor: "#8DCFEC",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  icoMenu: {
    width: 35,
    height: 50,
  },
  icoProfile: {
    width: 60,
    height: 60,
  },
  containerCenter: {
    height: "100%",
    flex: 1,
    width: "100%",
  },
  subContainerCenter: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
    flex: 1,
  },
  containerTitle: {
    width: "100%",
  },
  titleMain: {
    color: "#3271A5",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginLeft: "3%",
    marginTop: "2%",
    marginBottom: "1%",
  },
  containerProduct: {
    height: 150,
    width: 150,
    marginLeft: "7%",
    marginRight: "6%",
    marginBottom: "4%",
    marginTop: "4%",
  },
});
