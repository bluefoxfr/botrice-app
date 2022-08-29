import React, { FunctionComponent, useState } from 'react';
import {
  Editor,
  MarkdownContainer,
  Title,
  PreviewEditor,
  MarkdownContent,
} from '@/styles/Markdown.style';
import { Button } from '@/components/Button';

const Markdown: FunctionComponent = () => {
  const [value, setValue] = useState('# Welcome to Markdown Editor');
  return (
    <MarkdownContainer>
      <Title>Botrice Markdown Editor</Title>
      <MarkdownContent>
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
        <PreviewEditor.Markdown
          source={value}
          style={{
            whiteSpace: 'pre-wrap',
            padding: '20px',
            maxHeight: '480px',
            overflow: 'auto',
            flex: '1',
          }}
        />
      </MarkdownContent>
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
