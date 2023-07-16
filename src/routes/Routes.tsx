import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../screens/auth/LoginScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen';


export type RootParamList = {
  Login: undefined;
  SignUp: undefined;
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
      </Navigator>
    </NavigationContainer>
  );
}