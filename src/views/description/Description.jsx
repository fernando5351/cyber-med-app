import React from "react";
import { StyleSheet, View, Image } from "react-native";
import ImagenLupa from "../../../assets/icons/search/search.png";

const Description = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentFather}>
          <Image style={styles.ImagenLupa} source={ImagenLupa} />
        </View>
      </View>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  content: {
    width: "100%",
    height: "15%",
    backgroundColor: "#8DCFEC",
  },
  contentFather: {
    width: "90%",
    height: "30%",
    marginTop: "15%",
    marginLeft: "5%",
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  ImagenLupa: {
    width: 30,
    height: 30,
    marginTop: 5,
    marginLeft: "88%",
  },
});
