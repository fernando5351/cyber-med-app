import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";

export const CartMed = ({ meds, index, onPress }) => {
  const { img_url, nombre, precios } = meds;

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
      <Text style={styles.subtitlePrice}>USD ¢ {precios}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonProduct: {
    width: "34%",
    height: 140,
    alignItems: "center",
    marginBottom: "8%",
    marginLeft: "6%",
    marginRight: "6%",
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
    fontSize: 15,
  },
  subtitlePrice: {
    color: "#3271A5",
    fontSize: 13,
    fontWeight: "bold",
  },
});
