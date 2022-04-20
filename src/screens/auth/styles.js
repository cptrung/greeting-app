import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
    marginBottom: 5,
    backgroundColor: '#d8d8d8',
  },
  textButton: {
    textAlign: 'center',
  },
  textSignIn: {
    marginBottom: 20,
    fontSize: 20,
  },
});

export default styles;
