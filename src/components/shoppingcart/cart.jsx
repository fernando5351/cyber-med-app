import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import ImagenCarrito from '../../../assets/icons/orders/cartblue.png'
import ImagenFlechaC from '../../../assets/icons/arrows/return.png'
import MenuCarrito from '../../../assets/icons/home/menublue.png'

function Pedidos({ navigation }){
  return (
    <SafeAreaView style={styles.containerCarrito}>
      <ScrollView style={styles.scrollView}>
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
    <View>

    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerCarrito: {
    flex: 1,
    backgroundColor: "#3271A5"
  },
  ContenedorRetroceder:{

  },
  ImagenMenuC:{
    width: 35,
    height: 45,
    right: 40,
    marginLeft: "7%"
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
    height: "20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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

export default Pedidos;