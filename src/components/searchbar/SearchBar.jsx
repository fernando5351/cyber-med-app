import { View, TextInput, StyleSheet, Image } from "react-native";
import Loupe from "../../../assets/icons/search/search.png";

export const SearchBar = ({ label, onChangeText }) => {
  return (
    <View style={styles.containerSearchbar}>
      <TextInput
        style={styles.inputSearch}
        placeholder={label}
        onChangeText={onChangeText}
      />
      <Image style={styles.icoLoupe} source={Loupe} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerSearchbar: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    marginTop: "6%",
    marginBottom: "6%",
  },
  inputSearch: {
    color: "#2b6696",
    width: "80%",
    height: "100%",
    fontFamily: "Roboto",
  },
  icoLoupe: {
    width: 35,
    height: 40,
  },
});
