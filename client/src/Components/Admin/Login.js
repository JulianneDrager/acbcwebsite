import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // state to check if login is correct
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username && password) {
      try {
        // const response = await axios.post("http://localhost:10000/api/login",
        const response = await axios.post(
          "https://acbcwebsite.onrender.com/api/login",
          {
            username,
            password,
          }
        );

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          console.log("Logged in successfully:", response.data.token);
          navigate("/admin");
          setLoginError(false); // reset login error
        } else {
          setLoginError(true); // set login error
        }
      } catch (error) {
        console.error("Error logging in:", error);
        setLoginError(true); // set login error
      }
    } else {
      alert("Please enter a username and password");
    }
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Container style={{ marginTop: "1rem" }}>
      <Card
        style={{
          color: "white",
          background: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h2>Register Dashboard Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: "1rem" }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <hr style={{ margin: ".3rem", border: "none" }} />
          <div>
            <label htmlFor="password">Password:</label>{" "}
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {loginError && (
            <div style={{ color: "red" }}>**Invalid username or password</div>
          )}
          <div>
            <Button
              style={{ width: "80%", margin: "2rem 0 0 0" }}
              type="submit"
              variant="warning"
            >
              Login
            </Button>
            <hr style={{ margin: ".5rem" }} />
            <Link style={{ color: "white" }} to={"/create-user"}>
              Create a new user
            </Link>
            <hr style={{ margin: ".1rem", border: "none" }} />
            <Link style={{ color: "white", fontSize: "smaller" }} to={"/"}>
              BACK TO WEBSITE
            </Link>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
