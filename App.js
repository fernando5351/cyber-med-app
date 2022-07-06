import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import PantallaCarga from './src/views/charging/charging';
import OpcionesLogin from './src/views/login/opcions';
import ProfileE from './src/views/profile/ProfileE';



export default function App() {
  return (
    <View style={styles.container}>
      <OpcionesLogin/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
