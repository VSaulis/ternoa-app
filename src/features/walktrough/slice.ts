import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    setIsWalktroughCompleted: (state, action: PayloadAction<boolean>) => {
      state.isWalktroughCompleted = action.payload;
    },
  },
});

export const { setIsWalktroughCompleted } = walktroughSlice.actions;
export const { reducer } = walktroughSlice;
