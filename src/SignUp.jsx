import { useState } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    type: "",
  });
  const API = process.env.REACT_APP_API;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.username || !user.password || user.type === "") {
        alert("No user");
      } else {
        // console.log(user);
        const res = await axios.post(`${API}singup`, user);
        if (res.status(500)) {
          alert("Username already exist");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <select
          name="type"
          value={user.type}
          onChange={(e) => setUser({ ...user, type: e.target.value })}
        >
          <option value="">Select type...</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <p>
        <i>
          Sign in <Link to="/">here</Link>
        </i>
      </p>
    </div>
  );
}

export default Signup;
