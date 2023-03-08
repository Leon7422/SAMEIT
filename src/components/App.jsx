import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import OfficesPage from './OfficesPage/OfficesPage';
import AppBar from './AppBar/AppBar';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offices" element={<OfficesPage />} />
      </Routes>
    </Container>
  );
};
