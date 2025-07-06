import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
    paddingRight: 16,
  },
  menu: {
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  menuIcon: {
    marginRight: 10,
  },
  container: {
    paddingHorizontal: 12,
    paddingTop: 10,
    backgroundColor: '#faf9f4',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 5,
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  editIcon: {
    paddingLeft: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  avatarGroup: {
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: -10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  tripDetails: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    fontWeight: '400',
    color: '#636363',
  },
  location: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
