import React, { useEffect, useState } from 'react';

import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { ApiPathBase } from '../../services';
import { Card, Header } from '../../components';
import styles from './styles';

const DigiDexHome: React.FC = () => {
  interface DigiData {
    id: number;
    name: string;
    href: string;
    image: string;
    color: string;
  }

  const [digimonList, setDigimonList] = useState<DigiData[]>([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const digiResponse = await ApiPathBase.get(`/digimon`);
    const digiDataReault: DigiData[] = digiResponse.data.content.map((item: DigiData) => ({
      ...item,
      color: generationColor(),
    }));
    setDigimonList(digiDataReault);
  };

  const generationColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={digimonList}
        renderItem={({ item }) => (
          <Card data={{ name: item.name, image: item.image, color: item.color }} />
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

export default DigiDexHome;
