import { useSelector } from 'react-redux';

import { TitleArea } from './Title.styled';
import { getCityInfo, getNumber } from 'redux/tracking/trackingSelectors';

const Title = () => {
  const cityInfo = useSelector(getCityInfo);
  const number = useSelector(getNumber);
  return (
    <TitleArea>
      Переглянути місця видачі посилок відносно адреси {cityInfo}, для товаро
      транспортної накладної з номером {number} ви можете у наступній таблиці:
    </TitleArea>
  );
};

export default Title;
