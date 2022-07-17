import React from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import ImagenCarga from "../../../assets/images/cibermed.png";
import ImagenFondoCarga from "../../../assets/images/loginregister.jpg";

function OpcionesLogin({ navigation }) {
  return (
    <ImageBackground
      source={ImagenFondoCarga}
      style={styles.containerIniciarRegistrar}
    >
      <Image style={styles.ImageCarga} source={ImagenCarga} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignIn");
        }}
        style={styles.Boton1Carga}
      >
        <Text style={styles.Text1Carga}>INICIAR SESION</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        style={styles.Boton2Carga}
      >
        <Text style={styles.Text2Carga}>REGISTRARSE</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerIniciarRegistrar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ImageCarga: {
    width: 243,
    height: 243,
  },
  Text1Carga: {
    color: "#3271A5",
    top: 18,
    fontSize: 15,
    fontFamily: "monospace",
    fontWeight: "bold",
    letterSpacing: 4,
  },
  Text2Carga: {
    color: "#3271A5",
    top: 18,
    fontSize: 15,
    fontFamily: "monospace",
    fontWeight: "bold",
    letterSpacing: 4,
  },
  Boton1Carga: {
    backgroundColor: "#FFFFFF",
    width: 290,
    height: 60,
    borderRadius: 40,
    alignItems: "center",
    top: 20,
  },
  Boton2Carga: {
    backgroundColor: "#FFFFFF",
    width: 290,
    height: 60,
    borderRadius: 40,
    alignItems: "center",
    top: 60,
  },
});
export default OpcionesLogin;
