import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebar: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSidebar } = sideBarSlice.actions;

export default sideBarSlice.reducer;
