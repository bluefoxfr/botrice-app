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
  margin: 0 20px;
`;

export const MarkdownContent = styled.div`
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
  border-radius: 10px;
  justify-content: center;
`;

export const Editor = styled(MDEditor)`
  flex: 1;
`;

export const PreviewEditor = styled(MDEditor)`
  padding: 20px;
  overflow: auto;
`;

export const BackArrow = styled.img`
  width: 50px;
  height: 70px;
  display: flex;
  align-self: flex-start;
  margin: 0 10px;
  cursor: pointer;
`;
