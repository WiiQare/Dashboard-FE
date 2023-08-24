import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';
// Create Redux store
const store = configureStore({
  reducer: rootReducer,
  // ... add other middleware or enhancers as needed
});

export default store;
