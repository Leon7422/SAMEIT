import styled from 'styled-components';

export const OfficesList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 5px;
  padding: 10px;
  max-width: 700px;

  border: 1px solid gray;
  border-radius: 3px;
  background-color: #fbfbfb;
`;

export const OfficesItem = styled.li`
  border: 1px solid gray;
  border-radius: 3px;
  background-color: #efefef;
  padding: 2px;
`;
