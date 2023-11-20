import { Link, useNavigate } from "react-router-dom";
import "./Topbar.css";
import NameDisp from "./NameDisp";
import { useUser } from "./UserContext";

function Topbar() {
  const navigate = useNavigate();
    const { logout } = useUser();

    const handleLogout = () => {
      logout();
      navigate("/login");
   window.alert("Logged Out Successfully");
      console.log("Logged Out");
    };
  return (
    <div className="Top">
      <div className="TopLeft">
        <Link to="/home">
          <div className="CompanyName">MotorMart</div>
        </Link>
      </div>
      <div className="TopLeft">
        <ul className="TopList">
          <li>
            <Link to="/home">
              <div className="ToplistItems">Home</div>
            </Link>
          </li>
          <li>
            <Link to="/service">
              <div className="ToplistItems">Service</div>
            </Link>
          </li>
          <li style={{ textDecoration: "none" }}>
            <Link to="/carlisting">
              <div className="ToplistItems">Car Listing</div>
            </Link>
          </li>
   <li>
            <Link to="/about">
              <div className="ToplistItems">About Us</div>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <div className="ToplistItems">Profile</div>
            </Link>
          </li>
          <li className="ToplistItems">
            <Link to='/profile'>
            <NameDisp />
            </Link>
          </li>
          <li className="ToplistItems">
            <button
              className="btn btn-dark"
              style={{
                color: "black",
                border: "1px solid black",
                height: "40px",
                background: "transparent",
              }}
              onClick={handleLogout}
            >
              LogOut
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Topbar;
