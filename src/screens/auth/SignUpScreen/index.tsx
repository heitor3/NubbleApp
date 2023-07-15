import { Button } from "../../../components/Button";
import { Icon } from "../../../components/Icon";
import { PasswordInput } from "../../../components/PasswordInput/Index";
import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextInput";


export function SignUpScreen() {
  function submitForm() {
    // TODO
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