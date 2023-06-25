import { dropdownReducer } from './dropdownReducer';
// rootReducer.ts
import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import profileReducer from './reducers';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    dropdown: dropdownReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
