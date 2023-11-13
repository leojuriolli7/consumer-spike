import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  networkSlug?: string;
  setNetworkSlug: (value: string) => void;
};

export const useStore = create(
  persist<State>(
    (set) => ({
      networkSlug: undefined,
      setNetworkSlug: (value) =>
        set({
          networkSlug: value,
        }),
    }),
    {
      name: "consumer-spike-store",
    }
  )
);
