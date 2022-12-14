import { Button } from '@/components/Button';
import {
  DescriptionContent,
  TitleContent,
  TutorialContainer,
  Icon,
  Content,
  TopContent,
  BotContent,
} from '@/styles/FirstComing.style';
import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

const FirstComing: FunctionComponent = () => {
  const router = useNavigate();
  const goMarkdown = () => {
    router('/markdown');
  };
  return (
    <TutorialContainer>
      <Content>
        <TopContent>
          <Icon src={'/BobIcon.svg'} alt="BobIcon" />
          <TitleContent>{`Welcome to Botrice`}</TitleContent>
          <DescriptionContent>
            {`Hi! Welcome to my interface!
        I’m Botrice and i’m here to help you on this app.
        You should configure me for a better exeperience.`}
          </DescriptionContent>
        </TopContent>
        <BotContent>
          <Button
            icon={'/ArrowIcon.svg'}
            onClick={() => goMarkdown()}
          >{`Go to tutorial`}</Button>
        </BotContent>
      </Content>
    </TutorialContainer>
  );
};

export default FirstComing;
