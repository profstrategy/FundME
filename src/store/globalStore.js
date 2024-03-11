import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import dataSlice from '../features/fetchSlice/dataSlice';
// import userSlice from '../features/fetchSlice/userSlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
    // user: userSlice
  },
  middleware: (getDefaultMiddleware) => [
    thunk,
  ],
});

export default store;



