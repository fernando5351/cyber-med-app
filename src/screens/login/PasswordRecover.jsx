import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Keyboard,
} from "react-native";
import Loader from "../../components/loading/Loader";
import Cover from "../../../assets/images/startbackground.jpg";
import Back from "../../../assets/icons/arrows/blue-returndouble.png";
import OpeEye from "../../../assets/icons/profile/eyes.png";
import CloseEye from "../../../assets/icons/profile/eyesclose.png";

import {
  isValidObjField,
  updateError,
  isEmailValid,
} from "../../utils/Methods";

const PasswordRecover = ({ navigation }) => {
  const [passwordSecured, setPasswordSecured] = useState(true);

  const [userInfo, setUserInfo] = useState({
    correo: "",
    contraseña: "",
    confirmarcontraseña: "",
  });

  const { correo, contraseña, confirmarcontraseña } = userInfo;

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleOnChangeText = (value, fieldname) => {
    setUserInfo({ ...userInfo, [fieldname]: value });
  };

  const submit = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!isValidObjField(userInfo))
      return updateError("Llene todos los campos", setError);
    if (!isEmailValid(correo)) return updateError("Email invalido", setError);
    if (!contraseña.trim() || contraseña.length < 8)
      return updateError("Contraseña debe tener 8 caracteres", setError);
    if (contraseña !== confirmarcontraseña)
      return updateError("Las contraseñas no coinciden", setError);
    if (valid) {
      recover();
      console.log(userInfo);
    }
    valid = false;
  };

  const recover = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
    }, 3000);
  };

  return (
    <ImageBackground source={Cover} style={styles.containerMain}>
      <Loader visible={loading} />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.btnBack}
      >
        <Image style={styles.icoBack} source={Back} />
      </TouchableOpacity>
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
      <View style={styles.inputProfilePassword}>
        <TextInput
          value={contraseña}
          onChangeText={(value) => handleOnChangeText(value, "contraseña")}
          textContentType="password"
          autoCapitalize="words"
          secureTextEntry={passwordSecured}
          style={styles.inputIn}
          placeholder="Nueva Contraseña"
          placeholderTextColor={"#8DCFEC"}
        />
        <TouchableOpacity
          onPress={() => {
            setPasswordSecured(!passwordSecured);
          }}
          style={styles.contIco}
        >
          <Image
            style={styles.icoEye}
            source={passwordSecured ? OpeEye : CloseEye}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        value={confirmarcontraseña}
        onChangeText={(value) =>
          handleOnChangeText(value, "confirmarcontraseña")
        }
        textContentType="password"
        autoCapitalize="words"
        secureTextEntry
        style={styles.inputs}
        placeholder="Confirmar Contraseña"
        placeholderTextColor={"#8DCFEC"}
      />
      <TouchableOpacity onPress={submit} style={styles.btnConfirmar}>
        <Text style={styles.txtBtnC}>CONFIRMAR</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  btnBack: {
    marginTop: "31%",
    width: "7%",
    height: "4%",
    marginLeft: "4%",
  },
  icoBack: {
    width: "100%",
    height: "100%",
  },
  inputIn: {
    width: "90%",
    height: "100%",
    color: "#8DCFEC",
  },
  contIco: {
    width: "8%",
    height: "40%",
    marginTop: "5%",
  },
  icoEye: {
    width: "100%",
    height: "100%",
  },
  inputs: {
    height: "7%",
    width: "80%",
    borderBottomColor: "#8DCFEC",
    borderBottomWidth: 1,
    marginLeft: "10%",
    marginTop: "3%",
    color: "#8DCFEC",
  },
  inputProfilePassword: {
    height: "7%",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#8DCFEC",
    borderBottomWidth: 1,
    alignItems: "center",
    marginLeft: "10%",
    marginTop: "5%",
  },
  btnConfirmar: {
    width: "30%",
    marginTop: "10%",
    backgroundColor: "#58AFDD",
    marginLeft: "35%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20%",
  },
  txtBtnC: {
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#fff",
    marginTop: "10%",
    marginBottom: "10%",
  },
});
export default PasswordRecover;
