import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ===== start fetch product =========
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`http://127.0.0.1:8000/api/product/`);
    return response.data.data;
  }
);
// ===== end fetch product =========

// ===== start delete a  product by API =========
export const deleteProductAsync = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/product/destroy/${productId.id}`
    );
    // Extract any necessary serializable data from the non-serializable headers
    const serializableData = {
      id: response.data.id,
      // Include any other serializable data you need
    };
    return serializableData;
  }
);
// ===== start delete a  product by API =========

// ===== start Add a  product by API =========
export const addProductAsync = createAsyncThunk(
  "products/addProduct",
  async (form) => {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/product/",
      form
    );
    console.log("response: ", response);
    return response.data.data;
  }
);
// ===== end Add a  product by API =========


// ===== update Add a  product by API =========
export const updateProductAsync = createAsyncThunk(
  "products/updateProduct",
  async (form) => {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/product/update",
      form
    );
    console.log("response update : ", response);
    return response.data.data;
  }
);
// ===== end update a  product by API =========

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.data.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder // ======= fetchProducts ========
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      }) // ============ deleteProductAsync =====
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (product) => product.id !== action.meta.arg.id
        );
        return state;
      }) // ============ addProductAsync =======
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.data.push(action.payload);
      }) // ============ updateProductAsync =======
      // .addCase(updateProductAsync.fulfilled , (state , action ) =>  {
      //   state.data = state.data.filter(
      //     (product) => product.id !== action.meta.arg.id
      //   );
      //   state.data.push(action.payload);
      // })
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
