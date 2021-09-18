import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'themes';
import Title from './Title';

it('render a title', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <Title>I am a title!</Title>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
