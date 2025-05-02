import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import menuReducer from './menuSlice';

// Load cart and menu from localStorage
const savedCart = localStorage.getItem('cartState');
const savedMenu = localStorage.getItem('menuState');

const preloadedState = {
  ...(savedCart && { cart: JSON.parse(savedCart) }),
  ...(savedMenu && { menu: JSON.parse(savedMenu) }),
};

// Create store with both slices
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
  },
  preloadedState,
});

// Save cart and menu to localStorage on every update
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cartState', JSON.stringify(state.cart));
  localStorage.setItem('menuState', JSON.stringify(state.menu));
});
