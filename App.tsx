import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './src/routes/Routes';
import { Toast } from './src/components/Toast/Toast';
import { ToastProvider } from './src/service/toast/Providers/ToastProvider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';


const queryClient = new QueryClient();
function App(): JSX.Element {

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <Routes />
            <Toast />
          </ToastProvider>
        </ThemeProvider >
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
