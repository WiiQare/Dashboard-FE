import { combineReducers } from 'redux';
import reducerPatient from './reducerPatient';

const rootReducer = combineReducers({
  patient: reducerPatient
});

export type RootStatePatient = ReturnType<typeof rootReducer>;