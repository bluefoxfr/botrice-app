import React, { FunctionComponent } from 'react';
import { WelcomeContainer, Icon, Content, VersionTitle, GoButton } from '@/styles/Welcome.style';
import packageJson from './../../package.json';

export const Welcome: FunctionComponent = () => {
  return (
    <WelcomeContainer>
      <Content>
        <Icon src='/BobIcon.svg' alt='BobIcon' />
        <VersionTitle>{`Version ${packageJson.version}`}</VersionTitle>
        <GoButton>{`Go`}</GoButton>
      </Content>
    </WelcomeContainer>
  )
}