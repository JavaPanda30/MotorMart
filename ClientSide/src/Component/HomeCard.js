import "./HomeCard.css";

export default function HomeCard() {
  return (
    <div className="HomeCard">
      <div className="HomeCardTitle">Our Services</div>
      <div className="HomeCardPara">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className="HomeCard1">
        <div className="C1">
          <div className="Card">
            <div className="HomeCardContent">
              <i className="fa-solid fa-lock fa-4x"></i>
              <p className="HomeCardh1">
                Highly <br /> Secured
              </p>
              <p className="HomeCardp1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                laboriosam at voluptas minus culpa deserunt delectus sapiente
                inventore pariatur
              </p>
            </div>
          </div>
        </div>
        <div className="C2">
          <div className="Card">
            <div className="HomeCardContent">
              <i className="fa-solid fa-briefcase fa-4x"></i>
              <p className="HomeCardh1">
                Trusted <br /> Agents{" "}
              </p>
              <p className="HomeCardp1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                laboriosam at voluptas minus culpa deserunt delectus sapiente
                inventore pariatur
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="HomeCard2">
        <div className="C3">
          <div className="Card">
            <div className="HomeCardContent">
              <i className="fa-solid fa-percent fa-4x"></i>
              <p className="HomeCardh1">
                Get <br /> Offer
              </p>
              <p className="HomeCardp1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                laboriosam at voluptas minus culpa deserunt delectus sapiente
                inventore pariatur
              </p>
            </div>
          </div>
        </div>
        <div className="C4">
          <div className="Card">
            <div className="HomeCardContent">
              <i className="fa-solid fa-screwdriver-wrench fa-4x"></i>
              <p className="HomeCardh1">
                Free <br /> Support
              </p>
              <p className="HomeCardp1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                laboriosam at voluptas minus culpa deserunt delectus sapiente
                inventore pariatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
