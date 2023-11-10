import { StyleSheet } from 'react-native';

const sytles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 5,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default sytles;
