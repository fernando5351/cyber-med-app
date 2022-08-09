import React from "react";
import { Image, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
//Rutas de las screens del Drawer
import { HomeStackScreen } from "./HomeStack";
import CustomDrawer from "../components/customNavigation/CustomDrawer";
import Pedidos from "../screens/shopping/Orders";
import Historial from "../screens/shopping/Record";
import Carrito from "../screens/shopping/Cart";

import HomeI from "../../assets/icons/finish/home.png";
import PedidosI from "../../assets/icons/orders/basket.png";
import HistorialI from "../../assets/icons/orders/medicalcross.png";
import CarritoI from "../../assets/icons/orders/cart.png";

const Drawer = createDrawerNavigator();

export default function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -15,
          color: "#fff",
          fontWeight: "600",
          fontSize: 15,
          marginTop: "5%",
          marginBottom: "5%",
        },
        drawerActiveBackgroundColor: "#4DACD6",
        drawerInactiveTintColor: "#8D8787",
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: () => <Image style={styles.icos} source={HomeI} />,
        }}
        name="Home"
        component={HomeStackScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <Image style={styles.icos} source={PedidosI} />,
        }}
        name="Pedidos"
        component={Pedidos}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <Image style={styles.icos} source={HistorialI} />,
        }}
        name="Historial de Compra"
        component={Historial}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <Image style={styles.icos} source={CarritoI} />,
        }}
        name="Carrito"
        component={Carrito}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  icos: {
    width: "20%",
    height: "100%",
  },
});
