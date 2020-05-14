import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import UF_Logo from './uf-logo.png';
import Profile_Icon from './profile-icon.png';

import './navBar.css';


const NavBar = (props) => {
    const [resBg, setResBg] = useState("#DDE2E8");
    const [gallBg, setGallBg] = useState("#FFFFFF");
    const [aboutBg, setAboutBg] = useState("#FFFFFF");

    const selectReservation = () => {
        setResBg("#DDE2E8");
        setGallBg("#FFFFFF");
        setAboutBg("#FFFFFF");
    };
    const selectGallery = () => {
        setResBg("#FFFFFF");
        setGallBg("#DDE2E8");
        setAboutBg("#FFFFFF");
    };
    const selectAbout = () => {
        setResBg("#FFFFFF");
        setGallBg("#FFFFFF");
        setAboutBg("#DDE2E8");
    };

    return (
        <div className="header" >
            {/* UF Logo */}
            <Link to='/Landing'> <img id="logo" src={UF_Logo}/> </Link>

            {/* Department Title */}
            <a id="title" target="_blank" rel="noopener noreferrer"href="https://www.eng.ufl.edu/"> Department of Engineering Education</a>

            {/* Profile Icon */}
            <div className="dropdown">
                <img id="icon" src={Profile_Icon}/>
                <div className="dropdown-content">
                    <Link to='/UserInfo'> User Info </Link>
                    <Link to='/LabHistory'> Lab History </Link>
                    <Link to='/EditPersonnel'> Edit Personnel </Link>
                    <Link to='/ManagePrinters'> Manage Printers </Link>
                    <Link to='/DisiplinaryActions'> Disiplinary Actions </Link>
                    <Link to='/ConfigureLabHours'> Configure Lab Hours </Link>
                    <Link to='/EditGallery'> Edit Gallery </Link>
                    <Link> Sign Out </Link>
                </div>
            </div>

            {/* Bar */}
            <div id="bar"> &nbsp; </div>

            {/* Page Links */}
            <div id = "list">
                <Link className="nav-link" to='/Reservation' 
                    onClick={selectReservation} 
                    style={{backgroundColor:resBg}}> 
                    Reservation</Link>
                    
                <Link className="nav-link" to='/Gallery' 
                    onClick={selectGallery} 
                    style={{backgroundColor:gallBg}}>
                    Gallery</Link> 

                <Link className="nav-link" to='/About' 
                    onClick={selectAbout} 
                    style={{backgroundColor:aboutBg}}>
                    About</Link>
            </div>
        </div>
    )
};

export default NavBar;