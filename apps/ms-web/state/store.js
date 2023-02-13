import { configureStore } from '@reduxjs/toolkit';
import postersReducer from './slices/posters';

const store = configureStore({
  reducer: {
    posters: postersReducer,
  },
});

export default store;
