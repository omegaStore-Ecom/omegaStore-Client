import { baseQuery } from "../api";
import { createApi } from "@rtk-incubator/rtk-query/react";
import { Customer } from "./../../interfaces";

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery,

  endpoints: (build) => ({
    registerCustomer: build.mutation({
      query: (credentials: Customer) => ({
        url: "customer/register",
        method: "POST",
        body: credentials,
      }),
    }),
    LoginCustomer: build.mutation({
      query: (credentials: Customer) => ({
        url: "customer/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});
export const { useRegisterCustomerMutation, useLoginCustomerMutation } =
  customerApi;
