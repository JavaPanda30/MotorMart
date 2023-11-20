import React from 'react'
import Topbar from './Topbar';
import SuperBar from './SuperBar';
import CarHome from './CarHome';
import Testimonial from './Testimonial';
import HomeCard from './HomeCard';
import Footer from './Footer';
import HomeCounter from './HomeCounter';
export default function Home() {
  return (
    <>
      <Topbar />
      <SuperBar />
      <CarHome />
      <div className="Home">
    <HomeCounter />
        <div id='Testimonial'>
          <Testimonial />
          </div>
        <HomeCard />
      </div>
      <Footer />
    </>
  );
}
