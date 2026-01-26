import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [phone, setPhone] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // chỉ nhập số, tối đa 10 số
  const pressKey = (key) => {
    if (!/^\d$/.test(key)) return;
    if (phone.length >= 10) return;
    setPhone(phone + key);
  };

  const deleteKey = () => {
    setPhone(phone.slice(0, -1));
  };

  const handleLogin = () => {
    if (phone.length === 10) {
      setShowAlert(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Title */}
      <Text style={styles.title}>Đăng nhập</Text>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.desc}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
        </Text>

        <Text style={styles.input}>
          {phone || 'Nhập số điện thoại của bạn'}
        </Text>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: phone.length === 10 ? '#2ec43d' : '#E5E5E5' },
          ]}
          disabled={phone.length !== 10}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>

      {/* Keyboard */}
      <View style={styles.keyboard}>
        {[
          ['1'], ['2'], ['3'],
          ['4'], ['5'], ['6'],
          ['7'], ['8'], ['9'],
          [''], ['0'], ['⌫'],
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.key}
            disabled={!item[0]}
            onPress={() =>
              item[0] === '⌫' ? deleteKey() : pressKey(item[0])
            }
          >
            <Text style={styles.keyNumber}>{item[0]}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* iOS Dark Alert */}
      <Modal transparent visible={showAlert} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.alertBox}>
            <Text style={styles.alertTitle}>Thông báo</Text>
            <Text style={styles.alertMessage}>
              Số điện thoại bạn nhập là:
            </Text>
            <Text style={styles.alertPhone}>{phone}</Text>

            <View style={styles.alertButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowAlert(false)}
              >
                <Text style={styles.buttonAlertText}>Hủy</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.okButton}
                onPress={() => setShowAlert(false)}
              >
                <Text style={styles.buttonAlertText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    paddingHorizontal: 20,
  },

  content: {
    paddingHorizontal: 20,
    marginTop: 30,
  },

  label: {
    fontSize: 18,
    fontWeight: '500',
  },

  desc: {
    marginTop: 8,
    color: '#666',
    fontSize: 14,
  },

  input: {
    marginTop: 20,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },

  button: {
    marginTop: 30,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#000',
    fontSize: 16,
  },

  keyboard: {
    marginTop: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
  },

  key: {
    width: '33.33%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  keyNumber: {
    fontSize: 24,
  },

  /* ALERT */
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  alertBox: {
    width: 320,
    backgroundColor: '#3A3A3C',
    borderRadius: 28,
    padding: 20,
  },

  alertTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },

  alertMessage: {
    color: '#D1D1D6',
    fontSize: 14,
  },

  alertPhone: {
    color: '#fff',
    fontSize: 16,
    marginTop: 6,
    marginBottom: 20,
  },

  alertButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cancelButton: {
    flex: 1,
    backgroundColor: '#4A4A4C',
    paddingVertical: 14,
    borderRadius: 22,
    marginRight: 10,
    alignItems: 'center',
  },

  okButton: {
    flex: 1,
    backgroundColor: '#4A4A4C',
    paddingVertical: 14,
    borderRadius: 22,
    marginLeft: 10,
    alignItems: 'center',
  },

  buttonAlertText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
