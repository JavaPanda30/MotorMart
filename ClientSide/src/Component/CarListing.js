import React from 'react'
import YellowCar from './YellowCar'
import GreenCar from './GreenCar'
import BlueCar from './BlueCar'
import Topbar from './Topbar'
import SuperBar from './SuperBar'
import Footer from './Footer'
import './CarListing.css'
const CarListing = () => {
  return (<>
      <Topbar />
      <SuperBar/>
    <div>
      <div className="carlistrow container my-5">
        <YellowCar />
      </div>
      <div className="carlistrow container my-5">
        <GreenCar />
      </div>
      <div className="carlistrow container my-5">
        <BlueCar />
      </div>
    </div>
    <Footer />
  </>
  )
}

export default CarListing