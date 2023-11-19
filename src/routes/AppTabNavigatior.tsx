import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/app/HomeScreen';
import { NewPostScreen } from '../screens/app/NewPostScreen';
import { FavoriteScreen } from '../screens/app/FavoriteScreen/Index';
import { MyProfileScreen } from '../screens/app/MyProfileScreen/Index';
import { Text } from '../components/Text';
import { Icon } from '../components/Icon';
import { AppTabBar } from './AppTabBar';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
}

const { Navigator, Screen } = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {

  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />
  }

  return (
    <Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          padding: 10
        }
      }}
    >
      <Screen
        options={{
          tabBarLabel: ({ focused }) => (<Text preset='paragraphCaption' semiBold color={focused ? 'primary' : 'background'}>Início</Text>),
          tabBarIcon: ({ focused }) => <Icon name={focused ? 'homeFill' : 'home'} />
        }}
        name='HomeScreen' component={HomeScreen} />
      <Screen name='NewPostScreen' component={NewPostScreen} />
      <Screen name='FavoriteScreen' component={FavoriteScreen} />
      <Screen name='MyProfileScreen' component={MyProfileScreen} />
    </Navigator>
  )
}