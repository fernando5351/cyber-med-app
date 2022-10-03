import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Medicina from "../../../assets/images/Aspirina.png";
import DeleteCarrito from "../../../assets/icons/orders/blueremove.png";
import BotonRojo from "../../../assets/icons/orders/minus-circle-solid-24.png";
import BotonVerde from "../../../assets/icons/orders/plus-circle-solid-24.png";

const CartShopp = ({ onPress }) => {
  return (
    <View>
      <View style={styles.ContenedorMedicina}>
        <View style={styles.ContenedorImagen}>
          <Image source={Medicina} style={styles.ImagenMedicina} />
        </View>
        <View style={styles.ContenedorImagenCarrito}>
          <TouchableOpacity>
            <Image source={DeleteCarrito} style={styles.ImagenBorrarCarrito} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={BotonRojo} style={styles.ImagenMenosCarrito} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={BotonVerde} style={styles.ImagenMasCarrito} />
          </TouchableOpacity>
        </View>
        <View style={styles.ContedorPrecios}>
          <Text style={styles.Nombre}>ASPIRINA</Text>
          <Text style={styles.PrecioCantidad1}>Precio:</Text>
          <Text style={styles.Numeros1}>$4.00</Text>
          <Text style={styles.PrecioCantidad2}>Cantidad:</Text>
          <Text style={styles.Numeros2}>1</Text>
          <TouchableOpacity style={styles.Boton} onPress={onPress}>
            <Text style={styles.Textoboton}>Ver mas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ContenedorGlobal: {
    height: "300%",
    backgroundColor: "#000",
  },
  ContenedorImagen: {
    height: "75%",
    width: "40%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#8DCFEC",
    backgroundColor: "#fff",
  },
  ContenedorMedicina: {
    alignSelf: "center",
    height: 140,
    width: "88%",
    margin: "4%",
    borderRadius: 30,
  },
  ContenedorImagenCarrito: {
    height: "50%",
    width: "20%",
    left: "82%",
    top: "-45%",
  },
  ImagenMenosCarrito: {
    top: "-115%",
    width: "40%",
    height: "62%",
    left: "25%",
  },
  ImagenMasCarrito: {
    top: "-123%",
    width: "40%",
    height: "62%",
    left: "25%",
  },
  ImagenBorrarCarrito: {
    width: "41%",
    height: "61%",
    top: "-100%",
    left: "26%",
  },
  ImagenMedicina: {
    width: "90%",
    height: "80%",
    top: "9%",
    left: "5%",
  },
  ContedorPrecios: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "100%",
    top: "-130%",
    alignSelf: "flex-end",
    left: "-2%",
  },
  Nombre: {
    color: "#5F5F5F",
    fontFamily: "monospace",
    fontSize: 15,
    letterSpacing: 1,
  },
  PrecioCantidad1: {
    color: "#4489C1",
    fontFamily: "monospace",
    fontWeight: "bold",
    right: "9.5%",
    top: "5%",
    fontSize: 13,
  },
  PrecioCantidad2: {
    color: "#4489C1",
    fontFamily: "monospace",
    fontWeight: "bold",
    right: "6.5%",
    top: "-7%",
    fontSize: 13,
  },
  Numeros1: {
    color: "#4489C1",
    fontFamily: "monospace",
    left: "17%",
    top: "-10%",
    fontSize: 13,
  },
  Numeros2: {
    color: "#4489C1",
    fontFamily: "monospace",
    left: "18%",
    top: "-22%",
    fontSize: 13,
  },
  Boton: {
    backgroundColor: "#73BFE1",
    height: "25%",
    width: "50%",
    top: "-15%",
    borderRadius: 5,
  },
  Textoboton: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontSize: 18,
    fontFamily: "Roboto",
    top: "3%",
  },
});
export default CartShopp;
