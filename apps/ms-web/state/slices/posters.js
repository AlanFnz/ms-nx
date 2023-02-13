import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  currentPoster: {},
  errorMessage: '',
  loading: false,
};

const fetchPosters = createAsyncThunk('posters/fetchPosters', () => {
  return axios
    .get('https://api.printful.com/store/products', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'Application/json',
        Authorization: `Bearer ${process.env.PRINTFUL_TOKEN}`,
      },
    })
    .then((response) => response.data);
});

const postersSlice = createSlice({
  name: 'posters',
  initialState,
  reducers: {
    reducers: {
      setCurrentPoster(state, action) {
        state.currentPoster = action.payload.poster;
      },
      cleanPostersReducer: () => initialState,
      cleanPostersData() {
        state.data = initialState.data;
      },
      cleanCurrentPoster(state) {
        state.currentPoster = initialState.currentPoster;
      },
      cleanErrorMessage() {
        state.errorMessage = '';
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosters.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.errorMessage = '';
    });
    builder.addCase(fetchPosters.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message;
    });
  },
});

const { actions, reducer } = postersSlice;

export const {
  setCurrentPoster,
  cleanPostersReducer,
  cleanPostersData,
  cleanCurrentPoster,
  cleanErrorMessage,
} = actions;

export default reducer;
