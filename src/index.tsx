import React from 'react';

import { DigiDexHome } from './pages';
import { StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <DigiDexHome />
    </>
  );
};

export default App;
