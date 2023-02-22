import { configureStore } from '@reduxjs/toolkit';
import categoryReduser from './category/categorySlice.js';

export const store = configureStore({
  reducer: {
    category: categoryReduser,
  },
});
