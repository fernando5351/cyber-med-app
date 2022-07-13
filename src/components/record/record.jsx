import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import ImagenHistorial from '../../../assets/icons/orders/medicalcross.png'
import ImagenFlechaH from '../../../assets/icons/arrows/bluereturn.png'

const Historial = () => {
  return (
    <SafeAreaView style={styles.containerHistorial}>
      <ScrollView style={styles.scrollViewH}>
    <View style={styles.HistorialTop}>
    <Image source={ImagenHistorial} style={styles.ImageHistorial}/>
    <Text style={styles.TextHistorial}>Historial</Text>
    </View>
    <View style={styles.ContenedorRetrocederH}> 
    <TouchableOpacity>
    <Image source={ImagenFlechaH}style={styles.FlechaHistorial}/>
    </TouchableOpacity>
    <Text style={styles.TextoFlechaH}>Historial</Text>
    </View>
    <View>

    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerHistorial: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  ContenedorRetrocederH:{

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
    height: "20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  ImageHistorial:{
    width: 90,
    height: 90,
    },
    TextHistorial:{
      fontFamily: "Roboto",
      fontSize: 35,
      color: "#fff",
      fontWeight: "bold",
      letterSpacing: 1,
      
      left: 5,
      },
  scrollViewH: {
  },
});

export default Historial;