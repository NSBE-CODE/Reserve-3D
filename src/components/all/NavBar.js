import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import UF_Logo from '../../assets/all/uf-logo.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../../styles/all/navBar.css';


const NavBar = (props) => {
    const [resBg, setResBg] = useState("#DDE2E8");
    const [gallBg, setGallBg] = useState("#FFFFFF");
    const [aboutBg, setAboutBg] = useState("#FFFFFF");
    const [open, setOpen] = useState(true);
    const [dropDownDisplay, setDropDownDisplay] = useState("none");

    const toggleDropDown = () => {
        setOpen(!open);
        console.log(open);
        if(open) setDropDownDisplay("block");
        else setDropDownDisplay("none");
    }

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
            <Link to='/Landing'> <img id="logo" alt="UF Logo" src={UF_Logo}/> </Link>

            {/* Department Title */}
            <a id="title" target="_blank" rel="noopener noreferrer" href="https://www.eng.ufl.edu/"> Department of Engineering Education</a>

            {/* Drop Down Menu */}
            <div className="drop-down-menu__container">
                <AccountCircleIcon id="profile-icon" onClick={toggleDropDown}/>
                <ExpandMoreIcon id="expand-more-icon"/>
                <div className="drop-down-menu"  style={{display:dropDownDisplay}}>
                    <div id="item-profile">
                        <div id="profile-picture">&nbsp;</div>
                        <a id="item-profile__inner" href='/Profile'>
                            <div>Hello cosimawest,</div>
                            <div style={{fontSize: "10px"}}>view profile</div>
                        </a>
                    </div>
                    <hr/>
                    <a href='/LabHistory' id="item"> Lab History </a>
                    <a href='/EditPersonnel' id="item"> Edit Personnel </a>
                    <a href='/ManagePrinters' id="item"> Manage Printers </a>
                    <a href='/DiscipActions' id="item"> Disiplinary Actions </a>
                    <a href='/ConfigureLabHours' id="item"> Configure Lab Hours </a>
                    <a href='/EditGallery' id="item"> Edit Gallery </a>
                    <a href='#'  id="item-sign-out"> Sign Out </a>
                </div>
            </div>

            {/* Bar */}
            <div id="bar"> &nbsp; </div>

            {/* Page Links */}
            <div id = "list">
                <Link className="nav-link" to='/Landing' 
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