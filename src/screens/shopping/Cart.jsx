import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import ImagenCarrito from "../../../assets/icons/orders/cartblue.png";
import ImagenFlechaC from "../../../assets/icons/arrows/bluereturn.png";
import MenuCarrito from "../../../assets/icons/home/menublue.png";
import ProductosCarrito from "../../components/targets/Cartshopp";
import ScrollCarrito from "../../components/scrollView/ScrollCart";

function Carrito({ navigation }) {
  return (
    <View style={styles.containerCarrito}>
      <View style={styles.PedidosTopC}>
        <TouchableOpacity
          style={styles.contbtn}
          onPress={() => navigation.openDrawer()}
        >
          <Image source={MenuCarrito} style={styles.ImagenMenuC} />
        </TouchableOpacity>
        <Image source={ImagenCarrito} style={styles.ImageCarrito} />
        <Text style={styles.TextCarrito}>Carrito</Text>
      </View>
      <View style={styles.ContenedorRetroceder}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={ImagenFlechaC} style={styles.FlechaCarrito} />
        </TouchableOpacity>
        <Text style={styles.TextoFlechaC}>Carrito</Text>
      </View>
       <ScrollCarrito />
      <View style={styles.ContenedorAbajoC}>
        <Text style={styles.TotalStyle}>Total:</Text>
        <Text style={styles.NumeroTotal}>$16.00</Text>
        <TouchableOpacity   onPress={() => {navigation.navigate("Description");}}
        style={styles.BotonPago}>
          <Text style={styles.TextBotonC}>Proceder al pago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCarrito: {
    flex: 1,
    backgroundColor: "#E7F8FF",
  },
  ContenedorAbajoC: {
    backgroundColor: "#FFFFFF",
    height: "13%",
    alignItems: "center",
    justifyContent: "center",
  },
  ContenedorRetroceder: {
    height: "8%",
  },
  TotalStyle: {
    color: "#757575",
    fontFamily: "Roboto",
    fontSize: 17,
    right: "15%",
    top: "-1%",
  },
  NumeroTotal: {
    color: "#4489C1",
    fontWeight: "bold",
    fontFamily: "monospace",
    fontSize: 17,
    left: "10%",
    top: "-26%",
  },
  BotonPago: {
    backgroundColor: "#4489C1",
    height: "43%",
    width: "53%",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 2.5,
   // borderColor: "#3271A5",
    elevation: 3,
    top: "-15%",
  },
  TextBotonC: {
    color: "#FFFFFF",
    fontWeight: "bold",
    letterSpacing: -1,
    fontSize: 19,
    fontFamily: "Roboto",
    letterSpacing: 1,
  },
  ImagenMenuC: {
    width: "10%",
    height: "65%",
    top: "45%",
    left: "13%"
  },
  contbtn: {
    marginLeft: "-12%",
  },
  FlechaCarrito: {
    width: "9%",
    height: "80%",
    top: "28%",
    left: "8%",
  },
  TextoFlechaC: {
    color: "#4489C1",
    fontFamily: "Roboto",
    left: "25%",
    top: "-43%",
    letterSpacing: 1,
  },
  PedidosTopC: {
    backgroundColor: "#FFFFFF",
    height: "13%",
  },
  ImageCarrito: {
    width: "20%",
    height: "70%",
    top: "-50%",
    left: "26%"
  },
  TextCarrito: {
    fontFamily: "Roboto",
    fontSize: 35,
    color: "#3271A5",
    fontWeight: "bold",
    letterSpacing: 1,
    top: "-110%",
    left: "48%"
  },
  scrollView: {},
});

export default Carrito;
