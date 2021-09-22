import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'themes';
import Description from './Description';

it('render a description component', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <Description label="Sample title" content="Sample description" />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
