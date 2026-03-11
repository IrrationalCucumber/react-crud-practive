import axios from "axios";
import { store } from "../config/store";
import { logout } from "../config/authSlice";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  //if res is success
  (response) => response,
  //if back is err
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Token expired");
      //delete user data
      store.dispatch(logout());
      //redirect to signin
      window.location.href = "/";
    }
    return Promise.reject(error);
  },
);

export default api;
