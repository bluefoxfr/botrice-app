import { DARKBLUE, MEDIUMBLUE } from '@/components/Styles/Colors';
import { AppCard } from '@/components/AppCard';
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${DARKBLUE};
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
`;

export const BobIcon = styled.img`
  width: 65px;
  height: 93px;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${DARKBLUE};
  flex: 1;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  background-color: ${MEDIUMBLUE};
  flex: 4;
`;

export const MarkdownApp = styled(AppCard)`
  margin: 50px;
`;
