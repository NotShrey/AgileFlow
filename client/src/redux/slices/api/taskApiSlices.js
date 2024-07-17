import { apiSlice } from "../apiSlice";

const TASKS_URL = "/tasks"; // Corrected endpoint URL

export const postApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: () => ({ // Fetches dashboard statistics.
                url: `${TASKS_URL}/dashboard`,
                method: 'GET',
                credentials: "include"
            })
        }),
        getA11Task: builder.query({
            query: ({ strQuery, isTrashed, search }) => ({
                url: `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
                method: "GET",
                credentials: "include"
            })
        }),
        createTask: builder.mutation({
            query: (data) => ({
                url: `${TASKS_URL}/create`,
                method: "POST",
                body: data,
                credentials: "include"
            })
        }),
        duplicateTask: builder.mutation({
            query: (id) => ({
                url: `${TASKS_URL}/duplicate/${id}`,
                method: "POST",
                body: {},
                credentials: "include"
            })
        }),
        updateTask: builder.mutation({
            query: (data) => ({
                url: `${TASKS_URL}/update/${data._id}`,
                method: "POST",
                body: data,
                credentials: "include"
            })
        }),
    })
});

export const {
    useGetDashboardStatsQuery,
    useGetA11TaskQuery,
    useCreateTaskMutation,
    useDuplicateTaskMutation,
    useUpdateTaskMutation
} = postApiSlice; // Exporting the query and mutation hooks


//This code defines an API slice using Redux Toolkit Query for managing tasks. Redux Toolkit Query is a powerful tool for handling server-side data fetching and caching in Redux applications. The code uses apiSlice to inject endpoints for various task-related operations. Here's a detailed explanation:

// Key Components:
// TASKS_URL:

// A constant defining the base URL for the tasks API.
// postApiSlice:

// This is created by extending apiSlice using the injectEndpoints method to add task-related endpoints.
// Endpoints Defined:
// getDashboardStats:

// Type: Query
// Purpose: Fetches dashboard statistics.
// Query Configuration:
// URL: ${TASKS_URL}/dashboard (tasks endpoint followed by /dashboard).
// Method: GET
// Credentials: Includes credentials (like cookies) in the request.
// getA11Task:

// Type: Query
// Purpose: Fetches tasks based on stage, trash status, and search criteria.
// Query Configuration:
// URL: Constructs the URL with query parameters for stage, trash status, and search term.
// Method: GET
// Credentials: Includes credentials in the request.
// Parameters:
// strQuery: Stage of the tasks.
// isTrashed: Boolean indicating if the tasks are trashed.
// search: Search term for filtering tasks.
// createTask:

// Type: Mutation
// Purpose: Creates a new task.
// Query Configuration:
// URL: ${TASKS_URL}/create (tasks endpoint followed by /create).
// Method: POST
// Body: The task data to be created.
// Credentials: Includes credentials in the request.
// duplicateTask:

// Type: Mutation
// Purpose: Duplicates an existing task.
// Query Configuration:
// URL: ${TASKS_URL}/duplicate/${id} (tasks endpoint followed by /duplicate and the task ID).
// Method: POST
// Body: An empty object since no additional data is needed for duplication.
// Credentials: Includes credentials in the request.
// updateTask:

// Type: Mutation
// Purpose: Updates an existing task.
// Query Configuration:
// URL: ${TASKS_URL}/update/${data._id} (tasks endpoint followed by /update and the task ID).
// Method: POST
// Body: The updated task data.
// Credentials: Includes credentials in the request.
// Exported Hooks:
// These hooks are generated from the defined endpoints and are used to interact with the API within React components.

// useGetDashboardStatsQuery: Hook to fetch dashboard statistics.
// useGetA11TaskQuery: Hook to fetch tasks based on specific criteria.
// useCreateTaskMutation: Hook to create a new task.
// useDuplicateTaskMutation: Hook to duplicate an existing task.
// useUpdateTaskMutation: Hook to update an existing task.
// Summary:
// This code sets up a centralized API slice for managing tasks.
// Queries are used to fetch data, while mutations are used to create, update, and duplicate tasks.
// Hooks generated from these endpoints are exported for use in React components, making API interaction seamless and organized.




