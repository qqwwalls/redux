import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
 
type CounterType = {
  value: number;
};
 
const initialState: CounterType = {
  value: 0,
};
 
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      return { value: state.value + action.payload };
    },
    decrement: (state, action: PayloadAction<number>) => {
      return { value: Math.max(0, state.value - action.payload) };
    },
    reset: () => {
      return { value: 0 };
    },
  },
});
 
export const counterReducer = counterSlice.reducer;
export const { increment, decrement, reset } = counterSlice.actions;
