// import Search from '@mui/icons-material/Search'
import React from 'react'
import AsideBar from '../Componenets/AsideBar'
import CardComp from '../Componenets/Card-Comp'
import ModelNote from '../Componenets/ModelNote'
import NavBar from '../Componenets/Navbar'
import SearchAppBar from '../Componenets/Search'
function MainPage() {
    return (
      <>
        <NavBar />
        <AsideBar />
        <ModelNote />
        <CardComp/>
        </>
  )
}

export default MainPage