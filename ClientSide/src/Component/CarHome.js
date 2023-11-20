import "./CarHome.css";

export default function CarHome() {
  return (
    <div className="CarHome">
      <h2 className="CarHomeHeading">
        Find What Fits Your <br />{" "}
        <span className="CarHomeSpan">LOVELY FAMILY</span><br />
        <h6 style={{fontStyle:'cursive', fontWeight:'100', fontSize:'24px'}}>
          Be it Luxury  Tough  Stylish
          </h6>
      </h2>
      <div className="CarHomeCardTop">
        <div className="CarHomeCard1">
          <img
            src="./bmw-x.jpg"
            alt=""
            className="Card1Img"
          />
          <p className="Car1Text">BMW X Series</p>
        </div>
        <div className="CarHomeCard2">
          <img
            src="./exclusive.jpg"
            alt=""
            className="Card2Img"
          />
          <p className="Car2Text">Ferrari S4 Exclusive</p>
        </div>
        <div className="CarHomeCard3">
          <img
            src="./luxury.jpg"
            alt=""
            className="Card3Img"
          />
          <p className="Car3Text">Lamborghini Luxury Collection</p>
        </div>
      </div>
      <div className="CardHomeBottom">
        <div className="CarHomeCard4">
          <img
            src="./suv.jpeg"
            alt=""
            className="Card4Img"
          />
          <p className="Car4Text">SUV's Options </p>
        </div>
        <div className="CarHomeCard5">
          <img
            src="./Variety.jpg"
            alt=""
            className="Card5Img"
          />
          <p className="Car5Text">Color Collection</p>
        </div>
      </div>
    </div>
  );
}
