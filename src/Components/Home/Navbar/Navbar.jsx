import React from 'react'
import {NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <div className="nav-container">

        <div className="logo">

        </div>

        <div className="navlist">
        <ul>
            <li>Home</li>
            <li>Department</li>
            <li>Faculty</li>
            <li>Contact</li>
        </ul>
        </div>

        <div className="login-container">

            <div className="login-btn">
                <button><NavLink to='/signUp' >SignUp</NavLink></button>
            </div>

            <div className="signup-btn">
                <button><NavLink to='/login' >LogIn</NavLink></button>
            </div>

        </div>

    </div>
  )
}

export default Navbar