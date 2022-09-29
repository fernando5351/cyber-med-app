import React, { useContext, useEffect, useState } from "react";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import LoadingPage from "../components/loading/Loading";
import Loader from "../components/loading/Loader";
import { AuthUser } from "../context/AuthUser";

export const AppNav = () => {
  const { splashLoading, userToken } = useContext(AuthUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

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
