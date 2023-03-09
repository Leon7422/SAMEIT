import { StatusContainer, Bolded } from './StatusAreaTTN.styled';
import { useSelector } from 'react-redux';
import {
  getDeliverStatus,
  getSendedFrom,
  getSendedTo,
} from 'redux/tracking/trackingSelectors';

const StatusAreaTTN = () => {
  const deliverStatus = useSelector(getDeliverStatus);
  const sendedFrom = useSelector(getSendedFrom);
  const sendedTo = useSelector(getSendedTo);
  return (
    <StatusContainer>
      <p>Статус доставки: {deliverStatus}</p>
      <p>
        <Bolded>Відправлено: </Bolded>
      </p>
      <p>{sendedFrom}</p>
      <p>
        <Bolded>Отримано: </Bolded>
      </p>
      <p>{sendedTo}</p>
    </StatusContainer>
  );
};

export default StatusAreaTTN;
