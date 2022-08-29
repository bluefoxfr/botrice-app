import { Layout, MainContainer, MainContent } from '@/styles/Main.style';
import React, { FunctionComponent } from 'react';

const Main: FunctionComponent = () => {
  return (
    <MainContainer>
      <Layout />
      <MainContent />
    </MainContainer>
  );
};

export default Main;
