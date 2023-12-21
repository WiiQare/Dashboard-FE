import { dropdownReducer } from './dropdownReducer';
// rootReducer.ts
import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import profileReducer from './reducers';
import userReducer from './userReducer';
import reducerPatient from './reducerPatient';

const rootReducer = combineReducers({
  search: searchReducer,
  dropdown: dropdownReducer,
  patient: reducerPatient,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
