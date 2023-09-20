import { Button } from "../../../components/Button";
import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamsList } from "../../../routes/AppStack";

type ScreenProps = NativeStackScreenProps<AppStackParamsList, 'HomeScreen'>

export function HomeScreen({ navigation }: ScreenProps) {
  const { navigate } = navigation;
  return (
    <Screen>
      <Text preset="headingLarge">
        Home Screen
      </Text>
      <Button title="Settings" onPress={() => navigate("SettingsScreen")} />
    </Screen>
  )
}