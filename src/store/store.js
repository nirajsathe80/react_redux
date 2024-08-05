import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart-slice";
import ProductSlice from "./product-slice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    product: ProductSlice,
  },
});

export default store;
