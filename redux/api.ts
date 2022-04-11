// import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi, fetchBaseQuery } from "@rtk-incubator/rtk-query/react";
import { AppState } from "./store";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://cryptomr.herokuapp.com/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as AppState).currentUser.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
