import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";
//Componentes
import { CartOrder } from "../../components/targets/CartOrder";
import { EmptyOrder } from "../../components/targets/EmptyOrder";
import Loader from "../../components/loading/Loader";
//Iconos
import ImagenCarrito from "../../../assets/icons/orders/cartblue.png";
import ImagenFlechaC from "../../../assets/icons/arrows/bluereturn.png";
import MenuCarrito from "../../../assets/icons/home/menublue.png";
import { AuthUser } from "../../context/AuthUser";

function Carrito({ navigation }) {
  const { userToken } = useContext(AuthUser);
  const [loading, setLoading] = useState(false);
  const [carritos, setCarritos] = useState([]);
  const [total, setTotal] = useState(0);

  let URL = `https://lovely-lace-production.up.railway.app/car_shop`;
  useEffect(() => {
    setLoading(true);
    const id = userToken.id;
    // fetch(`https://lovely-lace-production.up.railway.app/car_shop/${id}`)
    //   .then((res) => res.json())
    //   .then((json) => setCarritos(json))
    //   .catch((err) => console.log(err))
    //   .finally(() => setLoading(false));

    const getData = async () => {
      const data = await fetch(`${URL}/${id}`);
      const car = await data.json();
      setCarritos(car);
      console.log(carritos);
    };
    getData();
    setLoading(false);
  }, []);

  const deletMed = async (id) => {
    await axios
      .delete(`${URL}/${id}`)
      .then(() => setCarritos(carritos.filter((p) => p.id !== id)));
  };

  useEffect(() => {
    const cantidad = carritos.cantidad;
    const precio = carritos.precios;
    setTotal(cantidad * precio);
  }, []);

  return (
    <View style={styles.containerCarrito}>
      <Loader visible={loading} />
      <View style={styles.PedidosTopC}>
        <TouchableOpacity
          style={styles.contbtn}
          onPress={() => navigation.openDrawer()}
        >
          <Image source={MenuCarrito} style={styles.ImagenMenuC} />
        </TouchableOpacity>
        <Image source={ImagenCarrito} style={styles.ImageCarrito} />
        <Text style={styles.TextCarrito}>Carrito</Text>
      </View>
      <View style={styles.ContenedorRetroceder}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={ImagenFlechaC} style={styles.FlechaCarrito} />
        </TouchableOpacity>
        <Text style={styles.TextoFlechaC}>Carrito</Text>
      </View>
      <View style={styles.contenedorCentro}>
        {carritos.length === 0 ? (
          <EmptyOrder />
        ) : (
          <ScrollView>
            <View style={styles.contentCarts}>
              {carritos.map((carrito, index) => (
                <CartOrder
                  key={index}
                  carrito={carrito}
                  onPressLess={() => restar(carrito.id)}
                  onPressMore={() => sumar(carrito.id)}
                  onPressDelete={() => {
                    deletMed(carrito.id);
                    console.log(carrito.id);
                  }}
                />
              ))}
            </View>
          </ScrollView>
        )}
      </View>
      <View style={styles.ContenedorAbajoC}>
        <Text style={styles.TotalStyle}>Total:</Text>
        <Text style={styles.NumeroTotal}>$0.65</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Step1");
          }}
          style={styles.BotonPago}
        >
          <Text style={styles.TextBotonC}>Proceder al pago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCarrito: {
    flex: 1,
    backgroundColor: "#E7F8FF",
  },
  ContenedorAbajoC: {
    backgroundColor: "#FFFFFF",
    height: "13%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  ContenedorRetroceder: {
    height: "8%",
  },
  TotalStyle: {
    color: "#757575",
    fontFamily: "Roboto",
    fontSize: 17,
    right: "15%",
    top: "-1%",
  },
  NumeroTotal: {
    color: "#4489C1",
    fontWeight: "bold",
    fontFamily: "monospace",
    fontSize: 17,
    left: "10%",
    top: "-26%",
  },
  BotonPago: {
    backgroundColor: "#4489C1",
    height: "43%",
    width: "53%",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 2.5,
    // borderColor: "#3271A5",
    elevation: 3,
    top: "-15%",
  },
  TextBotonC: {
    color: "#FFFFFF",
    fontWeight: "bold",
    letterSpacing: -1,
    fontSize: 19,
    fontFamily: "Roboto",
    letterSpacing: 1,
  },
  ImagenMenuC: {
    width: 35,
    height: 50,
    top: "45%",
    left: "13%",
  },
  contbtn: {
    marginLeft: "-12%",
  },
  FlechaCarrito: {
    width: "9%",
    height: "80%",
    top: "28%",
    left: "8%",
  },
  TextoFlechaC: {
    color: "#4489C1",
    fontFamily: "Roboto",
    left: "25%",
    top: "-43%",
    letterSpacing: 1,
  },
  PedidosTopC: {
    backgroundColor: "#FFFFFF",
    height: 100,
  },
  ImageCarrito: {
    width: "20%",
    height: "70%",
    top: "-35%",
    left: "26%",
  },
  TextCarrito: {
    fontFamily: "Roboto",
    fontSize: 35,
    color: "#3271A5",
    fontWeight: "bold",
    letterSpacing: 1,
    top: "-95%",
    left: "48%",
  },
  contentCarts: {
    alignItems: "center",
  },
  contenedorCentro: {
    height: "61%",
    marginBottom: "10%",
  },
});

export default Carrito;
