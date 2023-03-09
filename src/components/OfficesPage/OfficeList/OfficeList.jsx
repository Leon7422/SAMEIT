import { OfficesList, OfficesItem } from './OfficeList.styled';

const OfficeList = ({ closestOffices }) => {
  return (
    <OfficesList>
      {closestOffices.map(item => (
        <OfficesItem key={item.SiteKey}>{item.Description}</OfficesItem>
      ))}
    </OfficesList>
  );
};

export default OfficeList;
