import React from 'react';
import {NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
         <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " to="/details">Details</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/academic_details">Academic Details</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/skills">Skills</NavLink>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header