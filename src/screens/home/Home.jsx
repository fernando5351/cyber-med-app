import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SearchBar } from "../../components/searchbar/SearchBar";
import Menu from "../../../assets/icons/home/menu.png";

function Home({ navigation }) {
  const [med, setMed] = useState([]);

  const urlApi = "https://ciber-med-api.herokuapp.com/products";

  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((json) => setMed(json))
      .catch((error) => console.log(error));
    console.log(med);
  }, []);

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.icoMenu} source={Menu} />
        </TouchableOpacity>
        <View style={styles.containerSearch}>
          <SearchBar />
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.subContainerCenter}>
          <View style={styles.containerTitle}>
            <Text style={styles.titleMain}>Destacados</Text>
          </View>
          <ScrollView>
            <View style={styles.viewProducts}>
              {med.map((get) => (
                <TouchableOpacity
                  key={get.id}
                  onPress={() => navigation.navigate("Description")}
                  style={styles.buttonProduct}
                >
                  <Image
                    style={styles.imageProduct}
                    source={{ uri: get.img_url }}
                  />
                  <Text style={styles.titleName}>{get.nombre}</Text>
                  <Text style={styles.subtitlePrice}>USD: {get.precios} $</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
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
    width: "80%",
  },
  containerCenter: {
    height: "100%",
    width: "100%",
  },
  subContainerCenter: {
    width: "100%",
    height: "100%",
    flex: 1,
    marginTop: "5%",
    marginBottom: "5%",
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
    marginBottom: "5%",
  },
  viewProducts: {
    height: "100%",
    width: "100%",
    /*     flexWrap: "wrap",
    flexDirection: "row", */
    justifyContent: "center",
  },
  buttonProduct: {
    width: 115,
    height: 125,
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "5%",
  },
  imageProduct: {
    width: "100%",
    height: "70%",
    borderColor: "#8DCFEC",
    borderWidth: 2,
    borderRadius: 5,
  },
  titleName: {
    color: "#5F5F5F",
    fontFamily: "Roboto",
    fontSize: 15,
  },
  subtitlePrice: {
    color: "#3271A5",
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "700",
  },
});
