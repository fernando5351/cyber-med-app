import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImagenCheck from "../../../assets/icons/steps/checkcircle.png";
import ImagenFlecha from "../../../assets/icons/arrows/bluereturn.png";
import ImagenCard from "../../../assets/icons/steps/creditcard.png";
import CheckBox from "react-native-check-box";

const Step1 = () => {
  return (
    <KeyboardAwareScrollView style={styles.Keyboard}>
      <View style={styles.containerMain}>
        <View style={styles.containerTop}>
          <Image style={styles.ImagenCheck} source={ImagenCheck} />
          <Text style={styles.styleText}>Paso 1</Text>
        </View>
        <View style={styles.containerSecundario}>
          <View style={styles.subcontent}>
            <TouchableOpacity>
              <Image style={styles.ImagenFlecha} source={ImagenFlecha} />
            </TouchableOpacity>
            <Text style={styles.styleTextDos}>Registrar tarjeta</Text>
            <Image style={styles.ImagenCard} source={ImagenCard} />
            <Text style={styles.textoIntro}>
              Introduce los datos que se te piden
            </Text>
          </View>
          <TextInput
            placeholder="Titular:"
            placeholderTextColor={"#8DCFEC"}
            style={styles.styleForm}
          />
          <TextInput
            placeholder="Numero de Tarjeta:"
            placeholderTextColor={"#8DCFEC"}
            style={styles.styleForm}
          />
          <TextInput
            placeholder="Vecha de Vencimiento:"
            placeholderTextColor={"#8DCFEC"}
            style={styles.styleForm}
          />
          <TextInput
            placeholder="CVV:"
            placeholderTextColor={"#8DCFEC"}
            style={styles.styleForm}
          />
          <CheckBox style={styles.checkBox} />
          <Text style={styles.checkText}>Guardar Tarjeta</Text>
          <TouchableOpacity style={styles.colorBoton}>
            <Text style={styles.letraBoton}>SIGUIENTE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Step1;

const styles = StyleSheet.create({
  Keyboard: {
    flex: 1,
    backgroundColor: "#8DCFEC",
  },
  containerMain: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#8DCFEC",
  },
  containerTop: {
    flex: 1,
    width: "100%",
    height: "15%",
    display: "flex",
    marginTop: "5%",
    marginBottom: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  containerSecundario: {
    width: "100%",
    height: "85%",
    backgroundColor: "#fff",
    flex: 1,
  },
  subcontent: {
    width: "100%",
    height: "15%",
    backgroundColor: "#fff",
    flex: 1,
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
  ImagenCard: {
    width: 40,
    height: 40,
    marginTop: "10%",
    marginLeft: "8%",
  },
  textoIntro: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "20%",
    marginTop: "-8%",
    marginBottom: "5%",
  },
  styleForm: {
    fontSize: 15,
    marginTop: 35,
    marginLeft: 20,
    marginEnd: 20,
    borderBottomWidth: 2,
    borderColor: "#8DCFEC",
    marginBottom: "5%",
  },
  checkBox: {
    marginTop: "5%",
    marginLeft: "5%",
  },
  checkText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "13%",
    marginTop: "-6%",
    marginBottom: "5%",
  },
  colorBoton: {
    width: "35%",
    height: "9%",
    marginTop: "5%",
    backgroundColor: "#8DCFEC",
    marginBottom: "15%",
    marginLeft: "33%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  letraBoton: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
