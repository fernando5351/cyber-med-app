import { View, TextInput, StyleSheet, Image } from "react-native";
import Loupe from "../../../assets/icons/search/search.png";

const SearchBarH = () => {
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

const styles = StyleSheet.create({
  containerSearchbar: {
    width: "70%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: "7%",
    marginBottom: "7%",
    borderRadius: 40,
  },
  inputSearch: {
    color: "#3271A5",
    width: "80%",
    height: "100%",
    fontFamily: "Roboto",
  },
  icoLoupe: {
    width: "15%",
    height: "80%",
  },
});

export default SearchBarH;
