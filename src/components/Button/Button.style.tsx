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
  border: none;
  outline: none;
  &:hover {
    background: ${LIGHTBLUE50};
    transition: 0.2s;
  }
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
`;