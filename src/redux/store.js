import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import menuReducer from './menuSlice';

const defaultMenu = [
  {
    id: 1,
    name: 'Margherita Pizza',
    price: 8.99,
    description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil.',
    image: 'https://images.unsplash.com/photo-1601924579440-b8a0660c40c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Arrabiata Pasta',
    price: 7.99,
    description: 'Spicy penne pasta in a rich tomato and garlic chili sauce.',
    image: 'https://images.unsplash.com/photo-1589308078056-fc04a5e1879d?auto=format&fit=crop&w=800&q=80',
  }
];

const savedCart = localStorage.getItem('cartState');
const savedMenu = localStorage.getItem('menuState');

const preloadedState = {
  ...(savedCart && { cart: JSON.parse(savedCart) }),
  menu: savedMenu ? JSON.parse(savedMenu) : { items: defaultMenu }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cartState', JSON.stringify(state.cart));
  localStorage.setItem('menuState', JSON.stringify(state.menu));
});
