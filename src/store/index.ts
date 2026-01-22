import { create } from "zustand";
import { AuthSlice, createAuthSlice } from "./auth.slice";

type StoreState = AuthSlice;

export const useStore = create<StoreState>()((...a) => ({
  ...createAuthSlice(...a),
}));
