import React from 'react'
import { Link } from 'react-router-dom'
import './ShopHero.scss'
function ShopHero() {
  return (
    <div className='ShopHero'>
      <div className="container">
        <div className="shopHero__inner">
          <h1>Shop</h1>
          <span>
            <Link to={'/'}>Home</Link>

            <p>Shop</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ShopHero