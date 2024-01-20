import { useNavigation } from "@react-navigation/native";
import { Box, TouchableOpacityBox } from "../../../Box";
import { Icon } from "../../../Icon";
import { Text } from "../../../Text";
import { ScreenProps } from "../..";

type Props = Pick<ScreenProps, 'title' | 'canGoBack'>

const ICON_SIZE = 20;

export function ScreenHeader({ canGoBack, title }: Props) {
  const navigation = useNavigation();

  return (
    <Box mb="s24" flexDirection="row" alignItems="center" justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox onPress={navigation.goBack} flexDirection="row" alignItems="center">
          <Icon name="arrowLeft" color="primary" size={ICON_SIZE} />

          {!title &&
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          }

        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}