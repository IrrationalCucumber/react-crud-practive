import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "./authSlice";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>WELCOME HOME</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
}
