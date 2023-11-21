import React, { useEffect, useState } from 'react';

import { FlatList, View } from 'react-native';
import { ApiPathBase } from '../../services';
import { Card, Header } from '../../components';
import styles from './styles';
import { generationColor } from '../../utils';

const DigiDexHome: React.FC = () => {
  interface DigiData {
    id: number;
    name: string;
    href: string;
    image: string;
    color: string;
  }

  const [digimonList, setDigimonList] = useState<DigiData[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    init();
  }, [page]);

  const init = async () => {
    const digiResponse = await ApiPathBase.get(`/digimon?page=${page}&pageSize=10`);

    const digiDataReault: DigiData[] = digiResponse.data.content.map((item: DigiData) => ({
      ...item,
      color: generationColor(),
    }));
    setDigimonList((prev) => [...prev, ...digiDataReault]);
  };

  const handleEndReached = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={digimonList}
        renderItem={({ item }) => (
          <Card data={{ name: item.name, image: item.image, color: item.color, id: item.id }} />
        )}
        keyExtractor={(item) => String(item.id)}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1} // 10% do final da lista
      />
    </View>
  );
};

export default DigiDexHome;
