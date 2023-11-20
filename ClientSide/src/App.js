
import React from "react";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Services from "./Component/Service";
import SignUp from "./Component/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import UserProfile from "./Component/UserProfile";
import UpdateProfileForm from "./Component/UpdateProfileForm";
import AboutUs from './Component/AboutUs';
import CarListing from "./Component/CarListing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/service" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
  <Route path="/carlisting" element={<CarListing />} />
        <Route path="/update-profile/*" element={<UpdateProfileForm />} />
        <Route path="/profile" element={<UserProfile />} />
         <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
