import { StateCreator } from "zustand";

export type AuthSlice = { isLoggedIn: boolean; login: () => void };

export const createAuthSlice: StateCreator<AuthSlice> = (set): AuthSlice => ({
  isLoggedIn: false,
  login: () => set({ isLoggedIn: true }),
});
