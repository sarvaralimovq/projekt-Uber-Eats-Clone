import React from 'react'
import ShopHero from '../../components/ShopHero/ShopHero'
import ShopFilter from '../../components/ShopFilter/ShopFilter'
 
function Shop() {
  return (
    <div className='Shop'>
    <ShopHero/>
      <ShopFilter/>
    </div>
  )
}

export default Shop