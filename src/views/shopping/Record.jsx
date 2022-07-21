import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import ImagenHistorial from '../../../assets/icons/orders/medicalcross.png'
import ImagenFlechaH from '../../../assets/icons/arrows/bluereturn.png'
import MenuHistorial from '../../../assets/icons/home/menu.png'
import ProductosHistorial from '../../components/targets/Carthistory';

function Historial({ navigation }){
  return (
    <View style={styles.containerHistorial}>
    <View style={styles.HistorialTop}>
    <TouchableOpacity onPress={() => navigation.openDrawer() }> 
    <Image source={MenuHistorial} style={styles.ImagenMenuH}/>
    </TouchableOpacity>
    <Image source={ImagenHistorial} style={styles.ImageHistorial}/>
    <Text style={styles.TextHistorial}>Historial</Text>
    </View>
    <View style={styles.ContenedorRetroceder}> 
    <TouchableOpacity onPress={() => {  navigation.goBack(); }}>
    <Image source={ImagenFlechaH}style={styles.FlechaHistorial}/>
    </TouchableOpacity>
    <Text style={styles.TextoFlechaH}>Historial</Text>
    </View>
    <ScrollView style={styles.ContenedorProductosH}>
    <ProductosHistorial/>
    <ProductosHistorial/>
    <ProductosHistorial/>
    <ProductosHistorial/>
    <ProductosHistorial/>
    <ProductosHistorial/>
    <ProductosHistorial/>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHistorial: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  ContenedorRetroceder:{

  },
  ContenedorProductosH: {
    top: 10,
  },
  ImagenMenuH:{
    width: 35,
    height: 45,
    right: 30,
    marginLeft: "7%"
  },
  ContenedorFlechaH:{
    backgroundColor: "#FFFFFF",
    width: 500,
      },
    FlechaHistorial:{
    width: 31,
    height: 29,
    top: 20,  
    left: 25,
    },
    TextoFlechaH:{
    color: "#3271A5",
    fontFamily: "Roboto",
    left: 100,
    top: -6,
    letterSpacing: 1,
    },
  HistorialTop:{
    backgroundColor:  "#4DACD6",
    height: "12%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ImageHistorial:{
    width: 90,
    height: 90,
    right: 8,
    },
    TextHistorial:{
      fontFamily: "Roboto",
      fontSize: 35,
      color: "#fff",
      fontWeight: "bold",
      letterSpacing: 1,
      top: 5,
      right: 4,
      },
  scrollView: {
  },
});

export default Historial;