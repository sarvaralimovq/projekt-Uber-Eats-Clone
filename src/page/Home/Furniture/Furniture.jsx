import React from 'react'
import './Furniture.scss'
import fur1 from '../../../img/fur-1.png'
import fur2 from '../../../img/fur-2.png'
import fur3 from '../../../img/fur-3.png'
import fur4 from '../../../img/fur-4.png'
import fur5 from '../../../img/fur-5.png'
import fur6 from '../../../img/fur-6.png'
import fur7 from '../../../img/fur-7.png'
import fur8 from '../../../img/fur-8.png'
import fur9 from '../../../img/fur-9.png'

function Furniture() {
  return (
    <div className='Furniture'>
      <div className="container">
        <div className="furniture-small">
        <p className='furniture__info'>Share your setup with</p>
        <h2 className='furniture__tittle'>#FuniroFurniture</h2>
        <ul className='fur__list'>
            <li className='fur__list-item'>
                <img className='fur-1' src={fur1} alt="" />
            </li>
            <li className='fur__list-item'>
                <img className='fur-2' src={fur2} alt="" />
            </li>
            <li className='fur__list-item'>
                <img className='fur-3' src={fur3} alt="" />
            </li>
            <li className='fur__list-item'>
                <img className='fur-4' src={fur4} alt="" />
            </li>
            <li className='fur__list-item'>
                <img className='fur-5' src={fur5} alt="" />
            </li>
            <li className='fur__list-item'>
                <img className='fur-6' src={fur6} alt="" />
            </li>
            <li className='fur__list-item'>
                <img className='fur-7' src={fur7} alt="" />
            </li>
            <li className='fur__list-item'>
                <img className='fur-8' src={fur8} alt="" />
            </li>
            <li className='fur__list-item'>
                <img className='fur-9' src={fur9} alt="" />
            </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Furniture
