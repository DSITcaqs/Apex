import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
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

  redirectHome() {
    this.props.data.history.push('/home');
  }

  render() {
    return (
      <Navbar bg="light" expand="lg" className='fixed-top'>
        <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => { this.redirectHome() }}>
          <p className="logo-text-navbar">APEX Funds Group</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <NavLink className='href-navbar' to={'/home'}>Home</NavLink> */}
            {/* <NavLink className='href-navbar' to={'/contact'}>Contact</NavLink> */}
          </Nav>
          <Nav pullRight>
            <NavLink className='href-navbar' to={'/home'}>Home</NavLink>
            <NavLink className='href-navbar' to={'/nosotros'}>About</NavLink>
            <NavLink className='href-navbar' to={'/productos'}>Plan</NavLink>
            <NavLink className='href-navbar' to={'/contacto'}>Join</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarIndex;
