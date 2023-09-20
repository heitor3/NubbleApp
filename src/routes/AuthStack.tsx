import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/app/HomeScreen";
import { SettingsScreen } from "../screens/app/SettingsScreen";
import { IconProps } from "../components/Icon";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { SignUpScreen } from "../screens/auth/SignUpScreen";
import { SuccessScreen } from "../screens/auth/SucessScreen";
import { ForgotPasswordScreen } from "../screens/auth/ForgotPasswordScreen";


export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Success: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
}

const { Screen, Navigator } = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
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
  );
}

