import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getEpisode, getLocation } from 'rickmortyapi';
import { Episode, Location } from 'rickmortyapi/dist/interfaces';
import { arrayToBucket } from 'utils/array';
import { BaseState } from './common';

interface RegistryData {
  episodes: Record<number, Episode>;
  locations: Record<number, Location>;
}

interface RegistryState extends RegistryData, BaseState {}

const initialState: RegistryState = {
  episodes: {},
  locations: {},
  loading: false,
  error: false,
};

export const fetchRegistry = createAsyncThunk<
  RegistryData,
  { episodeIds: number[]; locationIds: number[] }
>('episodes/fetch', async ({ episodeIds, locationIds }) => {
  const episodeResp = await getEpisode(episodeIds);
  const locationResp = await getLocation(episodeIds);
  return {
    episodes: arrayToBucket(episodeResp.data),
    locations: arrayToBucket(locationResp.data),
  };
});

const episodeSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegistry.pending, (state, action) => {
        state.requestId = action.meta.requestId;
        state.loading = true;
      })
      .addCase(fetchRegistry.fulfilled, (state, action) => {
        if (state.requestId === action.meta.requestId) {
          state.episodes = action.payload.episodes;
          state.locations = action.payload.locations;
          state.error = false;
          state.loading = false;
        }
      })
      .addCase(fetchRegistry.rejected, (state, action) => {
        if (state.requestId === action.meta.requestId) {
          state.error = true;
          state.loading = false;
        }
      });
  },
});

export default episodeSlice.reducer;
