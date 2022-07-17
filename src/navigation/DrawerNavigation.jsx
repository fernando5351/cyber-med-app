import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";
import ProfileE from "../views/profile/ProfileE";

const Drawer = createDrawerNavigator();

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeP" component={Home} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="EditProfile" component={ProfileE} />
    </HomeStack.Navigator>
  );
};

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
}
