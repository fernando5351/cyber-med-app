import React from "react";
import { Image, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";
import ProfileE from "../views/profile/ProfileE";
import CustomDrawer from "../components/customNavigation/CustomDrawer";
import Step1 from "../views/description/Step1";

import HomeI from "../../assets/icons/finish/home.png";
import Pedidos from "../../assets/icons/orders/basket.png";
import Historial from "../../assets/icons/orders/medicalcross.png";
import Carrito from "../../assets/icons/orders/cart.png";

const Drawer = createDrawerNavigator();

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home2" component={Home} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="EditProfile" component={ProfileE} />
      <HomeStack.Screen name="Paso1" component={Step1} />
    </HomeStack.Navigator>
  );
};

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
          drawerIcon: () => <Image style={styles.icos} source={Pedidos} />,
        }}
        name="Pedidos"
        component={HomeStackScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <Image style={styles.icos} source={Historial} />,
        }}
        name="Historial de Compra"
        component={HomeStackScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <Image style={styles.icos} source={Carrito} />,
        }}
        name="Carrito"
        component={HomeStackScreen}
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
