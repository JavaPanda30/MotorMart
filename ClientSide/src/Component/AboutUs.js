import Footer from "./Footer";
import SuperBar from "./SuperBar";
import Topbar from "./Topbar";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <Topbar />
      <SuperBar />
      <div className="AboutUs">
        <div className="aboutusBlog">
          <div className="BlogImage">
            <img
              className="Image"
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="MotorMart"
            />
          </div>
          <div className="BlogText">
            <h1 className="BlogTexth1">Welcome to MotorMart!</h1>
            <br />
            <p className="BlogTextp">
              Welcome to MotorMart, where automotive dreams come to life! At
              MotorMart, we don't just sell cars; we deliver an unparalleled
              experience for enthusiasts and everyday drivers alike. Our
              showroom is a haven for automotive excellence, where quality meets
              style, and performance merges with practicality.
              <br />
              <br />
              Whether you're seeking a sleek and sophisticated sedan, a rugged
              and adventurous SUV, or a high-performance sports car, our curated
              selection has something to suit every taste and lifestyle. We take
              pride in offering a diverse range of top-notch automobiles that
              redefine the driving experience.
              <br />
              <br />
              Explore our showroom, and you'll discover more than just cars;
              you'll find a community that shares your enthusiasm for the road.
              Whether you're a seasoned car enthusiast or a first-time buyer,
              MotorMart welcomes you to embark on a thrilling journey of
              discovery and excitement. Come, experience the joy of driving with
              MotorMart—where your automotive aspirations take center stage!
            </p>
          </div>
        </div>
        <div className="AwardsAboutUs">
          {/* Awards section */}
          <h1 className="AwardsAboutUsh1">Awards Won!</h1>
          <br />
          <p className="AwardsAboutUsp">
            MotorMart Drives Home Top Honors as the Premier Auto Showroom,
            Winning Best Awards for Unparalleled Excellence!
          </p>
          <div className="Awards1">
            <div className="div1">
              <img className="img1" src="./1.png" alt="A1" />
            </div>
            <div className="AwardText1">
              <p className="AwardTextp">
                MotorMart Wins Best Car Dealers of the Year Award!
                <br />
                <br />
                MotorMart has been crowned the "Car Dealers of the Year," a
                prestigious recognition of our commitment to excellence.
                <br />
                This achievement reflects our dedication to providing top-notch
                service, an exceptional vehicle selection, and an unmatched
                customer experience. At MotorMart, we take pride in not only
                offering a diverse range of high-quality vehicles but also in
                our team's passion for ensuring your satisfaction. This award is
                a testament to our customer-centric approach, where we strive to
                go above and beyond expectations.
                <br />
                <br />
                Thank you for making us the Best Car Dealers of the Year 2023 a
                title we wear with pride!
              </p>
            </div>
          </div>
          {/* Awards 2 */}
          <div className="Awards2">
            <div className="div2">
              <img className="img2" src="./2.png" alt="A1" />
            </div>
            <div className="AwardText2">
              <p className="AwardTextp">
                MotorMart Wins Top SUV Sales Award!
                <br />
                <br />
                We're thrilled to share that MotorMart has secured the
                prestigious title of "Top SUV Sales" in the industry! This
                achievement reflects our commitment to delivering top-notch SUVs
                that blend technology, style, and performance.
                <br />
                Our personalized service and passionate team make your journey
                with us extraordinary.
                <br />
                This recognition is thanks to our valued customers. Visit
                MotorMart today to explore the award-winning SUV lineup and
                experience driving excellence!
                <br />
                <br />
                Thank you for making us the Top SUV Car Dealers of the Year 2023
                a title we wear with pride!
              </p>
            </div>
          </div>
          {/* Awards 3 */}
          <div className="Awards3">
            <div className="div3">
              <img className="img3" src="./3.png" alt="A1" />
            </div>
            <div className="AwardText3">
              <p className="AwardTextp">
                MotorMart Wins Best Showroom Experience!
                <br />
                <br />
                MotorMart has secured the coveted title of "Best Showroom
                Experience," a testament to our commitment to redefining
                automotive retail.
                <br />
                <br />
                <span>
                  <i className="AboutUsIcon fa-solid fa-check"></i>
                </span>
                Immersive Ambiance:Step into an elegant space where innovation
                and luxury intersect. Our showroom is meticulously designed to
                captivate your senses.
                <br />
                <br />
                <span>
                  <i className="AboutUsIcon fa-solid fa-check"></i>
                </span>
                Cutting-edge Technology:Explore our vehicles using interactive
                displays, virtual reality, and augmented reality, embracing the
                latest in automotive tech.
                <br />
                <br />
                <span>
                  <i className="AboutUsIcon fa-solid fa-check"></i>
                </span>
                Personalized Concierge Services:Our dedicated team ensures your
                journey is tailored to perfection, understanding your
                preferences from the moment you arrive.
                <br />
                <br />
                <span>
                  <i className="AboutUsIcon fa-solid fa-check"></i>
                </span>
                Digital Innovation:Embrace convenience with online tools for
                inventory exploration, test drives, and even completing
                purchases from the comfort of your home.
                <br />
                <br />
                Thanks to our valued customers for making us the pinnacle of
                showroom experiences. Discover the extraordinary at MotorMart,
                where innovation meets your automotive dreams!
              </p>
            </div>
          </div>
          {/* Awards 4 */}
          <div className="Awards4">
            <div className="div4">
              <img className="img4" src="./4.png" alt="A1" />
            </div>
            <div className="AwardText4">
              <p className="AwardTextp">
                MotorMart Secures Sales Performance Crown!
                <br />
                <br />
                Exciting news! MotorMart, our premier autoshowroom, has clinched
                the prestigious Sales Performance Award, a resounding
                acknowledgment of our commitment to excellence. This accolade
                recognizes MotorMart's outstanding achievement in surpassing
                sales targets, understanding market trends, and delivering
                unparalleled value to our cherished customers.
                <br />
                This achievement is a testament to the hard work and dedication
                of our exceptional team. MotorMart remains dedicated to
                providing an exceptional buying experience, with an
                ever-expanding inventory of cutting-edge vehicles and a
                commitment to staying at the forefront of industry innovation.
                <br />
                Join us in celebrating MotorMart's triumph and stay tuned for
                more exciting developments as we continue to redefine automotive
                excellence!
                <br />
                <br />
                Thank you to our loyal customers and dedicated staff for
                contributing to this remarkable journey.
              </p>
            </div>
          </div>
        </div>
        <div className="Team">
          <h1 className="Teamh1">Meet Our Team</h1>
          <br />
          <p className="Teamp">
            Meet our dynamic team, a synergy of diverse talents driven by
            passion and innovation. Together, we elevate ideas and exceed
            expectations.
          </p>
          <br />
          <div className="ourTeam">
            <div className="icons1">
              <div className="icons">
                <i className="fa-solid fa-user-tie fa-4x"></i>
              </div>
              <div className="teamText">
                <h2>Suyash Pandey</h2>
              </div>
            </div>
            <div className="icons1">
              <div className="icons">
                <i className="fa-solid fa-user-tie fa-4x"></i>
              </div>
              <div className="teamText">
                <h2>Divyanshu Singh</h2>
              </div>
            </div>
            <div className="icons1">
              <div className="icons">
                <i className="fa-solid fa-user-tie fa-4x"></i>
              </div>
              <div className="teamText">
                <h2>Daksh Singh</h2>
              </div>
            </div>
            <div className="icons1">
              <div className="icons">
                <i className="fa-solid fa-user-tie fa-4x"></i>
              </div>
              <div className="teamText">
                <h2>Sudhanshu Shukla</h2>
              </div>
            </div>
            <div className="icons1">
              <div className="icons">
                <i className="fa-solid fa-user-tie fa-4x"></i>
              </div>
              <div className="teamText">
                <h2>Madhusudhan Das</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
