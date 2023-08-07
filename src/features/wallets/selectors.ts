import { RootState } from '@core/redux-store/store';

export const selectAddresses = (state: RootState) => {
  return state.wallets.addresses;
};

export const selectIsHasAddress = (state: RootState) => {
  return selectAddresses(state).length > 0;
};
