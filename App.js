import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Square = ({ title, color }) => {
  return (
    <View style={[styles.square, { backgroundColor: color }]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Square title="Square 1" color="#66CCFF" />
      <Square title="Square 2" color="#008080" />
      <Square title="Square 3" color="#FF6666" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
