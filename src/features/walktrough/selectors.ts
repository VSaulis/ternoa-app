import { RootState } from '@core/redux-store/store';

export const selectIsWalktroughCompleted = (state: RootState): boolean => {
  return state.walktrough.isWalktroughCompleted;
};
