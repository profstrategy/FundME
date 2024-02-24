import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import dataSlice from '../features/fetchSlice/dataSlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
  middleware: (getDefaultMiddleware) => [
    thunk,
  ],
});

export default store;



