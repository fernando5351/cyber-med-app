import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import trash from "../../../assets/icons/orders/blueremove.png";
import less from "../../../assets/icons/orders/minus-circle-solid-24.png";
import more from "../../../assets/icons/orders/plus-circle-solid-24.png";

export const CartOrder = ({
  index,
  onPressDelete,
  onPressLess,
  onPressMore,
  carrito,
}) => {
  const { img_url, nombre, precios, cantidad } = carrito;

  return (
    <View index={index} style={styles.contentMain}>
      <View style={styles.contentImage}>
        <Image source={{ uri: img_url }} style={styles.image} />
      </View>
      <View style={styles.contentInfo}>
        <Text style={styles.info}>{nombre}</Text>
        <Text style={styles.infoM}>Precio: ¢ {precios}</Text>
        <Text style={styles.infoM}>Cantidad: {cantidad}</Text>
      </View>
      <View style={styles.contentAction}>
        <TouchableOpacity onPress={onPressDelete}>
          <Image source={trash} style={styles.icoAction} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLess}>
          <Image source={less} style={styles.icoActions} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressMore}>
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
    flexDirection: "row",
    marginBottom: "4%",
    marginTop: "4%",
    backgroundColor: "#fff",
    borderRadius: 20,
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
    marginLeft: "2%",
    width: "45%",
    justifyContent: "center",
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
    marginBottom: "8%",
    marginTop: "5%",
  },
  icoActions: {
    width: 27,
    height: 27,
    marginBottom: "5%",
  },
});
