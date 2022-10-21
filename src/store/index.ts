import { configureStore } from '@reduxjs/toolkit';
import { personsReducer } from './persons';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    persons: personsReducer,
  },
  preloadedState: typeof window !== 'undefined'
    ? (window as any).__STORE_INITIAL_DATA__
    : undefined,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

