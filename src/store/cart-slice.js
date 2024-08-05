import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
  },
  reducers: {
    add(state, action) {
      state.cartProducts.push(action.payload);
    },
    remove(state, action) {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
