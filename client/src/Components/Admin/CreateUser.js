import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const navigate = useNavigate();

  const createUser = () => {
    const handleCreateUser = () => {
      axios
        //.post("http://localhost:10000/api/create-user", { username, password })
        .post("https://acbcwebsite.onrender.com/api/create-user", {
          username,
          password,
        })
        .then((response) => {
          console.log("User created successfully:", response.data);
          alert("User created successfully");
          navigate("/admin");
        })
        .catch((error) => {
          console.error("Error creating user:", error);
        });
    };
    handleCreateUser();
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
        <h2>Create Your Login Credentials</h2>
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
          <div>
            <Button
              style={{ width: "80%", margin: "2rem 0 0 0" }}
              type="submit"
              variant="warning"
              onClick={createUser}
            >
              Create User
            </Button>

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

export default CreateUser;
