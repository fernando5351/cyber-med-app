import React, { useContext } from "react";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import Loader from "../components/loading/Loader";
import { AuthUser } from "../context/AuthUser";

export const AppNav = () => {
  const { splashLoading, userToken } = useContext(AuthUser);

  return (
    <NavigationContainer>
      <View style={styles.containerMainApp}>
        {splashLoading ? (
          <Loader />
        ) : userToken !== "" ? (
          <AppStack />
        ) : (
          <AuthStack />
        )}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  containerMainApp: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
