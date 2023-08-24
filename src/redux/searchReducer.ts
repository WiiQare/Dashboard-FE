// Define action types
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';

// Define action creators
export const setSearchValue = (value: string) => ({
  type: SET_SEARCH_VALUE,
  payload: value,
});

// Define initial state
const initialState = {
  searchValue: '',
};

// Define reducer
const SearchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};

export default SearchReducer;
