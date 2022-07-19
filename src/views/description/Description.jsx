import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import SearchBarD from "../../components/searchbar/SearchBarD";
import ImagenFlecha from "../../../assets/icons/arrows/bluereturn.png";
import ImagenMedicamento from "../../../assets/images/buscapina.jpg";

const Description = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SearchBarD />
      </View>
      <View style={styles.subContent}>
        <View style={styles.contentFlecha}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image style={styles.ImagenFlecha} source={ImagenFlecha} />
          </TouchableOpacity>
          <Text style={styles.styleTextDos}>Descripcion del producto</Text>
          <Image style={styles.ImagenMedicamento} source={ImagenMedicamento} />
          <Text style={styles.TextDescription}>Precio: $1.50</Text>
          <Text style={styles.TextMarca}>Marca: Bayer</Text>
        </View>
      </View>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#8DCFEC",
  },
  content: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8DCFEC",
  },
  subContent: {
    width: "100%",
    height: "88%",
    backgroundColor: "#9C4B9C",
  },
  contentFlecha: {
    width: "100%",
    height: "35%",
    backgroundColor: "#000",
  },
  ImagenFlecha: {
    width: 35,
    height: 35,
    marginLeft: "2%",
    marginTop: "2%",
  },
  styleTextDos: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "13%",
    marginTop: "-8%",
  },
  ImagenMedicamento: {
    width: 150,
    height: 150,
    marginTop: "8%",
    marginLeft: "10%",
  },
  TextDescription: {
    fontSize: 17,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "60%",
    marginTop: "-28%",
  },
  TextMarca: {
    fontSize: 17,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "60%",
    marginTop: "4%",
  },
});
