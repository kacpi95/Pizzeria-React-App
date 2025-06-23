import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'tables',
  initialState: [],
  reducers: {
    addTables: (state, action) => {
      state.push(action.payload);
    },
    setTables: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTables, setTables } = tableSlice.actions;
export const getTables = (state, id) =>
  state.tables.find((table) => table.id === id);
export default tableSlice.reducer;
