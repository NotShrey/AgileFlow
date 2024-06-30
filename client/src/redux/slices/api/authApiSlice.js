import { register } from "module";
import { apiSlice } from "../apiSlice";

const AUTH_URL = "/user";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/login`,
                method: "POST",
                body: data,
                credentials: "include" , // corrected the credentials value
            }),
        }),

        register: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/register`,
                method: "POST",
                body: data,
                credentials: "include" , // corrected the credentials value
            }),
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/login`,
                method: "POST",
                credentials: "include" , // corrected the credentials value
            }),
        }),
    }),
});

export const { useLoginMutation,useRegisterMutation,useLogoutMutation } = authApiSlice;
