import React, { FunctionComponent, useState } from 'react';
import { Editor, MarkdownContainer, Title } from '@/styles/Markdown.style';
import { Button } from '@/components/Button';

const Markdown: FunctionComponent = () => {
  const [value, setValue] = useState('# Welcome to Markdown Editor');
  return (
    <MarkdownContainer>
      <Title>Botrice Markdown Editor</Title>
      <Editor
        height={500}
        value={value}
        onChange={(value = '') => {
          setValue(value);
        }}
        hideToolbar={true}
        visibleDragbar={false}
        preview={'edit'}
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
