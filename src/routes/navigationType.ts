import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamsList } from "./AppStack";
import { AuthStackParamList } from "./AuthStack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { AppTabBottomTabParamList } from "./AppTabNavigatior";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamsList { }
  }
}


export type AppScreenProps<RouteName extends keyof AppStackParamsList> = NativeStackScreenProps<AppStackParamsList, RouteName>

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, RouteName>

export type AppTabScreenProps<RouteName extends keyof AppTabBottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamList, RouteName>,
  NativeStackScreenProps<AppStackParamsList, 'AppTabNavigator'>
>