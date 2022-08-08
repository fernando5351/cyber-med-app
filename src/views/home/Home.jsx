import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Products from "../../components/targets/CartProducts";
import { SearchBar } from "../../components/searchbar/SearchBar";
import Menu from "../../../assets/icons/home/menu.png";
import Profile from "../../../assets/icons/profile/usercircle.png";

function Home({ navigation }) {
  const Productos = () => {
    navigation.navigate("Description");
  };

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.icoMenu} source={Menu} />
        </TouchableOpacity>
        <View style={styles.containerSearch}>
          <SearchBar />
        </View>
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
          <View style={styles.containerProducts}>
            <View style={styles.viewProducts}>
              <Products onPress={Productos} />
            </View>
            <View style={styles.viewProducts}>
              <Products onPress={Productos} />
            </View>
          </View>
        </View>
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
  containerSearch: {
    width: "70%",
    alignItems: "center",
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
  containerProducts: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  viewProducts: {
    height: 150,
    width: 120,
    marginLeft: "7%",
    marginRight: "8%",
    marginBottom: "5%",
    marginTop: "4%",
  },
});
