import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import Constants from "expo-constants";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import PantallaCarga from "./src/views/charging/charging";
import OpcionesLogin from "./src/views/login/opcions";
import IniciarSesion from "./src/views/login/login";
import RegistroUsuario from "./src/views/login/registration";

import { AuthUser } from "./src/users/User";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authUser = React.useMemo(() => {
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

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <PantallaCarga />;
  }

  return (
    <AuthUser.Provider value={authUser}>
      <NavigationContainer>
        <View style={styles.containerMainApp}>
          {userToken ? (
            <DrawerNavigation />
          ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={OpcionesLogin} />
              <Stack.Screen name="SignUp" component={RegistroUsuario} />
              <Stack.Screen name="SignIn" component={IniciarSesion} />
            </Stack.Navigator>
          )}
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
