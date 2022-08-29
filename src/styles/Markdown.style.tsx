import { DARKBLUE } from '@/components/Styles/Colors';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import { H1 } from '@/components/Styles/Text';

export const MarkdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${DARKBLUE};
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(H1)`
  margin: 20px 0;
`;

export const Editor = styled(MDEditor)`
  max-width: 700px;
  min-width: 250px;
  border-radius: 10px;
  margin: 20px 0;
`;
