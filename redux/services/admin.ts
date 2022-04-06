import { createApi } from "@reduxjs/toolkit/query/react";
import { AdminLogin } from "../../interfaces";
import { baseQuery } from "../api";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery,
  endpoints: (build) => ({
    registerAdmin: build.mutation({
      query: (credentials: AdminLogin) => ({
        url: "admin/register",
        method: "POST",
        body: credentials,
      }),
    }),
    loginAdmin: build.mutation({
      query: (credentials: AdminLogin) => ({
        url: "admin/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});
export const { useLoginAdminMutation, useRegisterAdminMutation } = adminApi;
