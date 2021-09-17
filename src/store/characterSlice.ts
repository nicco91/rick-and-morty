import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Character } from 'models/character';
import { getCharacters } from 'rickmortyapi';
import { AppDispatch } from 'store';
import { extractId, extractIds } from 'utils/api';
import { unique } from 'utils/array';
import { BaseState } from './common';
import { fetchRegistry } from './registrySlice';

interface CharacterState extends BaseState {
  items: Character[];
}

const initialState: CharacterState = {
  items: [],
  loading: false,
  error: false,
};

export const fetchCharacters = createAsyncThunk<Character[], void, { dispatch: AppDispatch }>(
  'characters/fetch',
  async (_, { dispatch }) => {
    const characterResponse = await getCharacters();
    const characters = (characterResponse.data.results || []).map((character) => ({
      ...character,
      episodeIds: extractIds(character.episode, 'episode'),
      locationId: extractId(character.location.url, 'location'),
      originId: extractId(character.origin.url, 'location'),
    }));
    const episodeIds = unique(
      characters.reduce<number[]>((acc, c) => acc.concat(c.episodeIds), [])
    );
    const locationIds = unique(
      characters.reduce<number[]>((acc, c) => acc.concat([c.locationId, c.originId]), [])
    );
    await dispatch(fetchRegistry({ episodeIds, locationIds }));
    return characters;
  }
);

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state, action) => {
        state.requestId = action.meta.requestId;
        state.loading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        if (state.requestId === action.meta.requestId) {
          state.items = action.payload;
          state.error = false;
          state.loading = false;
        }
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        if (state.requestId === action.meta.requestId) {
          state.error = true;
          state.loading = false;
        }
      });
  },
});

export default characterSlice.reducer;
