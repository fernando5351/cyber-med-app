import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import SearchBarD from "../../components/searchbar/SearchBarD";
import ImagenFlecha from "../../../assets/icons/arrows/bluereturn.png";
import ImagenMedicamento from "../../../assets/images/buscapina.jpg";
import ImagenPlus from "../../../assets/icons/description/pluscircle.png";
import ImagenCarrito from "../../../assets/icons/description/bluecartadd.png";

const Description = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SearchBarD />
      </View>
      <View style={styles.subContent}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={styles.ImagenFlecha} source={ImagenFlecha} />
        </TouchableOpacity>
        <Text style={styles.styleTextDos}>Descripcion del producto</Text>
      </View>
      <View style={styles.contentSub}>
        <View style={styles.contentTop}>
          <Image style={styles.ImagenMedicamento} source={ImagenMedicamento} />
          <View style={styles.containerMain}>
            <Text style={styles.StyleText}>Precio: $1.50</Text>
            <Text style={styles.StyleText}>Marca: Bayer</Text>
          </View>
        </View>
      </View>
      <View style={styles.ContentInfo}>
        <Text style={styles.TextoInfo}>ASPIRINA</Text>
        <Text style={styles.TextoDescripcion}>
          Utilizado como medicamento para tratar el dolor (analgésico), la
          fiebre (antipirético) y la inflamación (antiinflamatorio).
        </Text>
        <View style={styles.TextoUso}>
          <Text style={styles.TipoUso}>Tipo de Uso:</Text>
          <Text style={styles.Tipo}>
            Analgesico, antipiretico, antiinflamatorio
          </Text>
        </View>
        <View style={styles.ContenedorDos}>
          <Text style={styles.InfoVia}>Via de Administracion:</Text>
          <Text style={styles.Info}>Oral</Text>
        </View>
        <View style={styles.InfoCantidad}>
          <Text style={styles.Cantidad}>Cantidad:</Text>
          <Text style={styles.cantidadNum}>1</Text>
          <TouchableOpacity>
            <Image style={styles.ImagenPlus} source={ImagenPlus} />
          </TouchableOpacity>
        </View>
        <View style={styles.Contenedor}>
          <View style={styles.contentBotton}>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => {
                navigation.navigate("Step1");
              }}
            >
              <View style={styles.botton}>
                <Text style={styles.bottonText}>Compra Ya</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.ImagenCarrito} source={ImagenCarrito} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  content: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8DCFEC",
  },
  subContent: {
    height: "7%",
  },
  ImagenFlecha: {
    width: 30,
    height: 30,
    marginTop: "3%",
    marginLeft: "2%",
  },
  styleTextDos: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "12%",
    marginTop: "-7%",
  },
  contentSub: {
    backgroundColor: "#fff",
    height: "20%",
    width: "100%",
  },
  contentTop: {
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  ImagenMedicamento: {
    height: "80%",
    width: "40%",
    marginLeft: "7%",
  },
  containerMain: {
    width: "52%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  StyleText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3271A5",
  },
  ContentInfo: {
    backgroundColor: "#fff",
    height: "40%",
    alignItems: "center",
    marginTop: "4%",
  },
  TextoInfo: {
    fontSize: 20,
    fontWeight: "700",
    color: "#3271A5",
  },
  TextoDescripcion: {
    fontSize: 15,
    fontWeight: "400",
    color: "#3271A5",
    marginTop: "3%",
  },
  TextoUso: {
    backgroundColor: "#fff",
    height: "20%",
    width: "100%",
    marginTop: "5%",
  },
  TipoUso: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "3%",
  },
  Texto: {
    backgroundColor: "#000",
    height: "10%",
    width: "50%",
  },
  Tipo: {
    fontSize: 18,
    fontWeight: "400",
    marginLeft: "35%",
    marginTop: "-7%",
    color: "#3271A5",
  },
  ContenedorDos: {
    backgroundColor: "#fff",
    height: "15%",
    width: "100%",
    justifyContent: "center",
    marginTop: "3%",
  },
  InfoVia: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3271A5",

    marginLeft: "3%",
  },
  Info: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: "55%",
    marginTop: "-6.6%",
    color: "#3271A5",
  },
  InfoCantidad: {
    backgroundColor: "#fff",
    height: "15%",
    width: "100%",
    marginTop: "3%",
    justifyContent: "center",
  },
  Cantidad: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "3%",
  },
  cantidadNum: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: "26%",
    marginTop: "-6.6%",
    color: "#3271A5",
  },
  ImagenPlus: {
    width: 25,
    height: 25,
    marginTop: "-6.6%",
    marginLeft: "34%",
  },
  Contenedor: {
    backgroundColor: "#fff",
    height: "43%",
    width: "100%",
    justifyContent: "center",
  },
  contentBotton: {
    backgroundColor: "#fff",
    height: "60%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  botton: {
    backgroundColor: "#3271A5",
    height: "70%",
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    marginLeft: "10%",
    justifyContent: "center",
  },
  bottonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  Icon: {
    backgroundColor: "#000",
    height: "50%",
    width: "50%",
  },
  ImagenCarrito: {
    height: 70,
    width: 70,
    marginLeft: "35%",
  },
});
