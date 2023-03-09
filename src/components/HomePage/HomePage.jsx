import { useState } from 'react';

import InputTTN from './InputTTN/InputTTN';
import SubmitButtonTTN from './SubmitButtonTTN/SubmitButtonTTN';
import StatusAreaTTN from './StatusAreaTTN/StatusAreaTTN';
import HistoryTTN from './HistoryTTN/HistoryTTN';

import { Container } from './HomePage.styled';

const HomePage = () => {
  const [numberTTN, SetNumberTTN] = useState('');
  return (
    <>
      <Container>
        <InputTTN numberTTN={numberTTN} SetNumberTTN={SetNumberTTN} />
        <SubmitButtonTTN numberTTN={numberTTN} />
      </Container>
      <Container>
        <StatusAreaTTN />
        <HistoryTTN />
      </Container>
    </>
  );
};

export default HomePage;
