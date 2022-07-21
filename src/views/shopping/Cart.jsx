import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import ImagenCarrito from '../../../assets/icons/orders/cartblue.png'
import ImagenFlechaC from '../../../assets/icons/arrows/return.png'
import MenuCarrito from '../../../assets/icons/home/menublue.png'
import ProductosCarrito from '../../components/targets/Cartshopp';

function Carrito({ navigation }){
  return (
    <View style={styles.containerCarrito}>
    <View style={styles.PedidosTopC}>
    <TouchableOpacity onPress={() => navigation.openDrawer() }> 
    <Image source={MenuCarrito} style={styles.ImagenMenuC}/>
    </TouchableOpacity>
    <Image source={ImagenCarrito} style={styles.ImageCarrito}/>
    <Text style={styles.TextCarrito}>Carrito</Text>
    </View>
    <View style={styles.ContenedorRetroceder}> 
    <TouchableOpacity onPress={() => {  navigation.goBack(); }}>
    <Image source={ImagenFlechaC}style={styles.FlechaCarrito}/>
    </TouchableOpacity>
    <Text style={styles.TextoFlechaC}>Carrito</Text>
    </View>
    <ScrollView style={styles.ContenedorProductosC}>
      <ProductosCarrito/>
      <ProductosCarrito/>
      <ProductosCarrito/>
      <ProductosCarrito/>
      <ProductosCarrito/>
      <ProductosCarrito/>
    </ScrollView>
    <View style={styles.ContenedorAbajoC}>
    <Text style={styles.TotalStyle}>Total</Text>
    <Text style={styles.NumeroTotal}>$16.00</Text>
    <TouchableOpacity style={styles.BotonPago}>
      <Text style={styles.TextBotonC}>Proceder al pago</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCarrito: {
    flex: 1,
    backgroundColor: "#3271A5"
  },
  ContenedorAbajoC:{
  backgroundColor: "#FFFFFF",
  height: "20%",
  top: 20,
  alignItems: "center",
  justifyContent: "center",
  
  },
  ContenedorProductosC: {
    top: 10,
  },
  TotalStyle:{
  color:"#757575",
  fontFamily: "Roboto",
  fontSize: 20,
  right: 65,
  },
  NumeroTotal:{
  color: "#4489C1",
  fontWeight: "bold",
  fontFamily: "monospace",
  fontSize: 20,
  left: 55,
  top: -30,
  },
  BotonPago:{
  backgroundColor: "#4489C1",
  height: "35%",
  width: "65%",
 borderRadius: 17,
 alignItems: "center",
 borderWidth: 2.5,
 borderColor: "#3271A5",
 elevation: 3,
 top: -16,
 
  },
  TextBotonC:{
  color: "#FFFFFF",
  fontWeight: "bold",
  letterSpacing: 2,
  fontSize: 21.5,
  top: 6,
  fontFamily: "Roboto",
  },
  ImagenMenuC:{
    width: 35,
    height: 45,
    right: 35,
    marginLeft: "8%"
  },
  ContenedorFlechaC:{
    width: 500,
      },
    FlechaCarrito:{
    width: 31,
    height: 29,
    top: 20,  
    left: 25,
    },
    TextoFlechaC:{
    color: "#FFF",
    fontFamily: "Roboto",
    left: 100,
    top: -6,
    letterSpacing: 1,
    },
  PedidosTopC:{
    backgroundColor:  "#FFFFFF",
    height: "12%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ImageCarrito:{
    width: 90,
    height: 90,
    right: 10,
    },
    TextCarrito:{
      fontFamily: "Roboto",
      fontSize: 35,
      color: "#3271A5",
      fontWeight: "bold",
      letterSpacing: 1,
      top: 5,
      right: 8,
      },
  scrollView: {
  },
});

export default Carrito;