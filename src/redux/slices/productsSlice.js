import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('product/fetchProductsStatus', async (params) => {
  const { categoryFilter, currentPage } = params;
  const res = await axios.get(
    `https://673b4d7c339a4ce4451b996a.mockapi.io/products?page=${currentPage}&limit=9`,
  );
  return res.data;
});

const initialState = {
  items: [],
  status: "loading",
};

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'error';
        state.items = [];
        state.error = action.error.message;
      });
  },
});

export const { setItems } = productsSlice.actions;
export default productsSlice.reducer;
