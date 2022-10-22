import { View, Text, StyleSheet, Image } from "react-native";
import KartSad from "../../../assets/icons/orders/carritoSad.png";

export const EmptyOrder = () => {
  return (
    <View style={styles.contentMain}>
      <View style={styles.contentSecond}>
        <Text style={styles.title}>Ups! Carrito Vacio</Text>
        <Image style={styles.imgCart} source={KartSad} />
      </View>
      <View style={styles.contentThird}>
        <Text style={styles.subtitle}>
          Para tener medicamentos en el carrito debera agregarlos desde la
          descripcion del medicamento deseado.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentMain: {
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D6EAF8",
    width: "80%",
    marginLeft: "10%",
    marginTop: "10%",
  },
  contentSecond: {
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
    marginRight: "5%",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    fontStyle: "italic",
    color: "#4489C1",
    marginTop: "20%",
    textAlign: "center",
  },
  imgCart: {
    marginTop: "-5%",
    height: 250,
    width: 250,
  },
  contentThird: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
    marginRight: "5%",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "italic",
    color: "#0C3C5D",
    textAlign: "center",
  },
});
