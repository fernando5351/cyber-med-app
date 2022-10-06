import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Aspirina from "../../../assets/images/Aspirina.png";
import trash from "../../../assets/icons/orders/blueremove.png";
import less from "../../../assets/icons/orders/minus-circle-solid-24.png";
import more from "../../../assets/icons/orders/plus-circle-solid-24.png";

export const CartOrder = () => {
  return (
    <View style={styles.contentMain}>
      <View style={styles.contentImage}>
        <Image source={Aspirina} style={styles.image} />
      </View>
      <View style={styles.contentInfo}>
        <Text style={styles.info}>Acetaminofen</Text>
        <Text style={styles.infoM}>Precio: $50.00</Text>
        <Text style={styles.infoM}>Cantidad: 20</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>Ver Mas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentAction}>
        <TouchableOpacity>
          <Image source={trash} style={styles.icoAction} />
        </TouchableOpacity>
        <Image source={less} style={styles.icoActions} />
        <TouchableOpacity />
        <TouchableOpacity>
          <Image source={more} style={styles.icoActions} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentMain: {
    height: 100,
    width: "90%",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "5%",
    marginTop: "5%",
  },
  contentImage: {
    width: "35%",
    borderRadius: 10,
    borderColor: "#8DCFEC",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "85%",
    width: "85%",
  },
  contentInfo: {
    width: "45%",
    alignItems: "center",
  },
  info: {
    color: "#5F5F5F",
    fontSize: 16,
    letterSpacing: 1,
    marginTop: "-3%",
  },
  infoM: {
    color: "#4489C1",
    fontWeight: "bold",
    fontSize: 13,
    letterSpacing: 1,
    marginBottom: "1%",
  },
  btn: {
    backgroundColor: "#73BFE1",
    height: "26%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  txtBtn: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  contentAction: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  icoAction: {
    width: 24,
    height: 24,
    marginBottom: "10%",
  },
  icoActions: {
    width: 27,
    height: 27,
    marginBottom: "10%",
  },
});
