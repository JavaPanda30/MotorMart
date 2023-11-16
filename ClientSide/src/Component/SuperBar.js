import "./SuperBar.css";

export default function SuperBar() {
  return (
    <div className="SuperBar">
      <div className="SuperBarLeft">
        <ul className="SuperBarList">
          <li className="SuperBarListItems">
            <i className="SuperBarIcons fa-solid fa-phone"></i>
            <span className="SuperBarText">+91 4XX-634-7071</span>
          </li>
          <li className=" SuperBarListItems">
            <i className=" SuperBarIcons fa-solid fa-envelope"></i>
            <span className="SuperBarText">info@MotorMart.com</span>
          </li>
          <li className=" SuperBarListItems">
            <i className="SuperBarIcons fa-regular fa-clock"></i>
            <span className="SuperBarText">Mon-Sun: 8:00am - 7:00pm</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
