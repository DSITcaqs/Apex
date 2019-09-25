import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home';
import Contact from './components/contact';

class MainRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/home" render={(props) =>
            <Home data={props} />
          } />
          <Route path="/contact" render={(props) =>
            <Contact data={props} />
          } />
        </div>
      </Router>
    );
  }
}
export default MainRouter;
