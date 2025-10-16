import { create } from 'zustand';

type UIKey = 'megaMenu' | 'cart' | 'search';

type UIState = {
  open: Record<UIKey, boolean>;
  openUI: (key: UIKey) => void;
  closeUI: (key: UIKey) => void;
  toggleUI: (key: UIKey) => void;
  closeAll: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  open: {
    megaMenu: false,
    cart: false,
    modal: false,
    search: false,
  },

  openUI: (key) =>
    set((state) => ({
      open: { ...state.open, [key]: true },
    })),

  closeUI: (key) =>
    set((state) => ({
      open: { ...state.open, [key]: false },
    })),

  toggleUI: (key) =>
    set((state) => ({
      open: { ...state.open, [key]: !state.open[key] },
    })),

  closeAll: () =>
    set({
      open: { megaMenu: false, cart: false, search: false },
    }),
}));
