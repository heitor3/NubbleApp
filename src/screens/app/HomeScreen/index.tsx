import { Button } from "../../../components/Button";
import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";
import { AppTabScreenProps } from "../../../routes/navigationType";


export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
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