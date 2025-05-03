import { createSlice } from '@reduxjs/toolkit';

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

// 👇 Load from localStorage here
const savedMenu = localStorage.getItem('menuState');
const initialState = savedMenu
  ? JSON.parse(savedMenu)
  : { items: defaultMenu };

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu(state, action) {
      state.items = action.payload;
    },
    addMenuItem(state, action) {
      state.items.push(action.payload);
    },
    deleteMenuItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateMenuItem(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    }
  }
});

export const {
  setMenu,
  addMenuItem,
  deleteMenuItem,
  updateMenuItem
} = menuSlice.actions;

export default menuSlice.reducer;
