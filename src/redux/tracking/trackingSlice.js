import { createSlice } from '@reduxjs/toolkit';
import { getData, clearData, findClosestOffices } from './trackingOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  deliverStatus: '',
  sendedFrom: '',
  sendedTo: '',
  number: '',
  history: [],
  isLoading: false,
  cityRef: '',
  cityInfo: '',
  closestOffices: null,
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
        state.cityRef = payload.refCity;
        state.cityInfo = payload.cityInfo;
        state.closestOffices = initialState.closestOffices;
        state.isLoading = false;
      })

      .addCase(clearData.fulfilled, (state, action) => {
        state.history = initialState.history;
        state.isLoading = false;
      })
      .addCase(clearData.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(findClosestOffices.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(findClosestOffices.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(findClosestOffices.fulfilled, (state, { payload }) => {
        state.closestOffices = payload;
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
