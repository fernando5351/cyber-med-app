import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Android from "./src/views/description/Android";

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
  },
});
