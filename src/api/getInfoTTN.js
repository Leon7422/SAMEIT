import axios from 'axios';

export const getInfoTTN = async numberTTN => {
  const config = {
    apiKey: '7c0138a6c2b08b58d637c04f527fd025',
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: numberTTN,
        },
      ],
    },
  };

  const data = await axios.post('https://api.novaposhta.ua/v2.0/json/', config);
  return data.data.data[0];
};
