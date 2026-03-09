import { useState } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const API = process.env.REACT_APP_API;

  const handleSubmit = async (e) => {
    e.prevetDefault();
    const res = await axios.post(`${API}signin`, user);
    setToken(res.data);
  };
  return (
    <>
      <div className="App">
        <h1>LOGIN</h1>
        <h2>{token}</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          <i>
            No Account? Sign up <Link to="/signup">here</Link>
          </i>
        </p>
      </div>
    </>
  );
}
