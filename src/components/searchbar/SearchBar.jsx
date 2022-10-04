import { View, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import Loupe from "../../../assets/icons/search/search.png";

export const SearchBar = () => {
  return (
    <View style={styles.containerSearchbar}>
      <TextInput
        style={styles.inputSearch}
        placeholder="Buscar por Nombre o Tipo"
      />
      <TouchableOpacity>
        <Image style={styles.icoLoupe} source={Loupe} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSearchbar: {
    width: "90%",
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 40,
    marginTop: "7%",
    marginBottom: "7%",
  },
  inputSearch: {
    color: "#3271A5",
    width: "80%",
    height: "100%",
    fontFamily: "Roboto",
  },
  icoLoupe: {
    width: 35,
    height: 40,
  },
});
