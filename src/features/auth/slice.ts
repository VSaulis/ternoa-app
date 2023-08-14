import { createSlice } from '@reduxjs/toolkit';

interface State {
  isWalkthroughCompleted: boolean;
}

const initialState: State = {
  isWalkthroughCompleted: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    completeWalkthrough: (state) => {
      state.isWalkthroughCompleted = true;
    },
  },
});

export const { completeWalkthrough } = authSlice.actions;
export const { reducer } = authSlice;
