import { RootState } from '@core/redux-store/store';

export const selectIsWalktroughCompleted = (state: RootState) => {
  return state.walktrough.isWalktroughCompleted;
};
