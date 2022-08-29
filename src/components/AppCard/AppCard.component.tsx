import React, { FunctionComponent } from 'react';
import {
  AppDescription,
  AppIcon,
  AppName,
  CardContainer,
  IconDiv,
  TextDiv,
} from './AppCard.style';

type AppCardProps = {
  name: string;
  description: string;
  onClick?: () => void;
  icon?: string;
};

export const AppCard: FunctionComponent<AppCardProps> = ({
  name,
  description,
  icon,
  ...props
}) => {
  return (
    <CardContainer {...props}>
      <IconDiv>{icon ? <AppIcon src={icon} alt={'appIcon'} /> : null}</IconDiv>
      <TextDiv>
        <AppName>{name}</AppName>
        <AppDescription>{description}</AppDescription>
      </TextDiv>
    </CardContainer>
  );
};
