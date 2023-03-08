import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/SameIT">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
