import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import ImagenPedidos from '../../../assets/icons/orders/basket.png'
import ImagenFlechaP from '../../../assets/icons/arrows/bluereturn.png'

const Pedidos = () => {
  return (
    <SafeAreaView style={styles.containerPedidos}>
      <ScrollView style={styles.scrollView}>
    <View style={styles.PedidosTop}>
    <Image source={ImagenPedidos} style={styles.ImagePedidos}/>
    <Text style={styles.TextPedidos}>Pedidos</Text>
    </View>
    <View style={styles.ContenedorRetroceder}> 
    <TouchableOpacity>
    <Image source={ImagenFlechaP}style={styles.FlechaPedidos}/>
    </TouchableOpacity>
    <Text style={styles.TextoFlecha}>Pedidos</Text>
    </View>
    <View>

    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerPedidos: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  ContenedorRetroceder:{

  },
  ContenedorFlecha:{
    backgroundColor: "#FFFFFF",
    width: 500,
      },
    FlechaPedidos:{
    width: 31,
    height: 29,
    top: 20,  
    left: 25,
    },
    TextoFlecha:{
    color: "#3271A5",
    fontFamily: "Roboto",
    left: 100,
    top: -6,
    letterSpacing: 1,
    },
  PedidosTop:{
    backgroundColor:  "#4DACD6",
    height: "20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  ImagePedidos:{
    width: 90,
    height: 90,
    },
    TextPedidos:{
      fontFamily: "Roboto",
      fontSize: 35,
      color: "#fff",
      fontWeight: "bold",
      letterSpacing: 1,
      top: 5,
      left: 5,
      },
  scrollView: {
  },
});

export default Pedidos;