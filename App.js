import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.nut}>
      <Button title='Ấn' onPress={()=>Alert.alert("Hello")}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nut:{
    backgroundColor: '#00FFFF',
    width:100,
    height:100,
    justifyContent:'center'
  }
});
