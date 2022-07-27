import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  ToastAndroid,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Loupe from "../../../assets/icons/search/search.png";

const SearchBarH = () => {
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
    width: "65%",
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

export default SearchBarH;
