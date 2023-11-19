import { Button } from "../../../components/Button";
import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";
import { AppScreenProps } from "../../../routes/navigationType";

export function SettingsScreen({ navigation }: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">
        Setting Screen
      </Text>
      <Button
        title="New Post"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen'
          })
        }
      />
    </Screen>
  )
}