import { HistoryContainer, Title, List, ListItem } from './HistoryTTN.styled';
import { useSelector } from 'react-redux';
import { getHistory } from 'redux/tracking/trackingSelectors';
import { nanoid } from 'nanoid';

const HistoryTTN = () => {
  const history = useSelector(getHistory);
  return (
    <HistoryContainer>
      <Title>Історія</Title>
      <List>
        {history.map(item => (
          <ListItem key={nanoid()}>{item}</ListItem>
        ))}
      </List>
    </HistoryContainer>
  );
};

export default HistoryTTN;
