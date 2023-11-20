import "./HomeCard.css";

export default function HomeCard() {
  return (
    <div className="HomeCard">
      <div className="HomeCardTitle">Our Services</div>
      <div className="HomeCardPara">
        "Embark on a seamless journey with Motor Mart – where innovation meets
        elegance, and personalized service elevates your car-buying experience."
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
                Trust in our commitment to security. Experience the confidence
                of highly encrypted transactions and airtight data protection at
                Motor Mart. Your safety is our top priority.
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
                Navigate car buying with confidence. Our Trusted Agents ensure a
                transparent, expert-guided experience. Trust in every detail,
                from virtual tours to personalized advice, as you find your
                perfect ride.
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
                Unlock exclusive deals with Motor Mart's 'Get Offer' service.
                Experience unbeatable prices and tailored promotions, making
                your dream car more attainable than ever. Your offer, your
                advantage.
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
                Drive worry-free with Motor Mart! Our commitment goes beyond
                cars—enjoy complimentary support, ensuring your ownership
                experience is as smooth as your favorite ride. Your
                satisfaction, our priority .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
