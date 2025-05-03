import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import menuReducer from './menuSlice';

// Load saved state
const savedCart = localStorage.getItem('cartState');
const savedMenu = localStorage.getItem('menuState');

const preloadedState = {
  ...(savedCart && { cart: JSON.parse(savedCart) }),
  ...(savedMenu && { menu: JSON.parse(savedMenu) }),
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
  },
  preloadedState,
});

// Save cart and menu to localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cartState', JSON.stringify(state.cart));
  localStorage.setItem('menuState', JSON.stringify(state.menu));
});
