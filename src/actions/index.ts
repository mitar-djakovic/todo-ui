import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import axios from '../utils';

export const singUp = createAsyncThunk('signUp', async (values) => {
  try {
    const { data } = await axios.post('/signup', values);

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    } else {
      throw 'Something went wrong, please try again later';
    }
  }
});
