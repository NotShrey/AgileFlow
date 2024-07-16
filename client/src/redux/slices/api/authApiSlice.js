//an existing API slice (apiSlice) to include authentication-related endpoints using Redux Toolkit's Query. 
//It defines three mutations: login, register, and logout.

//This code adds authentication-related API endpoints (login, register, logout) to an existing API slice using Redux Toolkit Query.
// It defines mutations for each operation and exports hooks to use these mutations in React components, facilitating easy integration of authentication functionality into the application.


// a mutation is an endpoint that is used to create, update, or delete data on the server. Mutations typically correspond to HTTP methods like POST, PUT, PATCH, or DELETE. Unlike queries, which are generally used to fetch data, 

//(((mutations are used to perform operations that change the server-side data.)))

import { apiSlice } from "../apiSlice";
import { register } from "module";

const AUTH_URL = "/user";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({ //The name of the mutation., builder.mutation: Defines a mutation endpoint.
            query: (data) => ({// A function returning an object with the API request configuration:
                url: `${AUTH_URL}/login`,
                method: "POST",//The HTTP method, which is POST.
                body: data,//The request payload, data.
                credentials: "include", // pecifies that credentials (such as cookies) should be included with the request.
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/register`,
                method: "POST",
                body: data,
                credentials: "include", // corrected the credentials value
            }),
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/login`,
                method: "POST",
                credentials: "include", // corrected the credentials value
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApiSlice;


//login -> method : post -> body : data, login mutation 