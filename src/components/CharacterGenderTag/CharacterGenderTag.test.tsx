import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterGenderTag from './CharacterGenderTag';

it('Shows character gender text', () => {
  render(<CharacterGenderTag gender="Male" />);
  const linkElement = screen.getByText('Male');
  expect(linkElement).toBeInTheDocument();
});
