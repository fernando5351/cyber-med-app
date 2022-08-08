import React, { useEffect, useState, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import Constants from "expo-constants";
import AppStack from "./src/navigation/AppStack";
import AuthStack from "./src/navigation/AuthStack";
import PantallaCarga from "./src/views/charging/charging";
import { AuthUser } from "./src/utils/AuthContext";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const AuthProvider = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
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
          {userToken !== null ? <AppStack /> : <AuthStack />}
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
