import { Image, SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <Icon name="arrowleft" size={35} color="white" />
        <Icon name="menu-unfold" size={35} color="white" />
      </View>
      <View style={styles.descriptions}>
        <Text style={styles.descriptionsText}>Teste</Text>
        <Text style={styles.descriptionsText}>Teste</Text>
      </View>
    </View>
  );
};

export default Header;
