import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import {
  HistoryContainer,
  Title,
  List,
  ListItem,
  Button,
} from './HistoryTTN.styled';

import { getHistory } from 'redux/tracking/trackingSelectors';
import { getData } from 'redux/tracking/trackingOperations';

const HistoryTTN = () => {
  const history = useSelector(getHistory);
  const dispatch = useDispatch();

  const getActualData = item => {
    dispatch(getData(item));
  };

  return (
    <HistoryContainer>
      <Title>Історія</Title>
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
