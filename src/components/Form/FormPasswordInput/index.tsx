import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { PasswordInput, PasswordInputProps } from "../../PasswordInput/Index";


export function FormPasswordInput<PasswordType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputRest
}: PasswordInputProps & UseControllerProps<PasswordType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <PasswordInput
          errorMessage={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          {...passwordInputRest}
        />
      )}
    />
  );
}