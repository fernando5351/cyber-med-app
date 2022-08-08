import React from "react";
import { Image, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/customNavigation/CustomDrawer";

import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";
import ProfileE from "../views/profile/ProfileE";
import Description from "../views/description/Description";
import Step1 from "../views/description/Step1";
import Step2 from "../views/description/Step2";
import Step3 from "../views/description/Step3";
import Step4 from "../views/description/Step4";
import Android from "../views/description/Android";
import Pedidos from "../components/orders/Orders";
import Historial from "../components/record/record";
import Carrito from "../components/shoppingcart/cart";

import HomeI from "../../assets/icons/finish/home.png";
import PedidosI from "../../assets/icons/orders/basket.png";
import HistorialI from "../../assets/icons/orders/medicalcross.png";
import CarritoI from "../../assets/icons/orders/cart.png";

const Drawer = createDrawerNavigator();

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home2" component={Home} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="EditProfile" component={ProfileE} />
      <HomeStack.Screen name="Pedidos" component={Pedidos} />
      <HomeStack.Screen name="Carrito" component={Carrito} />
      <HomeStack.Screen name="Historial" component={Historial} />
      <HomeStack.Screen name="Description" component={Description} />
      <HomeStack.Screen name="Step1" component={Step1} />
      <HomeStack.Screen name="Step2" component={Step2} />
      <HomeStack.Screen name="Step3" component={Step3} />
      <HomeStack.Screen name="Step4" component={Step4} />
      <HomeStack.Screen name="Android" component={Android} />
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
