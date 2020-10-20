import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import $ from "jquery";

import './styles/profilePgs.css';
import ProfileCard from './components/ProfileCard.js';

import NotFound from '../All/NotFound.js';

import LabHistory from './LabHistory.js';
import Upcoming from './Upcoming.js'
import EditPersonnel from './EditPersonnel.js';
import ManagePrinters from './ManagePrinters.js';
import DiscipActions from './DiscipActions.js';
import ConfigureLabHours from './ConfigLabHours.js';
import EditGallery from './EditGallery.js';
import { HomeRounded, Update, History, Print, EventNote, RemoveCircle, PhotoLibrary } from '@material-ui/icons';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

const pages = [
    'upcoming',
    'lab-history',
    'edit-personnel',
    'manage-printers',
    'configure-lab-hours',
    'disciplinary-actions',
    'edit-gallery',
    'home'
];

const AdminProfile = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const [navBarWidth, setNavBarWidth] = useState("20vw");
    
    useEffect(() => {
        pages.map(page => {
            if (window.location.href.includes(page)) {
                $("div").addClass(function(index, currentClass) {
                    if(currentClass.includes(page)) return "selected";
                });
            } else {
                $("div").removeClass(function(index, currentClass) {
                    if(currentClass.includes(page)) return "selected";
                });
            }
        });

        if(isOpen) setNavBarWidth("20vw");
        else setNavBarWidth("0");
    });

    return (

        <div className="admin-profile">
            <button className="open-button" onClick={() => setIsOpen(!isOpen)}>⍇</button>

            <div className="side-nav-bar" style={{width: navBarWidth}}>
                <div className="side-nav-bar-item home">
                    <a href="/admin-profile/home" id="side-nav-bar-icon-container"><HomeRounded/></a>
                    <Link to="/admin-profile/home" className="um side-nav-bar-item">Profile</Link>
                </div>
                <div className="side-nav-bar-item upcoming">
                    <a href="/admin-profile/upcoming" id="side-nav-bar-icon-container"><Update/></a>
                    <Link to="/admin-profile/upcoming" className="um side-nav-bar-item">Upcoming</Link>
                </div>
                <div className="side-nav-bar-item lab-history">
                    <a href="/admin-profile/lab-history" id="side-nav-bar-icon-container"><History/></a>
                    <Link to="/admin-profile/lab-history" className="um side-nav-bar-item">Lab History</Link>
                </div>
                <div className="side-nav-bar-item edit-personnel">
                    <Link to="/admin-profile/edit-personnel" id="side-nav-bar-icon-container"><PermContactCalendarIcon/></Link>
                    <Link to="/admin-profile/edit-personnel" className="um side-nav-bar-item">Edit Personnel</Link>
                </div>
                <div className="side-nav-bar-item manage-printers">
                    <a href="/admin-profile/manage-printers" id="side-nav-bar-icon-container"><Print/></a>
                    <Link to="/admin-profile/manage-printers" className="um side-nav-bar-item">Manage Printers</Link>
                </div>
                <div className="side-nav-bar-item configure-lab-hours">
                    <a href="/admin-profile/configure-lab-hours" id="side-nav-bar-icon-container"><EventNote/></a>
                    <Link to="/admin-profile/configure-lab-hours" className="um side-nav-bar-item">Configure Lab Hours</Link>
                </div>
                <div className="side-nav-bar-item disciplinary-actions">
                    <a href="/admin-profile/disciplinary-actions" id="side-nav-bar-icon-container"><RemoveCircle/></a>
                    <Link to="/admin-profile/disciplinary-actions" className="um side-nav-bar-item">Disciplinary Action</Link>
                </div>
                <div className="side-nav-bar-item edit-gallery">
                    <a href="/admin-profile/edit-gallery" id="side-nav-bar-icon-container"><PhotoLibrary/></a>
                    <Link to="/admin-profile/edit-gallery" className="um side-nav-bar-item">Edit Gallery</Link>
                </div>
            </div> 

            <Switch> 
                <Route exact path="/admin-profile/home" render={(props) => <ProfileCard {...props} />} />
                <Route exact path="/admin-profile/upcoming" render={(props) => <Upcoming {...props} />} />
                <Route exact path="/admin-profile/lab-history" render={(props) => <LabHistory {...props} />} />
                <Route exact path="/admin-profile/edit-personnel" render={(props) => <EditPersonnel {...props} />} />
                <Route exact path="/admin-profile/manage-printers"   render={(props) => <ManagePrinters {...props} />} />
                <Route exact path="/admin-profile/disciplinary-actions"   render={(props) => <DiscipActions {...props} />} />
                <Route exact path="/admin-profile/configure-lab-hours"  render={(props) => <ConfigureLabHours {...props} />} />
                <Route exact path="/admin-profile/edit-gallery"  render={(props) => <EditGallery {...props} />} />
                <Route exact path="/">
                <Redirect to="/admin-profile/home" />
                </Route>
                <Route component={NotFound}/>
            </Switch>
        </div>
    )
};

export default AdminProfile;