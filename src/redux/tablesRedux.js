import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const tableSlice = createSlice({
  name: 'tables',
  initialState: initialState.tables,
  reducer: {
    addTables: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTables } = tableSlice;
export default tableSlice.reducer;
