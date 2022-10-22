import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthUser } from "../../context/AuthUser";
//Metodos de los formularios
import {
  isValidObjField,
  isEmailValid,
  updateError,
} from "../../utils/Methods";
//Componente
import Loader from "../../components/loading/Loader";
//Fondo de pantalla e Iconos
import Cover from "../../../assets/images/backgroundrecord.jpg";
import btnBack from "../../../assets/icons/arrows/returndouble.png";
import OpenEye from "../../../assets/icons/profile/whiteeyes.png";
import CloseEye from "../../../assets/icons/profile/whiteblockeyes.png";

function Signup({ navigation }) {
  const { isLoading, register } = useContext(AuthUser);
  const [userInfo, setuserInfo] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    contrasenia: "",
  });
  const { nombres, apellidos, email, contrasenia } = userInfo;
  const [passwordSecured, setPasswordSecured] = useState(true);
  const [error, setError] = useState("");

  const handleOnChangeText = (value, fieldname) => {
    setuserInfo({ ...userInfo, [fieldname]: value });
  };

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    //Ingresar todos los datos
    if (!isValidObjField(userInfo))
      return updateError("Llene todos los campos", setError);
    //Ingresar dos nombres
    if (!nombres.trim() || nombres.length < 5)
      return updateError("Debe contener los dos nombres", setError);
    //Ingresar dos apellidos
    if (!apellidos.trim() || apellidos.length < 5)
      return updateError("Debe contener los dos apellidos", setError);
    //Ingresar un email valido
    if (!isEmailValid(email)) return updateError("Email invalido", setError);
    //Ingresar una contraseña mayor a 8
    if (!contrasenia.trim() || contrasenia.length < 8)
      return updateError("Contraseña debe tener 8 caracteres", setError);
    //Creando los datos para el usuario
    if (valid) {
      register(nombres, apellidos, email, contrasenia);
      /* console.log(userInfo); */
    }
    valid = false;
  };

  return (
    <ImageBackground source={Cover} style={styles.containerSignUp}>
      <Loader visible={isLoading} />
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View style={styles.subContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.btnBack}
          >
            <Image style={styles.icoBack} source={btnBack} />
          </TouchableOpacity>
          <View style={styles.containerTitle}>
            <Text style={styles.txtSignUp}>REGISTRATE</Text>
            <Text style={styles.txtSub}>Para tu Cuenta</Text>
          </View>
          <View style={styles.containerForm}>
            {error ? (
              <Text
                style={{
                  marginTop: "1%",
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
              value={nombres}
              onChangeText={(value) => handleOnChangeText(value, "nombres")}
              autoCapitalize="words"
              autoCorrect={true}
              style={styles.inputs}
              placeholderTextColor="#fff"
              placeholder="Nombres"
            />
            <TextInput
              value={apellidos}
              onChangeText={(value) => handleOnChangeText(value, "apellidos")}
              autoCapitalize="words"
              autoCorrect={true}
              style={styles.inputs}
              placeholderTextColor="#fff"
              placeholder="Apellidos"
            />
            <TextInput
              value={email}
              onChangeText={(value) => handleOnChangeText(value, "email")}
              autoComplete="email"
              autoCapitalize="none"
              textContentType="emailAddress"
              autoCorrect={true}
              style={styles.inputs}
              placeholderTextColor="#fff"
              placeholder="Correo"
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("SignIn")}
              style={styles.btnO}
            >
              <Text style={styles.txtBtnS}>
                Ya tienes cuenta? Iniciar Sesion
              </Text>
            </TouchableOpacity>

            <View style={styles.inputPassword}>
              <TextInput
                value={contrasenia}
                onChangeText={(value) =>
                  handleOnChangeText(value, "contrasenia")
                }
                textContentType="password"
                autoCapitalize="sentences"
                style={styles.inputP}
                placeholderTextColor="#fff"
                placeholder="Contraseña"
                secureTextEntry={passwordSecured}
              />
              <TouchableOpacity
                onPress={() => {
                  setPasswordSecured(!passwordSecured);
                }}
                style={{ marginTop: "5%", width: "7%", height: "35%" }}
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={passwordSecured ? OpenEye : CloseEye}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={validate} style={styles.btnSignUp}>
              <Text style={styles.txtBtnSU}>REGISTRARSE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerSignUp: {
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
  btnBack: {
    width: "7%",
    height: 25,
    marginLeft: "4%",
  },
  icoBack: {
    width: "100%",
    height: "100%",
  },
  containerTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txtSignUp: {
    fontWeight: "bold",
    fontSize: 33,
    color: "#fff",
    fontFamily: "Roboto",
    letterSpacing: 1,
  },
  txtSub: {
    fontWeight: "600",
    fontSize: 19,
    color: "#fff",
    fontFamily: "Roboto",
  },
  containerForm: {
    flex: 1,
    width: "100%",
    height: "70%",
    alignItems: "center",
    marginBottom: "70%",
  },
  inputs: {
    height: "20%",
    width: "80%",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    marginTop: "1%",
    color: "#2b6696",
  },
  inputPassword: {
    flexDirection: "row",
    alignItems: "center",
    height: "20%",
    width: "80%",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },
  inputP: {
    color: "#2b6696",
    width: "92%",
  },
  btnO: {
    flex: 1,
    marginTop: "2%",
    width: "100%",
    marginLeft: "70%",
  },
  txtBtnS: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 15,
    width: "100%",
  },
  /*   txt:{
    color:"#fff",
    fontFamily:"Roboto",
    fontSize:15,
    width:"100%",
    marginLeft:"100%",
    marginBottom:"3%",
  }, */
  btnSignUp: {
    marginTop: "10%",
    width: "35%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtnSU: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: "700",
    color: "#8DCFEC",
    marginTop: "8%",
    marginBottom: "8%",
  },
});
export default Signup;
