import InputTTN from './InputTTN/InputTTN';
import SubmitButtonTTN from './SubmitButtonTTN/SubmitButtonTTN';

import { SearchWrapper } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <SearchWrapper>
        <InputTTN />
        <SubmitButtonTTN />
      </SearchWrapper>
    </>
  );
};

export default HomePage;
