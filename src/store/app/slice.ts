import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './types';

const initialState: AppState = {
  test: '123',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<string>) => {
      state.test = action.payload;
    },
  },
});
