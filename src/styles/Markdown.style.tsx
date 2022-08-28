import { DARKBLUE } from '@/components/Styles/Colors';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';

export const MarkdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${DARKBLUE};
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Editor = styled(MDEditor)`
  width: 1000px;
  border-radius: 10px;
  margin: 20px 0;
`;
