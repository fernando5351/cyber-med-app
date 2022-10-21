import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
//Iconos
import ImagenCheck from "../../../assets/icons/steps/checkcircle.png";
import ImagenFlecha from "../../../assets/icons/arrows/bluereturn.png";
import ImagenQR from "../../../assets/icons/steps/scan.png";

const Step1 = ({ navigation }) => {
  const url = "https://lovely-lace-production.up.railway.app/qr";

  let base64Logo =
    "data:image/png;base64,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";

  return (
    <View style={styles.content}>
      <View style={styles.containerTop}>
        <Image style={styles.ImagenCheck} source={ImagenCheck} />
        <Text style={styles.styleText}>Paso 3</Text>
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
          <View style={styles.codigoQR}>
            <QRCode
              value={base64Logo}
              logo={base64Logo}
              logoSize={316}
              logoBackgroundColor="transparent"
              size={316}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.textFinal}>Volver a enviar codigo QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#8DCFEC",
  },
  containerTop: {
    width: "100%",
    height: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8DCFEC",
  },
  ImagenCheck: {
    width: 60,
    height: 60,
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
    marginTop: "5%",
  },
  ImagenFlecha: {
    width: "10%",
    height: "45%",
    marginTop: "4%",
    marginLeft: "4%",
  },
  styleTextDos: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "17%",
    marginTop: "-14%",
  },
  ImagenQR: {
    width: "9%",
    height: "26%",
    marginTop: "15%",
    marginLeft: "22%",
  },
  textoIntro: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "34%",
    marginTop: "-7%",
  },
  contentEscaner: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    backgroundColor: "000",
  },
  codigoQR: {
    marginTop: "15%",
    height: "55%",
    width: "75%",
    justifyContent: "center",
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
    marginTop: "10%",
    borderBottomWidth: 1,
    borderColor: "#3271A5",
  },
});
