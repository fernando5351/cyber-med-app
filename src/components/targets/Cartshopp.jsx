import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Medicina from "../../../assets/images/buscapina.jpg";
import DeleteCarrito from "../../../assets/icons/orders/blueremove.png";

const ProductosCarrito = () => {
  return (
    <View style={styles.ContenedorMedicina}>
      <Image source={Medicina} style={styles.ImagenMedicina} />
      <View style={styles.ContenedorImagenCarrito}>
        <TouchableOpacity>
          <Image source={DeleteCarrito} style={styles.ImagenBorrarCarrito} />
        </TouchableOpacity>
      </View>
      <View style={styles.ContedorPrecios}>
        <Text style={styles.Nombre}>ASPIRINA</Text>
        <Text style={styles.PrecioCantidad1}>Precio:</Text>
        <Text style={styles.Numeros1}>$4.00</Text>
        <Text style={styles.PrecioCantidad2}>Cantidad:</Text>
        <Text style={styles.Numeros2}>1</Text>
        <TouchableOpacity style={styles.Boton}>
          <Text style={styles.Textoboton}>Ver mas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ContenedorMedicina: {
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    height: "14%",
    width: "90%",
    margin: "4%",
    borderRadius: 30,
  },
  ContenedorImagenCarrito: {
    height: "50%",
    width: "20%",
    left: "82%",
    top: "-45%",
  },
  ImagenBorrarCarrito: {
    width: "56%",
    height: "75%",
    top: "10%",
    left: "23%",
  },
  ImagenMedicina: {
    width: "35%",
    height: "75%",
    alignSelf: "stretch",
    top: "10%",
    left: "4%",
  },
  ContedorPrecios: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "100%",
    top: "-120%",
    alignSelf: "flex-end",
    left: "-3%",
  },
  Nombre: {
    color: "#5F5F5F",
    fontFamily: "monospace",
    fontSize: 20,
    letterSpacing: 1,
  },
  PrecioCantidad1: {
    color: "#5F5F5F",
    fontFamily: "monospace",
    fontWeight: "bold",
    right: "9.5%",
    top: "5%",
  },
  PrecioCantidad2: {
    color: "#5F5F5F",
    fontFamily: "monospace",
    fontWeight: "bold",
    right: "6.5%",
    top: "-7%",
  },
  Numeros1: {
    color: "#797979",
    fontFamily: "monospace",
    left: "17%",
    top: "-10%",
  },
  Numeros2: {
    color: "#797979",
    fontFamily: "monospace",
    left: "18%",
    top: "-22%",
  },
  Boton: {
    backgroundColor: "#3271A5",
    height: "25%",
    width: "50%",
    top: "-15%",
  },
  Textoboton: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontSize: 18,
    fontFamily: "Roboto",
    top: "3%",
  },
});
export default ProductosCarrito;
