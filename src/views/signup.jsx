import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = async (event) => {
    event.preventDefault();
    try {
      const credentials = { username, password};
      if (!username) {
        throw Error("username is required");
      }
      if (!password) {
        throw Error("password is required");
      }

      const request = await axios.post(
        "/users/signup",
        credentials
      );
      if (request.data === true) {
        navigate("/search");
      } else {
        window.confirm(
          "User already exists. Please try with a different username or login to continue...",
          navigate("/login")
        );
      }
    } catch (error) {
      console.error("error posting credentials", error);
    }
  };


  return (
    <>
      <nav>
        <button onClick={handleLoginClick}>Login</button>
      </nav>
      <form>
        <h1>Sign Up</h1>
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

        <button onClick={handleSignupClick}>Sign Up</button>
      </form>
    </>
  );
};

export default SignupForm;
