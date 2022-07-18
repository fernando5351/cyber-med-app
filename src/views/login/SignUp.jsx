import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FondoRegistrarse from "../../../assets/images/backgroundrecord.jpg";
import FlechaRegreRegistrar from "../../../assets/icons/arrows/returndouble.png";

import { AuthUser } from "../../users/User";

function Signup({ navigation }) {
  const { signUp } = React.useContext(AuthUser);

  return (
    <ImageBackground source={FondoRegistrarse} style={styles.containerRegis}>
      <KeyboardAwareScrollView>
        <View style={styles.containerCenterRegis}>
          <View>
            <View style={styles.ContenedorRegistroFlecha}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image
                  source={FlechaRegreRegistrar}
                  style={styles.FlechaRegistro}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.TextRegistrarseUnder}>REGISTRARSE</Text>
            <Text style={styles.TextParaCuenta}>Para tu cuenta</Text>
          </View>
          <TextInput
            style={styles.inputRegis}
            placeholder="Nombres"
            placeholderTextColor={"#FFFFFF"}
          />
          <TextInput
            style={styles.inputRegis}
            placeholder="Apellidos"
            placeholderTextColor={"#FFFFFF"}
          />
          <TextInput
            style={styles.inputRegis}
            placeholder="Correo"
            placeholderTextColor={"#FFFFFF"}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.TextFormularioRegis1}>
              Ya tienes cuenta? Inicia Sesion
            </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.inputRegis}
            placeholder="Contraseña"
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry={true}
          />
          <Text style={styles.TextFormularioRegis2}>Minimo 8 caracteres*</Text>
          <TouchableOpacity onPress={() => signUp()} style={styles.BotonRegis}>
            <Text style={styles.TextBotonRegis}>REGISTRARSE</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerRegis: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  ContenedorRegistroFlecha: {
    width: 400,
  },
  FlechaRegistro: {
    marginBottom: 3,
    width: 27,
    height: 27,
    left: 5,
    top: 20,
  },
  TextRegistrarseUnder: {
    color: "#FFFFFF",
    fontFamily: "monospace",
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 40,
    textAlign: "center",
  },
  TextParaCuenta: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "monospace",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 3,
    top: -9,
  },
  TextFormularioRegis1: {
    color: "#FFFFFF",
    fontFamily: "monospace",
    textAlign: "right",
    top: -30,
    right: 19,
  },
  TextFormularioRegis2: {
    color: "#FFFFFF",
    fontFamily: "monospace",
    textAlign: "right",
    top: -35,
    right: 19,
  },
  containerCenterRegis: {
    height: 730,
    justifyContent: "flex-start",
    top: 105,
    flex: 1,
  },
  inputRegis: {
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 1,
    width: 350,
    height: 50,
    color: "#FFFFFF",
    marginBottom: 40,
    letterSpacing: 2,
    left: 30,
  },
  TextBotonRegis: {
    color: "#8DCFEC",
    top: 15,
    fontSize: 13,
    fontFamily: "monospace",
    fontWeight: "bold",
    letterSpacing: 4,
  },
  BotonRegis: {
    backgroundColor: "#FFFFFF",
    width: 230,
    height: 53,
    alignItems: "center",
    elevation: 6,
    borderRadius: 4,
    alignSelf: "center",
    top: -15,
  },
});
export default Signup;
