import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import ImagenHistorial from "../../../assets/icons/orders/medicalcross.png";
import ImagenFlechaH from "../../../assets/icons/arrows/bluereturn.png";
import MenuHistorial from "../../../assets/icons/home/menu.png";
import ProductosHistorial from "../../components/targets/Carthistory";

function Historial({ navigation }) {
  return (
    <View style={styles.containerHistorial}>
      <View style={styles.HistorialTop}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={MenuHistorial} style={styles.ImagenMenuH} />
        </TouchableOpacity>
        <Image source={ImagenHistorial} style={styles.ImageHistorial} />
        <Text style={styles.TextHistorial}>Historial</Text>
      </View>
      <View style={styles.ContenedorRetroceder}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={ImagenFlechaH} style={styles.FlechaHistorial} />
        </TouchableOpacity>
        <Text style={styles.TextoFlechaH}>Historial</Text>
        <View style={styles.BorrarContenedor}> 
        <TouchableOpacity>  
        <Text style={styles.TextoBorrarH}>Borrar Historial</Text>
        </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.ContenedorProductosH}>
        <ProductosHistorial />
        <ProductosHistorial />
        <ProductosHistorial />
        <ProductosHistorial />
        <ProductosHistorial />
        <ProductosHistorial />
        <ProductosHistorial />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHistorial: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  ContenedorRetroceder: {
    height: "6%",
    width: "40%",
    left: "5%"
  },
  BorrarContenedor: {
    left: "80%",
    top: "-45%"
  },
  TextoBorrar: {
    color: "#3271A5",
    fontFamily: "Roboto",
    left: "65%",
    top: "-195%",
    letterSpacing: 1,
    textDecorationLine: "underline",
  },
  ImagenMenuH: {
    width: "10%",
    height: "65%",
    top: "45%",
    left: "7%"
  
  },
  FlechaHistorial: {
    width: "20%",
    height: "90%",
    top: "35%",
    left: "4%",
  },
  TextoFlechaH: {
    color: "#3271A5",
    fontFamily: "Roboto",
    left: "35%",
    top: "-43%",
    letterSpacing: 1,
  },
  TextoBorrarH: {
    color: "#3271A5",
    fontFamily: "Roboto",
    top: "-90%",
    left: "65%",
    letterSpacing: 1,
    textDecorationLine: "underline",
  },
  HistorialTop: {
    backgroundColor: "#4DACD6",
    height: "12%",
    marginLeft: "-5%",
  },
  ImageHistorial: {
    width: "21%",
    height: "85%",
    left: "27%",
    top: "-58%",
  },
  TextHistorial: {
    fontFamily: "Roboto",
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
    top: "-128%",
    left: "50%",
  },
  scrollView: {},
});

export default Historial;
