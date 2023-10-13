import { createSlice } from "@reduxjs/toolkit";

const selectedProductsSlice = createSlice({
  name: "selectedProducts",
  initialState: {
    products: [],
    subtotal: 0,
  },
  reducers: {
    addSelectedProduct: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }
      // Recalculate the subtotal
      state.subtotal = calculateSubtotal(state.products);
    },
    removeSelectedProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      // Recalculate the subtotal
      state.subtotal = calculateSubtotal(state.products);
    },
    decreaseSelectedProduct: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct.count > 1) existingProduct.count -= 1;
      else
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      // Recalculate the subtotal
      state.subtotal = calculateSubtotal(state.products);
    },
    increaseSelectedProduct: (state, action) => {
      state.products.find(
        (product) => product.id === action.payload.id
      ).count += 1;
      // Recalculate the subtotal
      state.subtotal = calculateSubtotal(state.products);
    },
  },
});

// Helper function to calculate the subtotal
const calculateSubtotal = (products) => {
  return products.reduce(
    (total, product) => total + product.count * product.price,
    0
  );
};

export const {
  addSelectedProduct,
  removeSelectedProduct,
  decreaseSelectedProduct,
  increaseSelectedProduct,
} = selectedProductsSlice.actions;
export default selectedProductsSlice.reducer;
