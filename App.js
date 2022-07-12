import react from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
/* import PantallaCarga from './src/views/charging/charging'; */
import Profile from "./src/views/profile/Profile";
import ProfileE from "./src/views/profile/ProfileE";
import Android from "./src/views/description/Android";
import Step1 from "./src/views/description/Step1";
import Step3 from "./src/views/description/Step3";

export default function App() {
  return (
    <View style={styles.container}>
      <Step1 />
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
