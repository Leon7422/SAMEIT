import { useSelector } from 'react-redux';
import { getClosestOffices } from 'redux/tracking/trackingSelectors';

import ButtonFind from './ButtonFind/ButtonFind';
import Title from './Title/Title';
import OfficeList from './OfficeList/OfficeList';

const OfficesPage = () => {
  const closestOffices = useSelector(getClosestOffices);

  return (
    <div>
      <ButtonFind />
      {closestOffices && (
        <>
          <Title />
          <OfficeList closestOffices={closestOffices} />
        </>
      )}
    </div>
  );
};

export default OfficesPage;
