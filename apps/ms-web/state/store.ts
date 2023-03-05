import { configureStore } from '@reduxjs/toolkit';
import postersReducer from './slices/posters';
import shopifyReducer from './slices/shopify';

const store = configureStore({
  reducer: {
    posters: postersReducer,
    shopify: shopifyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
