import { RootState } from '@core/redux-store/store';

export const selectIsWalkthroughCompleted = (state: RootState) => {
  return state.walkthrough.isWalkthroughCompleted;
};
