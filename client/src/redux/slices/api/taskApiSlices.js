import { apiSlice } from "../apiSlice";

const TASKS_URL = "/tasks"; // Corrected endpoint URL

export const postApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: () => ({
                url: `${TASKS_URL}/dashboard`, // Corrected endpoint URL
                method: 'GET',
                credentials: "include"
            })
        }),
        getA11Task: builder.query({
            query: ({strQuery, isTrashed, search}) => ({
                url: `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`, // Corrected endpoint URL with search parameter
                method: "GET",
                credentials: "include"
            })
        })
    })
});

export const { useGetDashboardStatsQuery, useGetA11TaskQuery } = postApiSlice; // Exporting the query hooks
