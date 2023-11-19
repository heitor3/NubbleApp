import { Button } from "../../../components/Button";
import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";
import { useForm } from "react-hook-form";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpSchema, signUpSchema } from "./singUpSchema";
import { AuthScreenProps } from "../../../routes/navigationType";


export function SignUpScreen({ navigation }: AuthScreenProps<'SignUp'>) {
  const { reset } = useResetNavigationSuccess()
  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: "onChange"
  });


  function submitForm(formValues: SignUpSchema) {

    reset({
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

      <FormTextInput
        control={control}
        name="username"
        label="Seu user name"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="fullName"
        autoCapitalize="words"
        placeholder="Digite seu nome completo"
        label="Nome completo"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label='Senha'
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
      />

      <Button disabled={!formState.isValid} onPress={handleSubmit(submitForm)} title="Criar uma conta" />

    </Screen>
  );
}