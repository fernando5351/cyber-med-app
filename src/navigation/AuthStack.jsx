import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../views/login/Login";
import Signin from "../views/login/SignIn";
import Signup from "../views/login/SignUp";
import PasswordRecover from "../views/login/PasswordRecover";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="SignIn" component={Signin} />
      <Stack.Screen name="RecoverPassword" component={PasswordRecover} />
    </Stack.Navigator>
  );
}
