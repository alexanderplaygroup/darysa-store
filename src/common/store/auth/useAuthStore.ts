// store/auth/useAuthStore.ts
import { User } from '@/common/interfaces';
import { api } from '@/lib/api';
import { getMe } from '@/modules/auth/auth.service';
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setUser: (user: User | null) => void;
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  fetchUser: async () => {
    set({ isLoading: true });

    try {
      const res = await getMe();

      set({
        user: res.data ?? null,
        isAuthenticated: !!res.data,
      });
    } catch {
      set({
        user: null,
        isAuthenticated: false,
      });
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    set({ isLoading: true });

    try {
      // 🔥 Esto llama al backend para borrar la cookie
      await api.post('v1/auth/logout', {}, { credentials: 'include' });
    } catch (e) {
      console.error('Error al hacer logout:', e);
    }

    // 🔥 Limpiamos el estado local sin importar qué pase
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },
}));
