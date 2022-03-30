import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RootState } from "./store";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).current.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
}) as any;
