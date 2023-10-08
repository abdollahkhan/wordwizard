import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootStack from './navigation/RootStack';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootStack />
    </SafeAreaProvider>
  );
};

export default App;
