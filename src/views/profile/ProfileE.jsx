import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackG from "../../../assets/icons/arrows/grayreturn.png";
import ProfileSB from "../../../assets/icons/profile/blueusercircle.png";
import ProfileW from "../../../assets/icons/profile/user.png";
import Fondo from "../../../assets/images/backgroundmain.jpeg";

const ProfileE = () => {
  return (
    <KeyboardAwareScrollView style={styles.keyboard}>
      <View source={Fondo} style={styles.containerMain}>
        <View style={styles.containerTop}>
          <Image style={styles.profileTop} source={ProfileW} />
          <Text style={styles.titleTop}>Editar Perfil</Text>
        </View>
        <View style={styles.containerCenter}>
          <View style={styles.containerBtn}>
            <TouchableOpacity>
              <Image source={BackG} style={styles.btnBack} />
            </TouchableOpacity>
            <Image source={ProfileSB} style={styles.profileCenter} />
          </View>
          <View style={styles.containerForm}>
            <TextInput
              value={Text}
              placeholder="Nombres"
              placeholderTextColor={"#8DCFEC"}
              style={styles.inputProfile}
            />
            <TextInput
              value={Text}
              placeholder="Apellidos"
              placeholderTextColor={"#8DCFEC"}
              style={styles.inputProfile}
            />
            <TextInput
              placeholder="Correo"
              placeholderTextColor={"#8DCFEC"}
              style={styles.inputProfile}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Contraseña"
              placeholderTextColor={"#8DCFEC"}
              style={styles.inputProfile}
            />
            <TextInput
              keyboardType="numeric"
              placeholder="Numero de Tarjeta"
              placeholderTextColor={"#8DCFEC"}
              style={styles.inputProfile}
            />
            <TouchableOpacity
              onPress={Keyboard.dismiss}
              style={styles.buttonSave}
            >
              <Text style={styles.textButton}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
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
    height: "20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: "3%",
  },
  profileTop: {
    width: 90,
    height: 90,
  },
  titleTop: {
    fontFamily: "Roboto",
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
    top: 5,
    left: 5,
  },
  containerCenter: {
    marginTop: "3%",
    height: "80%",
    backgroundColor: "#FFF",
    alignItems: "center",
    flex: 1,
  },
  containerBtn: {
    flexDirection: "row",
    height: "15%",
    width: "100%",
    flex: 1,
  },
  btnBack: {
    width: 45,
    height: 45,
    marginLeft: "10%",
    marginTop: "25%",
  },
  profileCenter: {
    width: 75,
    height: 75,
    marginLeft: "20%",
    marginTop: "3%",
  },
  containerForm: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    height: "85%",
  },
  inputProfile: {
    borderBottomColor: "#8DCFEC",
    borderBottomWidth: 2,
    height: 60,
    width: "90%",
    marginBottom: "6%",
    flex: 1,
  },
  buttonSave: {
    backgroundColor: "#8DCFEC",
    height: "10%",
    width: "30%",
    padding: 8,
    marginTop: "8%",
    marginBottom: "8%",
    flex: 1,
  },
  textButton: {
    textAlign: "center",
    fontSize: 26,
    color: "#fff",
    flex: 1,
  },
  keyboard: {
    flex: 1,
    backgroundColor: "#8DCFEC",
    height: "100%",
  },
});
