import { createSlice } from "@reduxjs/toolkit";

const init = {
  account: {
    email: "",
    username: "",
    email_verified: true,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: init,
  reducers: {
    logoutAccount: (state) => {
      state.account = {
        ...init.account,
      };
    },
    loginAccount: (state, action) => {
      const newState = {
        email_verified: true,
        ...action.payload,
      };
      state.account = {
        email: newState.email,
        username: newState.username,
        email_verified: newState.email_verified,
      };
    },
  },
});

export const { loginAccount, logoutAccount } = userSlice.actions;

export const selectUser = (state) => state.user.account;

export default userSlice.reducer;
