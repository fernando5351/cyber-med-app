import React, { useState } from "react";
import { 
    Text, 
    TouchableOpacity, 
    TextInput, 
    Image, 
    ImageBackground, 
    StyleSheet, 
    View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Cover from "../../../assets/images/startbackground.jpg";
import Back from "../../../assets/icons/arrows/blue-returndouble.png"; 
import OpeEye from "../../../assets/icons/profile/eyes.png"
import CloseEye from "../../../assets/icons/profile/eyesclose.png"

import { updateError } from "../../utils/Methods";

const PasswordRecover = ({navigation}) => {

    const [passwordSecured, setPasswordSecured] = useState(true);

    const [userInfo, setUserInfo] = useState ({
        contraseña:'',
        confirmarcontraseña:'',
    })

    const {contraseña, confirmarcontraseña} = userInfo;

    const handleOnChangeText = (value, fieldname) => {
        setUserInfo({...userInfo, [fieldname] : value})
    };

    const isValidForm = () => {
        if(!contraseña.trim() || contraseña.length <8) return updateError('Contraseña debe tener 8 caracteres', setError)
        if(contraseña !== confirmarcontraseña) return updateError('Las contraseñas no coinciden', setError)
    }

    const submitForm = () => {
        if(isValidForm()){
          //Enviar formulario de renovacion de contraseña
          console.log(userInfo);
        }
    }

    const [error, setError] = useState('')

return(
    <ImageBackground source={Cover} style={styles.containerMain}>
        <KeyboardAwareScrollView style={{flex:1}}>
            <TouchableOpacity onPress={() => {navigation.goBack()}} style={styles.btnBack}>
            <Image style={styles.icoBack} source={Back} />
            </TouchableOpacity>
            {error ? <Text style={{color:"#FF0B0B" ,fontSize: 15, textAlign:"center", fontFamily:"Roboto"}} >{error}</Text>: null}
            <View style={styles.inputProfilePassword} >
            <TextInput 
            value={contraseña}
            onChangeText={(value) => handleOnChangeText(value, 'contraseña')}
            textContentType="password"
            autoCapitalize="sentences"
            secureTextEntry={passwordSecured} 
            style={styles.inputIn}  
            placeholder="Nueva Contraseña"
            placeholderTextColor={"#8DCFEC"}/>
            <TouchableOpacity
            onPress={() => {
                setPasswordSecured(!passwordSecured)
            }}
            style={styles.contIco}>
                <Image style={styles.icoEye} source={passwordSecured ? OpeEye : CloseEye} />
            </TouchableOpacity>
            </View>
            <TextInput 
            value={confirmarcontraseña}
            onChangeText={(value) => handleOnChangeText(value, 'confirmarcontraseña')}
            textContentType="password"
            autoCapitalize="words"
            secureTextEntry 
            style={styles.inputs} 
            placeholder="Confirmar Contraseña"
            placeholderTextColor={"#8DCFEC"}/>
            <TouchableOpacity
            onPress={submitForm}
            style={styles.btnConfirmar}>
                <Text style={styles.txtBtnC}>CONFIRMAR</Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    </ImageBackground>
)
}

const styles = StyleSheet.create({
    containerMain:{
    flex:1,
    height:"100%",
    width:"100%",
    },
    btnBack:{
    marginTop:"31%",
    width:"7%",
    height:25,
    marginLeft:"4%"
    },
    icoBack:{
    width:"100%",
    height:"100%"
    },
    inputIn:{
     width:"90%",
     height:"100%",
     color:"#8DCFEC"
    },
    contIco:{
    width:"8%",
    height:"40%",
    marginTop:"5%",
    },
    icoEye:{
    width:"100%",
    height:"100%"
    },
    inputs:{
    height: "15%",
    width:"80%",
    borderBottomColor:"#8DCFEC",
    borderBottomWidth:1,
    marginLeft:"10%",
    marginTop:"3%",
    color:"#8DCFEC"
    }, 
    inputProfilePassword:{
    height: "15%",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#8DCFEC",
    borderBottomWidth: 1,
    alignItems:"center",
    marginLeft:"10%",
    marginTop:"5%"
    },
    btnConfirmar:{
    width:"30%",
    marginTop:"10%",
    backgroundColor:"#58AFDD",
    marginLeft:"35%",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:"20%"
    },
    txtBtnC:{
    fontSize:18,
    fontFamily:"Roboto",
    fontWeight:"700",
    color:"#fff",
    marginTop:"10%",
    marginBottom:"10%",
    }
})
export default PasswordRecover;