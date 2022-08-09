import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ProfileB from "../../../assets/icons/profile/blueuser.png";
import BackW from "../../../assets/icons/arrows/return.png";
import ProfileSW from "../../../assets/icons/profile/usercircle.png";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.containerTop}>
        <Image style={styles.profileTop} source={ProfileB} />
        <Text style={styles.titleTop}>Perfil</Text>
      </View>
      <View style={styles.containerCenter}>
        <View iew style={styles.containerBtn}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
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
          <Text style={styles.textEstablish}>Contraseña : HolaMundo123</Text>
          <Text style={styles.textEstablish}>
            Numero de tarjeta : 12345678910
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
            style={styles.buttonEdit}
          >
            <Text style={styles.textBtn}>EDITAR</Text>
          </TouchableOpacity>
        </View>
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
    height: "14%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profileTop: {
    width: "20%",
    height: "90%",
  },
  titleTop: {
    color: "#8DCFEC",
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Roboto",
    letterSpacing: 2,
  },
  containerCenter: {
    backgroundColor: "#8DCFEC",
    height: "75%",
    alignItems: "center",
  },
  containerBtn: {
    flexDirection: "row",
    height: "15%",
    width: "100%",
    marginTop: "5%",
  },
  btnBack: {
    width: "50%",
    height: "30%",
    marginLeft: "15%",
  },
  profileCenter: {
    width: "20%",
    height: "85%",
    marginLeft: "20%",
  },
  containerForm: {
    height: "60%",
    width: "100%",
  },
  textEstablish: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    marginLeft: "4%",
    marginTop: "6%",
    marginBottom: "6%",
    fontFamily: "Roboto",
  },
  buttonEdit: {
    backgroundColor: "#fff",
    width: "27%",
    marginLeft: "35%",
    marginTop: "7%",
    marginBottom:"5%"
  },
  textBtn: {
    color: "#8DCFEC",
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "Roboto",
    textAlign: "center",
    marginTop: "10%",
    marginBottom: "10%",
  },
});
