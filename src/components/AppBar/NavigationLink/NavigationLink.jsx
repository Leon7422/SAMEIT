import { NavLink } from 'react-router-dom';

const NavigationLink = ({ text, navigate }) => {
  return <NavLink to={navigate}>{text}</NavLink>;
};

export default NavigationLink;
