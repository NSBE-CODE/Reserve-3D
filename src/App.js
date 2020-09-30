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
import StudentProfileView from './ProfilePgs/StudentProfileView.js';


function App() {

  return (
    <div className="App"> 
          <BrowserRouter>

          <NavBar/>
          <div className="spacer"> &nbsp; </div>
          
          <Switch>
            <Route exact path="/landing"     render={(props) => <Landing {...props} />} />
            <Route exact path="/gallery"    render={(props) => <Gallery {...props} />} />
            <Route path="/about"          render={(props) => <About {...props} />} />
            <Route path="/profile"     render={(props) => <StudentProfileView {...props} />} />
            <Route path="/admin-profile"     render={(props) => <AdminProfileView {...props} />} />
            <Route exact path="/">
              <Redirect to="/landing" />
            </Route>
            <Route component={NotFound}/>
          </Switch>

          </BrowserRouter>

        <Footer />
    </div>
  );
}

export default App;
