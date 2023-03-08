import { StyledLink } from './NavigationLink.styled';

const NavigationLink = ({ text, navigate }) => {
  return <StyledLink to={navigate}>{text}</StyledLink>;
};

export default NavigationLink;
