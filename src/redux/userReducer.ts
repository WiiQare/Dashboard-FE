// profileSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  profilePicture: string;
  isDropdownOpen: boolean;
}

const initialState: ProfileState = {
  profilePicture: '',
  isDropdownOpen: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfilePicture: (state, action: PayloadAction<string>) => {
      state.profilePicture = action.payload;
    },
    toggleDropdown: (state) => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
  },
});

export const { setProfilePicture, toggleDropdown } = profileSlice.actions;
export default profileSlice.reducer;
