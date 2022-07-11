import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import PantallaCarga from "./src/views/charging/charging";
import Profile from "./src/views/profile/Profile";
import ProfileE from "./src/views/profile/ProfileE";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.containerMainApp}>
        <Stack.Navigator>
          <Stack.Screen
            name="ProfileEdit"
            component={Profile}
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
