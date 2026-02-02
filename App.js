import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [dem, setDem] = useState(10);
  const [background, setBackground] = useState("#F00");

  /*const handleIncrease = () => {
    setDem(dem + 1);
  };

  const handleDecrease = () => {
    setDem(dem - 1);
  };*/

const changeBackground = (color) => {
    setBackground(color);
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <TouchableOpacity
        style={styles.buttonGreen}
        onPress={() => changeBackground('#008000')}
      >
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonBlue}
        onPress={() => changeBackground('#0000FF')}
      >
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonBrown}
        onPress={() => changeBackground('brown')}
      >
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonYellow}
        onPress={() => changeBackground('yellow')}
      >
        <Text style={[styles.buttonText,{color:'black'}]}>YELLOW</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.buttonRed}
        onPress={() => changeBackground('#F00')}
      >
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonBlack}
        onPress={() => changeBackground('black')}
      >
        <Text style={styles.buttonText}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonGreen:{
    backgroundColor:'#008000',
  },
  buttonBlue:{
    backgroundColor:'blue',
  },
  buttonBrown:{
    backgroundColor:'brown',
  },
  buttonYellow:{
    backgroundColor:'yellow',
  },
  buttonRed:{
    backgroundColor:'red',
  },
  buttonBlack:{
    backgroundColor:'black',
    
  },
  
  buttonText: {
    color: 'white',
    fontSize: 16,
    width:250,
    height:50,
    textAlign:'center',
    justifyContent:'center',
    padding:20
  },
});
