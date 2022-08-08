import React from "react";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackG from "../../../assets/icons/arrows/grayreturn.png";
import ProfileSB from "../../../assets/icons/profile/blueusercircle.png";
import ProfileW from "../../../assets/icons/profile/user.png";
import EyeClose from "../../../assets/icons/profile/eyesclose.png"
import EyeOpen from "../../../assets/icons/profile/eyes.png"

import { isValidObjField, updateError, isEmailValid } from "../../utils/Methods";

const ProfileE = ({ navigation }) => {

  const [userInfo, setUserInfo] = useState({
    nombres:'',
    apellidos:'',
    correo:'',
    contraseña:'',
    numeroTarjeta:'',
  })

  const {nombres,  apellidos, correo, contraseña, numeroTarjeta} = userInfo

  const handleOnChangeText = (value, fieldname) =>{
    setUserInfo({...userInfo, [fieldname]: value})
  };

  const isValidForm = () => {
    //Ingresar todos los datos
    if(!isValidObjField(userInfo)) return updateError('Llene todos los campos', setError)
    //Nombre no menor a 3 palabras
    if(!nombres.trim() || nombres.length < 3) return updateError('Nombre muy corto', setError)
    //Appellido no menos a 3 palabras
    if(!apellidos.trim() || apellidos.length < 3) return updateError('Apellido muy corto', setError)
    //Correo valido
    if(!isEmailValid(correo)) return updateError('Email invalido', setError)
    //Contraseña debe de contener mas de 8 caracteres
    if(!contraseña.trim() || contraseña.length < 3) return updateError('Contraseña debe tener 8 caracteres', setError)
    //Numero de tarjeta (Aun no se si sirve XD)
    if (!numeroTarjeta.trim() || numeroTarjeta.length <= 9) return updateError('Numero de tarjeta corto', setError)

    return true;
  }

  const submitForm = () => {
    if(isValidForm()){
      //Enviar formulario
      console.log(userInfo);
    }
  }

  const [error, setError] = useState('')

  const [passwordSecured, setPasswordSecured] = useState(true); 

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerTop}>
        <Image source={ProfileW} style={styles.profileTop} />
        <Text style={styles.titleTop}>Editar Perfil</Text>
      </View>
      <View style={styles.containerCenter}>
        <KeyboardAwareScrollView
        style={styles.containerKeyboard}>
          <View style={styles.subContainerCenter}>
            <View style={styles.containerBtn}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image style={styles.btnBack} source={BackG} />
              </TouchableOpacity>
              <Image style={styles.profileCenter} source={ProfileSB} />
            </View>
            <View style={styles.containerForm}>
              {error ? <Text style={{color:"#FF0B0B" ,fontSize: 15, textAlign:"center", fontFamily:"Roboto"}} >{error}</Text>: null}
              <View style={styles.inputProfile}>
              <TextInput
               value={nombres}
               onChangeText={(value) => handleOnChangeText(value, 'nombres')}
                style={styles.inputProfileE}
                placeholder="Nombres"
                placeholderTextColor={"#8DCFEC"}
                autoCapitalize="words"
                autoCorrect={true}
                autoComplete="name"
              />
              
              </View>
              <View style={styles.inputProfile}>
              <TextInput
               value={apellidos}
               onChangeText={(value) => handleOnChangeText(value, 'apellidos')}
                style={styles.inputProfileE}
                placeholder="Apellidos"
                placeholderTextColor={"#8DCFEC"}
                autoCapitalize="words"
                autoCorrect={true}
                autoComplete="name"
              />
              </View>
              <View style={styles.inputProfile}>
                <TextInput
                 value={correo}
                 onChangeText={(value) => handleOnChangeText(value, 'correo')}
                  style={styles.inputProfileE}
                  placeholder="Correo"
                  placeholderTextColor={"#8DCFEC"}
                  autoComplete="email"
                  autoCapitalize="none"
                  textContentType="emailAddress"
                  autoCorrect={true} 
                />
              </View>
              <View style={styles.inputProfilePassword}>
              <TextInput
                value={contraseña}
                onChangeText={(value) => handleOnChangeText(value, 'contraseña')}
                secureTextEntry={passwordSecured}
                style={styles.inputProfileP}
                placeholder="Contraseña"
                placeholderTextColor={"#8DCFEC"}
                textContentType="password"
                autoCapitalize="sentences"
              />
              <TouchableOpacity
              onPress={() => {setPasswordSecured(!passwordSecured)}}
              style={styles.contIco}
              >
              <Image style={styles.icoEye} 
              source={passwordSecured ? EyeOpen : EyeClose }/>
              </TouchableOpacity>
              </View>
              <View style={styles.inputProfile}>
              <TextInput
              value={numeroTarjeta}
              onChangeText={(value) => handleOnChangeText(value, 'numeroTarjeta')}
                style={styles.inputProfileE}
                placeholder="Numero de Tarjeta"
                placeholderTextColor={"#8DCFEC"}
                keyboardType="numeric"
                autoCorrect={true}
              />
              </View>
              <TouchableOpacity 
                onPress={submitForm}
                style={styles.buttonSave}>
                <Text style={styles.textButton}>GUARDAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default ProfileE;

const styles = StyleSheet.create({
  containerMain: {
    height: "100%",
    backgroundColor: "#8DCFEC",
    flex: 1,
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
    fontSize: 29,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Roboto",
    letterSpacing: 1,
  },
  containerCenter: {
    height: "80%",
    backgroundColor: "#fff",
  },
  containerKeyboard: {
    flex: 3,
    height:"100%",
    display:"flex",
  },
  subContainerCenter: {
    flex: 3,
    height: "100%",
    justifyContent: "center",
    marginTop:"2%",
  },
  containerBtn: {
    flexDirection: "row",
    height: "15%",
    width: "100%",
    marginTop: "5%",
  },
  btnBack: {
    width: "50%",
    height: "40%",
    marginTop: "20%",
    marginLeft: "15%",
  },
  profileCenter: {
    width: "20%",
    height: "90%",
    marginLeft: "20%",
    marginTop: "1%",
  },
  containerForm: {
    height: "85%",
    width: "100%",
    alignItems: "center",
  },
  inputProfile: {
    flex:2,
    color: "#4DACD6",
    marginTop: "5%",
    marginBottom: "5%",
    height: "20%",
    width: "90%",
    borderBottomColor: "#8DCFEC",
    borderBottomWidth: 1,
  },
  inputProfileE:{
    width:"100%",
    color:"#8DCFEC"
  },
  inputProfilePassword:{
    flex:1,
    color: "#4DACD6",
    marginTop: "4%",
    marginBottom:"5%",
    height: "20%",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#8DCFEC",
    borderBottomWidth: 1,
    alignItems:"center",
  },
  inputProfileP:{
    width:"90%",
    color:"#8DCFEC"
  },
  contIco:{
    width:"8%",
    height:"90%",
  },
  icoEye:{
    width:"100%",
    height:"100%"
  },
  buttonSave: {
    flex:1,
    width: "30%",
    backgroundColor: "#8DCFEC",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "13%",
    marginBottom: "15%",
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto",
    textAlign: "center",
    marginTop: "10%",
    marginBottom: "10%",
  },
});
