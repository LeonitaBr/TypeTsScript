import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  email: {},
  password: '',
};

export const loginSlice = createSlice({
  name: 'loginHome',
  initialState,
  reducers: {
    loginRequest: (state, {payload: {email, password}}) => {
      state.email = email;
      state.password = password;
    },
  },
});
const {actions} = loginSlice;
console.log(actions);
