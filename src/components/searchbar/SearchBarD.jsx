import { View, TextInput, StyleSheet, Image } from "react-native";
import Loupe from "../../../assets/icons/search/search.png";

export const SearchBarD = () => {
  return (
    <View style={styles.containerSearchbarD}>
      <TextInput
        style={styles.inputSearchD}
        placeholder="Buscar por Nombre o Tipo"
      />
      <Image style={styles.icoLoupeD} source={Loupe} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerSearchbarD: {
    width: "90%",
    height: 70,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: "7%",
    marginBottom: "7%",
    borderRadius: 40,
  },
  inputSearchD: {
    color: "#3271A5",
    width: "80%",
    height: "100%",
    fontFamily: "Roboto",
  },
  icoLoupeD: {
    width: "15%",
    height: "80%",
  },
});
