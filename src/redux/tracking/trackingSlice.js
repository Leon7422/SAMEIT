import { createSlice } from '@reduxjs/toolkit';
import { getData } from './trackingOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  deliverStatus: '',
  sendedFrom: '',
  sendedTo: '',
  history: [],
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'tracking',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getData.rejected, (state, action) => {
        state.deliverStatus = 'Упс, щось пішло не так, спробуйте ще раз';
        state.sendedFrom = 'Упс, щось пішло не так, спробуйте ще раз';
        state.sendedTo = 'Упс, щось пішло не так, спробуйте ще раз';
        state.isLoading = false;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.deliverStatus = payload.status;
        state.sendedFrom = payload.warehouseSender;
        state.sendedTo = payload.warehouseRecipient;
        state.history = payload.newHistory;
        state.isLoading = false;
      });
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
