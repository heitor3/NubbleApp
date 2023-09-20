import { Button } from "../../../components/Button";
import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamsList } from "../../../routes/AppStack";

type ScreenProps = NativeStackScreenProps<AppStackParamsList, 'SettingsScreen'>

export function SettingsScreen({ navigation }: ScreenProps) {
  const { navigate } = navigation;
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">
        Setting Screen
      </Text>
    </Screen>
  )
}