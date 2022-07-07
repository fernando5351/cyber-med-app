import react from "react";
import { StyleSheet, View } from "react-native";
<<<<<<< HEAD
import Android from "./src/views/description/Android";
=======
import Constants from "expo-constants";
/* import PantallaCarga from './src/views/charging/charging'; */
import Profile from "./src/views/profile/Profile";
import ProfileE from "./src/views/profile/ProfileE";
>>>>>>> develop

export default function App() {
  return (
    <View style={styles.container}>
      <Android />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
