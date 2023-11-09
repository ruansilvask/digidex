import { Image, Text, View } from 'react-native';
import React, { Component } from 'react';

interface DigiData {
  id: number;
  name: string;
  href: string;
  image: string;
}
const Card: React.FC<DigiData> = ({ digiData }) => {
  return (
    <View>
      <Text>{digiData.name}</Text>
      <Image source={{ uri: digiData.image }} />
    </View>
  );
};

export default Card;
