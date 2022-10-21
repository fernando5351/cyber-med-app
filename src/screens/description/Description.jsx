import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Alert,
} from "react-native";
import axios from "axios";
import { AuthUser } from "../../context/AuthUser";
//Controlador de la pasarela de pago
import { useStripe } from "@stripe/stripe-react-native";
//Iconos
import ImagenFlecha from "../../../assets/icons/arrows/bluereturn.png";
import ImagenCarrito from "../../../assets/icons/description/bluecartadd.png";
import Restar from "../../../assets/icons/orders/minus-circle-solid-24.png";
import Sumar from "../../../assets/icons/orders/plus-circle-solid-24.png";
import Canastita from "../../../assets/icons/orders/basket.png";

const Description = ({ navigation, route }) => {
  const filteredMed = route.params.filteredMed;
  const stripe = useStripe();
  const { userToken } = useContext(AuthUser);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);

  const buyMed = async () => {
    try {
      //send request
      const response = await fetch(
        "https://lovely-lace-production.up.railway.app/payments",
        {
          method: "POST",
          body: JSON.stringify({ user, nombre, total }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
      Alert.alert("Felicidades", "Pago exitoso");
      navigation.navigate("Step1");
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Algo salio mal intente de nuevo!");
    }
  };

  const addOrder = async () => {
    const id_cliente = userToken.id;
    const id_producto = filteredMed.id;

    const res = await axios.post(
      "https://lovely-lace-production.up.railway.app/car_shop",
      {
        id_cliente,
        id_producto,
        cantidad,
      }
    );
    console.log(res);
  };

  const restar = () => {
    if (cantidad !== 0) {
      setCantidad(cantidad - 1);
    }
  };

  const sumar = () => {
    if (cantidad >= 0) {
      setCantidad(cantidad + 1);
    }
  };

  useEffect(() => {
    const precio = filteredMed.precios;
    setTotal(cantidad * precio);
  }, [cantidad]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.Canastita} source={Canastita} />
        <Text style={styles.title}>Descripcion</Text>
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
          <Image
            style={styles.ImagenMedicamento}
            source={{ uri: filteredMed.img_url }}
          />
          <View style={styles.containerMain}>
            <Text style={styles.StyleText}>
              Precio: $ {filteredMed.precios}
            </Text>
            <Text style={styles.StyleText}>Marca: {filteredMed.marca}</Text>
          </View>
        </View>
      </View>
      <View style={styles.ContentInfo}>
        <Text style={styles.TextoInfo}>{filteredMed.nombre}</Text>
        <Text style={styles.TextoDescripcion}>{filteredMed.descripcion}</Text>
        <View style={styles.TextoUso}>
          <Text style={styles.TipoUso}>Tipo de Uso:</Text>
          <Text style={styles.Tipo}>{filteredMed.tipo_uso}</Text>
        </View>
        <View style={styles.ContenedorDos}>
          <Text style={styles.InfoVia}>Via de Administracion:</Text>
          <Text style={styles.Info}>{filteredMed.tipo_consumo}</Text>
        </View>
        <View style={styles.InfoCantidad}>
          <Text style={styles.Cantidad}>Cantidad:</Text>
          <TouchableOpacity onPress={() => restar()}>
            <Image source={Restar} />
          </TouchableOpacity>
          <View style={styles.contentNumber}>
            <Text style={styles.number}>{cantidad}</Text>
          </View>
          <TouchableOpacity onPress={() => sumar()}>
            <Image source={Sumar} />
          </TouchableOpacity>
          <View style={styles.contTotal}>
            <Text style={styles.infoTotal}>Total: ¢ {total}</Text>
          </View>
        </View>
        <View style={styles.Contenedor}>
          <View style={styles.contentBotton}>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => {
                buyMed();
              }}
            >
              <View style={styles.botton}>
                <Text style={styles.bottonText}>Compra Ya</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                addOrder(filteredMed.id);
              }}
            >
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
    flexDirection: "row",
    backgroundColor: "#8DCFEC",
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "800",
    marginLeft: "2%",
  },
  Canastita: {
    width: "15%",
    height: "75%",
    marginRight: "2%",
  },
  subContent: {
    height: "7%",
  },
  ImagenFlecha: {
    width: 35,
    height: 35,
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
    fontWeight: "500",
    color: "#3271A5",
    marginTop: "3%",
    width: "95%",
    textAlign: "center",
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
  },
  InfoVia: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "3%",
    marginTop: "-6.6%",
  },
  Info: {
    fontSize: 18,
    marginLeft: "55%",
    color: "#3271A5",
    marginTop: "-6.6%",
  },
  InfoCantidad: {
    backgroundColor: "#fff",
    height: "15%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  Cantidad: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3271A5",
    marginLeft: "3%",
    marginRight: "3%",
  },
  number: {
    fontSize: 19,
    fontWeight: "500",
    color: "#3271A5",
    textAlign: "center",
  },
  contentNumber: {
    width: "10%",
    height: "65%",
    borderColor: "#3271A5",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginLeft: "3%",
    marginRight: "3%",
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
  contTotal: {
    height: "100%",
    marginLeft: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#3271A5",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  infoTotal: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#3271A5",
    marginLeft: "1%",
    marginRight: "1%",
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
    backgroundColor: "#8DCFEC",
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
