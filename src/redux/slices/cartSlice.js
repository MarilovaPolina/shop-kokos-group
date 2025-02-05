import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: []
};

const filterCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action){
        const findItem = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
        if(findItem){
            findItem.count++;
        }else{
            state.items.push({
                ...action.payload,
                count: 1,
            });
        }
        console.log(action.payload.size)
        state.totalPrice = state.items.reduce((sum, item) => {
            return (item.price * item.count) + sum;
        }, 0);
        console.log(state.totalPrice)
    },
    removeItem(state, action){
        state.items = state.items.filter(item => item.id !== action.payload && item.size !== action.payload.size);
    },
    clearItems(state, action){
        state.items = [];
        state.totalPrice=0;
    },
    clickMinusCount(state, action){
        const findItem = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
        if(findItem && findItem.count>1){
            findItem.count--;
        }
    }
    
  },
});

export const { addItem, removeItem, clearItems, clickMinusCount } = filterCart.actions;
export default filterCart.reducer;
