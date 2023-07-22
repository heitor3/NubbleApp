import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput/Index";
import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextInput";
import { RootParamList } from "../../../routes/Routes";

type ScreenProps = NativeStackScreenProps<RootParamList, 'SignUp'>

export function SignUpScreen({ navigation }: ScreenProps) {
  function submitForm() {
    // TODO
    navigation.navigate("Sucess", {
      title: "Sua conta foi criada com sucesso!",
      description: "Agora é só fazer login na nossa plataforma",
      icon: {
        name: 'checkRound',
        color: 'success'
      }
    })
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" bold mb="s32">
        Criar uma conta
      </Text>

      <TextInput
        boxProps={{ mb: 's20' }}
        placeholder="Digite seu username"
        label="Seu user name"
      />
      <TextInput
        boxProps={{ mb: 's20' }}
        placeholder="Digite seu nome completo"
        label="Nome completo"
      />
      <TextInput
        boxProps={{ mb: 's20' }}
        placeholder="Digite seu e-mail"
        label="E-mail"
      />
      <PasswordInput
        secureTextEntry
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
        label='Senha'
      />

      <Button onPress={submitForm} title="Criar uma conta" />

    </Screen>
  );
}