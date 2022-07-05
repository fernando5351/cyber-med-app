import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import PantallaCarga from './src/views/charging/charging';


export default function App() {
  return (
    <View style={styles.container}>
      <PantallaCarga/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
