import { configureStore } from '@reduxjs/toolkit';
import reducerPatient from '../reducerPatient';


export const storePatient = configureStore({
  reducer: {
    app: reducerPatient,
  },
});
