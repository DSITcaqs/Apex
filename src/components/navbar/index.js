import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Home from '../home';
import Contact from '../contact';

class NavbarIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home',
    }
  }

  _renderContent = () => {
    if (this.state.active === 'home') {
      return <Home />
    } else {
      return <Contact />
    }
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" className='fixed-top'>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to={'/home'}>Home</NavLink>
              <NavLink to={'/contact'}>Contact</NavLink>
            </Nav>
            <Nav pullRight>
              <NavLink to={'/'}>salir</NavLink>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarIndex;
