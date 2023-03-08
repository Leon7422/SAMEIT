import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import OfficesPage from './OfficesPage/OfficesPage';
import AppBar from './AppBar/AppBar';

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offices" element={<OfficesPage />} />
      </Routes>
    </>
  );
};
