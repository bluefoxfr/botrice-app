import { GREY, MEDIUMBLUE } from '@/components/Styles/Colors';
import { H1, H3 } from '@/components/Styles/Text';
import styled from 'styled-components';

export const TutorialContainer = styled.div`
  display: flex;
  background-color: ${MEDIUMBLUE};
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 737px;
  height: 432px;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const BotContent = styled.div`
  display: flex;
`;

export const TitleContent = styled(H1)`
  padding: 0;
  margin: 0;
`;

export const DescriptionContent = styled(H3)`
  color: ${GREY};
  padding: 0;
  margin: 0;
`;

export const Icon = styled.img`
  padding: 0;
  margin: 0;
  width: 142.54px;
  height: 151px;
`;
