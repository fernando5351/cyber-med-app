import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import ImagenPedidos from "../../../assets/icons/orders/basket.png";
import ImagenFlechaP from "../../../assets/icons/arrows/bluereturn.png";
import MenuPedidos from "../../../assets/icons/home/menu.png";
import ProductosPedidos from "../../components/targets/Cartorders";

function Pedidos({ navigation }) {
  return (
    <View style={styles.containerPedidos}>
      <View style={styles.PedidosTop}>
        <TouchableOpacity
          style={styles.contbtn}
          onPress={() => navigation.openDrawer()}
        >
          <Image source={MenuPedidos} style={styles.ImagenMenuP} />
        </TouchableOpacity>
        <Image source={ImagenPedidos} style={styles.ImagePedidos} />
        <Text style={styles.TextPedidos}>Pedidos</Text>
      </View>
      <View style={styles.ContenedorRetroceder}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={ImagenFlechaP} style={styles.FlechaPedidos} />
        </TouchableOpacity>
        <Text style={styles.TextoFlecha}>Pedidos</Text>
      </View>
      <ScrollView style={styles.ContenedorProductosO}>
        <ProductosPedidos />
        <ProductosPedidos />
        <ProductosPedidos />
        <ProductosPedidos />
        <ProductosPedidos />
        <ProductosPedidos />
        <ProductosPedidos />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPedidos: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  ContenedorRetroceder: {
    height: "6%",
  },
  ImagenMenuP: {
    width: "130%",
    height: "60%",
    right: "130%",
    marginLeft: "8%",
  },
  contbtn: {
    marginLeft: "-8%",
  },
  FlechaPedidos: {
    width: "10%",
    height: "80%",
    top: "35%",
    left: "8%",
  },
  TextoFlecha: {
    color: "#3271A5",
    fontFamily: "Roboto",
    left: "25%",
    top: "-43%",
    letterSpacing: 1,
  },
  PedidosTop: {
    backgroundColor: "#4DACD6",
    height: "12%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ImagePedidos: {
    width: "21%",
    height: "85%",
    left: "5%",
  },
  TextPedidos: {
    fontFamily: "Roboto",
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
    top: "1.5%",
    left: "10%",
  },
});

export default Pedidos;
