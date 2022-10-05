import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";

export const CartMed = ({ item, index, onPress}) => {
  const { img_url, nombre, precios } = item;

  return (
    <TouchableOpacity
      index={index}
      onPress={onPress}
      style={styles.buttonProduct}
    >
      <Image style={styles.imageProduct} source={{ uri: img_url }} />
      <Text style={styles.titleName}>{nombre}</Text>
      <Text style={styles.subtitlePrice}>USD {precios}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonProduct: {
    width: 125,
    height: 135,
    alignItems: "center",
    marginBottom: "5%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  imageProduct: {
    width: "100%",
    height: "70%",
    borderColor: "#8DCFEC",
    borderWidth: 2,
    borderRadius: 5,
  },
  titleName: {
    color: "#5F5F5F",
    fontFamily: "Roboto",
    fontSize: 15,
  },
  subtitlePrice: {
    color: "#3271A5",
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "700",
  },
});
