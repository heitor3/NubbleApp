import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../screens/auth/LoginScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen';
import { SuccessScreen } from '../screens/auth/SucessScreen';

import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen';
import { IconProps } from '../components/Icon';


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

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer independent={true}>
      <Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true
        }}
        initialRouteName='Login'>
        <Screen name='Login' component={LoginScreen} />
        <Screen name='SignUp' component={SignUpScreen} />
        <Screen name='Success' component={SuccessScreen} />
        <Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
      </Navigator>
    </NavigationContainer>
  );
}