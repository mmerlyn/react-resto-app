import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const savedCart = localStorage.getItem('cartState');
const preloadedState = savedCart ? { cart: JSON.parse(savedCart) } : undefined;

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

// Save to localStorage on every change
store.subscribe(() => {
  localStorage.setItem('cartState', JSON.stringify(store.getState().cart));
});
