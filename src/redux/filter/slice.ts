import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterCategoryState, SelectedCategoryPayload } from './types';
import { RootState } from '../store';

const initialState:FilterCategoryState = {
  selectedCategories: [],
  currentPage: 1,
};

const filterCategorySlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // Формирование массива с отмеченными категориями
    handleSelect: (state, action: PayloadAction<SelectedCategoryPayload>) => {
      const { value, isChecked } = action.payload;
      if (isChecked) {
        state.selectedCategories.push(value);
      } else {
        state.selectedCategories = state.selectedCategories.filter((item) => item !== value);
      }
    },

    setCurrentPage:(state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    }
  },
});

export const selectedCategories = (state: RootState) => state.filter.selectedCategories;

export const { handleSelect, setCurrentPage } = filterCategorySlice.actions;
export default filterCategorySlice.reducer;
