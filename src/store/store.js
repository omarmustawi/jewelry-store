import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import selectedProductsReducer from "./selectedProductsSlice";
// here in store put the all slices

const store = configureStore({
  reducer: {
    products: productsReducer,
    selectedProducts: selectedProductsReducer,
  },
});
export default store;
