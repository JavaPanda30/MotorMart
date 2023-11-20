// Login.js
import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { useUser } from "./UserContext";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", { name, password });
  };

  const { login } = useUser();

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");

    if (storedName && storedEmail) {
      navigate("/home");
    }
  },  [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowAlert(false);

    try {
      const response = await axios.post("https://motormart.onrender.com/login", {
        name,
        password,
      });

      if (response.data && response.data.token) {
        console.log("Login successful");
        login(response.data.name, response.data.email);

        localStorage.setItem("token", response.data.token);
        navigate("/home");
         window.alert("Login successful");
      } else {
        console.log("Login failed");
        setError(response.data.error || "Invalid credentials");
        setShowAlert(true);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid Credentials. Please try again.");
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container1">
      <div className="glassmorphism">
        <h1>Welcome to MotorMart</h1>
        <div className="content">
          <h3>User Login</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </form>
          <div className="btn-container" onClick={handleLogin}>
            <div className="btn2">
              <button type="button" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </div>
          <h3>Don't have an Account? Create One</h3>
          <Link to="/register">
            <div className="btn-container">
              <div className="btn2">
                <button type="submit" onSubmit={handleSubmit}>
                  Register
                </button>
              </div>
            </div>
          </Link>
          <div>
            {showAlert && (
              <Alert
                variant="danger"
                onClose={() => setShowAlert(false)}
                dismissible
              >
                <Alert.Heading>Error!!</Alert.Heading>
                <p>{error}</p>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
