import {createApi} from "@reduxjs/toolkit/query/react";
import {AdminLogin, AdminLoginResponse, DeliveryManResponse} from "../../interfaces";
import {baseQuery} from "../api";

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
        getAllAdmins: build.query<AdminLoginResponse, void>({
            query: () => ({ url: "admin" }),
        }),
        getAdmin: build.query({
            query: (id: string) => ({
                url: `admin/${id}`
            }),
        }),
        updateAdmin: build.mutation({
            query: ({id, ...patch}) => ({
                url: `admin/${id}`,
                method: "PUT",
                body: patch,
            }),
        }),
        deleteAdmin: build.mutation({
            query: (id: string) => ({
                url: `admin/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});
export const {
    useLoginAdminMutation,
    useRegisterAdminMutation,
    useDeleteAdminMutation,
    useGetAdminQuery,
    useGetAllAdminsQuery,
    useUpdateAdminMutation,
} = adminApi;
