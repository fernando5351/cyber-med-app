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
import ImagenFlechaC from "../../../assets/icons/arrows/return.png";
import MenuCarrito from "../../../assets/icons/home/menublue.png";
import ProductosCarrito from "../../components/targets/Cartshopp";

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
      <ScrollView style={styles.ContenedorProductosC}>
        <ProductosCarrito />
        <ProductosCarrito />
        <ProductosCarrito />
        <ProductosCarrito />
        <ProductosCarrito />
        <ProductosCarrito />
      </ScrollView>
      <View style={styles.ContenedorAbajoC}>
        <Text style={styles.TotalStyle}>Total:</Text>
        <Text style={styles.NumeroTotal}>$16.00</Text>
        <TouchableOpacity style={styles.BotonPago}>
          <Text style={styles.TextBotonC}>Proceder al pago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCarrito: {
    flex: 1,
    backgroundColor: "#3271A5",
  },
  ContenedorAbajoC: {
    backgroundColor: "#FFFFFF",
    height: "12%",
    marginTop: "1%",
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
    height: "35%",
    width: "50%",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2.5,
    borderColor: "#3271A5",
    elevation: 3,
    top: "-15%",
  },
  TextBotonC: {
    color: "#FFFFFF",
    fontWeight: "bold",
    letterSpacing: -1,
    fontSize: 19,
    fontFamily: "Roboto",
  },
  ImagenMenuC: {
    width: "130%",
    height: "60%",
    right: "130%",
    marginLeft: "8%",
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
    color: "#FFF",
    fontFamily: "Roboto",
    left: "25%",
    top: "-43%",
    letterSpacing: 1,
  },
  PedidosTopC: {
    backgroundColor: "#FFFFFF",
    height: "13%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ImageCarrito: {
    width: "20%",
    height: "70%",
  },
  TextCarrito: {
    fontFamily: "Roboto",
    fontSize: 35,
    color: "#3271A5",
    fontWeight: "bold",
    letterSpacing: 1,
    top: "1%",
  },
  scrollView: {},
});

export default Carrito;
