import InputTTN from './InputTTN/InputTTN';
import SubmitButtonTTN from './SubmitButtonTTN/SubmitButtonTTN';
import StatusAreaTTN from './StatusAreaTTN/StatusAreaTTN';
import HistoryTTN from './HistoryTTN/HistoryTTN';

import { Container } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <Container>
        <InputTTN />
        <SubmitButtonTTN />
      </Container>
      <Container>
        <StatusAreaTTN />
        <HistoryTTN />
      </Container>
    </>
  );
};

export default HomePage;
