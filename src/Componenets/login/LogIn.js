import React from 'react'
import { NavLink,useLocation,useNavigate,Navigate} from 'react-router-dom';
import { SiDtube } from "react-icons/si";
import {Button} from '@mui/material'
import { useAuthContext } from '../../Context/AuthContext';
import { login } from "../../Componenets/login/Login.css";
function LogIn() {

const navigate = useNavigate();
const location = useLocation();

const encodedToken = localStorage.getItem("token");
const {
    authState: { email, password },
    authDispatch,
    login,
} = useAuthContext();
return (
    <>
        <div className="container-login">
            <div className="login-container-form">
            <div className="login-form-header">
            <div  className="login-Fp-header"><SiDtube className='login-logo'/></div>
            <p className='heading-login' >LogIn</p>
            </div>
            <label className="label" for="input">Email adress</label>
            <input    onChange={(e) =>
            authDispatch({ type: "EMAIL", payload: e.target.value })
            } className="input-lg" type="email" placeholder="Enter Email"/>
            <label className="label" for="input">Password</label>
            <input   onChange={(e) =>
            authDispatch({ type: "PASSWORD", payload: e.target.value })
        } className="input-lg" type="password" placeholder="************"/>
            <div class="input-check-btn">
                <input className="input-checkbox" type="checkbox"/>
                <h4>Remember me</h4>
                <span  className="frg-paswrd"> Forgot your Password?</span>
            </div>
        <NavLink to='/'>
            <button onClick={() =>
            login(
            email,
            password,
            navigate,
            location,
            encodedToken
            )
        } className="Login-btn">Login</button></NavLink>
            <div className="login-create-acc">
            <NavLink to = "/SignIn"><Button sx={{width:"12rem", margin:"8rem 0 0"}} variant='contained' >join now</Button></NavLink>
            </div>
            </div>
        </div>
    </>
)
}

export default LogIn