import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Medicina from "../../../assets/images/buscapina.jpg";

const ProductosHistorial = () => {
  return (
    <View style={styles.ContenedorMedicina}>
      <Image source={Medicina} style={styles.ImagenMedicina} />
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
    backgroundColor: "#C4EDFF",
    alignSelf: "center",
    height: "12%",
    width: "90%",
    margin: "4%",
    borderRadius: 30,
  },
  ImagenMedicina: {
    width: "40%",
    height: "70%",
    alignSelf: "stretch",
    top: "13%",
    left: "6%",
  },
  ContedorPrecios: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "100%",
    top: "-66%",
    alignSelf: "flex-end",
    left: "5%",
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
    top: "-6%",
  },
  Numeros1: {
    color: "#797979",
    fontFamily: "monospace",
    left: "18%",
    top: "-8.5%",
  },
  Numeros2: {
    color: "#797979",
    fontFamily: "monospace",
    left: "17%",
    top: "-20%",
  },
  Boton: {
    backgroundColor: "#3271A5",
    height: "23%",
    width: "45%",
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
export default ProductosHistorial;
