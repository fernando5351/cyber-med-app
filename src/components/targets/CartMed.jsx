import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";

export const CartMed = ({ item, index, onPress }) => {
  const { img_url, nombre, precios } = item;

  return (
    <TouchableOpacity
      index={index}
      onPress={onPress}
      style={styles.buttonProduct}
    >
      <View style={styles.contenImg}>
        <Image style={styles.imageProduct} source={{ uri: img_url }} />
      </View>
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
    marginLeft: "8%",
    marginRight: "8%",
  },
  contenImg: {
    width: "100%",
    height: "75%",
    borderColor: "#8DCFEC",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  imageProduct: {
    width: "80%",
    height: "80%",
  },
  titleName: {
    color: "#5F5F5F",
    fontSize: 16,
    letterSpacing: 1,
  },
  subtitlePrice: {
    color: "#3271A5",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
