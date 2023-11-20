import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";
import axios from "axios";
import Topbar from "./Topbar";
import Footer from "./Footer";
import "./UpdateProfileForm.css";
import { useNavigate } from "react-router-dom";

const UpdateProfileForm = ({ onClose, onUpdate }) => {
  const { state, logout } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Fetch user ID from the API
    const fetchUserId = async () => {
      try {
        const response = await axios.get(
          `https://motormart.onrender.com/userIdByEmail/${state.email}`
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

    if (state) {
      setFormData({
        name: state.name,
        email: state.email,
      });
      fetchUserId();
    }
  }, [state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (userId) {
        await axios.put(`https://motormart.onrender.com/updateUser/${userId}`, formData);
        console.log("Profile updated successfully");
        logout();
        navigate('/login')
        onClose();
        window.alert('Credential Updated successfully! Login Again');
      } else {
        console.error("User ID not available");
      }
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      <Topbar />
      <h2>Update Profile</h2>
      <div className="container p-5 my-5">
        <div className="d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Password:
              <input
                placeholder="Enter New Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
                  <div>Note:You have to login Again after Updating credentials</div>
            <button className="btn btn-info my-4" type="submit">
              Update Profile
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateProfileForm;
