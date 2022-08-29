import { DARKBLUE, MEDIUMBLUE } from '@/components/Styles/Colors';
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${DARKBLUE};
`;

export const MainContent = styled.div`
  display: flex;
  border-radius: 40px;
  background-color: ${MEDIUMBLUE};
`;
