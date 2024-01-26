import React from 'react'
import Hero from '../../components/Hero/Hero'
import Products from './Products/Products'
import Range from './Range/Range'

function Home() {
  return (
    <div className='Home'>
        <h1>Home</h1>
        {/* <Hero/> */}
        <Range/>
        <Products/>
    </div>
  )
}

export default Home