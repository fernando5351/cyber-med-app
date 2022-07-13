import { View, TextInput, StyleSheet, Image } from "react-native";
import Loupe from "../../../assets/icons/search/search.png";

const SearchBar = () => {
  return (
    <View style={styles.containerSearchbar}>
      <TextInput
        style={styles.inputSearch}
        placeholder="Buscar por Nombre o Tipo"
      />
      <Image style={styles.icoLoupe} source={Loupe} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  containerSearchbar: {
    width: "70%",
    height: 70,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: "7%",
    marginBottom: "7%",
  },
  inputSearch: {
    color: "#3271A5",
    width: "80%",
    height: "100%",
    fontFamily: "monospace",
    letterSpacing: -1,
  },
  icoLoupe: {
    width: "20%",
    height: "80%",
  },
});
