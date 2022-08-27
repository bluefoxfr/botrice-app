import React, { FunctionComponent } from 'react';
import { ButtonContainer, ButtonContainerIcon, Icon, IconElement, TextElement } from './Button.style';

type ButtonProps = {
  icon?: string | undefined;
  children: string;
};

export const Button: FunctionComponent<ButtonProps> = ({icon, children, ...props}) => {
  return (
    <>
    {icon ?
    <ButtonContainerIcon {...props}>
        <TextElement>{children}</TextElement>
        <IconElement><Icon src={icon} alt={icon} /></IconElement>
      </ButtonContainerIcon>
      : <ButtonContainer {...props}>{children}</ButtonContainer>}
    </>
  )
}