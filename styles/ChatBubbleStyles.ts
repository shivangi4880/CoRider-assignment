import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  row: { flexDirection: 'row', marginVertical: 5, alignItems: 'flex-end' },
  left: { alignSelf: 'flex-start' },
  right: { alignSelf: 'flex-end' },
  avatar: { width: 32, height: 32, borderRadius: 16, marginRight: 8 },
  bubble: { padding: 10, borderRadius: 10, maxWidth: '75%' },
  self: { backgroundColor: '#1c63d5' },
  other: { backgroundColor: '#ffffff' },
  name: { fontWeight: 'bold', fontSize: 12, marginBottom: 4 },
  message: { fontSize: 15 },
  selfText: { color: 'white' },
  otherText: { color: '	#636363' },
  timestamp: { fontSize: 10, color: 'gray', marginTop: 4, textAlign: 'right' }
});
