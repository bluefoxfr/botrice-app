import styled from 'styled-components';
import { DARKBLUE, GREY, LIGHTBLUE50 } from '../Styles/Colors';
import { H2, H4 } from '../Styles/Text';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  border-radius: 10px;
  background-color: ${DARKBLUE};
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    background-color: ${LIGHTBLUE50};
  }
  justify-content: space-between;
  width: 375px;
  height: fit-content;
  cursor: pointer;
`;

export const AppIcon = styled.img`
  width: 52px;
  height: 36px;
  margin-bottom: 15px;
`;

export const IconDiv = styled.div`
  display: flex;
  justify-self: flex-start;
  margin-bottom: 20px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AppName = styled(H2)`
  padding: 0;
  margin: 0;
`;

export const AppDescription = styled(H4)`
  color: ${GREY};
  padding: 0;
  margin: 0;
`;
