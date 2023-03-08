import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: block;
  color: black;
  text-decoration: none;
  padding: 10px 20px;
  background-color: #e4e0e0;
  border-radius: 10px;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  :active {
    transform: translateY(2px);
  }
`;
