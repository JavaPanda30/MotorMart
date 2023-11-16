import "./Footer.css";

export default function Footer() {
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
          <form >
          {/* onSubmit={sendmail}> */}
            <input className="FooterForm" type="text" placeholder="FULL NAME" />
            <br />
            <input
              className="FooterForm"
              type="tel"
              placeholder="PHONE NUMBER"
            />
            <br />
            <input className="FooterForm" type="text" placeholder="EMAIL-ID" />
            <br />
            <br />
            <input className="FooterSubmit" type="submit" value="BOOK" />
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
