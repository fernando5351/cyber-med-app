import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import PantallaCarga from "./src/views/charging/charging";
import Profile from "./src/views/profile/Profile";
import ProfileE from "./src/views/profile/ProfileE";
import Home from "./src/views/home/home";
import Historial from "./src/components/record/record";
import Pedidos from "./src/components/orders/orders";
import Carrito from "./src/components/shoppingcart/cart";
import OpcionesLogin from "./src/views/login/opcions";
import IniciarSesion from "./src/views/login/login";
import RegistroUsuario from "./src/views/login/registration";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.containerMainApp}>
        <Stack.Navigator initialRouteName="Pedidos">
        <Stack.Screen
            name="PantallaCarga"
            component={PantallaCarga}
            options={{ headerShown: false }}
          />
        <Stack.Screen
            name="Historial"
            component={Historial}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Carrito"
            component={Carrito}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Pedidos"
            component={Pedidos}
            options={{ headerShown: false }}
          />
        <Stack.Screen
            name="Opciones"
            component={OpcionesLogin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={IniciarSesion}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registro"
            component={RegistroUsuario}
            options={{ headerShown: false }}
          /> 
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
