import React from 'react'
import '../Main/MainNav.css'
import { NavLink } from 'react-router-dom'

const MainNav = () => {
  return (
    <div className="nav-container">

        <div className="logo">

        </div>

        <div className="navlist">
        <ul>
            <li>Course</li>
            <li>Create Result</li>
            <li>View Result</li>
            <li>Contact</li>
        </ul>
        </div>

        <div className="login-container">

            <div className="signup-btn">
                <button><NavLink to='/login' >Log Out</NavLink></button>
            </div>

        </div>

    </div>
  )
}

export default MainNav