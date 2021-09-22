import { Character as ApiCharacter } from 'rickmortyapi/dist/interfaces';

export interface Character extends ApiCharacter {
  episodeIds: number[];
  originId: number;
  locationId: number;
}

export type CharacterStatus = ApiCharacter['status'];

export type CharacterGender = ApiCharacter['gender'];
