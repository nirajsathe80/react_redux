import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    updateProducts(state, action) {
      state.products = action.payload;
    },
    updateStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { updateStatus, updateProducts } = ProductSlice.actions;

export default ProductSlice.reducer;

export function fetchProducts() {
  return async function (dispatch, getState) {
    dispatch(updateStatus(STATUSES.LOADING));
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      dispatch(updateProducts(products));
      dispatch(updateStatus(STATUSES.IDLE));
    } catch (err) {
      dispatch(updateStatus(STATUSES.ERROR));
    }
  };
}
