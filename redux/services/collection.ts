import { DeliveryMan, DeliveryManResponse } from "../../interfaces";
import { baseQuery } from "../api";
import { createApi } from "@rtk-incubator/rtk-query/react";

export const collectionApi = createApi({
  reducerPath: "collectionApi",
  baseQuery,

  endpoints: (build) => ({
    getCollection: build.query({
      query: () => ({ url: "deliveryMan" }),
    }),

    deleteCollection: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `collection/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});
export const { useGetCollectionQuery, useDeleteCollectionMutation } =
  collectionApi;
