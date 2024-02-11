import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 200
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    addMore(state, action) {
      state.value += action.payload.item;
    },
    reset() {
      return initialState;
    }
  }
});
export const { increment, addMore, reset } = counterSlice.actions;
export default counterSlice.reducer;
