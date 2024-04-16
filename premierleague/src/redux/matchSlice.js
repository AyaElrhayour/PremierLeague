import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.sofascore.com/api/v1/sport/football/scheduled-events/2024-04-14';

export const fetchMatches = createAsyncThunk('matches/fetchMatches', async () => {
  try {
    const response = await axios.get(API_URL);
    // Filter matches for Premier League Matchday 33
    const filteredMatches = response.data.events.filter(match => {
      return match.tournament.name === 'Premier League' && match.roundInfo.round === 33;
    });
    return filteredMatches;
  } catch (error) {
    throw Error('Failed to fetch matches from the API');
  }
});

const initialState = {
  matches: [],
  loading: false,
  error: null,
};

const matchSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.loading = false;
        state.matches = action.payload;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default matchSlice.reducer;
