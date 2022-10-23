import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { CartMed } from "../../components/targets/CartMed";
import Menu from "../../../assets/icons/home/menu.png";
import icoLogo from "../../../assets/images/cibermed.png";
import Loader from "../../components/loading/Loader";
import { EmptyMed } from "../../components/targets/EmptyMed";
import { MedContext } from "../../context/contextProducts/ProductsContext"

function Home() {
  const { meds } = useContext(MedContext);
  const [filteredMed, setFilteredMed] = useState([]);
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation();

  useEffect(() => {

    setFilteredMed(meds)
    setLoading(false)


  }, [meds]);

  const searchFunction = (text) => {
    if (text) {
      const newMed = meds.filter((item) => {
        const itemNombre = item.nombre
          ? item.nombre.toUpperCase()
          : "".toUpperCase();
        /* const itemTipo = item.tipo_consumo
          ? item.tipo_consumo.toUpperCase()
          : "".toUpperCase(); */
        const textMed = text.toUpperCase();
        return (
          itemNombre.indexOf(textMed) > -1
        ); /* , itemTipo.indexOf(textMed) > -1; */
      });
      setFilteredMed(newMed);
    } else {
      setFilteredMed(meds);
    }
  };

  return (
    <View style={styles.containerMain}>
      <Loader visible={loading} />
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.icoMenu} source={Menu} />
        </TouchableOpacity>
        <View style={styles.containerSearch}>
          <SearchBar
            label={"Buscar por Nombre"}
            onChangeText={(text) => {
              searchFunction(text);
            }}
          />
        </View>
        <Image style={styles.iconLogo} source={icoLogo} />
      </View>
      <View style={styles.containerCenter}>
        <Text style={styles.titleMain}>Medicamentos</Text>
        {filteredMed === 0 ? (
          <EmptyMed />
        ) : (
          <>
            <ScrollView>
              <View style={styles.viewProducts}>
                <>
                  {filteredMed.map((meds, index) => (
                    <CartMed
                      onPress={() => {
                        navigation.navigate("Description", { filteredMed: meds });
                      }}
                      key={index}
                      meds={meds}
                    />
                  ))}
                </>

              </View>
            </ScrollView>
          </>
        )}
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
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  icoMenu: {
    width: 35,
    height: 50,
  },
  containerSearch: {
    width: "65%",
  },
  iconLogo: {
    width: "20%",
    height: "100%",
  },
  containerCenter: {
    height: "89%",
    width: "100%",
    marginTop: "1%",
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
