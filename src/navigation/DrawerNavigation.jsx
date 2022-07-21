import React from "react";
import { Image, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";
import ProfileE from "../views/profile/ProfileE";
import CustomDrawer from "../components/customNavigation/CustomDrawer";
import Pedidos from "../views/shopping/Orders";
import Historial from "../views/shopping/Record";
import Carrito from "../views/shopping/Cart";

import HomeI from "../../assets/icons/finish/home.png";
import PedidosI from "../../assets/icons/orders/basket.png";
import HistorialI from "../../assets/icons/orders/medicalcross.png";
import CarritoI from "../../assets/icons/orders/cart.png";

const Drawer = createDrawerNavigator();

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeH" component={Home} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="EditProfile" component={ProfileE} />
      <HomeStack.Screen name="Pedidos" component={Pedidos} />
      <HomeStack.Screen name="Carrito" component={Carrito} />
      <HomeStack.Screen name="Historial" component={Historial} />
    </HomeStack.Navigator>
  );
};

export default function DrawerNavigation() {
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
    width: 55,
    height: 55,
  },
});
