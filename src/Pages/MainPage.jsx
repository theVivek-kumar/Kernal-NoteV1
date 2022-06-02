import React from 'react'
import AsideBar from '../Componenets/AsideBar'
import Navbar from '../Componenets/Navbar'
import LandingPage from './LandingPage'

function MainPage() {
    return (
      <>
      <Navbar />
        <AsideBar />
        <LandingPage/>
        </>
  )
}

export default MainPage