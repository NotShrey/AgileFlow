// a set of API endpoints for interacting with a user-related service, using the apiSlice utility from Redux Toolkit Query. 
//The userApiSlice is extended to include these endpoints using the injectEndpoints method.
// Each endpoint corresponds to a specific API operation. Here's a breakdown of each endpoint and its purpose:
const USER_URL = "/user";//Purpose: Update user profile information.
export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/profile`,
                method: "PUT",
                body: data,
                credentials: "include",//cookies
            }),
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `${USER_URL}/${id}`,
                method: "DELETE",
                credentials: "include",
            }),
        }),

        userAction: builder.mutation({//Perform an action related to a user
            query: (data) => ({
                url: `${USER_URL}/${data.id}`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        getTeamList: builder.query({
            query: () => ({
                url: `${USER_URL}/get-team`,
                method: "GET",
                credentials: "include",
            }),
        }),

        changePassword: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/change-password`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),
    }),
});

export const {
    useUpdateUserMutation,
    useDeleteUserMutation,
    useUserActionMutation,
    useGetTeamListQuery,
    useChangePasswordMutation
} = userApiSlice;
