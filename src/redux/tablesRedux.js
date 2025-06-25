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
    updateTable: (state, action) => {
      const { id, status, peopleAmount, maxPeopleAmount, bill } =
        action.payload;
      return state.map((table) =>
        table.id === id
          ? {
              ...table,
              status,
              peopleAmount,
              maxPeopleAmount,
              bill,
            }
          : table
      );
    },
    removeTable: (state, action) => {
      return state.filter((tab) => tab.id !== action.payload);
    },
  },
});

export const { addTables, setTables, updateTable, removeTable } =
  tableSlice.actions;

export const getTables = (state, id) =>
  state.tables.find((table) => table.id.toString() === id);
export default tableSlice.reducer;
