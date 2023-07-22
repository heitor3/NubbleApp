import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../screens/auth/LoginScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen';
import { SucessScreen } from '../screens/auth/SucessScreen';
import { IconProps } from '../components/Icon';


export type RootParamList = {
  Login: undefined;
  SignUp: undefined;
  Sucess: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  }
}

const { Screen, Navigator } = createNativeStackNavigator<RootParamList>();

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
        <Screen name='Sucess' component={SucessScreen} />
      </Navigator>
    </NavigationContainer>
  );
}