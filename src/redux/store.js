import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import menuReducer from './menuSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
  }
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cartState', JSON.stringify(state.cart));
  localStorage.setItem('menuState', JSON.stringify(state.menu));
});
