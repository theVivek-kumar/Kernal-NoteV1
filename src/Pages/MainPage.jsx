// import Search from '@mui/icons-material/Search'
import React from 'react'
import AsideBar from '../Componenets/AsideBar'
import CardComp from '../Componenets/Card-Comp'
import ModelNote from '../Componenets/ModelNote'
import NavBar from '../Componenets/Navbar'
import SearchAppBar from '../Componenets/Search'
import SignIn from '../Componenets/signin/SignIn'
function MainPage() {
    return (
      <>
        <NavBar />
        <AsideBar />
        <ModelNote />
        <CardComp />
        <SignIn/>
        </>
  )
}

export default MainPage