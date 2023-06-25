import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operation';

export const ratesSlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
  extraReducers: builder =>
    builder.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    }),
});
