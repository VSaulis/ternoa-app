import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  isWalkthroughCompleted: boolean;
}

const initialState: State = {
  isWalkthroughCompleted: false,
};

const walkthroughSlice = createSlice({
  name: 'walkthrough',
  initialState,
  reducers: {
    setIsWalkthroughCompleted: (state, action: PayloadAction<boolean>) => {
      state.isWalkthroughCompleted = action.payload;
    },
  },
});

export const { setIsWalkthroughCompleted } = walkthroughSlice.actions;
export const { reducer } = walkthroughSlice;
