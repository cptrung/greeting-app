import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import EasyToast from 'react-native-easy-toast';

import Home from './src/screens/home';
import Toast from './src/components/Toast';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
      <EasyToast
        ref={(ref) => Toast.setToast(ref)}
        style={styles.toast}
        position="bottom"
        fadeInDuration={750}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={styles.toastText}
      />
      <EasyToast
        ref={(ref) => Toast.setToastError(ref)}
        style={styles.toastError}
        position="bottom"
        fadeInDuration={750}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={styles.toastText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toast: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  toastError: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'red',
  },
  toastText: {
    fontSize: 13,
    color: 'white',
  },
});
