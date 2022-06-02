import React from 'react';
import image from '../Componenets/assets/undraw_Ideas_flow_re_bmea.png';
import {Button} from '@mui/material'
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
       <Button sx={{width:"10rem", margin:"8rem 0 0"}} variant='contained' >join now</Button>
        <a className='have-account' href='#'>Already have a Account</a>
    </div>
    <div>
                    <img className='landing-page-image'                src={image} />
                </div>
                </div>
        </>
)
}

export default LandingPage