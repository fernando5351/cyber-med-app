import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImagenMedicina from "../../../assets/images/buscapina.jpg";
import ImagenDelete from "../../../assets/icons/steps/eliminar.png";

const Scroll = () => {
  return (
    <ScrollView style={styles.Scroll}>
      <View style={styles.containerMain}>
        <View style={styles.contentMed}>
          <Image style={styles.ImagenMedicina} source={ImagenMedicina} />
          <Text style={styles.NombreMedi}>BUSCAPINA</Text>
          <Text style={styles.Precio}>USD $1.00</Text>
          <Text style={styles.Cantidad}>Cantidad: 2</Text>
          <TouchableOpacity>
            <Image style={styles.ImagenDelete} source={ImagenDelete} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Scroll: {
    marginLeft: "10%",
    marginTop: "10%",
    width: "80%",
    flex: 1,
    backgroundColor: "red",
  },
  containerMain: {
    height: "100%",
    width: "100%",
    backgroundColor: "#8DCFEC",
    borderRadius: 30,
  },
  contentMed: {
    marginTop: "5%",
    height: "50%",
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "#fff",
  },
  ImagenMedicina: {
    width: "25%",
    height: "15%",
  },
  ImagenDelete: {
    width: "20%",
    height: "10%",
  },
});
export default Scroll;
