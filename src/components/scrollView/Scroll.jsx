import { View, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImagenMedicina from "../../../assets/images/buscapina.jpg";

const Scroll = () => {
  return (
    <ScrollView style={styles.miniContent}>
      <View style={styles.contentMed}>
        <Image style={styles.ImagenMedicina} source={ImagenMedicina} />
      </View>
      <View style={styles.contentMed}></View>
      <View style={styles.contentMed}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  miniContent: {
    width: "80%",
    height: "20%",
    marginTop: "5%",
    marginBottom: "30%",
    marginLeft: "10%",
    borderRadius: 30,
    backgroundColor: "#D6F2FF",
  },
  contentMed: {
    width: "90%",
    height: 90,
    marginTop: "14%",
    marginLeft: "5%",
    backgroundColor: "#1D7A00",
  },
  ImagenMedicina: {
    width: 90,
    height: 90,
    marginLeft: "5%",
  },
});
export default Scroll;
