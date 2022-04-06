import { baseQuery } from "../api";
import { createApi } from "@rtk-incubator/rtk-query/react";
import { AdminLogin } from "./../../interfaces";

export const GAdminApi = createApi({
  reducerPath: "GAdminApi",
  baseQuery,

  endpoints: (build) => ({
    registerGAdmin: build.mutation({
      query: (credentials: AdminLogin) => ({
        url: "customer/register",
        method: "POST",
        body: credentials,
      }),
    }),
    LoginGAmin: build.mutation({
      query: (credentials: AdminLogin) => ({
        url: "customer/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});
export const { useLoginGAminMutation, useRegisterGAdminMutation } =
GAdminApi;