import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3f4395',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    paddingTop: 50,
    margin: 10,
    padding: 10,
  },
  descriptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
  },
  descriptionsText: {
    color: 'white',
    fontFamily: '16',
    fontWeight: '700',
  },
});

export default styles;
