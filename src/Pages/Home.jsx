import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import api from "../config/api";
import { logout } from "../config/authSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]); //store data from back
  const navigate = useNavigate();

  useEffect(() => {
    //fetch data
    const fetchData = async () => {
      try {
        const res = await api.get("/home");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching dashboard", err);
      }
    };
    fetchData();
  });

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const dispatch = useDispatch(); //erase data
  return (
    <>
      <h1>WELCOME HOME</h1>
      {/* display response from backend */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
