import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import NavBar from './components/all/NavBar.js';
import NotFound from './components/all/NotFound.js';
import Footer from './components/all/Footer.js';

import Landing from './pages/Landing.js';
import Gallery from './pages/Gallery.js';
import About from './pages/About.js';

import AdminProfileView from './pages/profilePgs/AdminProfileView.js';
import LabHistory from './pages/profilePgs/LabHistory.js';
import EditPersonnel from './pages/profilePgs/EditPersonnel.js';
import ManagePrinters from './pages/profilePgs/ManagePrinters.js';
import DisciplinaryActions from './pages/profilePgs/DiscipActions.js';
import ConfigureLabHours from './pages/profilePgs/ConfigLabHours.js';
import EditGallery from './pages/profilePgs/EditGallery.js';



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
            <Route path="/ProfileInfo"     render={(props) => <AdminProfileView {...props} />} />
            <Route exact path="/LabHistory" render={(props) => <LabHistory {...props} />} />
            <Route exact path="/EditPersonnel" render={(props) => <EditPersonnel {...props} />} />
            <Route exact path="/ManagePrinters"   render={(props) => <ManagePrinters {...props} />} />
            <Route exact path="/DisciplinaryActions"   render={(props) => <DisciplinaryActions {...props} />} />
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
