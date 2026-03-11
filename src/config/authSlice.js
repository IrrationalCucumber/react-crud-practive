import { createSlice } from "@reduxjs/toolkit"; //helps us create reducers and actions easily

// Initial authentication state
// token is loaded from localStorage so user stays logged in after refresh
const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  type: null,
};

// createSlice automatically generates actions + reducer
const authSlice = createSlice({
  name: "auth", // name of this slice of state

  initialState,

  reducers: {
    // This function runs when login succeeds
    loginSuccess: (state, action) => {
      state.token = action.payload.token; // Save JWT token in Redux state
      state.user = action.payload.user; // Save user info
      state.type = action.payload.type; // save user type

      // Save token in browser storage
      // WHY: So user stays logged in after refreshing the page
      localStorage.setItem("token", action.payload.token);
    },

    // Logout action
    logout: (state) => {
      state.token = null; // Clear token from Redux
      state.user = null; // Remove user info
      state.type = null;

      // Remove token from browser storage
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
