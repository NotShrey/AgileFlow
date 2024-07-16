// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     user: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null, // checks in the local storage for any existing user 

//     isSidebarOpen: false,
// }

// // this will be later exported to store
// // for LogIn
// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {// the action will contain the payload (data)
//         setCredentails: (state, action) => {
//             // so the user data we send will be the payload
//             state.user = action.payload;// in the states we got the user comming from the action.payload
//             localStorage.setItem("userInfo", JSON.stringify(action.payload));
//         },
//         // for logout
//         logout: (state, action) => {
//             state.user = null;
//             localStorage.removeItem("userInfo")
//         },
//         setOpenSidebar: (state, action) => {
//             state.isSidebarOpen = action.payload;
//         },
//     }
// })

// export const {
//     setCredentails, logout, setOpenSidebar
// } = authSlice.actions


// export default authSlice.reducer





// setting up an authentication slice using Redux Toolkit, which is a library that simplifies the process of creating and managing Redux state

// createSlice: A function from Redux Toolkit that simplifies the process of creating a Redux slice, which includes the reducer logic and actions.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null, // checks in the local storage for any existing user 
    isSidebarOpen: false,
}
//user: This state variable is initialized by checking the browser's local storage for any saved user information.
// If found, it parses the JSON string into an object; otherwise, it sets the user state to null.
// isSidebarOpen: This boolean state variable is used to track whether a sidebar is open or closed. Initially, it is set to false.
// this will be later exported to store
// for LogIn


//Creating the Auth Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {// the action will contain the payload (data)
        setCredentials: (state, action) => {
            // so the user data we send will be the payload
            state.user = action.payload;// in the states we got the user coming from the action.payload
            localStorage.setItem("userInfo", JSON.stringify(action.payload));// actions -> state.user -> save it in localBrower-> as userInfo
        },
        // for logout
        logout: (state, action) => {
            state.user = null;
            localStorage.removeItem("userInfo")
        },
        setOpenSidebar: (state, action) => {
            state.isSidebarOpen = action.payload;
        },
    }
})

export const {
    setCredentials, logout, setOpenSidebar // Corrected the export here
} = authSlice.actions

export default authSlice.reducer



// name: The name of the slice, which is "auth" in this case.
// initialState: The initial state defined earlier.
// reducers: An object defining the reducer functions to handle different actions:
// setCredentials: This action sets the user state with the payload data (user information) and saves it to local storage.
// logout: This action clears the user state and removes the user information from local storage.
// setOpenSidebar: This action sets the isSidebarOpen state based on the payload value.