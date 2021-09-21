import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard';
import { Character } from 'models/character';

const mockCharacter: Character = {
  created: '',
  episode: [],
  episodeIds: [],
  gender: 'Male',
  id: 0,
  image: '',
  location: {
    name: '',
    url: '',
  },
  origin: {
    name: '',
    url: '',
  },
  locationId: 0,
  name: 'Rick Sanchez',
  originId: 0,
  species: '',
  status: 'Alive',
  type: '',
  url: '',
};

test('Shows character name', () => {
  render(<CharacterCard character={mockCharacter} />);
  const linkElement = screen.getByText(mockCharacter.name);
  expect(linkElement).toBeInTheDocument();
});
