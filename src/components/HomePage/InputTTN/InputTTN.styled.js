import styled from 'styled-components';

export const SearchArea = styled.input`
  display: block;
  height: 40px;
  width: 500px;
  padding: 2px 15px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 25px;
  background-color: #efefef;
  border: 1px solid grey;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
