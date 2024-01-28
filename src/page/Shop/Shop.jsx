import React from 'react'
import ShopHero from '../../components/ShopHero/ShopHero'
import ShopFilter from '../../components/ShopFilter/ShopFilter'
import ShopDataCenter from '../../components/ShopDataCenter/ShopDataCenter'
 
function Shop() {
  return (
    <div className='Shop'>
    <ShopHero/>
      <ShopFilter/>
      <ShopDataCenter/>
    </div>
  )
}

export default Shop