import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Step1 from "./src/views/description/Step1";

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
  },
});
