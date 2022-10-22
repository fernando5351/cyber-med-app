import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthUser } from "../context/AuthUser";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import Loader from "../components/loading/Loader";

export const AppNav = () => {
  const { splashLoading, userToken } = useContext(AuthUser);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000" />
      {splashLoading ? (
        <Loader />
      ) : userToken !== "" ? (
        <AppStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};
