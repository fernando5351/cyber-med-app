import React from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ImagenCheck from "../../../assets/icons/steps/checkcircle.png";
import ImagenFlecha from "../../../assets/icons/arrows/bluereturn.png";
import ImagenCard from "../../../assets/icons/steps/creditcard.png";

const Step1 = () => {
  return (
    <View style={styles.containerView}>
      <View style={styles.contentAzul}>
        <Image style={styles.ImagenCheck} source={ImagenCheck} />
        <Text style={styles.styleText}>Paso 1</Text>
      </View>
      <View style={styles.containerSecundario}>
        <View style={styles.subcontent}></View>
        <View style={styles.contentForm}></View>
      </View>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  containerView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#8DCFEC",
  },
  contentAzul: {
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8DCFEC",
  },
  ImagenCheck: {
    width: 50,
    height: 50,
  },
  styleText: {
    fontSize: 40,
    fontWeight: "600",
    color: "#fff",
    marginLeft: 15,
  },
  containerSecundario: {
    width: "100%",
    height: "75%",
    backgroundColor: "#000",
  },
  subcontent: {
    width: "100%",
    height: "25%",
    backgroundColor: "#794747",
  },
  contentForm: {
    width: "100%",
    height: "75%",
    backgroundColor: "#EFCACA",
  },
});
