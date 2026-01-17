
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    content: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    icon: 'checkmark-circle',
    highlight: true,
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    content: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    icon: 'people',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
    icon: 'people',
  },
  {
    id: '4',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
    icon: 'people',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong ngày hôm nay',
    content: 'Bạn có 17 công việc sắp đến hạn trong hôm nay',
    time: '20/08/2020, 06:00',
    icon: 'checkmark-circle',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    content: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    icon: 'checkmark-circle',
  },
];

export default function App() {
  const renderItem = ({ item }) => {
  const isHighlight = item.id === '1'|| item.id === '2' || item.id === '4';

  return (
    <View
      style={[
        styles.item,
        isHighlight && styles.highlightItem,
      ]}
    >
      <View style={styles.iconBox}>
        <Ionicons name={item.icon} size={22} color="#1E3A8A" />
      </View>

      <View style={styles.textBox}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
};


  return (
    <View style={styles.container}>
      <View style={styles.blank}>
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar style="auto" />
    </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 100,
  },

  header: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 0,
    borderBottomWidth: 5,
    borderBottomColor: '#E5E7EB', // xám nhạt iOS
  },

  blank:{
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB', // xám nhạt iOS
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 16,
    
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8F0FE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 4,
  },

  textBox: {
    flex: 1,
    borderRadius: 8,
    marginHorizontal: 8,
    
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },

  content: {
    fontSize: 13,
    color: '#374151',
    marginTop: 2,
  },

  time: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 4,
  },
  highlightItem: {
  backgroundColor: '#F0F7FF',
},
});
