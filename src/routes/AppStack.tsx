import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/app/HomeScreen";
import { SettingsScreen } from "../screens/app/SettingsScreen";


export type AppStackParamsList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
}

const { Screen, Navigator } = createNativeStackNavigator<AppStackParamsList>();

export function AppStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}

      initialRouteName='HomeScreen'
    >
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="SettingsScreen" component={SettingsScreen} />
    </Navigator>
  );
}

