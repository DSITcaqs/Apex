import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home';
import Contact from './components/contact';
import Productos from './components/productos';
import Nosotros from './components/nosotros';

class MainRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/home" render={(props) =>
            <Home data={props} />
          } />
          <Route path="/contacto" render={(props) =>
            <Contact data={props} />
          } />
           <Route path="/nosotros" render={(props) =>
            <Nosotros data={props} />
          } />
           <Route path="/productos" render={(props) =>
            <Productos data={props} />
          } />
        </div>
      </Router>
    );
  }
}
export default MainRouter;
