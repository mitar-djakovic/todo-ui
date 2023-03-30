import { createSlice } from '@reduxjs/toolkit';

import { logIn, singUp } from '../actions';

import { RootState } from './index';

interface Account {
  fullName: string;
  email: string;
}

export interface GlobalState {
  isLoading: boolean;
  account: Account | null;
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
        state.successMessage = '';
        state.errorMessage = '';
      })
      .addCase(singUp.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
        state.isLoading = false;
      })
      .addCase(singUp.rejected, (state, { error }) => {
        state.errorMessage =
          error.message || 'Something went wrong, please try again later';
        state.isLoading = false;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = '';
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.account = payload.data;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state, { error }) => {
        state.errorMessage =
          error.message || 'Something went wrong, please try again later';
        state.isLoading = false;
      });
  },
});

export const selectIsLoading = (state: RootState) => state.global.isLoading;
export const selectErrorMessage = (state: RootState) =>
  state.global.errorMessage;
export const selectSuccessMessage = (state: RootState) =>
  state.global.successMessage;
export const selectAccount = (state: RootState) => state.global.account;
export default globalSlice.reducer;
