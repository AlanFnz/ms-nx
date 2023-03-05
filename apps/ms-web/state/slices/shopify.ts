import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Client from 'shopify-buy';

type initialState = {
  client: any;
  errorMessage: string;
  loading: boolean;
};

const initialState: initialState = {
  client: null,
  errorMessage: '',
  loading: false,
};

export const createShopifyClient = createAsyncThunk(
  'posters/createClient',
  async () => {
    return Client.buildClient({
      storefrontAccessToken: 'YOUR_SHOPIFY_STOREFRONT_ACCESS_TOKEN',
      domain: 'YOUR_MYSHOPIFY_STORE_URL',
    });
  }
);

const shopifySlice = createSlice({
  name: 'posters',
  initialState,
  reducers: {
    cleanPostersReducer: () => initialState,
    cleanClient: (state) => {
      state.client = initialState.client;
    },
    cleanErrorMessage: (state) => {
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createShopifyClient.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createShopifyClient.fulfilled, (state, action) => {
      state.loading = false;
      state.client = action.payload;
      state.errorMessage = '';
    });
    builder.addCase(createShopifyClient.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message;
    });
  },
});

const { actions, reducer } = shopifySlice;

export const { cleanPostersReducer, cleanErrorMessage } = actions;

export default reducer;
