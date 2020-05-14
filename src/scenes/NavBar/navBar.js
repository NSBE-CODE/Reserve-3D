import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './navBar.css';


const NavBar = (props) => {

    return (
        <div className = "header" >
            {/* Page Links */}
            <div>
                <Link className = "nav-link" to='/Reservation'>Reservation</Link>
                <Link className = "nav-link" to='/Gallery'>Gallery</Link> 
                <Link className = "nav-link-last" to='/About'>About</Link>
            </div>
        </div>
    )
};

export default NavBar;