import React, { FunctionComponent } from 'react';
import { ButtonContainer } from './Button.style';

type ButtonProps = {
  children: string;
};

export const Button: FunctionComponent<ButtonProps> = ({children, ...props}) => {
  return (
    <ButtonContainer {...props}>{children}</ButtonContainer>
  )
}