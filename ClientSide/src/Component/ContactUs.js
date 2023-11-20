import Footer from "../../Footer/Footer";
import SuperBar from "../../SuperBar/SuperBar";
import Topbar from "../../Topbar/Topbar";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <Topbar />
      <SuperBar />
      <div className="ContactUs">
        <div className="ContactUsHeading">
          <h1 className="H1ContactUs">Contact Us</h1>
        </div>
        <div className="ContactUsSpan">
          <span className="ContactUsText1">
            Explore MotorMart's showroom. Your dream car is a click away.
            Contact us for personalized service and a seamless automotive
            experience.
          </span>
        </div>
        <div className="ContactUsMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5264202555!2d76.76356588543308!3d28.64368460581693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700453077306!5m2!1sen!2sin"
            height="550"
            loading="lazy"
            className="map"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="ContactUsSpan2">
          <span className="ContactUsText2">
            "Ready to roll? Reach out through our Contact Us form for a speedy
            response."
          </span>
        </div>
      </div>
      <div className="ContactUsBody">
        <div className="ContactUsLeft">
          <form className="ContactUsForm">
            <label for="name" class="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-input"
              required
            />

            <label for="phone" class="form-label">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              class="form-input"
              required
            />

            <label for="email" class="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-input"
              required
            />

            <label for="comment" class="form-label">
              Comment:
            </label>
            <textarea
              id="comment"
              name="comment"
              class="form-input"
              rows="4"
              required
            ></textarea>

            <input type="submit" value="Submit" class="form-submit" />
          </form>
        </div>
        <div className="ContactUsRight">
          <img
            className="ContactUSimg"
            src="/Assets/ContactUs-img.png"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
