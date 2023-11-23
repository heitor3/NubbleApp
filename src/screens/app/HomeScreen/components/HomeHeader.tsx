import { SimpleLogo } from "../../../../brand/SimpleLogo";
import { Box } from "../../../../components/Box";
import { Icon } from "../../../../components/Icon";
import { useAppSafeArae } from "../../../../hooks/useAppSafeArea";


export function HomeHeader() {

  const { top } = useAppSafeArae()

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      paddingHorizontal="s24"
      paddingBottom="s24"
      style={{ padding: top }}
    >
      <SimpleLogo width={70} />
      <Box flexDirection="row" gap="s24">
        <Icon name="search" />
        <Icon name="bell" />
        <Icon name="chat" />
      </Box>
    </Box>
  );
}