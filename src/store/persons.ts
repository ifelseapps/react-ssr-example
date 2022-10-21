import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { getPersons } from '../__mocks__/persons';
import { Person } from '../types/person';

type InitialState = {
  loading: boolean;
  items: Person[];
};

const initialState: InitialState = {
  loading: false,
  items: [],
};

export const fetchPersons = createAsyncThunk(
  'persons/fetchPersonsList',
  async (_, thunkAPI) => {
    return getPersons();
  },
);

export const personsReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(fetchPersons.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchPersons.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });

    builder.addCase(fetchPersons.rejected, (state) => {
      state.loading = false;
    });
  },
);
