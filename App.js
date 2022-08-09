import React, { useEffect, useState, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import Constants from "expo-constants";
import AppStack from "./src/navigations/AppStack";
import AuthStack from "./src/navigations/AuthStack";
import PantallaCarga from "./src/screens/charging/charging";
import { AuthUser } from "./src/utils/AuthContext";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const AuthProvider = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserData("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserData("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserData(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <PantallaCarga />;
  }

  return (
    <AuthUser.Provider value={AuthProvider}>
      <NavigationContainer>
        <View style={styles.containerMainApp}>
          {userData !== null ? <AppStack /> : <AuthStack />}
        </View>
      </NavigationContainer>
    </AuthUser.Provider>
  );
}

const styles = StyleSheet.create({
  containerMainApp: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
