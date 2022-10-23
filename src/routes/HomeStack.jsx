import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Rutas de las screens del Home
import ContextHome from "../screens/home/contextHome/contextHome";
import ContextDescription from "../screens/description/context/contextDescription";
import Step1 from "../screens/description/Step1";
import Android from "../screens/description/Android";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeStack" component={ContextHome} />
      <HomeStack.Screen name="Description" component={ContextDescription} />
      <HomeStack.Screen name="Step1" component={Step1} />
      <HomeStack.Screen name="Android" component={Android} />
    </HomeStack.Navigator>
  );
}
