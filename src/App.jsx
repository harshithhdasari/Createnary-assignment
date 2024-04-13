import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Body from './components/Body/Body'
import Title from './components/Title/Title'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title/>
      <Body/>
      <button className='btn1'>Try for free</button>
      </div>
    </div>
  )
}

export default App