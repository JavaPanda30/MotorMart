
import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Services from "./Components/Service";
import SignUp from "./Components/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import UserProfile from "./Components/UserProfile";
import UpdateProfileForm from "./Components/UpdateProfileForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/service" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/update-profile/*" element={<UpdateProfileForm />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
