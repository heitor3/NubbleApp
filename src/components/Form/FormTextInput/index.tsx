import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { TextInput, TextInputProps } from "../../TextInput";


export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInpuRest
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...textInpuRest}
        />
      )}
    />
  );
}