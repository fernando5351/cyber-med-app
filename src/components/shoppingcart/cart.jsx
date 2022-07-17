import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import ImagenCarrito from '../../../assets/icons/orders/cartblue.png'
import ImagenFlechaC from '../../../assets/icons/arrows/return.png'
import MenuCarrito from '../../../assets/icons/home/menublue.png'

const Carrito = () => {
  return (
    <SafeAreaView style={styles.containerCarrito}>
      <ScrollView style={styles.scrollView}>
    <View style={styles.PedidosTop}>
    <Image source={ImagenCarrito} style={styles.ImagePedidos}/>
    <TouchableOpacity> 
    <Image source={MenuCarrito} style={styles.ImagenMenuC}/>
    </TouchableOpacity>
    <Text style={styles.TextPedidos}>Carrito</Text>
    </View>
    <View> 
    <View style={styles.ContenedorRetrocederC}> 
    <TouchableOpacity>
    <Image source={ImagenFlechaC}style={styles.FlechaCarrito}/>
    </TouchableOpacity>
    <Text style={styles.TextoFlecha}>Carrito</Text>
    </View>
    <View>
    </View>
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
  ConteCenterH:{
   backgroundColor: "#3271A5"
  },
  ContenedorRetrocederC:{

  },
  ImagenMenuC:{
    width: 30,
    height: 40,
    right: 155,
  },
    FlechaCarrito:{
    width: 31,
    height: 29,
    top: 20,  
    left: 25,
    },
    TextoFlecha:{
    color: "#FFFFFF",
    fontFamily: "Roboto",
    left: 100,
    top: -6,
    letterSpacing: 1,
    },
  PedidosTop:{
    backgroundColor:  "#FFFFFF",
    height: "20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
   
  },
  ImagePedidos:{
    width: 90,
    height: 90,
    left: 20,
    },
    TextPedidos:{
      fontFamily: "Roboto",
      fontSize: 35,
      color: "#3271A5",
      fontWeight: "bold",
      letterSpacing: 1,
      top: 5,
      right: 5,
      },
  scrollView: {
  },
});

export default Carrito;