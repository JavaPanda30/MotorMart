import "./HomeCounter.css";

export default function HomeCounter() {
  return (
    <div className="HomeCounter">
      <div className="HomeCounterSec1">
        <div className="HomeCounterLeftSec">
          <i className=" HomeCardIcons fa-solid fa-car-rear fa-4x"></i>
        </div>
        <div className="HomeCounterRightSec">
          <h3 className="HomeCounterHeading">500+</h3>
          <span className="HomeCounterText">Total Cars</span>
        </div>
      </div>
      <div className="HomeCounterSec2">
        <div className="HomeCounterLeftSec">
          <i className=" HomeCardIcons fa-solid fa-comment-dots fa-4x"></i>
        </div>
        <div className="HomeCounterRightSec">
          <h3 className="HomeCounterHeading">1500+</h3>
          <span className="HomeCounterText">Dealer Reviews</span>
        </div>
      </div>
      <div className="HomeCounterSec3">
        <div className="HomeCounterLeftSec">
          <i className=" HomeCardIcons fa-solid fa-face-smile fa-4x"></i>
        </div>
        <div className="HomeCounterRightSec">
          <h3 className="HomeCounterHeading">300+</h3>
          <span className="HomeCounterText">Happy Customers</span>
        </div>
      </div>
      <div className="HomeCounterSec4">
        <div className="HomeCounterLeftSec">
          <i className=" HomeCardIcons fa-solid fa-award fa-4x"></i>
        </div>
        <div className="HomeCounterRightSec">
          <h3 className="HomeCounterHeading">200</h3>
          <span className="HomeCounterText">Awards Won</span>
        </div>
      </div>
    </div>
  );
}
