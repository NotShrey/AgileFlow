import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null, // checks in the local storage for any existing user 

    isSidebarOpen: false,
}

// this will be later exported to store
// for LogIn
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {// the action will contain the payload (data)
        setCredentails: (state, action) => {
            // so the user data we send will be the payload
            state.user = action.payload;// in the states we got the user comming from the action.payload
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
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
    setCredentails, logout, setOpenSidebar
} = authSlice.actions


export default authSlice.reducer
