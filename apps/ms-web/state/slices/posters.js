import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  currentPoster: {},
  errorMsg: '',
};

const postersSlice = createSlice({
  name: 'Posters',
  initialState,
  reducers: {
    reducers: {
      postersRequestError(state, action) {
        state.errorMsg = action.payload;
      },
      postersRequestDataSuccess(state, action) {
        state.data = action.payload.data;
      },
      setCurrentPoster(state, action) {
        state.currentPoster = action.payload.poster;
      },
      cleanPosters: () => initialState,
      cleanPostersData() {
        state.data = initialState.data;
      },
      cleanCurrentPoster(state) {
        state.currentPoster = initialState.currentPoster;
      },
      cleanErrorMsg() {
        state.errorMsg = '';
      },
    },
  },
});

const { actions, reducer } = postersSlice;

export const {
  postersRequestError,
  postersRequestDataSuccess,
  setCurrentPoster,
  cleanPosters,
  cleanPostersData,
  cleanCurrentPoster,
  cleanErrorMsg,
} = actions;

export default reducer;
