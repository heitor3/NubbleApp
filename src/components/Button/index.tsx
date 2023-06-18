import { ActivityIndicator } from "react-native";
import { Text } from "../Text";
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box";

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}


export function Button({ title, loading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...rest}
    >
      {loading ?
        <Text preset="paragraphMedium" bold color="primaryContrast">{title}</Text>
        :
        <ActivityIndicator />
      }
    </TouchableOpacityBox>
  );
}