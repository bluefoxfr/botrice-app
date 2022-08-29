import styled from 'styled-components';
import { LIGHTBLUE, LIGHTBLUE50, PUREWHITE } from '../Styles/Colors';

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 42px;
  background: ${LIGHTBLUE};
  transition: 0.2s;
  color: ${PUREWHITE};
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  @media (max-width: 350px) {
    font-size: 12px;
  }
  border: none;
  outline: none;
  &:hover {
    background: ${LIGHTBLUE50};
    transition: 0.2s;
  }
  border-radius: 10px;
  cursor: pointer;
`;

export const ButtonContainerIcon = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 7px 20px;
  background: ${LIGHTBLUE};
  transition: 0.2s;
  color: ${PUREWHITE};
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  border: none;
  outline: none;
  gap: 40px;
  &:hover {
    background: ${LIGHTBLUE50};
    gap: 60px;
    transition: 0.2s;
  }
  border-radius: 10px;
  cursor: pointer;
`;

export const TextElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
`;

export const IconElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
`;

export const Icon = styled.img``;
