import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,TextInput, ImageBackground} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FondoIniciar from "../../../assets/images/startbackground.jpg"

const IniciarSesion = () => {
  return (
    <ImageBackground source={FondoIniciar} style={styles.containerInicio}> 
    <KeyboardAwareScrollView>
      <View style={styles.containerCenterInicio}>
        <View>
        <Text style={styles.TextIniciarSesionUnder}>INICIAR SESION</Text>
        <Text style={styles.TextParaSeguir}>Para seguir</Text>
        </View>
        <TextInput
          style={styles.inputIniciar}
          placeholder="Correo"
          placeholderTextColor={"#3271A5"}
        />
        <TouchableOpacity>
          <Text style={styles.TextFormularioUnder}>No tienes cuenta? Registrate</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputIniciar}
          placeholder="Contraseña"
          placeholderTextColor={"#3271A5"}
          secureTextEntry={true} 
        />
        <TouchableOpacity>
          <Text style={styles.TextFormularioUnder}>Olvidaste tu Contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BotonIniciarS}>
          <Text style={styles.TextBotonInicio}>INICIAR SESION</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerInicio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",    
  },
  TextIniciarSesionUnder: {
    color: "#6ABCE2",
    fontFamily: "monospace",
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize:35,
    textAlign: 'center',
  },
  TextParaSeguir: {
    color: "#6ABCE2",
    fontSize: 20,
    fontFamily: "monospace",
    fontWeight: "bold",
    textAlign: 'center',
    letterSpacing: 3,
  },
  TextFormularioUnder: {
    color: "#3271A5",
    fontFamily: "monospace",
    textAlign: 'right',
    top: 30,
  },
  containerCenterInicio: {
    height: 730,
    justifyContent: "flex-start",
    top: 150,
    flex:  1,
    

  },
  inputIniciar: {
    borderBottomColor: "#8DCFEC",
    borderBottomWidth: 1,
    width: 350,
    height: 60,
    top: 45,
    margin: 20,
    color: "#FFFFFF",
    letterSpacing: 2
  },
  TextBotonInicio:{
    color:'#FFFFFF',
    top: 15,
    fontSize: 13,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    letterSpacing: 4, 
  },
  BotonIniciarS:{
    backgroundColor: '#58AFDD',
    width: 230,
    height: 53,
    alignItems: "center",
    elevation: 6,
    borderRadius: 4,
    alignSelf: "center",
    top: 120,
  },
});
export default IniciarSesion;