import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import menuReducer from './menuSlice';

// ✅ Default menu items if nothing in localStorage
const defaultMenu = [
  {
    id: 1,
    name: 'Margherita Pizza',
    price: 8.99,
    description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil.',
    image: "/images/pizza.jpg"
  },
  {
    id: 2,
    name: 'Arrabiata Pasta',
    price: 7.99,
    description: 'Spicy penne pasta in a rich tomato and garlic chili sauce.',
    image: "/images/pasta.jpg",
  }
];

// ✅ Read from localStorage (if any)
const savedCart = localStorage.getItem('cartState');
const savedMenu = localStorage.getItem('menuState');

// ✅ Use saved menu or fallback to default
const preloadedState = {
  ...(savedCart && { cart: JSON.parse(savedCart) }),
  menu: savedMenu
    ? JSON.parse(savedMenu)
    : { items: defaultMenu }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
  },
  preloadedState,
});

// ✅ Keep localStorage in sync
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cartState', JSON.stringify(state.cart));
  localStorage.setItem('menuState', JSON.stringify(state.menu));
});
