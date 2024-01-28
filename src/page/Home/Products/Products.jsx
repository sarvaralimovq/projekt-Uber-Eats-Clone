import React from 'react'
import './Products.scss'
import { homeProdukt } from '../../../lib/data'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div className='Products'>
       <div className="container">
       <div className="oram">
       <h1 className='products__tittle'>Our Products</h1>
        <ul className='products__list'>
          {
            homeProdukt?.map((item,index)=> (
              <li key={index}>
                  <img src={item.img} alt="item.img" />
                  <h3>{item.name}</h3>
                  <p className='p-info'>{item.info}</p>
                  <span className='all__price'>
                  <p className='pr-info'>Rp{item.price}</p>
                  <p className='ol__p-info'>{item.oldprice}</p>
                  </span>
                  <span className={item.chegirma? 'skidka':null}>{item.chegirma}</span>
                  <span className={item.srog? 'srog':null}>{item.srog}</span>
                  <span className='Products__bottom'>
                      <button className='pr__bottom_btn'>Add to cart</button>
                      <Link className='product__share'><i class="bi bi-share"></i>Share</Link>
                      <Link className='product__compare'><i class="bi bi-arrow-left-right"></i>Compare</Link>
                      <Link className='product__layk'><i class="bi bi-heart"></i>Layk</Link>
                  </span>
              </li>
            ))
          }
        </ul>
       </div>
        <button className='product__btn'>Show More</button>
       </div>
    </div>
  )
}

export default Products