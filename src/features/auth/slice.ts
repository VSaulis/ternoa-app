import { createSlice } from '@reduxjs/toolkit';

interface State {
  isWalktroughCompleted: boolean;
}

const initialState: State = {
  isWalktroughCompleted: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    completeWalktrough: (state) => {
      state.isWalktroughCompleted = true;
    },
  },
});

export const { completeWalktrough } = authSlice.actions;
export const { reducer } = authSlice;
