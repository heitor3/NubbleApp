import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme';
import { LoginScreen } from './src/screens/auth/LoginScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SignUpScreen } from './src/screens/auth/SignUpScreen';





function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <LoginScreen /> */}
        <SignUpScreen />
      </ThemeProvider >
    </SafeAreaProvider>
  );
}

export default App;
