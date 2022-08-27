import styled from 'styled-components';
import { DARKBLUE, GREY } from '@/components/Styles/Colors';
import { H2 } from '@/components/Styles/Text';
import { Button } from '@/components/Button';


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
  width: 200px;
`;

export const Icon = styled.img``;

export const VersionTitle = styled(H2)`
  color: ${GREY};
`;

export const GoButton = styled(Button)`
  width: 100%;
`;