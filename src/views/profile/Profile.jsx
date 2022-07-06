import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ProfileB from "../../../assets/icons/profile/blueuser.png";
import BackW from "../../../assets/icons/arrows/return.png";
import ProfileSW from "../../../assets/icons/profile/usercircle.png";

const Profile = () => {
  /* const [text, onChangeText] = React.useState("Useless Text");
        const [number, onChangeNumber] = React.useState(null); */
  return (
    <View style={styles.containerM}>
      <View style={styles.top}>
        <Image style={styles.profileI} source={ProfileB} />
        <Text style={styles.titleP}>PROFILE</Text>
      </View>
      <View style={styles.containerS}>
        <View style={styles.containeIco}>
          <TouchableOpacity>
            <Image style={styles.back} source={BackW} />
          </TouchableOpacity>
          <Image style={styles.profileM} source={ProfileSW} />
        </View>
        <View style={styles.containerForm}>
          <TouchableOpacity style={styles.buttonU}>
            <Text style={styles.textButton}>EDITAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  containerM: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  top: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1%",
    height: "10%",
  },
  profileI: {
    width: 88,
    height: 90,
  },
  titleP: {
    fontSize: 40,
    fontWeight: "600",
    color: "#8DCFEC",
  },
  containerS: {
    backgroundColor: "#8DCFEC",
    height: "80%",
    display: "flex",
    flexDirection: "column",
  },
  back: {
    width: 40,
    height: 40,
  },
  profileM: {
    width: 70,
    height: 70,
    marginLeft: "30%",
  },
  containeIco: {
    marginTop: "3%",
    marginLeft: "3%",
    display: "flex",
    flexDirection: "row",
  },
  containerForm: {
    display: "flex",
    alignItems: "center",
    marginTop: "3%",
  },
  buttonU: {
    backgroundColor: "#fff",
    width: "40%",
  },
  textButton: {
    color: "#8DCFEC",
    textAlign: "center",
    padding: 20,
  },
});
