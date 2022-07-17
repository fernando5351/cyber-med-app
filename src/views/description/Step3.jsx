import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import icono from "../../../assets/icons/steps/checkcircle.png";
import Flecha from "../../../assets/icons/arrows/bluereturn.png";
import Lapiz from "../../../assets/icons/steps/pencil.png";

const Step3 = () => {
  return (
    <View style={styles.containerPrin}>
      <View style={styles.containerSecundario}>
        <Image style={styles.icono} source={icono} />
        <Text style={styles.paso4}>Paso 4</Text>
      </View>
      <View style={styles.tercerContent}>
        <View style={styles.subContent}>
          <Image style={styles.Flecha} source={Flecha} />
          <Text style={styles.TextCodigo}>Introducir Codigo</Text>
          <Image style={styles.Lapiz} source={Lapiz} />
          <Text style={styles.Text}>Introduce el codigo en la maquina</Text>
        </View>
        <View style={styles.subContentDos}></View>
      </View>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  containerPrin: {
    flex: 1,
    backgroundColor: "#000",
  },
  containerSecundario: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#8DCFEC",
  },
  icono: {
    width: 50,
    height: 50,
  },
  paso4: {
    fontFamily: "monospace",
    fontSize: 40,
    fontWeight: "900",
    color: "#fff",
    marginLeft: 15,
    letterSpacing: -2,
  },
  tercerContent: {
    width: "100%",
    height: "75%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  subContent: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  Flecha: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: 10,
  },
  TextCodigo: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3271A5",
    marginLeft: 60,
    marginTop: -33,
  },
  Lapiz: {
    width: 40,
    height: 40,
    marginTop: "10%",
    marginLeft: "8%",
  },
  Text: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: "20%",
    marginTop: "-8%",
    color: "#3271A5",
  },
  subContentDos: {
    width: "100%",
    height: "30%",
    backgroundColor: "#3271A5",
  },
});
