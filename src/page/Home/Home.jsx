import React from 'react'
import Hero from '../../components/Hero/Hero'
import Products from './Products/Products'
import Range from './Range/Range'
import Rooms from './Rooms/Rooms'
import Furniture from './Furniture/Furniture'

function Home() {
  return (
    <div className='Home'>
        <Hero/>
        <Range/>
        <Products/>
        <Rooms/>
        {/* <Furniture/> */}
    </div>
  )
}

export default Home