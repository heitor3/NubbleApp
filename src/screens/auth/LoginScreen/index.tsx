import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import { Screen } from "../../../components/Screen";
import { PasswordInput } from "../../../components/PasswordInput/Index";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList } from "../../../routes/Routes";

type ScreenProps = NativeStackScreenProps<RootParamList, 'Login'>

export function LoginScreen({ navigation }: ScreenProps) {

  function navigateToSignUpScreen() {
    navigation.navigate("SignUp")
  }
  function navigateToForgotPasswordScreen() {
    navigation.navigate("ForgotPasswordScreen")
  }

  return (
    <Screen scrollable>
      <Text mb='s8' preset="headingLarge" italic>
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40" italic>
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput boxProps={{ mb: 's20' }} errorMessage='Mensagem de erro' label='E-mail' placeholder='Digite seu e-mail' />

      <PasswordInput
        label='Senha'
        secureTextEntry
        placeholder="Digite sua senha"
        boxProps={{ mb: 's20' }}
      />

      <Text onPress={navigateToForgotPasswordScreen} bold color='primary' preset='paragraphSmall'>Esqueci minha senha</Text>

      <Button title='Entrar' mt='s48' />
      <Button onPress={navigateToSignUpScreen} title='Criar uma conta' preset='outline' mt='s12' />
    </Screen>
  );
}