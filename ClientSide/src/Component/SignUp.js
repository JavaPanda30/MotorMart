import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      axios
        .post("https://motormart.onrender.com/register", { name, email, password })
        .then((result) => {
          console.log(result);
          navigate("/login");
          window.alert("User Registered Successfully");
        })
        .catch((err) => {
          console.log(err);
          if (err.response && err.response.status === 401) {
            setShowAlert(true);
          }
        });
    } else {
      setShowAlert(true);
    }
  };
  return (
    <div className="container1">
      <div className="container1">
        <div className="glassmorphism">
          <h1>Welcome to MotorMart</h1>
          <div className="content">
            <h3>User Registration</h3>
            <form>
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
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
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
              <div className="btn-container">
                <div className="btn2">
                  <button type="submit" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <h3>Already have an account</h3>
            <Link to="/login">
              <div className="btn-container">
                <div className="btn2">
                  <button type="button">Login</button>
                </div>
              </div>
            </Link>
            {showAlert && (
              <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                <Alert.Heading>Error!!</Alert.Heading>
                <p>Fields Can't be Empty</p>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
