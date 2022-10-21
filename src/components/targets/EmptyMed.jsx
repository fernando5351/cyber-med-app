import { View, Text, StyleSheet, Image } from "react-native";
import KartSad from "../../../assets/icons/orders/carritoSad.png";

export const EmptyMed = () => {
  return (
    <View style={styles.contentMain}>
      <View style={styles.contentSecond}>
        <Text style={styles.title}>Ups! No hay Medicamentos</Text>
        <Image style={styles.imgCart} source={KartSad} />
      </View>
      <View style={styles.contentThird}>
        <Text style={styles.subTitle}>
          En estos momentos no se encuentran disponible medicamentos pero...
          Dentro de poco lo estarán, mantengase al pendiente!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentMain: {
    height: 450,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D6EAF8",
    width: "90%",
    marginTop: "15%",
    marginLeft: "5%",
  },
  contentSecond: {
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "7%",
    marginRight: "7%",
  },
  title: {
    marginTop: "14%",
    fontSize: 30,
    fontWeight: "600",
    fontStyle: "italic",
    color: "#4489C1",
    textAlign: "center",
  },
  imgCart: {
    height: 280,
    width: 280,
    marginTop: "-10%",
  },
  contentThird: {
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "3%",
    marginLeft: "3%",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "italic",
    color: "#0C3C5D",
    textAlign: "center",
  },
});
