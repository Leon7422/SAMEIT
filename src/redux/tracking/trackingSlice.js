import { createSlice } from '@reduxjs/toolkit';
import { getData, clearData } from './trackingOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  deliverStatus: '',
  sendedFrom: '',
  sendedTo: '',
  number: '',
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
        state.number = initialState.number;
        state.isLoading = false;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.deliverStatus = payload.status;
        state.sendedFrom = payload.warehouseSender;
        state.sendedTo = payload.warehouseRecipient;
        state.history = payload.newHistory;
        state.number = payload.number;
        state.isLoading = false;
      })

      .addCase(clearData.fulfilled, (state, action) => {
        state.history = initialState.history;
        state.isLoading = false;
      })
      .addCase(clearData.pending, (state, action) => {
        state.isLoading = true;
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
