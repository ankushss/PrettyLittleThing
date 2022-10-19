import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      const quantity = state.items[itemIndex].quantity;
      if (quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        state.items[itemIndex].quantity = Math.max(
          0,
          state.items[itemIndex].quantity - 1,
        );
      }
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
