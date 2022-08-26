import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import Constants from "expo-constants";
import AppStack from "./src/navigations/AppStack";
import AuthStack from "./src/navigations/AuthStack";
import PantallaCarga from "./src/screens/charging/charging";
import { AuthUser, AuthProvider } from "./src/utils/AuthContext";

export default function App() {
  const { isLoading, userInfo } = useContext(AuthUser);

  if (isLoading) {
    return <PantallaCarga />;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <View style={styles.containerMainApp}>
          {userInfo !== null ? <AuthStack /> : <AppStack />}
        </View>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  containerMainApp: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
