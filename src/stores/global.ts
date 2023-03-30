import { createSlice } from '@reduxjs/toolkit';

import { singUp } from '../actions';

import { RootState } from './index';

export interface GlobalState {
  isLoading: boolean;
  account: any;
  successMessage: string;
  errorMessage: string;
}

const initialState: GlobalState = {
  isLoading: false,
  account: null,
  successMessage: '',
  errorMessage: '',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(singUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singUp.fulfilled, (state, { payload }) => {
        state.account = payload.data;
        state.successMessage = payload.message;
        state.isLoading = false;
      })
      .addCase(singUp.rejected, (state, { error }) => {
        state.errorMessage =
          error.message || 'Something went wrong, please try again later';
        state.isLoading = false;
      });
  },
});

export const selectIsLoading = (state: RootState) => state.global.isLoading;
export const selectErrorMessage = (state: RootState) =>
  state.global.errorMessage;
export default globalSlice.reducer;
