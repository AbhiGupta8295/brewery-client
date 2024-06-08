import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = async (event) => {
    event.preventDefault();
    try {
      const credentials = { username, password };
      if (!username) {
        throw Error("username is required");
      }
      if (!password) {
        throw Error("password is required");
      }

      const response = await axios.post("/users/login", credentials);

      if (response.status === 200) {
        navigate("/search");
      } else {
        alert("wrong username or password");
      }
    } catch (error) {
      window.confirm("Wrong Credentials...", navigate("/login"));
      console.error("error: ", error);
    }
  };

  return (
    <>
      <nav>
        <button onClick={handleSignUpClick}>SignUp</button>
      </nav>
      <form>
        <h1>Welcome,</h1>
        <h3>Login to continue</h3>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />

        <label>
          Password:
          <input
            type="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button onClick={handleLoginClick}>Login</button>
      </form>
    </>
  );
}

export default Login;
