import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import NavBar from './All/NavBar.js';
import NotFound from './All/NotFound.js';
import Footer from './All/Footer.js';

import Landing from './Landing/Landing.js';
import Gallery from './Gallery/Gallery.js';
import About from './About/About.js';

import AdminProfileView from './ProfilePgs/AdminProfileView.js';
import LabHistory from './ProfilePgs/LabHistory.js';
import EditPersonnel from './ProfilePgs/EditPersonnel.js';
import ManagePrinters from './ProfilePgs/ManagePrinters.js';
import DiscipActions from './ProfilePgs/DiscipActions.js';
import ConfigureLabHours from './ProfilePgs/ConfigLabHours.js';
import EditGallery from './ProfilePgs/EditGallery.js';

import StudentProfileView from './ProfilePgs/StudentProfileView.js';


function App() {

  return (
    <div className="App"> 
        <div className="content">
          <BrowserRouter>

          <NavBar/>
          <div className="spacer"> &nbsp; </div>

          <Switch>
            <Route exact path="/Landing"     render={(props) => <Landing {...props} />} />
            <Route exact path="/Gallery"    render={(props) => <Gallery {...props} />} />
            <Route path="/About"          render={(props) => <About {...props} />} />
            <Route path="/Profile"     render={(props) => <StudentProfileView {...props} />} />
            <Route exact path="/LabHistory" render={(props) => <LabHistory {...props} />} />
            <Route exact path="/EditPersonnel" render={(props) => <EditPersonnel {...props} />} />
            <Route exact path="/ManagePrinters"   render={(props) => <ManagePrinters {...props} />} />
            <Route exact path="/DiscipActions"   render={(props) => <DiscipActions {...props} />} />
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
