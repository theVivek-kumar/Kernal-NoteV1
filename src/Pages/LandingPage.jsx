import React from 'react';
import image from '../asset/undraw_Ideas_flow_re_bmea (1).png';
import {Button} from '@mui/material'
import { NavLink } from 'react-router-dom';
import { red } from '@mui/material/colors';
function LandingPage() {
    return (
        <>
            <div className='landing-page-container'>
    <div className='landing-wrapper' >
        <div className='landingpage-header'>
        MY Note App
        </div>
        <div className='heading-2'>Meet your Persnal</div>
        <div className='heading-2-color'>Note taking App</div>
        <p className='pera-1' >Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts.</p>
        <NavLink to = "/mainPage " ><Button sx={{width:"12rem", margin:"8rem 0 0"}} variant='contained' >join now</Button></NavLink>
        <a className='have-account' href='#'>Already have a Account</a>
    </div>
    <div>
                <img className='landing-page-image'src={image} />
                </div>
                </div>
        </>
)
}

export default LandingPage