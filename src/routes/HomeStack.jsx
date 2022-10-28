import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Rutas de las screens del Home
import Home from "../screens/home/Home";
import Description from "../screens/description/Description";
import Step from "../screens/description/Step";
import Step1 from "../screens/description/Step1";
import Android from "../screens/description/Android";
import Stripe from "../screens/shopping/stripe"

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeStack" component={Home} />
      <HomeStack.Screen name="Description" component={Description} />
      <HomeStack.Screen name="Step" component={Step} />
      <HomeStack.Screen name="Step1" component={Step1} />
      <HomeStack.Screen name="Android" component={Android} />
      <HomeStack.Screen name="stripe" component={Stripe} />
    </HomeStack.Navigator>
  );
}
