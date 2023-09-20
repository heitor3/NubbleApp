import { NavigationContainer } from '@react-navigation/native'
import { AppStack } from './AppStack';
import { IconProps } from '../components/Icon';
import { AuthStack } from './AuthStack';


export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Success: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
}

export function Routes() {
  const authenticated = false;

  return (
    <NavigationContainer>
      {authenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}