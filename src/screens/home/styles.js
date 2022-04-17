import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  textWelcome: { fontSize: 20, marginBottom: 20 },
  icon: {
    marginBottom: 20,
    marginTop: 10,
  },
  parent: {
    marginLeft: 25,
    marginRight: 25,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 40,
    width: '90%',
    textAlign: 'center',
  },
  closeButton: {
    height: 25,
    width: 25,
  },
  closeButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
});

export default styles;
