import { createAsyncThunk } from '@reduxjs/toolkit';
import { getInfoTTN } from 'api/getInfoTTN';

export const getData = createAsyncThunk(
  'tracking/getData',
  async (credentials, { rejectWithValue, dispatch, getState }) => {
    try {
      const data = await getInfoTTN(credentials);

      const history = getState().tracking.history;

      const status = data.Status;
      const warehouseSender = data.WarehouseSender;
      const warehouseRecipient = data.WarehouseRecipient;
      const number = Number(data.Number);
      const newHistory = [number, ...history];
      console.log(data);
      return {
        status,
        warehouseRecipient,
        warehouseSender,
        number,
        newHistory,
      };
    } catch (e) {
      console.log(e);
    }
  }
);
