import { loginFetch, registerFetch } from "@/api/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      login: async ({ username, password }) => {
        if (typeof window !== "undefined") {
          try {
            const res = await loginFetch({ username, password });

            if (res.token) {
              set({ isAuthenticated: true });
              setToken(res.token);
            } else {
              set({ isAuthenticated: false, error: res.message });
            }
          } catch (error) {
            set({ isAuthenticated: false, error: "Error during login" });
          }
        }
      },

      logout: () => {
        set({ isAuthenticated: false });
        clearToken();
      },

      register: async ({ firstName, lastName, username, password }) => {
        try {
          const res = await registerFetch({
            firstName,
            lastName,
            username,
            password,
          });

          if (res) {
            set({ registered: true });
          } else {
            set({ registered: false, error: res.message });
          }
        } catch (error) {
          set({ registered: false, error: "Error during registration" });
        }
      },
    }),
    {
      name: "auth-storage",
      skipHydration: true,
    }
  )
);

const setToken = (token) => {
  localStorage.setItem("token", token);
};

const clearToken = () => {
  localStorage.removeItem("token");
};

export default useStore;
