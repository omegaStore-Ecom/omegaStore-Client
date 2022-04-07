import { LineItemType, ProductResponse } from "../../interfaces";
import { baseQuery } from "../api";
import { createApi } from "@rtk-incubator/rtk-query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery,

  endpoints: (build) => ({
    addProduct: build.mutation<LineItemType, Partial<LineItemType>>({
      query: (body) => ({
        url: "product",
        method: "POST",
        body,
      }),
    }),
    
    getProduct: build.query<ProductResponse, void>({
      query: () => ({ url: "product" }),
    }),
    getProductById: build.query<LineItemType, string>({
      query: (id) => ({ url: `product/${id}` }),
    }),
    updateProduct: build.mutation<LineItemType, Partial<LineItemType>>({
      query: ({ id, ...patch }) => ({
        url: `product/${id}`,
        method: "PUT",
        body: patch,
      }),
    }),

    disableProduct: build.mutation<LineItemType, Partial<LineItemType>>({
      query: ({ id, ...patch }) => ({
        url: `product/disable/${id}`,
        method: "DELETE",
        body: patch,
      }),
    }),

    deleteProduct: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `product/${id}`,
          method: "DELETE",
        };
      },
    }),
    ProductList: build.query<ProductResponse, number | void>({
      query: (page = 1) => `Product?page=${page}`,
    }),
  }),
});
export const {
  useAddProductMutation,
  useGetProductQuery,
  useGetProductByIdQuery,
  useUpdateProductMutation,
  useDisableProductMutation,
  useDeleteProductMutation,
  useProductListQuery,
} = productApi;
