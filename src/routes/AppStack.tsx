import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsScreen } from "../screens/app/SettingsScreen";
import { AppTabBottomTabParamList, AppTabNavigator } from "./AppTabNavigatior";
import { NavigatorScreenParams } from "@react-navigation/native";
import { PostCommentScreen } from "../screens/app/PostCommentScreen";


export type AppStackParamsList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingsScreen: undefined;
  PostCommentScreen: {
    postId: number;
  }
}

const { Screen, Navigator } = createNativeStackNavigator<AppStackParamsList>();

export function AppStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}

      initialRouteName='AppTabNavigator'
    >
      <Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Screen name="SettingsScreen" component={SettingsScreen} />
      <Screen name="PostCommentScreen" component={PostCommentScreen} />
    </Navigator>
  );
}

