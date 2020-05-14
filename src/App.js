import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import NavBar from './scenes/NavBar/navBar.js';

import Landing from './scenes/Landing/landing.js';
import Reservation from './scenes/Reservation/reservation.js';
import Gallery from './scenes/Gallery/gallery.js';
import About from './scenes/About/about.js';
import NotFound from './scenes/notFound.js';

import UserInfo from './scenes/Profile/userInfo.js';
import LabHistory from './scenes/Profile/labHistory.js';
import EditPersonnel from './scenes/Profile/editPersonnel.js';
import ManagePrinters from './scenes/Profile/managePrinters.js';
import DisiplinaryActions from './scenes/Profile/disiplinaryActions.js';
import ConfigureLabHours from './scenes/Profile/configureLabHours.js';
import EditGallery from './scenes/Profile/editGallery.js';

import Footer from './scenes/Footer/footer.js';


function App() {
  return (
    <div className="App"> 
        <div className="content">
          <BrowserRouter>

          <NavBar/>
          <div className="spacer" > &nbsp; </div>

          <Switch>
            <Route exact path="/Landing"     render={(props) => <Landing {...props} />} />
            <Route exact path="/Reservation" render={(props) => <Reservation {...props} />} />
            <Route exact path="/Gallery"    render={(props) => <Gallery {...props} />} />
            <Route path="/About"          render={(props) => <About {...props} />} />
            <Route path="/UserInfo"     render={(props) => <UserInfo {...props} />} />
            <Route exact path="/LabHistory" render={(props) => <LabHistory {...props} />} />
            <Route exact path="/EditPersonnel" render={(props) => <EditPersonnel {...props} />} />
            <Route exact path="/ManagePrinters"   render={(props) => <ManagePrinters {...props} />} />
            <Route exact path="/DisiplinaryActions"   render={(props) => <DisiplinaryActions {...props} />} />
            <Route exact path="/ConfigureLabHours"  render={(props) => <ConfigureLabHours {...props} />} />
            <Route exact path="/EditGallery"  render={(props) => <EditGallery {...props} />} />
            <Route exact path="/">
              <Redirect to="/Landing" />
            </Route>
            <Route component={NotFound}/>
          </Switch>

          </BrowserRouter>
        </div>
        <Footer />
    </div>
  );
}

export default App;
