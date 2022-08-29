import {
  BobIcon,
  Layout,
  MainContainer,
  MainContent,
  MarkdownApp,
  TopContent,
} from '@/styles/Main.style';
import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

const Main: FunctionComponent = () => {
  const router = useNavigate();
  const goMarkdown = () => {
    router('/markdown');
  };
  return (
    <MainContainer>
      <Layout />
      <MainContent>
        <TopContent>
          <BobIcon src="/BobIcon.svg" alt={'BobIcon'} />
        </TopContent>
        <MarkdownApp
          icon={'/markdownLogo.svg'}
          name={'Markdown'}
          description={'Markdown editor'}
          onClick={() => goMarkdown()}
        />
      </MainContent>
    </MainContainer>
  );
};

export default Main;
