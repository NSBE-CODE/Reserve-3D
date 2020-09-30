import React, { useState } from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './navBar.css';
import onClickOutside from 'react-onclickoutside';


function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropDownDisplay, setDropDownDisplay] = useState("block");

    
    Dropdown.handleClickOutside = () => {
        setIsOpen(false);
    }


    return (
        <div className="drop-down-menu__container">
            <div className="drop-down-menu__icon-container" onClick={() => setIsOpen(!isOpen)}>
                <AccountCircleIcon id="profile-icon"/>
                <ExpandMoreIcon id="expand-more-icon"/>
            </div>
            {isOpen ? 
            <div className="drop-down-menu" style={{display:dropDownDisplay}}>
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
            </div> : null}
            
        </div>
    )
};



const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
  };
  
export default onClickOutside(Dropdown, clickOutsideConfig);