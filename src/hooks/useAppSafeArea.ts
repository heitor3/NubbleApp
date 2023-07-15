import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "./useAppTheme";

export function useAppSafeArae() {
  const { top, bottom } = useSafeAreaInsets();
  const { spacing } = useAppTheme();
  return {
    top: Math.max(top, spacing.s20),
    bottom: Math.max(top, spacing.s20),
  };
}