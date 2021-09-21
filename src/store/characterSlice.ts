import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from 'models/character';
import { getCharacters } from 'rickmortyapi';
import { AppDispatch, RootState } from 'store';
import { extractId, extractIds } from 'utils/api';
import { unique } from 'utils/array';
import { BaseState } from './common';
import { fetchRegistry } from './registrySlice';

interface CharacterState extends BaseState {
  items: Character[];
  page: number;
  totalPages: number;
}

const initialState: CharacterState = {
  items: [],
  page: 1,
  totalPages: 0,
  loading: false,
  error: false,
};

export const fetchCharacters = createAsyncThunk<
  Character[],
  void,
  { dispatch: AppDispatch; state: RootState }
>('characters/fetch', async (_, { dispatch, getState }) => {
  const {
    characters: { page },
  } = getState();
  const characterResponse = await getCharacters({ page });
  const { info, results } = characterResponse.data;
  const characters = (results || []).map((character) => ({
    ...character,
    episodeIds: extractIds(character.episode, 'episode'),
    locationId: extractId(character.location.url, 'location'),
    originId: extractId(character.origin.url, 'location'),
  }));
  const episodeIds = unique(characters.reduce<number[]>((acc, c) => acc.concat(c.episodeIds), []));
  const locationIds = unique(
    characters.reduce<number[]>((acc, c) => acc.concat([c.locationId, c.originId]), [])
  );
  await dispatch(fetchRegistry({ episodeIds, locationIds }));
  dispatch(setTotalPages(info?.pages || 0));
  return characters;
});

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
    nextPage(state) {
      if (state.page < state.totalPages) {
        state.page = state.page + 1;
      }
    },
    prevPage(state) {
      if (state.page > 1) {
        state.page = state.page - 1;
      }
    },
    firstPage(state) {
      state.page = 1;
    },
    lastPage(state) {
      state.page = state.totalPages;
    },
  },
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

const { setTotalPages } = characterSlice.actions;
export const { firstPage, prevPage, nextPage, lastPage } = characterSlice.actions;

export default characterSlice.reducer;
