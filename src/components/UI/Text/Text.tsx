import styled from 'styled-components';

type Props = {
  bold?: boolean;
  italic?: boolean;
  secondary?: boolean;
};

const Text = styled.p<Props>`
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.textSecondary : theme.colors.textPrimary};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  display: inline-block;
  margin: 0;
`;

export default Text;
