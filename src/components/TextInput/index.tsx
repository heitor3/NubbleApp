import React, { useRef } from "react";
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle } from "react-native";
import { Box, BoxProps } from "../Box";
import { $fontFamily, $fontSizes, Text } from "../Text";
import { useAppTheme } from "../../hooks/useAppTheme";

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  rigthComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({ label, errorMessage, rigthComponent, boxProps, ...rest }: TextInputProps) {
  const { colors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }


  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? "error" : "gray4",
    padding: "s16",
    borderRadius: "s12"
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text mb="s4" preset="paragraphMedium">{label}</Text>
        <Box {...$textInputContainer} >
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={
              $textInputStyle
            }
            {...rest}
          />
          {rigthComponent && (
            <Box
              ml="s16"
              justifyContent="center"
            >
              {rigthComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text color="error" preset="paragraphSmall" bold>
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium
}
