import React from 'react';

import { DigiDexHome } from './pages';
import { StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <DigiDexHome />
    </>
  );
};

export default App;
