import React, { useContext, useState, useEffect } from "react";
/* import Constants from "expo-constants"; */
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import PantallaCarga from "../screens/charging/charging";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/loading/Loader";

export const AppNav = () => {
  const { splashLoading, userInfo } = useContext(AuthContext);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.containerMainApp}>
        {Loading ? (
          <PantallaCarga />
        ) : splashLoading ? (
          <Loader />
        ) : userInfo.access_token ? (
          <AuthStack />
        ) : (
          <AppStack />
        )}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  containerMainApp: {
    flex: 1,
    /*  marginTop: Constants.statusBarHeight, */
  },
});
