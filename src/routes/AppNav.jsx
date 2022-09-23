import React, { useContext, useEffect, useState } from "react";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import LoadingPage from "../components/loading/Loading";
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

  if (Loading) {
    return <LoadingPage />;
  }

  return (
    <NavigationContainer>
      <View style={styles.containerMainApp}>
        {splashLoading ? <Loader /> : userInfo ? <AppStack /> : <AuthStack />}
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
