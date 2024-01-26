import React from 'react'
import './Hero.scss'
// import heroBgimg from '../../img/hero-bgimg.png'

function Hero() {
  return (
    <div className='Hero'>
      <div className="container">
        <div className="hero__inner">
          <div className="hero__next-inner">
            <p className='next__inner-p'>New Arrival</p>
            <h1 className='next__innner-tittle'>Discover Our <br /> New Collection</h1>
            <p className='next__inner-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
            <button className='next__btn'>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero