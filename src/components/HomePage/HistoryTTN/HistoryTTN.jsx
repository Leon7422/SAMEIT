import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

import {
  HistoryContainer,
  Title,
  List,
  ListItem,
  Button,
  TitleContainer,
  SvgContainer,
} from './HistoryTTN.styled';

import { getHistory } from 'redux/tracking/trackingSelectors';
import { getData, clearData } from 'redux/tracking/trackingOperations';

import { FiTrash } from 'react-icons/fi';

const HistoryTTN = () => {
  const history = useSelector(getHistory);
  const dispatch = useDispatch();

  const getActualData = item => {
    dispatch(getData(item));
  };

  const clearHistory = () => {
    Confirm.show(
      'Notiflix Confirm',
      'Do you agree with me?',
      'Yes',
      'No',
      () => {
        dispatch(clearData());
      },
      () => {}
    );
  };

  return (
    <HistoryContainer>
      <TitleContainer>
        <Title>Історія</Title>
        <SvgContainer onClick={clearHistory}>
          <FiTrash size={20} />
        </SvgContainer>
      </TitleContainer>
      <List>
        {history.map(item => (
          <ListItem key={nanoid()}>
            <Button onClick={() => getActualData(item)}>{item}</Button>
          </ListItem>
        ))}
      </List>
    </HistoryContainer>
  );
};

export default HistoryTTN;
