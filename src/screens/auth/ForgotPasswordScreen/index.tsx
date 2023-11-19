import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "../../../components/Button";
import { Screen } from "../../../components/Screen";
import { Text } from "../../../components/Text";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";
import { zodResolver } from '@hookform/resolvers/zod'
import { ForgotPasswordSchema, forgotPasswordSchema } from './forgotPasswordSchema'
import { useForm } from "react-hook-form";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { AuthScreenProps } from "../../../routes/navigationType";



export function ForgotPasswordScreen({ navigation }: AuthScreenProps<'ForgotPasswordScreen'>) {
  const { reset } = useResetNavigationSuccess();

  const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    },
    mode: 'onChange'
  })

  function submitForm(values: ForgotPasswordSchema) {

    reset({
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

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's40' }}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)} title="Recuperar senha" />
    </Screen>
  );
}