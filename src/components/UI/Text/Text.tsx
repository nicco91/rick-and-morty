import styled from 'styled-components';

type Props = {
  bold?: boolean;
  italic?: boolean;
  type?: 'default' | 'primary' | 'secondary';
  underline?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

const Text = styled.p<Props>`
  color: ${({ type, theme }) => {
    switch (type) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.textSecondary;
      default:
        return theme.colors.textPrimary;
    }
  }};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  display: inline-block;
  margin: 0;
`;

export default Text;
