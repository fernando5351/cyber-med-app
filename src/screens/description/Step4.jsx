import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import ImagenCheck from "../../../assets/icons/steps/checkcircle.png";
import ImagenFlecha from "../../../assets/icons/arrows/bluereturn.png";
import ImagenPencil from "../../../assets/icons/steps/pencil.png";

const Step3 = ({ navigation }) => {
  return (
    <View style={styles.content}>
      <View style={styles.containerTop}>
        <Image style={styles.ImagenCheck} source={ImagenCheck} />
        <Text style={styles.styleText}>Paso 4</Text>
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
          <Text style={styles.styleTextDos}>Introducir codigo</Text>
          <Image style={styles.ImagenPencil} source={ImagenPencil} />
          <Text style={styles.textoIntro}>
            Introduce el codigo en la maquina
          </Text>
        </View>
        <View style={styles.contentEscaner}>
          <Text style={styles.codigoAlfanumerico}>13052984</Text>
          <TouchableOpacity>
            <Text style={styles.textcasiFinal}>Volver a enviar el codigo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.colorBoton}
            onPress={() => {
              navigation.navigate("Step3");
            }}
          >
            <Text style={styles.textFinal}>Cambiar a codido QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#8DCFEC",
  },
  containerTop: {
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
  contentMedium: {
    width: "100%",
    height: "75%",
    backgroundColor: "#fff",
  },
  subcontent: {
    width: "100%",
    height: "20%",
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
  ImagenPencil: {
    width: 35,
    height: 35,
    marginTop: "8%",
    marginLeft: "15%",
  },
  textoIntro: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "25%",
    marginTop: "-6%",
  },
  contentEscaner: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  codigoAlfanumerico: {
    fontSize: 50,
    fontWeight: "600",
    marginTop: "5%",
  },
  textcasiFinal: {
    fontSize: 15,
    fontWeight: "700",
    color: "#3271A5",
    marginTop: "30%",
    borderBottomWidth: 1,
    borderColor: "#3271A5",
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
