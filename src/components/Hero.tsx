import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className="hero-content"
    >
        <Navbar/>
        <div className="hero-content">
          <div className='hidden lg:block'></div>
          <div className="hero-text">
            <div className="hero-msin">
              <p data-aos="zoom-in-up">I'm</p>
              <p data-aos="zoom-in-up">Nida</p>
              <p data-aos="zoom-in-up">Akhtar</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
