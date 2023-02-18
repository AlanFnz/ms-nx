import { Poster } from '@ixtlan-nx/shared-types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type initialState = {
  data: Poster[];
  currentPoster: Poster;
  errorMessage: string;
  loading: boolean;
};

const initialState: initialState = {
  data: [],
  currentPoster: {
    id: '',
    order: 0,
    title: '',
    description: '',
    src: '',
    printUrl: '',
    instagramUrl: '',
    visible: false,
    printable: false,
    downloadable: false,
    dateCreated: 0,
    lastUpdate: 0,
  },
  errorMessage: '',
  loading: false,
};

export const fetchPosters = createAsyncThunk(
  'posters/fetchPosters',
  async () => {
    return axios
      .get('https://api.printful.com/store/products', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'Application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PRINTFUL_TOKEN}`,
        },
        withCredentials: true,
      })
      .then((response) => response.data);
  }
);

const postersSlice = createSlice({
  name: 'posters',
  initialState,
  reducers: {
    setCurrentPoster: (state, action: PayloadAction<Poster>) => {
      state.currentPoster = action.payload;
    },
    cleanPostersReducer: () => initialState,
    cleanPostersData: (state) => {
      state.data = initialState.data;
    },
    cleanCurrentPoster: (state) => {
      state.currentPoster = initialState.currentPoster;
    },
    cleanErrorMessage: (state) => {
      state.errorMessage = '';
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
