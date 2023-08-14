import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { reducer as authReducer } from '@features/auth/slice';
import { reducer as walkthroughReducer } from '@features/walkthrough/slice';
import { reducer as walletsReducer } from '@features/wallets/slice';

const rootReducer = combineReducers({
  auth: authReducer,
  walkthrough: walkthroughReducer,
  wallets: walletsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
