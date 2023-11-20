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
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(
          `https://motormart.onrender.com/userIdByEmail/${state.email}`
        );
        const userId = response.data.userId;
        setUserId(userId);
      } catch (error) {
        console.error(
          "Error getting user ID:",
          error.response ? error.response.data : error.message
        );
      }
    };

    getUserData();
  }, [state.email]);

  useEffect(() => {
    const getBookings = async () => {
      try {
        const response = await axios.get(
          `https://motormart.onrender.com/getBookings/${userId}`
        );
        const userBookings = response.data;
        console.log("booking retreived");
        setBookings(userBookings);
      } catch (error) {
        console.error(
          "Error getting bookings:",
          error.response ? error.response.data : error.message
        );
      }
    };
    getBookings();
  }, [userId]);

  if (!state) {
    navigate("/login");
    return null;
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`https://motormart.onrender.com/delete-customer/${userId}`);
      window.alert("Profile deleted successfully");
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
      const emailResponse = await axios.get(
        `https://motormart.onrender.com/checkEmail/${state.email}`
      );
      const isEmailExist = emailResponse.data.isExist;
      if (isEmailExist) {
        console.log("Email already exists. Please choose a different email.");
        return;
      }
      await axios.put(`https://motormart.onrender.com/updateUser/${userId}`, state);
      console.log("Profile updated successfully");
      setShowUpdateForm(false);
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleDeleteTestDrive = async (bookingId) => {
    try {
      await axios.delete(`https://motormart.onrender.com/delete-booking/${bookingId}`);
      window.alert("Test drive booking deleted successfully");
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking._id !== bookingId)
      );
    } catch (error) {
      console.error(
        "Error deleting test drive booking:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
  };

  

  return (
    <>
      <Topbar />
      <SuperBar />
      <div className="imageprofile">
        <img
          className="imageprofile"
          src="./image2.png"
          alt="Profile"
        />
      </div>
      <div className="user-profile">
        <h2>{state.name.toUpperCase()}</h2>
        <center>
          <h4>Email: {state.email.toLowerCase()}</h4>
        </center>
      </div>
      <div className="container px-3 py-3 d-flex ">
        <div className="btn btn-danger" onClick={handleDelete}>
          Delete Profile
        </div>
        <div className="btn btn-primary ms-auto" onClick={handleEdit}>
          Edit Profile
        </div>
      </div>
      <div className="container mt-3">
        <h3>Your Test Drive Bookings</h3>
        {bookings.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Car Name</th>
                <th>Timing</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking.name}</td>
                  <td>{booking.carname}</td>
                  <td>{booking.timing}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDeleteTestDrive(booking._id)}
                    >
                      Delete Appointment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <p>No bookings found.</p>
          </div>
        )}
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
