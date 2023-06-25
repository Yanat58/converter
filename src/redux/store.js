import { configureStore } from '@reduxjs/toolkit';
import { ratesSlice } from './slice';

export const store = configureStore({
  reducer: {
    currency: ratesSlice.reducer,
  },
});
