import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentUser } from "../../interfaces";
import {HYDRATE} from "next-redux-wrapper";

const initialState: CurrentUser = {
  token: "",
  role: "",
  email: "",
  firstName:"",
  lastName:"",
  productLimit:"",
  generatedIncome:"",
  phone:"",
  type:""
};

const currentUserReducer = (
  state: CurrentUser,
  action: PayloadAction<CurrentUser>
) => {
  state.token = action.payload.token;
  state.role = action.payload.role;
  state.email = action.payload.email;
  state.firstName = action.payload.firstName;
  state.lastName = action.payload.lastName;
  state.productLimit = action.payload.productLimit;
  state.generatedIncome = action.payload.generatedIncome;
  state.phone = action.payload.phone;
  state.type = action.payload.type;
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
