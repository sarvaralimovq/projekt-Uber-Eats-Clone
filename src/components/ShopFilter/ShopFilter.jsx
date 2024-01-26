import React from 'react'
import './ShopFilter.scss'
function ShopFilter() {
  return (
    <div className='ShopFilter'>
      <div className="container">
        <div className="shopFilter__inner">
          <div className="shopFilter__filter">
            <ul className='shopFilter-filter-list'>
              <li>
                <i className="bi bi-sliders"></i>
                <p>Filter</p>
              </li>
              <li>
                <i className="bi bi-ui-radios-grid"></i>
              </li>
              <li>
                <i className="bi bi-view-list"></i>
              </li>
              <li>
                <b></b>
              </li>
              <li>
                Showing 1–16 of 32 results
              </li>
            </ul>
            <ul className='shopFilter-list'>
              <li>
                Show 
                <input className='Number' type="text" placeholder='16' />
              </li>
              <li>
              Short by
              <input className='text' type="text" placeholder='Default' />
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ShopFilter