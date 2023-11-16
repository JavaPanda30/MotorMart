import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Alertmodal from "./Alertmodal";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      axios
        .post("http://localhost:3001/register", { name, email, password })
        .then((result) => {
          console.log(result);
          navigate("/login");
        })
        .catch((err) => console.log(err));
    } else {
      setShowModal(true);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="container">
      
    <div className="container1">
      <div className="glassmorphism">
      <h1>Welcome to MotorMart</h1>
        <div className="content">
          <h2>User Registration</h2>
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
              <div className="btn">
                <button type="submit" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </form>
          <h3>Already have an account</h3>
          <Link to="/login">
            <div className="btn-container">
              <div className="btn">
                <button type="button">Login</button>
              </div>
            </div>
          </Link>
    {showModal && (
      <Alertmodal msg="Fields Can't be Empty" onClose={handleCloseModal} />
    )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUp;
