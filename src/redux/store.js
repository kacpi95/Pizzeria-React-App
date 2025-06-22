import { configureStore } from '@reduxjs/toolkit';
import tablesRedux from './tablesRedux';

const store = configureStore({
  reducer: {
    table: tablesRedux,
  },
});

export default store;
