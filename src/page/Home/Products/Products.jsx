import React from 'react'
import './Products.scss'
import { homeProdukt } from '../../../lib/data'

function Products() {
  return (
    <div className='Products'>
       <div className="container">
       <h1 className='products__tittle'>Our Products</h1>
        <ul className='products__list'>
          {
            homeProdukt?.map((item,index)=> (
              <li key={index}>
                  <img src={item.img} alt="item.img" />
                  <h3>{item.name}</h3>
                  <p className='p-info'>{item.info}</p>
                  <span className='our__prise'>
                  <p className='pr-info'>Rp{item.price}</p>
                  <p className='ol__p-info'>{item.oldprice}</p>
                  </span>
                  <span>{item.chegirma}</span>
              </li>
            ))
          }
        </ul>
       </div>
    </div>
  )
}

export default Products