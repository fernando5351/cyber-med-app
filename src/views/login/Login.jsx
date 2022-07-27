import React from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import ImagenCarga from "../../../assets/images/cibermed.png";
import ImagenFondoCarga from "../../../assets/images/loginregister.jpg";

function Login({ navigation }) {
  return (
    <ImageBackground
      source={ImagenFondoCarga}
      style={styles.containerLogin}
    >
      <Image style={styles.logo} source={ImagenCarga} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignIn");
        }}
        style={styles.btnSignIn}
      >
        <Text style={styles.txtSignIn}>INICIAR SESION</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        style={styles.btnSignUp}
      >
        <Text style={styles.txtSignUp}>REGISTRARSE</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center"
  },
  logo: {
/*     marginTop:"60%", */
    width: "60%",
    height: "20%",
  },
  btnSignIn: {
    backgroundColor: "#FFFFFF",
    width: "70%",
    height: "7%",
    marginTop:"15%",
    borderRadius: 40,
    alignItems: "center",
    justifyContent:"center",
  },
  txtSignIn: {
    color: "#3271A5",
    fontSize: 15,
    fontFamily: "monospace",
    fontWeight: "bold",
    letterSpacing: 2 
  },
  btnSignUp: {
    backgroundColor: "#FFFFFF",
    width: "70%",
    height: "7%",
    borderRadius: 40,
    alignItems: "center",
    justifyContent:"center",
    marginTop:"15%"
  },
  txtSignUp: {
    color: "#3271A5",
    fontSize: 15,
    fontFamily: "monospace",
    fontWeight: "bold",
    letterSpacing: 4
  },
  

});
export default Login;
