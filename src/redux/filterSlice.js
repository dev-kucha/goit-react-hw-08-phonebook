import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    newFilter: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

export const { newFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
