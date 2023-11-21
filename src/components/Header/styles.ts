import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#3f4395',
    marginBottom: 10,
    padding: 10,
  },
  actions: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 50,
  },
  descriptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
  },
  descriptionsText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    shadowColor: 'black',
  },
  button: {
    flexDirection: 'row-reverse',
    backgroundColor: '#05071e',
    color: 'white',
  },
  descriptionsTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    paddingRight: 15,
  },
});

export default styles;
