import { Link, useNavigate } from "react-router-dom";
import "./Topbar.css";
import NameDisp from "./NameDisp";
export default function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
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
            <Link to="">
              <div className="ToplistItems">Car Listing</div>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <div className="ToplistItems">Book Now</div>
            </Link>
          </li>
          <li className="ToplistItems">
            <NameDisp />
          </li>
          <li className="ToplistItems">
            <button
              className="btn btn-dark"
              style={{
                color: "black",
                border: "1px solid black",
                height: "40px",
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
