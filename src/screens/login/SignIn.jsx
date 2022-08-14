import React, { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  Alert,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Cover from "../../../assets/images/startbackground.jpg";
import btnBack from "../../../assets/icons/arrows/blue-returndouble.png";
import EyeClose from "../../../assets/icons/profile/eyesclose.png";
import EyeOpen from "../../../assets/icons/profile/eyes.png";
import Loader from "../../components/loading/Loader";
import {
  isEmailValid,
  isValidObjField,
  updateError,
} from "../../utils/Methods";
import { AuthUser } from "../../utils/AuthContext";

function Signin({ navigation }) {
  const { signIn } = useContext(AuthUser);
  const [userInfo, setUserInfo] = useState({
    correo: "",
    contraseña: "",
  });

  const { correo, contraseña } = userInfo;

  const [passwordSecured, setPasswordSecured] = useState(true);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleOnChangeText = (value, fieldname) => {
    setUserInfo({ ...userInfo, [fieldname]: value });
  };

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    //Ingresar todos los datos
    if (!isValidObjField(userInfo))
      return updateError("Llene todos los campos", setError);
    //Ingresar email existente
    if (!isEmailValid(correo)) return updateError("Email invalido", setError);
    //Ingresar contraseña existente
    if (!contraseña.trim() || contraseña.length < 8)
      return updateError("Contraseña debe tener 8 caracteres", setError);
    //Recibir si hay datos existentes
    if (valid) {
      signin();
      console.log(userInfo);
    }
    valid = false;
  };

  const signin = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);

      let userData = await AsyncStorage.getItem("user");

      if (userData) {
        userData = JSON.parse(userData);
        if (correo == userData.correo && contraseña == userData.contraseña) {
          AsyncStorage.setItem(
            "user",
            JSON.stringify({ ...userData, loggedIn: true })
          );
          signIn();
        } else {
          Alert.alert("Error", "Datos invalidos");
        }
      } else {
        Alert.alert("Error", "El usuario no existe");
      }
    }, 3000);
  };

  return (
    <ImageBackground source={Cover} style={styles.containerSignIn}>
      <Loader visible={loading} />
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View style={styles.subContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.btnback}
          >
            <Image style={styles.icoBtnB} source={btnBack} />
          </TouchableOpacity>
          <View style={styles.containerTitle}>
            <Text style={styles.txtSignIn}>INICIAR SESION</Text>
            <Text style={styles.txtSub}>Para Seguir</Text>
          </View>
          <View style={styles.containerForm}>
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
              style={styles.inputs}
              value={correo}
              onChangeText={(value) => handleOnChangeText(value, "correo")}
              autoComplete="email"
              autoCapitalize="none"
              textContentType="emailAddress"
              autoCorrect={true}
              placeholder="Correo"
              placeholderTextColor={"#8DCFEC"}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              style={styles.btnO}
            >
              <Text style={styles.txtBtnS}>No tienes cuenta? Registrate</Text>
            </TouchableOpacity>
            <View style={styles.inputPassword}>
              <TextInput
                style={styles.inputP}
                value={contraseña}
                onChangeText={(value) =>
                  handleOnChangeText(value, "contraseña")
                }
                textContentType="password"
                autoCapitalize="sentences"
                placeholder="Contraseña"
                placeholderTextColor={"#8DCFEC"}
                secureTextEntry={passwordSecured}
              />
              <TouchableOpacity
                style={styles.contIco}
                onPress={() => {
                  setPasswordSecured(!passwordSecured);
                }}
              >
                <Image
                  style={styles.icoEye}
                  source={passwordSecured ? EyeOpen : EyeClose}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("PasswordRecover")}
              style={styles.btnO}
            >
              <Text style={styles.txtBtnS}>Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={validate} style={styles.btnSignIn}>
              <Text style={styles.txtBtnSignIn}>INICIAR SESION</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerSignIn: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  subContainer: {
    flex: 3,
    height: "100%",
    width: "100%",
    marginTop: "32%",
  },
  btnback: {
    width: "7%",
    height: 25,
    marginLeft: "4%",
  },
  icoBtnB: {
    width: "100%",
    height: "100%",
  },
  containerTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txtSignIn: {
    fontWeight: "bold",
    fontSize: 31,
    color: "#8DCFEC",
    fontFamily: "Roboto",
    letterSpacing: 1,
  },
  txtSub: {
    fontWeight: "600",
    fontSize: 19,
    color: "#8DCFEC",
    fontFamily: "Roboto",
  },
  containerForm: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "20%",
  },
  inputs: {
    width: "80%",
    color: "#8DCFEC",
    height: "25%",
    borderBottomColor: "#8DCFEC",
    borderBottomWidth: 1,
  },
  inputPassword: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    color: "#8DCFEC",
    height: "25%",
    borderBottomColor: "#8DCFEC",
    borderBottomWidth: 1,
  },
  inputP: {
    width: "92%",
    height:"100%",
    color: "#8DCFEC",
  },
  contIco: {
    width: "7%",
    height: "40%",
  },
  icoEye: {
    width: "100%",
    height: "100%",
  },
  btnO: {
    flex: 1,
    marginTop: "4%",
    marginBottom: "4%",
    width: "100%",
    marginLeft: "85%",
  },
  txtBtnS: {
    color: "#8DCFEC",
    fontFamily: "Roboto",
    fontSize: 15,
    width: "100%",
  },
  btnSignIn: {
    marginTop: "5%",
    backgroundColor: "#58AFDD",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtnSignIn: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: "700",
    color: "#fff",
    marginTop: "5%",
    marginBottom: "5%",
  },
});
export default Signin;
