import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import PantallaCarga from "./src/views/charging/charging";
import Profile from "./src/views/profile/Profile";
import ProfileE from "./src/views/profile/ProfileE";
import Home from "./src/views/home/home";
<<<<<<< HEAD
import Description from "./src/views/description/Description";
import Step1 from "./src/views/description/Step1";
=======
import Historial from "./src/components/record/record";
import Pedidos from "./src/components/orders/orders";
import Carrito from "./src/components/shoppingcart/cart";
>>>>>>> develop

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.containerMainApp}>
<<<<<<< HEAD
        <Stack.Navigator initialRouteName="Step1">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfileEdit"
            component={ProfileE}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Description"
            component={Description}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Step1"
            component={Step1}
            options={{ headerShown: false }}
          />
=======
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ProfileEdit" component={ProfileE} />
>>>>>>> develop
        </Stack.Navigator>
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
