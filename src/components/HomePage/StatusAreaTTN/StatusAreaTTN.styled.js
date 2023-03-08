import styled from 'styled-components';

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  height: 300px;
  padding: 10px;
  margin-top: 20px;

  border: 1px solid gray;
  border-radius: 3px;
  background-color: #efefef;

  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
  }
`;

export const Bolded = styled.span`
  font-weight: 700;
`;
