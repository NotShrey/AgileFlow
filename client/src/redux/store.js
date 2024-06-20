import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;



// 1. `import { configureStore } from "@reduxjs/toolkit";`: Imports the `configureStore` function from the `@reduxjs/toolkit` library, which is used to create a Redux store.

// 2. `import authReducer from "./slices/authSlice";`: Imports the `authReducer` from the `authSlice.js` file, which contains the reducer logic for managing authentication state.

// 3. `import { apiSlice } from "./slices/apiSlice";`: Imports the `apiSlice` object from the `apiSlice.js` file, which contains Redux logic for handling API requests using Redux Toolkit's `createAsyncThunk` and `createSlice` utilities.

// 4. `const store = configureStore({ ... });`: Configures the Redux store with the following options:

//    - `reducer`: An object that specifies the reducers to be used by the store. In this case, it includes the `apiSlice.reducer` (for handling API requests) and the `authReducer` (for handling authentication state).
   
//    - `middleware`: A function that adds middleware to the Redux store. In this case, it uses the `apiSlice.middleware` from the `apiSlice` object, which includes Redux Toolkit's built-in `redux-thunk` middleware for handling asynchronous actions.
   
//    - `devTools`: A boolean that enables the Redux DevTools extension for debugging Redux state changes.

// 5. `export default store;`: Exports the configured Redux store so that it can be used in other parts of the application.

// Overall, this code sets up a Redux store with reducers for managing API requests and authentication state, as well as middleware for handling asynchronous actions and debugging with Redux DevTools.