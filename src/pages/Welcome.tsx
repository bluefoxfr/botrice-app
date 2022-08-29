import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  WelcomeContainer,
  Icon,
  Content,
  VersionTitle,
  GoButton,
} from '@/styles/Welcome.style';
import packageJson from './../../package.json';

const Welcome: FunctionComponent = () => {
  const router = useNavigate();
  const goTutorial = () => {
    router('app');
  };
  return (
    <WelcomeContainer>
      <Content>
        <Icon src="/BobIcon.svg" alt="BobIcon" />
        <VersionTitle>{`Version ${packageJson.version}`}</VersionTitle>
        <GoButton onClick={() => goTutorial()}>{`Go`}</GoButton>
      </Content>
    </WelcomeContainer>
  );
};

export default Welcome;
