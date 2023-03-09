import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import InputTTN from './InputTTN/InputTTN';
import SubmitButtonTTN from './SubmitButtonTTN/SubmitButtonTTN';
import StatusAreaTTN from './StatusAreaTTN/StatusAreaTTN';
import HistoryTTN from './HistoryTTN/HistoryTTN';

import { Container } from './HomePage.styled';
import { getNumber } from 'redux/tracking/trackingSelectors';

const HomePage = () => {
  const lastUsedNumber = useSelector(getNumber);
  const [numberTTN, SetNumberTTN] = useState(lastUsedNumber || '');

  useEffect(() => {
    if (lastUsedNumber) {
      SetNumberTTN(lastUsedNumber);
    }
  }, [lastUsedNumber]);

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
