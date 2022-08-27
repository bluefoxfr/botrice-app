import React, { FunctionComponent } from 'react';
import { Button } from '@/components/Button';
import { WelcomeContainer, Icon, Content, VersionTitle } from '@/styles/Welcome.style';
import packageJson from './../../package.json';

export const Welcome: FunctionComponent = () => {
  return (
    <WelcomeContainer>
      <Content>
        <Icon src='/BobIcon.svg' alt='BobIcon' />
        <VersionTitle>{`Version ${packageJson.version}`}</VersionTitle>
        <Button>{`Go`}</Button>
      </Content>
    </WelcomeContainer>
  )
}