import { createAsyncThunk } from '@reduxjs/toolkit';

export const getData = createAsyncThunk(
  'tracking/getData',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      return 1;
    } catch (e) {
      console.log(e);
    }
  }
);
