import { useDispatch } from 'react-redux';
import { findClosestOffices } from 'redux/tracking/trackingOperations';

import { FindButton, TextBtn } from './ButtonFind.styled';

const ButtonFind = () => {
  const dispatch = useDispatch();

  const findOffices = () => {
    dispatch(findClosestOffices());
  };

  return (
    <FindButton type="button" onClick={findOffices}>
      <TextBtn>Знайти найближчі відділення</TextBtn>
    </FindButton>
  );
};

export default ButtonFind;
