import { create } from 'zustand';

type State = {
  authenticated: boolean;
};

type Action = {
  setAuthenticated: (state: boolean) => void;
};

type AuthState = State & Action;

const useAuthStore = create<AuthState>((set) => ({
  authenticated: false,
  setAuthenticated: (state) => {
    set({
      authenticated: state,
    });
  },
}));

export default useAuthStore;
