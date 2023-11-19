import React from 'react';
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

type CardProps = {
  data: {
    id: number;
    name: string;
    image: string;
    color: string;
  };
};
const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <LinearGradient
      colors={['#4c669f', '#4dcdae']}
      style={styles.linearGradient}
      useAngle={true}
      angle={130}
    >
      <Image style={styles.image} source={{ uri: data.image }} />
      <Text style={styles.description}>{data.name}</Text>
      <Text style={styles.identify}>#{data?.id}</Text>
    </LinearGradient>
  );
};

export default Card;
