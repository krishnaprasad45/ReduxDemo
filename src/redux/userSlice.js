import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  designation: '',
  city: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { firstName, lastName, age, designation, city } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.age = age;
      state.designation = designation;
      state.city = city;
    },
    resetProfile: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.age = '';
      state.designation = '';
      state.city = '';
    },
  },
});

export const { updateProfile, resetProfile } = userSlice.actions;
export default userSlice.reducer;
