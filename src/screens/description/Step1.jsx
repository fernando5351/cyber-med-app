import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImagenCheck from "../../../assets/icons/steps/checkcircle.png";
import ImagenFlecha from "../../../assets/icons/arrows/bluereturn.png";
import ImagenCard from "../../../assets/icons/steps/creditcard.png";
import { isValidObjField, updateError } from "../../utils/Methods";

const Step1 = ({ navigation }) => {
  const [data, setData] = useState({
    titular: "",
    numeroTarjeta: "",
    fechaVencimiento: "",
    cvv: "",
  });

  const [error, setError] = useState("");

  const { titular, numeroTarjeta, fechaVencimiento, cvv } = data;

  const handleOnChangeText = (value, fieldName) => {
    setData({ ...data, [fieldName]: value });
  };

  const handleInfo = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!isValidObjField(data))
      return updateError("Llene todos los campos", setError);
    if (!titular.trim() || titular.length < 8)
      return updateError("Ingrese el nombre", setError);
    if (!numeroTarjeta.trim || numeroTarjeta.length < 8)
      return updateError("Ingrese el No de la tarjeta", setError);
    if (!fechaVencimiento.trim() || fechaVencimiento.length < 5)
      return updateError("Ingrese la fecha de vencimiento", setError);
    if (!cvv.trim() || cvv.length < 3)
      return updateError("Ingrese el cvv", setError);
    if (valid) {
      navigation.navigate("Step2");
      console.log(data);
    }
    valid = false;
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerColchon}>
        <View style={styles.containerMain}>
          <Image style={styles.ImagenCheck} source={ImagenCheck} />
          <Text style={styles.styleText}>Paso 1</Text>
        </View>
        <View style={styles.key}>
          <KeyboardAwareScrollView style={styles.keyScroll}>
            <View style={styles.contentTop}>
              <TouchableOpacity
                style={{
                  width: "8%",
                  height: "60%",
                  marginLeft: "2%",
                }}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image style={styles.ImagenFlecha} source={ImagenFlecha} />
              </TouchableOpacity>
              <Text style={styles.styleTextDos}>Completar Compra</Text>
              <Image style={styles.ImagenCard} source={ImagenCard} />
              <Text style={styles.textoIntro}>
                Introducen los datos que se te piden
              </Text>
            </View>
            <View style={styles.contentKey}>
              {error ? (
                <Text
                  style={{
                    color: "#FF0B0B",
                    fontSize: 15,
                    textAlign: "center",
                    fontFamily: "Roboto",
                  }}
                >
                  {error}
                </Text>
              ) : null}
              <TextInput
                value={titular}
                onChangeText={(value) => handleOnChangeText(value, "titular")}
                placeholder="Titular:"
                placeholderTextColor={"#8DCFEC"}
                style={styles.styleForm}
              />
              <TextInput
                value={numeroTarjeta}
                onChangeText={(value) =>
                  handleOnChangeText(value, "numeroTarjeta")
                }
                placeholder="Numero de Tarjeta:"
                placeholderTextColor={"#8DCFEC"}
                style={styles.styleForm}
                keyboardType="numeric"
              />
              <TextInput
                value={fechaVencimiento}
                onChangeText={(value) =>
                  handleOnChangeText(value, "fechaVencimiento")
                }
                placeholder="Vecha de Vencimiento:"
                placeholderTextColor={"#8DCFEC"}
                style={styles.styleForm}
                autoComplete="birthdate-year"
              />
              <TextInput
                value={cvv}
                onChangeText={(value) => handleOnChangeText(value, "cvv")}
                placeholder="CVV:"
                placeholderTextColor={"#8DCFEC"}
                style={styles.styleForm}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.Check}>
              <Text style={styles.Guardar}>Guardar Tarjeta</Text>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => {
                  handleInfo();
                }}
              >
                <Text style={styles.textBtn}>COMPRAR</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8DCFEC",
  },
  containerColchon: {
    backgroundColor: "#fff",
    width: "100%",
    height: "92%",
  },
  containerMain: {
    backgroundColor: "#8DCFEC",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "12%",
  },
  ImagenCheck: {
    width: "15%",
    height: "70%",
  },
  styleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: "3%",
    fontFamily: "Roboto",
  },
  key: {
    backgroundColor: "#000",
    height: "88%",
  },
  keyScroll: {
    backgroundColor: "#fff",
    width: "100%",
    height: "87%",
  },
  contentTop: {
    backgroundColor: "#fff",
    width: "100%",
    height: "20%",
    marginTop: "2%",
    justifyContent: "center",
  },
  contentKey: {
    backgroundColor: "#fff",
    height: "50%",
  },
  styleForm: {
    height: "20%",
    width: "90%",
    marginLeft: "5%",
    marginEnd: 20,
    borderBottomWidth: 1,
    letterSpacing: 2,
    borderColor: "#8DCFEC",
    marginTop: "1%",
    marginBottom: "2%",
    color: "#2b6696",
  },
  Check: {
    backgroundColor: "#fff",
    height: "15%",
    marginTop: "5%",
    marginBottom: "81%",
  },
  ImagenFlecha: {
    width: "100%",
    height: "100%",
  },
  styleTextDos: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "12%",
    marginTop: "-15%",
  },
  ImagenCard: {
    width: "10%",
    height: "40%",
    marginLeft: "10%",
    marginTop: "7%",
  },
  textoIntro: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "22%",
    marginTop: "-7%",
  },
  CheckBox: {
    marginLeft: "5%",
  },
  Guardar: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "15%",
    marginTop: "-6%",
  },
  Button: {
    backgroundColor: "#8DCFEC",
    width: "40%",
    height: "60%",
    borderRadius: 20,
    marginTop: "10%",
    marginLeft: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
});
