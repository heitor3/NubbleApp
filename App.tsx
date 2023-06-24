import React from 'react';
import {
  SafeAreaView, View,
} from 'react-native';
import { Text } from './src/components/Text';
import { Button } from './src/components/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme';




function App(): JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{
          flex: 1,
          paddingHorizontal: 24,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
          <Text preset="headingLarge">
            Salve
          </Text>
          <Button title='Entrar' disabled />
          <Button title='Entrar' loading />
          <Button title='Entrar' preset='outline' />
        </View>
      </SafeAreaView>
    </ThemeProvider >
  );
}

export default App;
