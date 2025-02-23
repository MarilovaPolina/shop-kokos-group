import { RootState } from "../store";

export const selectCartItems = (state: RootState) => state.cart.items;
export const cartItems = (state: RootState) => state.cart;
