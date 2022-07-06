import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import ImagenCheck from "../../../assets/icons/steps/checkcircle.png";
import ImagenFlecha from "../../../assets/icons/arrows/bluereturn.png";
import ImagenCard from "../../../assets/icons/steps/creditcard.png";

const Step1 = () => {
  return (
    <View style={styles.containerView}>
      <View style={styles.contentAzul}>
        <Image style={styles.ImagenCheck} source={ImagenCheck} />
        <Text style={styles.styleText}>Paso 1</Text>
      </View>
      <Image style={styles.ImagenFlecha} source={ImagenFlecha} />
      <Text style={styles.styleTextDos}>Registro de tarjeta</Text>
      <Image style={styles.ImagenCard} source={ImagenCard} />
      <Text style={styles.styleTextTres}>
        Introduce los datos que se te piden
      </Text>
      <View style={styles.containerViewDos}>
        <TextInput style={styles.styleTextTres} placeholder="Titular" />
      </View>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  containerView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  contentAzul: {
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8DCFEC",
  },
  styleText: {
    fontFamily: "Raleway",
    fontSize: 50,
    fontWeight: "900",
    color: "#fff",
    marginLeft: 15,
  },
  ImagenCheck: {
    width: 50,
    height: 50,
  },
  styleTextDos: {
    fontFamily: "Raleway",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 60,
    marginTop: -33,
    color: "#3271A5",
  },
  ImagenFlecha: {
    width: 40,
    height: 40,
    marginTop: 5,
    marginLeft: 5,
  },
  ImagenCard: {
    width: 40,
    height: 40,
    marginTop: 30,
    marginLeft: 40,
  },
  styleTextTres: {
    fontFamily: "Raleway",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 90,
    marginTop: -33,
    color: "#3271A5",
  },
  containerViewDos: {
    width: "100%",
    height: "55%",
    backgroundColor: "#000",
  },
});
