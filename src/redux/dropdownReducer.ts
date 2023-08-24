// reducers/dropdownReducer.ts
interface DropdownState {
  isVisible: boolean;
}

const initialState: DropdownState = {
  isVisible: false,
};

export const dropdownReducer = (
  state = initialState,
  action: any,
): DropdownState => {
  switch (action.type) {
    case 'TOGGLE_DROPDOWN':
      return {
        isVisible: !state.isVisible,
      };
    default:
      return state;
  }
};
