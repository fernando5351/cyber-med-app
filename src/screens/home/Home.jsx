import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "../../components/searchbar/SearchBar";
import Menu from "../../../assets/icons/home/menu.png";
import { useEffect, useState } from "react";

function Home({ navigation }) {
  const [med, setMed] = useState([]);
  const [filteredMed, setFilteredMed] = useState([]);

  useEffect(() => {
    fetchData("https://ciber-med-api.herokuapp.com/products");
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setMed(json);
      setFilteredMed(json);
      console.log(med);
    } catch (error) {
      console.log(error);
    }
  };

  const searchFilteredFunction = (text) => {
    if (text) {
      const newMed = med.filter((item) => {
        const itemMed = item.nombre
          ? item.nombre.toUpperCase()
          : "".toUpperCase();
        const textMed = text.toUpperCase();
        return itemMed.indexOf(textMed) > -1;
      });
      setFilteredMed(newMed);
    } else {
      setFilteredMed(med);
    }
  };

  /* useEffect(() => {
    fetch("https://ciber-med-api.herokuapp.com/products")
      .then((response) => response.json())
      .then((json) => setMed(json))
      .catch((error) => console.log(error));
    console.log(med);
  }, []);

   */

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.icoMenu} source={Menu} />
        </TouchableOpacity>
        <View style={styles.containerSearch}>
          <SearchBar
            label={"Buscar por Nombre"}
            onChangeText={(text) => {
              searchFilteredFunction(text);
            }}
          />
        </View>
      </View>
      <View style={styles.containerCenter}>
        <Text style={styles.titleMain}>Destacados</Text>
        <ScrollView>
          <View style={styles.viewProducts}>
            {filteredMed.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Description")}
                style={styles.buttonProduct}
              >
                <Image
                  style={styles.imageProduct}
                  source={{ uri: item.img_url }}
                />
                <Text style={styles.titleName}>{item.nombre}</Text>
                <Text style={styles.subtitlePrice}>USD {item.precios}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
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
    width: 40,
    height: 50,
  },
  containerSearch: {
    width: "80%",
  },
  containerCenter: {
    height: "100%",
    width: "100%",
    marginTop: "1%",
  },
  subContainerCenter: {
    width: "100%",
    height: "100%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  titleMain: {
    color: "#3271A5",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginLeft: "3%",
    marginTop: "2%",
    marginBottom: "6%",
  },
  viewProducts: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonProduct: {
    width: 125,
    height: 135,
    alignItems: "center",
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
