import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImgMed from "../../../assets/images/buscapina.jpg";
import ImadDelete from "../../../assets/icons/steps/eliminar.png";

const Scroll = () => {
  return (
    <View style={styles.contentMed}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.contentMed}>
          <Image style={styles.imgMed} source={ImgMed} />
          <View style={styles.containerInfo}>
            <Text style={styles.nameMed}>Acetaminofen</Text>
            <Text style={styles.secondInf}>USD $0.50</Text>
            <Text style={styles.secondInf}>Cantidad: 2</Text>
          </View>
          <View style={styles.containerIcos}>
            <Image style={styles.icoDelete} source={ImadDelete} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentMed: {
    height: "100%",
  },
  containerScroll: {
    flex: 1,
    height: "100%",
    backgroundColor: "#D6F2FF",
    marginTop: "-4%",
    borderRadius: 20,
  },
  contentMed: {
    flex: 1,
    marginTop: "3%",
    marginBottom: "3%",
    marginLeft: "5%",
    height: "10%",
    width: "90%",
    flexDirection: "row",
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  imgMed: {
    width: 100,
    height: 90,
    borderRadius: 20,
    marginLeft: "3%",
  },
  containerInfo: {
    width: "43%",
    justifyContent: "center",
    alignItems: "center",
  },
  nameMed: {
    color: "#5F5F5F",
    fontWeight: "500",
  },
  secondInf: {
    color: "#3271A5",
    fontFamily: "Roboto",
    fontWeight: "700",
  },
  containerIcos: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  icoDelete: {
    width: "35%",
    height: "21%",
  },
});
export default Scroll;
