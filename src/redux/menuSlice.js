import { createSlice } from '@reduxjs/toolkit';

const defaultMenu = [
  {
    id: 1,
    name: 'Margherita Pizza',
    price: 8.99,
    description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil.',
    image: "images/pizza.jpg"
  },
  {
    id: 2,
    name: 'Arrabiata Pasta',
    price: 7.99,
    description: 'Spicy penne pasta in a rich tomato and garlic chili sauce.',
    image: "images/pasta.jpg",
  }
];

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: defaultMenu
  },
  reducers: {
    setMenu(state, action) {
      state.items = action.payload;
    },
    addMenuItem(state, action) {
      state.items.push(action.payload);
    },
    updateMenuItem(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteMenuItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { setMenu, addMenuItem, updateMenuItem, deleteMenuItem } = menuSlice.actions;
export default menuSlice.reducer;
