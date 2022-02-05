import { RootState } from '../types';

export const getTest = (state: RootState): string => state.app.test;
