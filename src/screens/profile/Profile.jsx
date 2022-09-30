import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ProfileB from "../../../assets/icons/profile/blueuser.png";
import BackW from "../../../assets/icons/arrows/return.png";
import ProfileSW from "../../../assets/icons/profile/usercircle.png";
import { AuthUser } from "../../context/AuthUser";

const Profile = ({ navigation }) => {
  const { userToken } = useContext(AuthUser);
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
          <Text style={styles.textEstablish}>Nombre : {userToken.nombres}</Text>
          <Text style={styles.textEstablish}>
            Apellidos : {userToken.apellidos}
          </Text>
          <Text style={styles.textEstablish}>Correo : {userToken.email}</Text>
          <Text style={styles.textEstablish}>Contraseña : **********</Text>
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
    fontSize: 17,
    fontWeight: "700",
    color: "#fff",
    marginTop: "7%",
    marginBottom: "7%",
    marginLeft: "5%",
    fontFamily: "Roboto",
  },
});
