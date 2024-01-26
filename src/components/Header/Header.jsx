import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'

function Header() {
  return (
    <div className='Header'>
      <div className="container">
       <nav className='header__nav'>
        <div className="nav__inner">
          <div className="logo__div">
            <img className='logo' src={logo} alt="" />
          </div>
          <div className="betw-div">
            <ul className='betw__div-list'>
              <li className='betw__div-inner'>
                <Link>
                Home
                </Link>
              </li>
              <li className='betw__div-inner'>
                <Link>
                Shop
                </Link>
              </li>
              <li className='betw__div-inner'>
                <Link>
                About
                </Link>
              </li>
              <li className='betw__div-inner'>
                <Link>
                Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="i-div">
            <ul className='nav__i-list'>
              <li className='nav__i-inner'>
                <Link>
                <i class="bi bi-person-exclamation"></i>
                </Link>
              </li>
              <li className='nav__i-inner'>
                <Link>
                <i class="bi bi-search"></i>
                </Link>
              </li>
              <li className='nav__i-inner'>
                <Link>
                <i class="bi bi-heart"></i>
                </Link>
              </li>
              <li className='nav__i-inner'>
                <Link>
                <i class="bi bi-cart3"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
       </nav>
      </div>
    </div>
  )
}

export default Header