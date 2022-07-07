import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ImagenFondo from "../../../assets/images/thankyoubackground.jpg";
import { ImageBackground } from "react-native";

const Android = () => {
  return (
    <ImageBackground source={ImagenFondo} style={styles.ImagenFondo}>
      <View style={styles.contentFondo}>
        <Text style={styles.textCenter}>¡GRACIAS POR TU COMPRA!</Text>
        <Text style={styles.textFinal}>
          Recuerda, tu salud es lo que importa
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Android;

const styles = StyleSheet.create({
  ImagenFondo: {
    flex: 1,
    justifyContent: "center",
  },
  contentFondo: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  textCenter: {
    fontSize: 40,
    fontWeight: "500",
    color: "#fff",
    marginTop: -50,
  },
  textFinal: {
    color: "#fff",
    marginTop: 15,
  },
});
