import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import ImagenCheck from "../../../assets/icons/steps/checkcircle.png";
import ImagenFlecha from "../../../assets/icons/arrows/bluereturn.png";
import ImagenRectangle from "../../../assets/icons/steps/check.png";
import Scroll from "../../components/scrollView/Scroll";

const Step2 = ({ navigation }) => {
  return (
    <View style={styles.containerPrin}>
      <View style={styles.contentTop}>
        <Image style={styles.ImagenCheck} source={ImagenCheck} />
        <Text style={styles.styleText}>Paso 2</Text>
      </View>
      <View style={styles.contentCompra}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={styles.ImagenFlecha} source={ImagenFlecha} />
        </TouchableOpacity>
        <Text style={styles.styleTextDos}>Completar Compra</Text>
        <Image style={styles.ImagenRectangle} source={ImagenRectangle} />
        <Text style={styles.textoIntro}>Completa tu Compra</Text>
      </View>
      <View style={styles.Alto}>
        <Scroll />
      </View>
      <TouchableOpacity
        style={styles.Boton}
        onPress={() => {
          navigation.navigate("Step3");
        }}
      >
        <Text style={styles.TextBoton}>COMPRAR</Text>
      </TouchableOpacity>
      <View style={styles.contentFondo}></View>
    </View>
  );
};

export default Step2;

const styles = StyleSheet.create({
  containerPrin: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  contentTop: {
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8DCFEC",
  },
  ImagenCheck: {
    width: 50,
    height: 50,
  },
  styleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 15,
    fontFamily: "Roboto",
  },
  contentCompra: {
    width: "100%",
    height: "10%",
    backgroundColor: "#fff",
  },
  ImagenFlecha: {
    width: 30,
    height: 30,
    marginTop: "3%",
    marginLeft: "3%",
  },
  styleTextDos: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "13%",
    marginTop: "-7%",
  },
  ImagenRectangle: {
    width: 30,
    height: 30,
    marginTop: "8%",
    marginLeft: "25%",
  },
  textoIntro: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "34%",
    marginTop: "-6%",
    marginBottom: "5%",
  },
  Alto: {
    height: "80%",
    width: "100%",
  },
  Boton: {
    backgroundColor: "#8DCFEC",
    width: "40%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-45%",
    marginLeft: "30%",
    borderRadius: 20,
  },
  TextBoton: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  contentFondo: {
    backgroundColor: "#8DCFEC",
    width: "100%",
    height: "10%",
    marginTop: "13%",
  },
});
