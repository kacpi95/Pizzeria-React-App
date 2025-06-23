import { configureStore } from '@reduxjs/toolkit';
import tablesRedux from './tablesRedux';

const store = configureStore({
  reducer: {
    tables: tablesRedux,
  },
});

export default store;
