import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import Constants from "expo-constants";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import PantallaCarga from "./src/views/charging/charging";
<<<<<<< HEAD
import Profile from "./src/views/profile/Profile";
import ProfileE from "./src/views/profile/ProfileE";
import Home from "./src/views/home/home";
import Historial from "./src/components/record/record";
import Pedidos from "./src/components/orders/orders";
import Carrito from "./src/components/shoppingcart/cart";

const Stack = createNativeStackNavigator();
=======
>>>>>>> diego

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState("asdf");

  const authContext = React.useMemo(() => {
    return {
      sigIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      sigUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      sigOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <PantallaCarga />;
  }

  return (
    <NavigationContainer>
      <View style={styles.containerMainApp}>
        {userToken ? (
          <DrawerNavigation />
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoadingScreen" component={PantallaCarga} />
          </Stack.Navigator>
        )}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerMainApp: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
