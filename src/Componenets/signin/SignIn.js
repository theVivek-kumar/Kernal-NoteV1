import React from 'react';
import {FcBusinessman} from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { Signin } from '../../Componenets/signin/SignIn.css';
import { useAuthContext } from '../../Context/AuthContext'
import { Navigate, useLocation, useNavigate } from "react-router-dom";
const SignIn = () => {
    const navigate = useNavigate();
const location = useLocation();

const encodedToken = localStorage.getItem("token");
const {
    authState: { firstName, lastName, email, password, confirmPassword },
    authDispatch,
    signUp,
} = useAuthContext();
    return (
        <>
            <div className="container-login">
                <div className="login-container-form">
                    
                    <div className="login-Fp-header"><FcBusinessman  className='login-logo'/></div>
                    <label className="lable" for="input">FirstName</label>
                    <input onChange={(e) =>
            authDispatch({ type: "FIRST_NAME", payload: e.target.value })
            } className="input-lg" type="text" placeholder="Confirm-First-name" />
                    <label className="lable" for="input">LastName</label>
                    <input  onChange={(e) =>
            authDispatch({ type: "LAST_NAME", payload: e.target.value })
            } className="input-lg" type="text" placeholder="Confirm-Second-name" />
                    <label className="lable" for="input">Email adress</label>
                    <input  onChange={(e) =>
            authDispatch({ type: "EMAIL", payload: e.target.value })
        } className="input-lg" type="email" placeholder="Enter Email" />
                    <label className="lable" for="input">Password</label>
                    <input onChange={(e) =>
            authDispatch({ type: "PASSWORD", payload: e.target.value })
        } className="input-lg" type="password" placeholder="************" />
                    <label className="lable" for="input">Password</label>
                    <input  onChange={(e) =>
            authDispatch({ type: "CONFIRM_PASSWORD", payload: e.target.value })
        } className="input-lg" type="password" placeholder="Confirm-Password" />
                    <div className="input-check-btn">
                        <input className="input-checkbox" type="checkbox" />
                        <h3 className='heading-signin'>I accept all the term & conditions</h3>
                    </div>
                    <button onClick={() =>
            signUp(
            
            firstName,
            lastName,
            email,
            password,
            navigate,
            location,
            encodedToken
            )
        } className="Login-btn" >Create New Account</button>
                    <div className="login-create-acc">
                    <NavLink to="/login"><button  className='create-new-acc'>Already have an Account</button></NavLink> 
                    </div>
                </div>
            </div>
        </>
    )
};



export default SignIn