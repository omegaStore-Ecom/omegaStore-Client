// import { createApi } from "@reduxjs/toolkit/query/react";
import { DeliveryMan } from "../../interfaces";
import { baseQuery } from "../api";
import { createApi } from "@rtk-incubator/rtk-query/react";

export const deliveryManApi = createApi({
  reducerPath: "deliveryManApi",
  baseQuery,

  endpoints: (builder) => ({
    addDeliveryMan: builder.mutation({
      query: (credentials: DeliveryMan) => ({
        url: "deliveryMan/register",
        method: "POST",
        body: credentials,
      }),
    }),

    getDeliveryMen: builder.query<DeliveryMan, void>({
      query: () => ({ url: "deliveryMan" }),
    }),

    updateDeliveryMan: builder.mutation<DeliveryMan, Partial<DeliveryMan>>({
      query: ({ id, ...patch }) => ({
        url: `deliveryMan/${id}`,
        method: "PUT",
        body: patch,
      }),
    }),

    disableDeliveryMan: builder.mutation<DeliveryMan, Partial<DeliveryMan>>({
      query: ({ id, ...patch }) => ({
        url: `deliveryMan/disable/${id}`,
        method: "DELETE",
        body: patch,
      }),
    }),
  }),
});
export const {
  useAddDeliveryManMutation,
  useGetDeliveryMenQuery,
  useUpdateDeliveryManMutation,
  useDisableDeliveryManMutation,
} = deliveryManApi;
