import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lavender',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    marginBottom: 50,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    margin: 10,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 18,
    marginLeft: 20,
    color: 'purple'
  },
  reminderBox: {
    backgroundColor: '#b298dc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  reminderText: {
    fontSize: 16,
    color: 'white',
  },
});

export default AppStyles;