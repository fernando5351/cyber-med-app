import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import ImagenCheck from "../../../assets/icons/steps/checkcircle.png";
import ImagenFlecha from "../../../assets/icons/arrows/bluereturn.png";
import ImagenRectangle from "../../../assets/icons/steps/check.png";
import { ScrollView } from "react-native-gesture-handler";

const Step2 = () => {
  return (
    <View style={styles.containerPrin}>
      <View style={styles.contentTop}>
        <Image style={styles.ImagenCheck} source={ImagenCheck} />
        <Text style={styles.styleText}>Paso 2</Text>
      </View>
      <View style={styles.contentCompra}>
        <TouchableOpacity>
          <Image style={styles.ImagenFlecha} source={ImagenFlecha} />
        </TouchableOpacity>
        <Text style={styles.styleTextDos}>Completar Compra</Text>
        <Image style={styles.ImagenRectangle} source={ImagenRectangle} />
        <Text style={styles.textoIntro}>Completa tu Compra</Text>
      </View>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.miniContent}></View>
      </ScrollView>
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
    height: "15%",
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
    height: "15%",
    backgroundColor: "#fff",
  },
  ImagenFlecha: {
    width: 40,
    height: 40,
    marginTop: "3%",
    marginLeft: "3%",
  },
  styleTextDos: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "15%",
    marginTop: "-8%",
  },
  ImagenRectangle: {
    width: 35,
    height: 35,
    marginTop: "10%",
    marginLeft: "25%",
  },
  textoIntro: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "36%",
    marginTop: "-7%",
    marginBottom: "5%",
  },
  ScrollView: {
    width: "80%",
    height: "100%",
    marginBottom: "20%",
    marginLeft: "10%",
    marginTop: "5%",
    borderRadius: 30,
    backgroundColor: "#D6F2FF",
  },
});
