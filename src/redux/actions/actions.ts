// actions.ts
export const setProfilePicture = (pictureUrl: string) => {
  return {
    type: "SET_PROFILE_PICTURE",
    payload: pictureUrl,
  };
};

export const toggleDropdown = () => {
  return {
    type: "TOGGLE_DROPDOWN",
  };
};
