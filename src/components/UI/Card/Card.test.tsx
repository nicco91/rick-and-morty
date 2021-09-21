import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'themes';
import Card from './Card';

it('render a card', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <Card title="Title" subTitle="Sub title">
          I am a card!
        </Card>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
