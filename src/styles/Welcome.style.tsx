import { DARKBLUE, GREY } from '@/components/Styles/Colors';
import { H2 } from '@/components/Styles/Text';
import styled from 'styled-components';


export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${DARKBLUE};
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Icon = styled.img``;

export const VersionTitle = styled(H2)`
  color: ${GREY};
`;