import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = import.meta.env.VITE_APP_BASE_URL;

const baseQuery = fetchBaseQuery({ baseUrl: API_URI + "/api" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});

// This code sets up the basic structure for making API requests using Redux Toolkit Query in a React application.

// The apiSlice is created with a base query that will use the provided API base URL.

// you can add them by expanding the endpoints function with specific API operations(e.g., getPosts, addPost, etc.)