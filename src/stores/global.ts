import { createSlice } from '@reduxjs/toolkit';

import {
  createTodo,
  deleteTodo,
  getTodos,
  logIn,
  setTodoStatus,
  singUp,
} from '../actions';

import { RootState } from './index';

interface Account {
  fullName: string;
  email: string;
  listId: string;
}

type Todo = {
  todo: string;
  completed: boolean;
};

export interface GlobalState {
  isLoading: boolean;
  account: Account | null;
  successMessage: string;
  errorMessage: string;
  todos: Todo[];
}

const initialState: GlobalState = {
  isLoading: false,
  account: null,
  successMessage: '',
  errorMessage: '',
  todos: [],
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
      })
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, { payload }) => {
        state.todos = payload.data.todos;
        state.isLoading = false;
      })
      .addCase(getTodos.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTodo.fulfilled, (state, { payload }) => {
        state.todos = [...state.todos, payload.data];
        state.isLoading = false;
      })
      .addCase(createTodo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(setTodoStatus.pending, () => {
        // Implement some loading animation
      })
      .addCase(setTodoStatus.fulfilled, (state, { payload }) => {
        state.todos = state.todos.map((todo, index) =>
          index === payload.data.position
            ? {
                ...todo,
                completed: payload.data.completed,
              }
            : todo
        );
      })
      .addCase(setTodoStatus.rejected, () => {
        // Implement some error message
      })
      .addCase(deleteTodo.pending, () => {
        // Implement some loading animation
      })
      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        state.todos = state.todos.filter(
          (todo, index) => index !== Number(payload.data.position)
        );
      })
      .addCase(deleteTodo.rejected, () => {
        // Implement some errorMessage
      });
  },
});

export const selectIsLoading = (state: RootState) => state.global.isLoading;
export const selectErrorMessage = (state: RootState) =>
  state.global.errorMessage;
export const selectSuccessMessage = (state: RootState) =>
  state.global.successMessage;
export const selectAccount = (state: RootState) => state.global.account;
export const selectTodoList = (state: RootState) => state.global.todos;

export default globalSlice.reducer;
