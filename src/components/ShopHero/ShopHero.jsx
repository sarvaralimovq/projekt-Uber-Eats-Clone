import React from 'react'
import { Link } from 'react-router-dom'

function ShopHero() {
  return (
    <div className='ShopHero'>
        <div className="container">
            <div className="shopHero__inner">
                <h1>Shop</h1>
                <Link to={'/'}>Home</Link>
                
                <p>Shop</p>
            </div>
        </div>
    </div>
  )
}

export default ShopHero