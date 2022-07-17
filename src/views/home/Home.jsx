import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import SearchBarH from "../../components/searchbar/SearchBar";
import Menu from "../../../assets/icons/home/menu.png";
import Profile from "../../../assets/icons/profile/usercircle.png";

function Home({ navigation }) {
  return (
    <ScrollView>
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
        <View style={styles.containerCenter}>
          <Text style={styles.titleMain}>Destacados</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  containerMain: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  containerTop: {
    height: "15%",
    backgroundColor: "#8DCFEC",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  icoMenu: {
    width: 30,
    height: 40,
  },
  icoProfile: {
    width: 50,
    height: 50,
  },
  containerCenter: {
    height: "80%",
    width: "100%",
  },
  titleMain: {
    color: "#3271A5",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});
