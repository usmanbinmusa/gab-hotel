import React from 'react'
import Header from '../components/Header'
import Caroulsel from '../components/Caroulsel'
import About from '../components/About'
import OurRooms from '../components/OurRooms'
import OurServices from '../components/OurServices'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <Header/> 
      <Caroulsel/>
      <About/>
      <OurRooms/>
      <OurServices/>
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}

export default HomePage