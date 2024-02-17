
import { ToastService } from "./toastTypes";
import { create } from "zustand";

export const useToastStore = create<ToastService>(set => ({
  toast: null,
  showToast: (toast) => set({ toast }),
  hideToast: () => set({ toast: null }),
}))

export function useToastZustand(): ToastService['toast'] {
  const { toast } = useToastStore();

  return toast;
}

export function useToastServiceZustand(): Pick<ToastService, 'showToast' | 'hideToast'> {
  const { hideToast, showToast } = useToastStore();

  return {
    hideToast,
    showToast
  }
}