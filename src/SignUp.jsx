import { useState } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    type: "user",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <h1>SIGN UP</h1>
      <form>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
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
