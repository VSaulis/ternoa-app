import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  addresses: string[];
}

const initialState: State = {
  addresses: [],
};

const walletsSlice = createSlice({
  name: 'wallets',
  initialState,
  reducers: {
    setAddresses: (state, action: PayloadAction<string[]>) => {
      state.addresses = action.payload;
    },
    addAddress: (state, action: PayloadAction<string>) => {
      state.addresses = [...state.addresses, action.payload];
    },
  },
});

export const { addAddress, setAddresses } = walletsSlice.actions;
export const { reducer } = walletsSlice;
