import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 30,
    padding: 5,
    margin: 10,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  description: {
    flex: 1,
    fontSize: 20,
    fontWeight: '700',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    padding: 5,
    margin: 10,
  },
  identify: {
    padding: 5,
    margin: 10,
    fontSize: 20,
    height: 80,
    fontWeight: '700',
  },
});

export default styles;
