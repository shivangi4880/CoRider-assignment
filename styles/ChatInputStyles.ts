import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#faf9f4',
    borderTopWidth: 1,
    borderTopColor: '#faf9f4',
    position: 'relative',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  attachmentWrapper: {
    position: 'absolute',
    right: -5,
    bottom: 60,
    alignItems: 'center',
    zIndex: 10,
  },
  attachmentMenu: {
    flexDirection: 'row',
    backgroundColor: '#008000',
    borderRadius: 24,
    padding: 6,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  attachmentIcon: {
    backgroundColor: '#008000',
    marginHorizontal: 6,
    padding: 8,
    borderRadius: 30,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#008000',
    marginTop: -1,
  },

  actions: {
    marginRight: 10,
    flexDirection: 'row',
    gap: 20,
  },


});
