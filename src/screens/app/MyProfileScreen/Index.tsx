import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";
import { AppTabScreenProps } from "../../../routes/navigationType";


export function MyProfileScreen(props: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">My Profile Screen</Text>
    </Screen>
  )
}