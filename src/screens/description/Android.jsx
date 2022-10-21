import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
//Iconos
import ImagenFondo from "../../../assets/images/thankyoubackground.jpg";
import ImagenCasita from "../../../assets/icons/steps/checkcircle.png";

const Android = ({ navigation }) => {
  return (
    <ImageBackground source={ImagenFondo} style={styles.ImagenFondo}>
      <View style={styles.contentFondo}>
        <Text style={styles.textCenter}>¡GRACIAS POR TU</Text>
        <Text style={styles.textCenter}>COMPRA!</Text>
        <Text style={styles.textFinal}>
          Recuerda, tu salud es lo que importa
        </Text>
        <Image style={styles.ImagenCasita} source={ImagenCasita}></Image>
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
  },
  textCenter: {
    fontSize: 40,
    fontWeight: "500",
    color: "#fff",
  },
  textFinal: {
    color: "#fff",
    marginTop: 35,
    fontSize: 15,
  },
  ImagenCasita: {
    width: 50,
    height: 50,
    marginTop: 40,
  },
});
