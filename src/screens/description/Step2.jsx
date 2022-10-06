import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import ImagenCheck from "../../../assets/icons/steps/checkcircle.png";
import ImagenFlecha from "../../../assets/icons/arrows/bluereturn.png";
import ImagenQR from "../../../assets/icons/steps/scan.png";
import ImagenEscaner from "../../../assets/images/QR.png";

const Step2 = ({ navigation }) => {
  return (
    <View style={styles.content}>
      <View style={styles.containerTop}>
        <Image style={styles.ImagenCheck} source={ImagenCheck} />
        <Text style={styles.styleText}>Paso 2</Text>
      </View>
      <View style={styles.contentMedium}>
        <View style={styles.subcontent}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image style={styles.ImagenFlecha} source={ImagenFlecha} />
          </TouchableOpacity>
          <Text style={styles.styleTextDos}>Escanear codigo QR</Text>
          <Image style={styles.ImagenQR} source={ImagenQR} />
          <Text style={styles.textoIntro}>Escarnea el codigo QR</Text>
        </View>
        <View style={styles.contentEscaner}>
          <Image style={styles.ImagenEscaner} source={ImagenEscaner} />
          <TouchableOpacity>
            <Text style={styles.textFinal}>Volver a enviar codigo QR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.colorBoton}
            onPress={() => {
              navigation.navigate("Step4");
            }}
          >
            <Text style={styles.textFinal}>Cambiar a codido Alfanumerico</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Step2;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#8DCFEC",
  },
  containerTop: {
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8DCFEC",
  },
  ImagenCheck: {
    width: "15%",
    height: "75%",
  },
  styleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 15,
    fontFamily: "Roboto",
  },
  contentMedium: {
    width: "100%",
    height: "80%",
    backgroundColor: "#fff",
  },
  subcontent: {
    width: "100%",
    height: "20%",
  },
  ImagenFlecha: {
    width: "10%",
    height: "50%",
    marginTop: "3%",
    marginLeft: "3%",
  },
  styleTextDos: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "17%",
    marginTop: "-13%",
  },
  ImagenQR: {
    width: "10%",
    height: "35%",
    marginTop: "8%",
    marginLeft: "25%",
  },
  textoIntro: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "39%",
    marginTop: "-8%",
  },
  contentEscaner: {
    width: "100%",
    height: "80%",
    alignItems: "center",
  },
  ImagenEscaner: {
    width: "70%",
    height: "60%",
    marginTop: "5%",
  },
  textFinal: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginTop: "8%",
    borderBottomWidth: 1,
    borderColor: "#3271A5",
  },
});
