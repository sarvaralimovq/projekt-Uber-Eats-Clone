import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="list___oram">
        <h3 className='footer__tittle'>Firniro.</h3>
            <ul className='footer-list'>
                <li className='footer__list-tem'>
                Links
                </li>
                <li className='footer__list-tem'>
                Help
                </li>
                <li className='footer__list-tem'>
                Newsletter
                </li>
            </ul>
        </div>
        <div className="footer__oram__ikki">
        <h5 className='footer__info'>400 University Drive Suite 200 Coral <br /> Gables, <br />FL 33134 USA</h5>
            <ul className='footer__list-sec'>
                <li className='footer__list-sec__item'>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>About</p>
                    <p>Contact</p>
                </li>
                <li className='footer__list-sec__item'>
                    <p>Payment Options</p>
                    <p>Returns</p>
                    <p>Privacy Policies</p>
                </li>
                <li className='footer__list-sec__item'>
                    <input className='footer__list-inp' type="text" placeholder='Enter Your Email Address'/>
                </li>
                <li className='footer__list-sec__item'>
                    <button className='footer__list__item-btn'>SUBSCRIBE</button>
                </li>
            </ul>    
        </div>         
        <hr />
        <p>2023 furino. All rights reverved</p>
      </div>
    </div>
  )
}

export default Footer
