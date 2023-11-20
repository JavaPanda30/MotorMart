// UserProfile.js
import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserProfile.css";
import Topbar from "./Topbar";
import SuperBar from "./SuperBar";
import Footer from "./Footer";
import UpdateProfileForm from "./UpdateProfileForm";

const UserProfile = () => {
  const { state, logout } = useUser();
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/userIdByEmail/${state.email}`
        );
        const userId = response.data.userId;
        setUserId(userId);
        console.log("User ID:", userId);
      } catch (error) {
        console.error(
          "Error getting user ID:",
          error.response ? error.response.data : error.message
        );
      }
    };

    getUserData();
}, [state.email]);

if (!state) {
  navigate("/login");
  return null;
}

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/delete-customer/${userId}`);
      console.log("Profile deleted successfully");
      logout();
      navigate("/login");
    } catch (error) {
      console.error(
        "Error deleting profile:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleEdit = () => {
    navigate(`/update-profile/${userId}`);
  };

  const handleUpdateProfile = async () => {
    try {
      const emailResponse = await axios.get(`http://localhost:3001/checkEmail/${state.email}`);
      const isEmailExist = emailResponse.data.isExist;
      if (isEmailExist) {
        console.log("Email already exists. Please choose a different email.");
        return;
      }
      await axios.put(`http://localhost:3001/updateUser/${userId}`, state);
      console.log("Profile updated successfully");
      setShowUpdateForm(false);
    } catch (error) {
      console.error("Error updating profile:", error.response ? error.response.data : error.message);
    }
  };
  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
  };

  return (
    <>
      <Topbar />
      <SuperBar />
      <div className="user-profile">
        <img src="https://placekitten.com/200/200" alt="Profile" />
        <h2>{state.name.toUpperCase()}</h2>
        <p>Email: {state.email.toLowerCase()}</p>
      </div>
      <div className="container px-3 py-3 d-flex ">
        <div className="btn btn-danger" onClick={handleDelete}>
          Delete Profile
        </div>
        <div className="btn btn-primary ms-auto" onClick={handleEdit}>
          Edit Profile
        </div>
      </div>
      {showUpdateForm && userId && (
        <UpdateProfileForm
          userId={userId}
          onClose={handleCloseUpdateForm}
          onUpdate={handleUpdateProfile}
        />
      )}

      <Footer />
    </>
  );
};

export default UserProfile;
