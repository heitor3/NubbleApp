import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";
import { AppTabScreenProps } from "../../../routes/navigationType";


export function FavoriteScreen(props: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">Favorite Screen</Text>
    </Screen>
  )
}