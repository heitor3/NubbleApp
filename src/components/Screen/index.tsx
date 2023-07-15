import React from "react";
import { Box } from "../Box";
import { useAppSafeArae } from "../../hooks/useAppSafeArea";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { ScrollViewContainer, ViewContainer } from "./components/ScreenContainer";
import { useAppTheme } from "../../hooks/useAppTheme";

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({ children, canGoBack = false, scrollable = false }: ScreenProps) {
  const { top, bottom } = useAppSafeArae()
  const { colors } = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? "padding" : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box paddingBottom="s24" paddingHorizontal="s24" style={{ paddingTop: top, paddingBottom: bottom }}>
          {canGoBack && (
            <Box mb="s24" flexDirection="row">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}