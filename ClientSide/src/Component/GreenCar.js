import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GreenCar.css";
const GreenCar = () => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div class="l"><img src='./GreenCar.png' alt="" /></div>
        </div>
        <div class="col">
          <p>
            The Mercedes-AMG GT is a series of 2-door grand tourers produced by
            German automobile manufacturer Mercedes-AMG. The car was introduced
            on 9 September 2014 and was officially unveiled to the public in
            October 2014 at the Paris Motor Show.[1] While not directly
            replacing the SLS AMG (competing in a different segment), it is the
            second sports car developed entirely in-house by Mercedes-AMG. The
            Mercedes-AMG GT went on sale in two variants (GT and GT S) in March
            2015.
          </p>
          <br></br>
          <div>
            <h4>
              <b>Mercedes Benz GTR</b>
            </h4>
            <h4>Price Starting At</h4>
            <div class="ybtn">
              <button type="button" class="btn btn-success">
                79 Lakhs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GreenCar;
