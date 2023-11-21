import { Alert, Button, Image, SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import IconEntypo from 'react-native-vector-icons/Entypo';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <IconEntypo.Button
          name="dots-three-vertical"
          size={35}
          style={styles.button}
          onPress={() => Alert.alert('Simple Button pressed')}
        ></IconEntypo.Button>
        <IconEntypo.Button
          style={styles.button}
          name="menu"
          size={35}
          onPress={() => Alert.alert('Simple Button pressed')}
        >
          <Text style={styles.descriptionsTitle}>DidiDex</Text>
        </IconEntypo.Button>
      </View>
    </View>
  );
};

export default Header;
