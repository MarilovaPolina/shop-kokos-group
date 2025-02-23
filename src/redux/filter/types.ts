export interface SelectedCategoryPayload {
    value: string;
    isChecked: boolean;
}
  
export  interface FilterCategoryState{
    selectedCategories: string[];
    currentPage: number;
}