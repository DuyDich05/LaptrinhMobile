/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Xin chào Nguyễn Địch Khánh Duy - 23810310173</Text>
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
});*/

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

const keys = [
  { num: '1', letters: '' },
  { num: '2', letters: 'ABC' },
  { num: '3', letters: 'DEF' },
  { num: '4', letters: 'GHI' },
  { num: '5', letters: 'JKL' },
  { num: '6', letters: 'MNO' },
  { num: '7', letters: 'PQRS' },
  { num: '8', letters: 'TUV' },
  { num: '9', letters: 'WXYZ' },
  { num: '', letters: '' },
  { num: '0', letters: '' },
  { num: '⌫', letters: '' }
];

export default function App() {
  const [phone, setPhone] = useState('');

  const pressKey = (key) => {
    if (key === '⌫') {
      setPhone(phone.slice(0, -1));
    } else if (key && phone.length < 10) {
      setPhone(phone + key);
    }
  };

  return (
    <View style={styles.container}>
      
      {/* PHẦN TRÊN */}
      <View>
        <Text style={styles.title}>Đăng nhập</Text>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.desc}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký
        </Text>
      </View>

      {/* PHẦN DƯỚI */}
      
      <View>
        <View style={styles.phoneBox}>
          <Text style={styles.phoneText}>
            {phone || 'Nhập số điện thoại của bạn'}
            
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: phone.length === 10 ? '#4CAF50' : '#ccc' }
          ]}
          disabled={phone.length !== 10}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>

        {/* BÀN PHÍM SỐ + CHỮ */}
        <View style={styles.keypad}>
          {keys.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.key}
              onPress={() => pressKey(item.num)}
              disabled={!item.num}
            >
              <Text style={styles.keyNumber}>{item.num}</Text>
              {item.letters !== '' && (
                <Text style={styles.keyLetters}>{item.letters}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'space-between',
    paddingTop: 100
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16
  },
  desc: {
    fontSize: 13,
    color: '#777',
    marginTop: 6
  },
  phoneBox: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12
  },
  phoneText: {
    fontSize: 18
  },
  button: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  key: {
    width: '30%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6
  },
  keyNumber: {
    fontSize: 22,
    fontWeight: '600'
  },
  keyLetters: {
    fontSize: 10,
    color: '#666'
  }
});

