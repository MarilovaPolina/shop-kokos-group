import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategories: [],
  currentPage: 1,
};

const filterCategorySlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // Формирование массива с отмеченными категориями
    handleSelect: (state, action) => {
      const { value, isChecked } = action.payload;
      if (isChecked) {
        state.selectedCategories.push(value);
      } else {
        state.selectedCategories = state.selectedCategories.filter((item) => item !== value);
      }
    },

    setCurrentPage:(state, action) => {
      console.log('Текущая страница:', action.payload);
      state.currentPage = action.payload;
    }
  },
});

export const { handleSelect, setCurrentPage } = filterCategorySlice.actions;
export default filterCategorySlice.reducer;
