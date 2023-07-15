import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextInput";
import { Icon } from "../../../components/Icon";
import { Button } from "../../../components/Button";
import { Screen } from "../../../components/Screen";


export function LoginScreen() {
  return (
    <Screen>
      <Text mb='s8' preset="headingLarge" italic>
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40" italic>
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput boxProps={{ mb: 's20' }} errorMessage='Mensagem de erro' label='E-mail' placeholder='Digite seu e-mail' />

      <TextInput placeholder="Digite sua senha"
        boxProps={{ mb: 's20' }}
        label='Senha'
        rigthComponent={<Icon name='eyeOn' color='gray2' />}
      />

      <Text bold color='primary' preset='paragraphSmall'>Esqueci minha senha</Text>

      <Button title='Entrar' mt='s48' />
      <Button title='Criar uma conta' preset='outline' mt='s12' />
    </Screen>
  );
}