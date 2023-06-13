import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Text } from './src/components/Text';




function App(): JSX.Element {

  return (
    <SafeAreaView>
      <Text preset="headingLarge">
        Salve
      </Text>
      <Text preset="headingLarge">
        Salve
      </Text>
    </SafeAreaView>
  );
}

export default App;
