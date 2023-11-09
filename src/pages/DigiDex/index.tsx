import React, { useEffect, useState } from 'react';

import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { ApiPathBase } from '../../services';
import { Card } from '../../components';

const DigiDexHome: React.FC = () => {
  const [digimonList, setDigimonList] = useState<any[]>([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const digiResponse = await ApiPathBase.get(`/digimon`);
    console.log(digiResponse.data);
    setDigimonList(digiResponse.data.content);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={digimonList}
        renderItem={({ item }) => <Card digiData={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default DigiDexHome;
