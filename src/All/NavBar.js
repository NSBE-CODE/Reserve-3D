import React, { useState, Component, useEffect } from 'react';
import { Link } from 'react-router-dom';

import UF_Logo from '../assets/uf-logo.png';

import Dropdown from './Dropdown.js';
import './navBar.css';


const NavBar = (props) => {
    const fruits = ['landing', 'gallery', 'about'];

    const [landingBg, setlandingBg] = useState("#DDE2E8");
    const [galleryBg, setGalleryBg] = useState("#FFFFFF");
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

    useEffect(() => {
        console.log(document.location.href);
        

        /*fruits.map(fruit => {
            console.log(landingBg);
            let temp = `${fruit}Bg`;
            `set{fruit}Bg`("#c4c4c4c4");
            console.log(landingBg);
            //if (document.location.href.includes(fruit)) `set${fruit}Bg`("#DDE2E8");
        }); 
        if (document.location.href.includes("About")) setAboutBg("#DDE2E8");*/
    });

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
            <Dropdown/>

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