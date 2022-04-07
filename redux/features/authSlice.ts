import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentUser } from "../../interfaces";
import {HYDRATE} from "next-redux-wrapper";

const initialState: CurrentUser = {
  token: "",
  role: "",
  email: "",
};

const currentUserReducer = (
  state: CurrentUser,
  action: PayloadAction<CurrentUser>
) => {
  state.token = action.payload.token;
  state.role = action.payload.role;
  state.email = action.payload.email;
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser: currentUserReducer,
    clearData() {
      return initialState;
    },

  },
});
export const { currentUser, clearData } = userSlice.actions;
export default userSlice.reducer;
