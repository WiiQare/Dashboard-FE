import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  client: { patient: {} },
};

export const ReducerSlice = createSlice({
  name: 'wiiqare',
  initialState,
  reducers: {
    setPatientDispatch: (state, action) => {
      state.client.patient = { ...action.payload };
    },
  },
});

export const { setPatientDispatch } = ReducerSlice.actions;

export default ReducerSlice.reducer;
