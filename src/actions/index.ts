import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import axios from '../utils';

export const singUp = createAsyncThunk('account/signup', async (values) => {
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

export const logIn = createAsyncThunk('account/login', async (values) => {
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
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    } else {
      throw 'Something went wrong, please try again later';
    }
  }
});

export const getTodos = createAsyncThunk('todo/get', async (values) => {
  try {
    const { data } = await axios.get(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      `/todos/${values.listId}?filter=${values?.filterParam}`
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

export const setTodoStatus = createAsyncThunk('todo/update', async (values) => {
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
  try {
    const { data } = await axios.delete(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      `/todo/${values.listId}/${values.todoId}`
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

export const getAccount = createAsyncThunk('account/get', async (accountId) => {
  try {
    const { data } = await axios.get(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      `/account/${accountId}`
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
