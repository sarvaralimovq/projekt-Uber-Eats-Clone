import React from 'react'
import './Range.scss'
import rangeFirst from '../../../img/range-first.png'
import rangeSec from '../../../img/range-sec.png'
import rangeThird from '../../../img/range-third.png'

function Range() {
  return (
    <div className='Range'>
        <div className="container">
        <h2 className='range__tittle'>Browse The Range</h2>
        <p className='range__info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ul className='range__list'>
          <li className='range__list-item'>
            <img src={rangeFirst} alt="" />
            <p className='din__info'>Dining</p>
          </li>
          <li className='range__list-item'>
            <img src={rangeSec} alt="" />
          <p className='liv__info'>Living</p>
          </li>
          <li className='range__list-item'>
            <img src={rangeThird} alt="" />
            <p className='bed__info'>Bedroom</p>
          </li>
        </ul>
        </div>
    </div>
  )
}

export default Range