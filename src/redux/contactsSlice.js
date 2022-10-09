import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '+38044-459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '+38055-443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '+38066-645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '+38077-227-91-26' },
// ];

const contactsInitialState = [];

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contactsInitialState,
    isLoading: false,
    error: null,
  },
  reducers: {
    //
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.meta.arg
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
