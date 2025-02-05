import { configureStore } from "@reduxjs/toolkit"
import filter from "./slices/filterCategorySlice"
import cart from "./slices/cartSlice"
import product from "./slices/productsSlice"

export const store = configureStore({
    reducer:{
        filter,
        cart,
        product,
    },
});