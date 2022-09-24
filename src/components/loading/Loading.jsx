import React from "react";
import { StyleSheet, View, Image } from "react-native";
import ImagenCarga from "../../../assets/images/cibermed.png";

const LoadingPage = () => {
  return (
    <View style={styles.containerCarga}>
      <Image style={styles.ImageCarga} source={ImagenCarga} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerCarga: {
    flex: 1,
    backgroundColor: "#8DCFEC",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageCarga: {
    width: 243,
    height: 243,
  },
});
export default LoadingPage;
