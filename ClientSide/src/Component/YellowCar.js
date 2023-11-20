import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./YellowCar.css";
const YellowCar = () => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <p>
            The Chevrolet Corvette is a line of American two-door, two-seater
            luxury sports cars, manufactured and marketed by GM, under the
            Chevrolet marque, since 1953. Over the course of eight generations,
            indicated sequentially as C1 to C8, the Corvette is noted for its
            performance, distinctive styling, lightweight fiberglass or
            composite bodywork, and competitive pricing.
          </p>
          <br></br>
          <div>
            <h4>
              <b>Chevrolet Corvette</b>
            </h4>
            <h4>Price Starting At</h4>
            <div class="ybtn">
              <button type="button" class="btn btn-warning">
                39 Lakhs
              </button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="yl">
            <img src='./YellowCar.png' alt="YellowCarImg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YellowCar;
