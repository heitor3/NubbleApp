import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { useForm } from "react-hook-form";
import { Screen } from "../../../components/Screen";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../../routes/Routes";
import { LoginSchema, loginSchema } from "./loginSchema";
import { zodResolver } from '@hookform/resolvers/zod'
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: ScreenProps) {
  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange'
  })

  function submitForm({ email, password }: LoginSchema) {

  }

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

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu email"
        boxProps={{ mb: 's20' }}
      />


      <FormPasswordInput
        control={control}
        name="password"
        label='Senha'
        placeholder="Digite sua senha"
        boxProps={{ mb: 's20' }}
      />

      <Text onPress={navigateToForgotPasswordScreen} bold color='primary' preset='paragraphSmall'>Esqueci minha senha</Text>

      <Button
        disabled={!formState.isValid}
        title='Entrar' mt='s48'
        onPress={handleSubmit(submitForm)}
      />
      <Button
        onPress={navigateToSignUpScreen}
        title='Criar uma conta'
        preset='outline'
        mt='s12'
      />
    </Screen>
  );
}