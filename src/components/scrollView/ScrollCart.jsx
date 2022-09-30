import React from "react";
import { StyleSheet, ScrollView} from "react-native";
import ProductosCarrito from "../../components/targets/Cartshopp";

const ScrollCarrito = () => {
    return (

<ScrollView style={styles.ContenedorScroll}>
<ProductosCarrito />


</ScrollView>
    );
};
const styles = StyleSheet.create({
ContenedorScroll:  {
height: "100%",

}
});
export default ScrollCarrito;
