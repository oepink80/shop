// src/store/slices/userSlice.ts

import { createSlice } from '@reduxjs/toolkit';

type UserInfo = {
  username: string;
  token: string;
  role: 'ADMIN' | 'USER';
};

type InitialState = UserInfo | null;

const initialState: InitialState = null;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAction(state, action) {
      return action.payload;
    },
    logoutAction() {
      return null;
    },
  },
});

export const { setUserAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
