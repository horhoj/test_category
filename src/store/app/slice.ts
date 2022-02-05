import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './types';

const initialState: AppState = {
  test: '123',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});
