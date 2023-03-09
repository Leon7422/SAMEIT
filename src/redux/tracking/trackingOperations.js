import { createAsyncThunk } from '@reduxjs/toolkit';
import { getInfoTTN } from 'api/getInfoTTN';
import { getClosestOffices } from 'api/getClosestOffices';
import { Report } from 'notiflix/build/notiflix-report-aio';

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
      const refCity = data.RefCityRecipient;
      const cityInfo = data.WarehouseRecipientAddress;
      const newHistory = [number, ...history];
      return {
        status,
        warehouseRecipient,
        warehouseSender,
        number,
        newHistory,
        refCity,
        cityInfo,
      };
    } catch (e) {
      console.log(e);
    }
  }
);

export const clearData = createAsyncThunk(
  'tracking/clearData',
  async (credentials, { rejectWithValue, dispatch, getState }) => {
    return 1;
  }
);

export const findClosestOffices = createAsyncThunk(
  'tracking/getOffices',
  async (credentials, { rejectWithValue, dispatch, getState }) => {
    const cityRef = getState().tracking.cityRef;
    if (!cityRef) {
      Report.info(
        'Інформація для вас',
        'Для того щоб користуватись даною функцією, будь ласка знайдіть свою першу товаро транспортну накладну у вкладці "Перевірити ТТН"',
        'Окей, зараз знайду'
      );
      return;
    }
    const data = await getClosestOffices(cityRef);
    return data.data.data;
  }
);
