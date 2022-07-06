import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ProfileW from "../../../assets/icons/profile/user.png";
import BackG from "../../../assets/icons/arrows/grayreturn.png";
import ProfileSB from "../../../assets/icons/profile/blueusercircle.png";

const ProfileE = () => {
  return (
    <KeyboardAwareScrollView style={styles.containerSubM}>
      <View style={styles.containerTop}>
        <Image style={styles.profileTop} source={ProfileW} />
        <Text style={styles.titleEdit}>Editar Perfil</Text>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.containerBtn}>
          <TouchableOpacity>
            <Image style={styles.btnBack} source={BackG} />
          </TouchableOpacity>
          <Image style={styles.profileCenter} source={ProfileSB} />
        </View>
        <TextInput
          style={styles.inputProfile}
          placeholder="Nombres"
          placeholderTextColor={"#8DCFEC"}
        />
        <TextInput
          style={styles.inputProfile}
          placeholder="Apellidos"
          placeholderTextColor={"#8DCFEC"}
        />
        <TextInput
          style={styles.inputProfile}
          placeholder="Correo"
          placeholderTextColor={"#8DCFEC"}
        />
        <TextInput
          style={styles.inputProfile}
          placeholder="Contraseña"
          placeholderTextColor={"#8DCFEC"}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.inputProfile}
          placeholder="Número de Tarjeta"
          placeholderTextColor={"#8DCFEC"}
        />
        <TouchableOpacity style={styles.buttonSave}>
          <Text style={styles.textBtn}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ProfileE;

const styles = StyleSheet.create({
  containerSubM: {
    backgroundColor: "#8DCFEC",
  },
  containerTop: {
    height: 115,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profileTop: {
    width: 90,
    height: 90,
  },
  titleEdit: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "600",
    letterSpacing: 0,
    fontFamily: "monospace",
  },
  containerCenter: {
    backgroundColor: "#fff",
    height: 650,
    alignItems: "center",
  },
  containerBtn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    marginBottom: 10,
  },
  btnBack: {
    width: 40,
    height: 40,
    marginLeft: -150,
  },
  profileCenter: {
    width: 75,
    height: 75,
  },
  inputProfile: {
    borderBottomColor: "#8DCFEC",
    borderBottomWidth: 2,
    width: 300,
    height: 80,
    color: "#8DCFEC",
    fontFamily: "monospace",
  },
  buttonSave: {
    backgroundColor: "#8DCFEC",
    padding: 15,
    marginTop: 50,
  },
  textBtn: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "monospace",
  },
});
