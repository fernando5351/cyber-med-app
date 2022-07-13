import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ProfileB from "../../../assets/icons/profile/blueuser.png";
import BackW from "../../../assets/icons/arrows/return.png";
import ProfileSW from "../../../assets/icons/profile/usercircle.png";

const Profile = () => {
  /* const [text, onChangeText] = React.useState("Useless Text");
        const [number, onChangeNumber] = React.useState(null); */
  return (
    <View style={styles.containerMain}>
      <View style={styles.containerTop}>
        <Image style={styles.profileTop} source={ProfileB} />
        <Text style={styles.titleTop}>Perfil</Text>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.containerBtn}>
          <TouchableOpacity>
            <Image style={styles.btnBack} source={BackW} />
          </TouchableOpacity>
          <Image style={styles.profileCenter} source={ProfileSW} />
        </View>
        <View style={styles.containerForm}>
          <Text style={styles.textEstablish}>Nombre : Diego Enrique</Text>
          <Text style={styles.textEstablish}>Apellidos : Carias Hernandez</Text>
          <Text style={styles.textEstablish}>
            Correo : diegocarias503ida9@gmail.com
          </Text>
          <Text style={styles.textEstablish}>Contraseña : Holagatiti123</Text>
          <Text style={styles.textEstablish}>
            Numero de tarjeta : 12345678910
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonEdit}>
          <Text style={styles.textBtn}>EDITAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: "#fff",
    height: "100%",
  },
  containerTop: {
    height: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profileTop: {
    width: 90,
    height: 90,
  },
  titleTop: {
    color: "#8DCFEC",
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: -1,
    fontFamily: "monospace",
  },
  containerCenter: {
    backgroundColor: "#8DCFEC",
    height: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBtn: {
    flexDirection: "row",
    height: "15%",
    width: "100%",
  },
  btnBack: {
    width: 40,
    height: 40,
    marginLeft: "10%",
  },
  profileCenter: {
    width: 80,
    height: 80,
    marginLeft: "20%",
  },
  containerForm: {
    height: "60%",
    width: "100%",
  },
  textEstablish: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginLeft: "5%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  buttonEdit: {
    backgroundColor: "#fff",
    padding: 15,
    width: "30%",
  },
  textBtn: {
    color: "#8DCFEC",
    fontSize: 20,
    fontFamily: "monospace",
    textAlign: "center",
  },
});
