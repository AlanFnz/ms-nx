import { configureStore } from '@reduxjs/toolkit';
import postersReducer from './slices/posters';

const store = configureStore({
  reducer: {
    posters: postersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
