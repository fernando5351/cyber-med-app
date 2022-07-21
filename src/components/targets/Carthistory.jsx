import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Medicina from '../../../assets/images/Aspirina.png'

const ProductosHistorial = () => {
return (
    <View style={styles.ContenedorMedicina}>
    <Image source={Medicina} style={styles.ImagenMedicina}/>
    <View style={styles.ContedorPrecios}> 
    <Text style={styles.Nombre}>ASPIRINA</Text>
    <Text style={styles.PrecioCantidad1}>Precio:</Text>
    <Text style={styles.Numeros1}>$4.00</Text>
    <Text style={styles.PrecioCantidad2}>Cantidad:</Text>
    <Text style={styles.Numeros2}>1</Text>
    <TouchableOpacity style={styles.Boton}>
    <Text style={styles.Textoboton}>Ver mas</Text>
    </TouchableOpacity>
    </View>
    </View>
);
}
const styles = StyleSheet.create({
    ContenedorMedicina:{
      backgroundColor: "#C4EDFF",
      alignSelf: "center",
      height: 155,
      width: 360,
      margin: "4%",
      borderRadius: 30,
    },
    ImagenMedicina:{
      width: 140,
      height: 119,
      alignSelf: "stretch",
     top: 10,
     left: 20,
    },
    ContedorPrecios:{
      justifyContent: "center",
      alignItems: "center",
      width: "70%",
      height: "100%",
      top:-110,
      alignSelf: "flex-end",
      left: 25,
    },
    Nombre:{
    color: "#5F5F5F",
    fontFamily: "monospace",
    fontSize: 20,
    letterSpacing: 1,
    },
    PrecioCantidad1:{
      color: "#5F5F5F",
      fontFamily: "monospace",
      fontWeight: "bold",
      right: 24,
      top: 7,
    },
    PrecioCantidad2:{
      color: "#5F5F5F",
      fontFamily: "monospace",
      fontWeight: "bold",
      right: 16,
      top: -10,
    },
    Numeros1:{
      color: "#797979",
      fontFamily: "monospace",
      left: 45,
      top: -14,
    },
    Numeros2:{
      color: "#797979",
      fontFamily: "monospace",
      left: 45,
      top: -31,
    },
    Boton:{
      backgroundColor: "#3271A5",
      height: 35,
      width: 130,
      top: -20,
    },
    Textoboton:{
  color: "#FFFFFF",
  alignSelf: "center",
  fontSize: 18,
  fontFamily: "Roboto",
  top: 3,
    },
});
export default ProductosHistorial;