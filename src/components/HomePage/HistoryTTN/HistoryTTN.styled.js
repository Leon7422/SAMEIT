import styled from 'styled-components';

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 200px;
  height: 300px;
  padding: 10px;
  margin-top: 20px;

  border: 1px solid gray;
  border-radius: 3px;
  background-color: #efefef;
`;

export const Title = styled.h2`
  font-weight: 700;
  padding: 0;
  margin: 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  font-weight: 700;
`;
