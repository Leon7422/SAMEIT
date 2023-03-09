import { getData } from 'redux/tracking/trackingOperations';
import { useDispatch } from 'react-redux';

import { SearchButton, TextBtn } from './SubmitButtonTTN.styled';

const SubmitButtonTTN = ({ numberTTN }) => {
  const dispatch = useDispatch();

  const getInfo = () => {
    console.log(numberTTN);
    dispatch(getData(numberTTN));
  };

  return (
    <SearchButton type="submit" onClick={getInfo}>
      <TextBtn>Search</TextBtn>
    </SearchButton>
  );
};

export default SubmitButtonTTN;
