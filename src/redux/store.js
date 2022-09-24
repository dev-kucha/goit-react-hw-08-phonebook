import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '+38044-459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '+38055-443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '+38066-645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '+38077-227-91-26' },
//   ],
//   filter: {
//     text: '',
//   },
// };
