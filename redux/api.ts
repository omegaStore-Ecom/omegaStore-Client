// import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi, fetchBaseQuery } from "@rtk-incubator/rtk-query/react";
import { RootState } from "./store";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).currentUser.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
