import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";
import { AppTabScreenProps } from "../../../routes/navigationType";


export function NewPostScreen(props: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">New Post Screen</Text>
    </Screen>
  )
}