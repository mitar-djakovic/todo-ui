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

export const logIn = createAsyncThunk('logIn', async (values) => {
  try {
    const { data } = await axios.post('/login', values);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    } else {
      throw 'Something went wrong, please try again later';
    }
  }
});

export const createTodo = createAsyncThunk('todo/create', async (values) => {
  try {
    const { data } = await axios.post('/todo', values);
    console.log('data', data);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    } else {
      throw 'Something went wrong, please try again later';
    }
  }
});

export const getTodos = createAsyncThunk('todo/get', async (value) => {
  try {
    const { data } = await axios.get(`/todos/${value}`);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    } else {
      throw 'Something went wrong, please try again later';
    }
  }
});

export const setTodoStatus = createAsyncThunk('todo/update', async (values) => {
  console.log('value', values);
  try {
    const { data } = await axios.patch('/todo', values);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    } else {
      throw 'Something went wrong, please try again later';
    }
  }
});

export const deleteTodo = createAsyncThunk('todo/delete', async (values) => {
  console.log('value', values);
  try {
    const { data } = await axios.delete(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      `/todo/${values.listId}/${values.index}`
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    } else {
      throw 'Something went wrong, please try again later';
    }
  }
});
