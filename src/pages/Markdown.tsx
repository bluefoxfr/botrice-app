import React, { FunctionComponent, useState } from 'react';
import { Editor, MarkdownContainer } from '@/styles/Markdown.style';
import { H1 } from '@/components/Styles/Text';
import { Button } from '@/components/Button';

const Markdown: FunctionComponent = () => {
  const [value, setValue] = useState('# Welcome to Markdown Editor');
  return (
    <MarkdownContainer>
      <H1>Botrice Markdown Editor</H1>
      <Editor
        height={500}
        value={value}
        onChange={(value = '') => {
          setValue(value);
        }}
        hideToolbar={true}
        visibleDragbar={false}
      />
      <Button
        onClick={() => {
          navigator.clipboard.writeText(value);
        }}
      >
        Copy to Clipboard
      </Button>
    </MarkdownContainer>
  );
};

export default Markdown;
