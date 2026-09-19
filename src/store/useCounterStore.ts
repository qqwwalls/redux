import { create } from "zustand";

interface CounterState {
  count: number;
  up: () => void;
  down: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  up: () => set((state) => ({ count: state.count + 1 })),
  down: () => set((state) => ({ count: Math.max(0, state.count - 1) })),
}));
