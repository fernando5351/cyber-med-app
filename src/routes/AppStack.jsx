import React from "react";
import { Image, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
//Rutas de las screens del Drawer
import HomeStackScreen from "./HomeStack";
import CustomDrawer from "../components/customNavigation/CustomDrawer";
import Profile from "../screens/profile/Profile";
import Carrito from "../screens/shopping/Cart";

import HomeI from "../../assets/icons/finish/home.png";
import ProfileIcon from "../../assets/icons/profile/usercircle.png";
import CarritoI from "../../assets/icons/orders/cart.png";

const Drawer = createDrawerNavigator();

export default function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
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
          drawerIcon: () => <Image style={styles.icos} source={ProfileIcon} />,
        }}
        name="Perfil"
        component={Profile}
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
