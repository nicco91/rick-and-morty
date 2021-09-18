import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterStatusTag from './CharacterStatusTag';

it('Show character status text', () => {
  render(<CharacterStatusTag status="Alive" />);
  const linkElement = screen.getByText('Alive');
  expect(linkElement).toBeInTheDocument();
});
