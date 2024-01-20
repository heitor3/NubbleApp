import { useRef } from "react";
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle } from "react-native";
import { Box } from "../Box";
import { $fontFamily, $fontSizes, Text } from "../Text";
import { useAppTheme } from "../../hooks/useAppTheme";


interface TextMessageProps extends RNTextInputProps {
  onPressSend: () => void;
}

export function TextMessage({ onPressSend, value, ...rest }: TextMessageProps) {
  const { colors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);
  function focusInput() {
    inputRef.current?.focus();
  }


  const sendIsDisable = value?.trim().length === 0;

  return (
    <Pressable onPress={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        borderRadius="s12"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >

        <RNTextInput
          ref={inputRef}
          placeholderTextColor={colors.gray1}
          placeholder="Adicione um comentário"
          value={value}
          style={
            [$textInputStyle, { color: colors.gray1 }]
          }
          {...rest}
        />
        <Pressable disabled={sendIsDisable} onPress={onPressSend}>
          <Text bold color={sendIsDisable ? 'gray2' : 'primary'}>Enviar</Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}


const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium
}