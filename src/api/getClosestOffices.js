import axios from 'axios';

export const getClosestOffices = async cityRef => {
  const config = {
    apiKey: '7c0138a6c2b08b58d637c04f527fd025',
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityRef: cityRef,
    },
  };

  const data = await axios.post('https://api.novaposhta.ua/v2.0/json/', config);
  return data;
};
