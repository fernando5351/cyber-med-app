import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,TextInput, ImageBackground} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FondoRegistrarse from "../../../assets/images/backgroundrecord.jpg"

const RegistroUsuario = () => {
  return (
    <ImageBackground source={FondoRegistrarse} style={styles.containerRegis}> 
    <KeyboardAwareScrollView>
      <View style={styles.containerCenterRegis}> 
        <View>
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
        <TextInput
          style={styles.inputRegis}
          placeholder="Contraseña"
          placeholderTextColor={"#FFFFFF"}
          secureTextEntry={true} 
        />
        <TouchableOpacity>
          <Text style={styles.TextFormularioRegis1}>Ya tienes cuenta? Inicia Sesion</Text>
        </TouchableOpacity>
          <Text style={styles.TextFormularioRegis2}>Minimo 8 caracteres*</Text>
        <TouchableOpacity style={styles.BotonRegis}>
          <Text style={styles.TextBotonRegis}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerRegis: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",    
  },
  TextRegistrarseUnder: {
    color: "#FFFFFF",
    fontFamily: "monospace",
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize:40,
    textAlign: 'center',
  },
  TextParaCuenta: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "monospace",
    fontWeight: "bold",
    textAlign: 'center',
    letterSpacing: 3,
    top: -9,
  },
  TextFormularioRegis1: {
    color: "#FFFFFF",
    fontFamily: "monospace",
    textAlign: 'right',
    top:-150,
    lineHeight: 60,
  },
  TextFormularioRegis2: {
    color: "#FFFFFF",
    fontFamily: "monospace",
    textAlign: 'right',
    top:-125,
    lineHeight: 60,
  },
  containerCenterRegis: {
    height: 730,
    justifyContent: "flex-start",
    top: 140,
    flex:  1,
  },
  inputRegis: {
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 1,
    width: 350,
    height: 50,
    color: "#FFFFFF",
    marginBottom: 40,
    letterSpacing: 2 
  },
  TextBotonRegis:{
    color:'#8DCFEC',
    top: 15,
    fontSize: 13,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    letterSpacing: 4, 
  },
  BotonRegis:{
    backgroundColor: '#FFFFFF',
    width: 230,
    height: 53,
    alignItems: "center",
    elevation: 6,
    borderRadius: 4,
    alignSelf: "center",
    top: -115,
    
  },
});
export default RegistroUsuario;