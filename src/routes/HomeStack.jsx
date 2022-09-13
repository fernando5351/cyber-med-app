import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Rutas de las screens del Home
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";
import ProfileE from "../screens/profile/ProfileE";
import Description from "../screens/description/Description";
import Step1 from "../screens/description/Step1";
import Step2 from "../screens/description/Step2";
import Step3 from "../screens/description/Step3";
import Step4 from "../screens/description/Step4";
import Android from "../screens/description/Android";

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeStack" component={Home} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="EditProfile" component={ProfileE} />
      <HomeStack.Screen name="Description" component={Description} />
      <HomeStack.Screen name="Step1" component={Step1} />
      <HomeStack.Screen name="Step2" component={Step2} />
      <HomeStack.Screen name="Step3" component={Step3} />
      <HomeStack.Screen name="Step4" component={Step4} />
      <HomeStack.Screen name="Android" component={Android} />
    </HomeStack.Navigator>
  );
};
