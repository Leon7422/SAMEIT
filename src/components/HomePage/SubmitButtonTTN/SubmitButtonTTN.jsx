import { getData } from 'redux/tracking/trackingOperations';
import { useDispatch } from 'react-redux';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { SearchButton, TextBtn } from './SubmitButtonTTN.styled';

const SubmitButtonTTN = ({ numberTTN }) => {
  const dispatch = useDispatch();

  const getInfo = () => {
    console.log();
    if (numberTTN.length !== 14) {
      Report.failure(
        'Помилка',
        'ТТН нової пошти повинна складатися з 14 цифр, будь ласка спробуйте знову',
        'Okay'
      );
      return;
    }
    dispatch(getData(numberTTN));
  };

  return (
    <SearchButton type="submit" onClick={getInfo}>
      <TextBtn>Search</TextBtn>
    </SearchButton>
  );
};

export default SubmitButtonTTN;
