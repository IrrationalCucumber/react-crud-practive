import { configureStore } from "@reduxjs/toolkit"; //used to create the Redux global store
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    // state.auth will contain token and user data
    auth: authReducer,
  },
});
