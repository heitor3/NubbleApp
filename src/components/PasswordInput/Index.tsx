import { useState } from "react";
import { Icon } from "../Icon";
import { TextInput, TextInputProps } from "../TextInput";

type PasswordInputProps = Omit<TextInputProps, 'rigthComponent'>

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      rigthComponent={
        <Icon
          onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'} color='gray2'
        />
      }
    />
  );
}