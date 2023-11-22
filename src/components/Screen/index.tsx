import React from "react";
import { Box, BoxProps, TouchableOpacityBox } from "../Box";
import { useAppSafeArae } from "../../hooks/useAppSafeArea";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { ScrollViewContainer, ViewContainer } from "./components/ScreenContainer";
import { useAppTheme } from "../../hooks/useAppTheme";
import { useNavigation } from "@react-navigation/native";

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({ children, canGoBack = false, scrollable = false, style, ...rest }: ScreenProps) {
  const { top, bottom } = useAppSafeArae()
  const { colors } = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  const navigation = useNavigation()

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? "padding" : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box paddingBottom="s24" paddingHorizontal="s24" style={[{ paddingTop: top, paddingBottom: bottom }, style]} {...rest}>
          {canGoBack && (
            <TouchableOpacityBox onPress={navigation.goBack} mb="s24" flexDirection="row">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}