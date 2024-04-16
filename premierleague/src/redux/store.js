import { configureStore } from '@reduxjs/toolkit';
import matchSlice from './matchSlice';

const store = configureStore({
  reducer: {
    matches: matchSlice,
  },
});

export default store;