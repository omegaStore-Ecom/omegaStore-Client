import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentUser } from "../../interfaces";

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
  name: "currentUser",
  initialState,
  reducers: {
    currentUser: currentUserReducer,
    logout() {
      return initialState;
    },
  },
});
export const { currentUser } = userSlice.actions;
export default userSlice.reducer;
