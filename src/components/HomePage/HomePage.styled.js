import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
