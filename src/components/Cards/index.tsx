import { Image, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';

type CardProps = {
  data: {
    name: string;
    image: string;
    color: string;
  };
};
const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <View style={[styles.container, { backgroundColor: data.color }]}>
      <Text style={styles.text}>{data.name}</Text>
      <Image style={styles.image} source={{ uri: data.image }} />
    </View>
  );
};

export default Card;
