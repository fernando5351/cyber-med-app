import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, Image, StyleSheet } from "react-native";
import Product from "../../../assets/images/buscapina.jpg";

const Products = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonProduct}>
      <Image style={styles.imageProduct} source={Product} />
      <Text style={styles.titleName}>Buscapina</Text>
      <Text style={styles.subtitlePrice}>USD $1.50</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonProduct: {
    width: 125,
    height: 135,
    alignItems: "center",
    marginLeft:"17%",
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

export default Products;
