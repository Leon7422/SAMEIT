import { createSlice } from '@reduxjs/toolkit';
import { getData } from './trackingOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  DeliverStatus: '',
  SendedFrom: '',
  SendedTo: '',
  History: [],
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'tracking',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getData.pending, (state, action) => {})
      .addCase(getData.rejected, (state, action) => {})
      .addCase(getData.fulfilled, (state, action) => {});
  },
});

const persistConfig = {
  key: 'SameIT',
  storage,
};

export const persistedTrackingReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
