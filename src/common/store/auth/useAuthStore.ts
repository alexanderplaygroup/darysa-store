// store/auth/useAuthStore.ts
import { ApiResult } from '@/common/helpers/handleApiResult';
import { User } from '@/common/interfaces';
import { getMe, logoutUser } from '@/modules/auth/auth.service';
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setUser: (user: User | null) => void;
  fetchUser: () => Promise<void>;
  logout: () => Promise<ApiResult<null>>;
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

    const result = await logoutUser();

    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });

    return {
      success: result.success,
      message: result.message,
    };
  },
}));
