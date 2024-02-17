import { Dimensions } from "react-native";
import { $shadowProps } from "../../../theme";
import { Box } from "../../Box";
import { Icon, IconProps } from "../../Icon";
import { Text } from "../../Text";
import { Toast, ToastPosition, ToastType } from "../../../service/toast/toastTypes";

interface Props {
  toast: Toast
}

export function ToastContent({ toast }: Props) {
  const position: ToastPosition = toast?.position || 'top';
  const type: ToastType = toast?.type || 'succses';

  return (
    <Box
      backgroundColor="background"
      alignItems="center"
      top={toast.position}
      flexDirection="row"
      padding="s16"
      borderRadius="s16"
      opacity={0.95}
      style={[$shadowProps, { [position]: 100 }]}
      maxWidth={Dimensions.get('screen').width * 0.90}
    >
      <Icon {...mapTypeToIcon[type]} />
      <Text style={{ flexShrink: 1 }} ml="s16" preset="paragraphMedium" bold>{ }</Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  succses: {
    color: 'success',
    name: 'checkRound'
  },
  error: {
    color: 'error',
    name: 'errorRoundIcon'
  }
}