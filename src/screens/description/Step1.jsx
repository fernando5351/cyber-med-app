import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImagenCheck from "../../../assets/icons/steps/checkcircle.png";
import ImagenFlecha from "../../../assets/icons/arrows/bluereturn.png";
import ImagenCard from "../../../assets/icons/steps/creditcard.png";

const Step1 = ({ navigation }) => {
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
            </View>
            <View style={styles.Check}>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => {
                  navigation.navigate("Step2");
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
    height: 100,
  },
  ImagenCheck: {
    width: 60,
    height: 60,
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
    marginTop: "5%",
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
  },
  Check: {
    backgroundColor: "#fff",
    height: "15%",
    marginTop: "5%",
    marginBottom: "81%",
  },
  ImagenFlecha: {
    width: "97%",
    height: "90%",
    marginLeft: "10%",
  },
  styleTextDos: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "13%",
    marginTop: "-17%",
  },
  ImagenCard: {
    width: "8%",
    height: "30%",
    marginLeft: "10%",
    marginTop: "10%",
  },
  textoIntro: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "22%",
    marginTop: "-7%",
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
    height: "55%",
    borderRadius: 20,
    marginTop: "15%",
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
