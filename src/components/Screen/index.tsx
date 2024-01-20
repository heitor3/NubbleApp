import React from "react";
import { Box, BoxProps, TouchableOpacityBox } from "../Box";
import { useAppSafeArae } from "../../hooks/useAppSafeArea";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { ScrollViewContainer, ViewContainer } from "./components/ScreenContainer";
import { useAppTheme } from "../../hooks/useAppTheme";
import { useNavigation } from "@react-navigation/native";
import { ScreenHeader } from "./components/ScreenHeader";

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({ children, canGoBack = false, scrollable = false, style, title, ...rest }: ScreenProps) {
  const { top, bottom } = useAppSafeArae()
  const { colors } = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? "padding" : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box paddingBottom="s24" paddingHorizontal="s24" style={[{ paddingTop: top, paddingBottom: bottom }, style]} {...rest}>
          <ScreenHeader canGoBack={canGoBack} title={title} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}