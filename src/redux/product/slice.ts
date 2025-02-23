import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem, ProductSliceState, Status } from './types';
import { fetchProducts } from './asyncActions';

const initialState: ProductSliceState = {
  items: [],
  status: Status.LOADING,
};

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ProductItem[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const { setItems } = productsSlice.actions;
export default productsSlice.reducer;
