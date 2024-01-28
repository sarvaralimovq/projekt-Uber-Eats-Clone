import React from 'react'
import './ShopDataCenter.scss'
import { shopData } from '../../lib/data'
function ShopDataCenter() {
  return (
    <div className='ShopDataCenter'>
            <ul>
            {
                shopData?.map((item,index)=> (
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
              </li>
            ))
          }
            </ul>
    </div>
  )
}

export default ShopDataCenter