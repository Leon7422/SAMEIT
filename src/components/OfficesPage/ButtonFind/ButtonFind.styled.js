import styled from 'styled-components';

export const FindButton = styled.button`
  display: block;
  width: 200px;
  padding: 5px 10px;

  border: 1px solid gray;
  border-radius: 25px;

  background-color: #ffb657;
  cursor: pointer;

  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  :active {
    transform: translateY(2px);
  }
`;

export const TextBtn = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
