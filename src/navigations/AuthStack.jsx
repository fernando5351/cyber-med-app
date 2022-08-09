import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Rutas de las screens del login
import Login from "../screens/login/Login";
import Signin from "../screens/login/SignIn";
import Signup from "../screens/login/SignUp";
import PasswordRecover from "../screens/login/PasswordRecover";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="SignIn" component={Signin} />
      <Stack.Screen name="PasswordRecover" component={PasswordRecover} />
    </Stack.Navigator>
  );
}
