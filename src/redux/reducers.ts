// reducers.ts
import { combineReducers } from 'redux';

interface AppState {
  profilePicture: string;
  isDropdownOpen: boolean;
}

const initialAppState: AppState = {
  profilePicture: '',
  isDropdownOpen: false,
};

const profileReducer = (state = initialAppState, action: any) => {
  switch (action.type) {
    case 'SET_PROFILE_PICTURE':
      return { ...state, profilePicture: action.payload };
    case 'TOGGLE_DROPDOWN':
      return { ...state, isDropdownOpen: !state.isDropdownOpen };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  profile: profileReducer,
});

export default rootReducer;
