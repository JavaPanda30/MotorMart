import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlueCar.css";
import imageblu from './BlueCar.png'
const BlueCar = () => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <p>
            The Aston Martin DB11 is a car produced by British marque Aston
            Martin from 2016 to 2023. A grand tourer, it debuted at the Geneva
            Motor Show in March 2016 as a replacement to the DB9. It is the
            first model launched in Aston Martin's 'second century' plan and the
            company's tie-up with Daimler AG. Its replacement, the DB12, was
            announced in May 2023.
          </p>
          <br></br>
          <div>
            <h4>
              <b>AstonMartin</b>
            </h4>
            <h4>Price Starting At</h4>
            <div class="ybtn">
              <button type="button" class="btn btn-info">
                80 Lakhs
              </button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="yl">
            <img src={imageblu} alt="" /></div>
        </div>
      </div>
    </div>
    
  );
};

export default BlueCar;
