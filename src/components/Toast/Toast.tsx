import { useToast, useToastService } from "../../service/toast/useToast";
import { useCallback, useEffect, useRef } from "react";
import { ToastContent } from "./components/ToastContent";
import { Animated } from "react-native"

export function Toast() {
  const toast = useToast();
  const { hideToast } = useToastService();

  const fedeAnimated = useRef(new Animated.Value(0)).current

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(fedeAnimated, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }, [fedeAnimated]);

  const runExitingAnimation = useCallback((callback: Animated.EndCallback) => {
    Animated.timing(fedeAnimated, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start(callback)
  }, [fedeAnimated])

  useEffect(() => {
    if (toast) {
      runEnteringAnimation()

      setTimeout(() => {
        runExitingAnimation(hideToast);
      }, toast.duration || 2000);

    }
  }, [toast, hideToast, runExitingAnimation, runEnteringAnimation])

  if (!toast) {
    return null
  }

  return (
    <Animated.View style={{ position: "absolute", alignSelf: "center", opacity: fedeAnimated }}>
      <ToastContent toast={toast} />
    </Animated.View>
  );
}