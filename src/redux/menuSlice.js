import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: []
  },
  reducers: {
    setMenu(state, action) {
      state.items = action.payload;
    },
  }
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
