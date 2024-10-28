import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type State = {
  token: string | null;
};

type Action = {
  setToken: (token: State['token']) => void;
  clearToken: () => void;
};

type AuthState = State & Action;

const useAuthStore = create<AuthState>()(
  persist<AuthState>(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: null }),
    }),
    {
      name: 'auth-storage',
      getStorage: () => sessionStorage,
    } as PersistOptions<AuthState>,
  ),
);

export default useAuthStore;
