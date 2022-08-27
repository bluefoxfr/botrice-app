import { Button } from '@/components/Button';
import { WelcomeContainer, Icon, Content, VersionTitle } from '@/styles/Welcome.style';
import React, { FunctionComponent } from 'react';

export const Welcome: FunctionComponent = () => {
  return (
    <WelcomeContainer>
      <Content>
        <Icon src='/BobIcon.svg' alt='BobIcon' />
        <VersionTitle>{`Version 0.1`}</VersionTitle>
        <Button>{`Go`}</Button>
      </Content>
    </WelcomeContainer>
  )
}