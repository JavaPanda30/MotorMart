import {  useState } from "react";
import "./Footer.css";
import { useUser } from "./UserContext";
import axios from "axios";
export default function Footer() {
  const { state: user } = useUser();

  const [formData, setFormData] = useState({
    email: user.email,
    carname: "",
    timing: "",
  });

  const handleSubmittest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://motormart.onrender.com/userIdByEmail/${user.email}`
      );
      const userId = response.data.userId;
      const newFormData = {
        name: user.name,
        userId: userId,
        carname: formData.carname,
        timing: formData.timing,
      };
      setFormData(newFormData);
      await axios.post(
        `https://motormart.onrender.com/submitTestDrive/${userId}`,
        newFormData
      );
      console.log(newFormData);
      window.alert('Test drive booked successfully!');
    } catch (error) {
      console.error("Error submitting test drive:", error.message);
    }
  };
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="Footer">
      <div className="FooterTop">
        <div className="FooterTopImg">
          <img
            className="FooterImg"
            src="https://images.unsplash.com/photo-1518783211485-10fd3bfb2ce2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="FooterTopDetails">
          <span className="FooterTopTitle">
            Schedule a Test Drive <br /> Today !{" "}
          </span>
          <br />
          <br />
          <form>
            <input
              className="FooterForm"
              type="text"
              id="email"
              placeholder="Customer Mail"
              value={formData.email}
              readOnly
            />
            <br />
            <input
              className="FooterForm"
              type="text"
              id="carname"
              placeholder="Car Name"
              value={formData.carname}
              onChange={handleChange}
            />
            <br />
            <input
              className="FooterForm"
              type="text"
              id="timing"
              placeholder="Test Drive Timing(24HR Format)"
              value={formData.timing}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              className="FooterSubmit"
              onClick={handleSubmittest}
              type="button"
              value="BOOK"
            />
          </form>
        </div>
      </div>
      <hr className="FooterHr" />

      <div className="FooterCenter">
        <div className="FooterCenterLogo">
          <h1 className="FooterLogo">MotorMart</h1>
        </div>
        <div className="FooterGeneral">
          <ul>
            <li className="FooterListHeading">General</li>
            <li className="FooterListItems">Our Story</li>
            <li className="FooterListItems">FAQ</li>
            <li className="FooterListItems">Reach Us</li>
          </ul>
        </div>
        <div className="FooterLegal">
          <ul>
            <li className="FooterListHeading">Legal</li>
            <li className="FooterListItems">Terms Of Service</li>
            <li className="FooterListItems">Privacy Policy</li>
          </ul>
        </div>
        <div className="FooterSocialLinks">
          <ul>
            <li className="FooterListHeading">Social Links</li>

            <span>
              <i className="SocialIcons fa-brands fa-instagram fa-2x "></i>
            </span>

            <span>
              <i className="SocialIcons fa-brands fa-x-twitter fa-2x "></i>
            </span>

            <span>
              <i className="SocialIcons fa-brands fa-facebook fa-2x "></i>
            </span>
          </ul>
        </div>
      </div>
      <hr className="FooterHr" />
      <div className="FooterBottom">
        <span className="FooterBottomTxt">
          © Copyright 2023, All right reserved
        </span>
        <br />
        <span className="FooterBottomTxt">MotorMart Pvt Ltd.</span>
      </div>
    </div>
  );
}
