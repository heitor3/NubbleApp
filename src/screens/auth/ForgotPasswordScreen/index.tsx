import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "../../../components/Button";
import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextInput";
import { RootParamList } from "../../../routes/Routes";


type ScreenProps = NativeStackScreenProps<
  RootParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({ navigation }: ScreenProps) {

  function submitForm() {
    //TODO
    navigation.navigate('Success', {
      title: 'Enviamos as instruções para seu e-mail',
      description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      }
    })
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">Esqueci minha senha</Text>
      <Text preset="paragraphLarge" mb="s32">Digite seu e-mail enviaremos as instruções para redefinição de senha</Text>
      <TextInput
        errorMessage="digite uma e-mail válido"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's40' }}
      />
      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  );
}