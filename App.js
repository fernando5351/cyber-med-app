import react from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
/* import PantallaCarga from './src/views/charging/charging'; */
import Profile from "./src/views/profile/Profile";
import ProfileE from "./src/views/profile/ProfileE";

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
