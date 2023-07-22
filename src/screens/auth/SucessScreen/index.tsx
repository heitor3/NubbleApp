import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "../../../components/Button";
import { Icon } from "../../../components/Icon";
import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";
import { RootParamList } from "../../../routes/Routes";


type ScreenProps = NativeStackScreenProps<RootParamList, 'Sucess'>

export function SucessScreen({ navigation, route }: ScreenProps) {

  const { description, icon, title } = route.params;

  function goBackToBegin() {
    //TODO navegar para tela de login
  }

  return (
    <Screen>
      <Icon name={icon.name} />
      <Text preset="headingLarge" mt="s24">{title}</Text>
      <Text preset="paragraphLarge" mt="s16">{description}</Text>
      <Button onPress={goBackToBegin} mt="s40" title="Voltar ao início" />
    </Screen>
  );
}