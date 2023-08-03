import { createSlice } from '@reduxjs/toolkit';

interface State {
  isWalktroughCompleted: boolean;
}

const initialState: State = {
  isWalktroughCompleted: false,
};

const walktroughSlice = createSlice({
  name: 'walktrough',
  initialState,
  reducers: {
    completeWalktrough: (state) => {
      state.isWalktroughCompleted = true;
    },
  },
});

export const { completeWalktrough } = walktroughSlice.actions;
export const { reducer } = walktroughSlice;
