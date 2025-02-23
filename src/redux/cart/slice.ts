import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartSliceState } from './types';
import { getCartFromLS } from '../../utils/getCartFromLS';

const initialState: CartSliceState = {
  totalPrice: 0,
  items: getCartFromLS(),
};

const filterCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>){
        const findItem = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
        if(findItem){
            findItem.count++;
        }else{
            state.items.push({
                ...action.payload,
                count: 1,
            });
        }
        state.totalPrice = state.items.reduce((sum, item) => {
            return (item.price * item.count) + sum;
        }, 0);
    },
    removeItem(state, action: PayloadAction<CartItem>){
        state.items = state.items.filter(item => item.id !== action.payload.id && item.size !== action.payload.size);
    },
    clearItems(state){
        state.items = [];
        state.totalPrice=0;
    },
    clickMinusCount(state, action: PayloadAction<CartItem>){
        const findItem = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
        if(findItem && findItem.count > 1){
            findItem.count--;
        }
    }
  },
});

export const { addItem, removeItem, clearItems, clickMinusCount } = filterCart.actions;
export default filterCart.reducer;
