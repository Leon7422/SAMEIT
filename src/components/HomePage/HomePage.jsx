import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import InputTTN from './InputTTN/InputTTN';
import SubmitButtonTTN from './SubmitButtonTTN/SubmitButtonTTN';
import StatusAreaTTN from './StatusAreaTTN/StatusAreaTTN';
import HistoryTTN from './HistoryTTN/HistoryTTN';

import { Container } from './HomePage.styled';
import { getHistory } from 'redux/tracking/trackingSelectors';

const HomePage = () => {
  const history = useSelector(getHistory);
  const [numberTTN, SetNumberTTN] = useState(history[0] || '');

  useEffect(() => {
    SetNumberTTN(history[0]);
  }, [history]);

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
