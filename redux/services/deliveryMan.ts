import { DeliveryMan, DeliveryManResponse } from "../../interfaces";
import { baseQuery } from "../api";
import { createApi } from "@rtk-incubator/rtk-query/react";
import DeleteDeliveryMan from "./../../src/components/Forms/DeleteDeliveryMan/index";

export const deliveryManApi = createApi({
  reducerPath: "deliveryManApi",
  baseQuery,

  endpoints: (build) => ({
    addDeliveryMan: build.mutation({
      query: (credentials: DeliveryMan) => ({
        url: "deliveryMan/register",
        method: "POST",
        body: credentials,
      }),
    }),

    getDeliveryMen: build.query<DeliveryManResponse, void>({
      query: () => ({ url: "deliveryMan" }),
    }),
    getDeliveryMenById: build.query<DeliveryMan, string>({
      query: (id) => ({ url: `deliveryMan/${id}` }),
    }),
    updateDeliveryMan: build.mutation<DeliveryMan, Partial<DeliveryMan>>({
      query: ({ id, ...patch }) => ({
        url: `deliveryMan/${id}`,
        method: "PUT",
        body: patch,
      }),
    }),

    disableDeliveryMan: build.mutation<DeliveryMan, Partial<DeliveryMan>>({
      query: ({ id, ...patch }) => ({
        url: `deliveryMan/disable/${id}`,
        method: "DELETE",
        body: patch,
      }),
    }),

    deleteDeliveryMan: build.mutation<{ success: boolean; id: number }, number>(
      {
        query(id) {
          return {
            url: `deliveryMan/${id}`,
            method: "DELETE",
          };
        },
      }
    ),
    deliveryManList: build.query<DeliveryManResponse, number | void>({
      query: (page = 1) => `deliveryMan?page=${page}`,
    }),
  }),
});
export const {
  useAddDeliveryManMutation,
  useGetDeliveryMenQuery,
  useGetDeliveryMenByIdQuery,
  useUpdateDeliveryManMutation,
  useDisableDeliveryManMutation,
  useDeleteDeliveryManMutation,
  useDeliveryManListQuery,
} = deliveryManApi;
